#!/usr/bin/env node
// Valida a integridade estrutural do grafo em dados.js.
// Uso: node validate.js
// Exit code 0 se tudo passar, 1 caso contrário.

const fs = require('fs');
const path = require('path');

const DADOS_PATH = path.join(__dirname, 'dados.js');
const code = fs.readFileSync(DADOS_PATH, 'utf8').replace(/^const GRAFO/m, 'GRAFO');
let GRAFO;
try {
  eval(code);
} catch (e) {
  console.error('✗ ERRO DE SINTAXE em dados.js:', e.message);
  process.exit(1);
}

const TIPOS_VALIDOS = new Set(['FATO', 'ALEGACAO', 'DECISAO', 'CONTEXTO', 'NARRATIVA', 'PESSOA']);
const STATUS_VALIDOS = new Set(['ativo', 'anulado', 'arquivado', 'em-andamento']);
const ARESTAS_VALIDAS = new Set([
  'acusou', 'delatou', 'condenou', 'anulou', 'contradiz',
  'baseia-se-em', 'enquadra', 'cronologico', 'defende', 'envolve', 'retratou'
]);

const problemas = [];
const warnings = [];

// ----- Validação de nós -----
const idsVistos = new Set();
for (const n of GRAFO.nodes) {
  if (!n.id) problemas.push(`Nó sem id: ${JSON.stringify(n).slice(0, 80)}`);
  if (idsVistos.has(n.id)) problemas.push(`ID duplicado: ${n.id}`);
  idsVistos.add(n.id);

  if (!n.tipo || !TIPOS_VALIDOS.has(n.tipo)) {
    problemas.push(`${n.id}: tipo inválido "${n.tipo}". Válidos: ${[...TIPOS_VALIDOS].join(',')}`);
  }
  if (n.status && !STATUS_VALIDOS.has(n.status)) {
    problemas.push(`${n.id}: status inválido "${n.status}". Válidos: ${[...STATUS_VALIDOS].join(',')}`);
  }
  if (!n.label) warnings.push(`${n.id}: sem label`);
  if (!n.titulo) warnings.push(`${n.id}: sem titulo`);
  if (!n.descricao) warnings.push(`${n.id}: sem descricao`);

  // Datas: formato YYYY, YYYY-MM ou YYYY-MM-DD
  if (n.data) {
    if (!/^\d{4}(-\d{2}(-\d{2})?)?$/.test(n.data)) {
      problemas.push(`${n.id}: data em formato inválido "${n.data}". Use YYYY-MM-DD.`);
    } else {
      const y = parseInt(n.data.substring(0, 4));
      if (y < 1990 || y > 2027) warnings.push(`${n.id}: data suspeita (${n.data})`);
    }
  }

  // Fontes: array com {titulo, url}
  if (n.fontes) {
    if (!Array.isArray(n.fontes)) {
      problemas.push(`${n.id}: fontes deve ser array`);
    } else {
      for (const f of n.fontes) {
        if (!f.url || !f.titulo) warnings.push(`${n.id}: fonte sem url ou título`);
        if (f.url && !/^https?:\/\//.test(f.url)) {
          problemas.push(`${n.id}: URL mal formada "${f.url}"`);
        }
      }
    }
  }
}

// ----- Validação de arestas -----
const edgeIdsVistos = new Set();
for (const e of GRAFO.edges) {
  if (!e.id) problemas.push(`Aresta sem id: ${e.source} → ${e.target}`);
  if (edgeIdsVistos.has(e.id)) problemas.push(`ID de aresta duplicado: ${e.id}`);
  edgeIdsVistos.add(e.id);

  if (!idsVistos.has(e.source)) problemas.push(`Aresta ${e.id}: source "${e.source}" não existe`);
  if (!idsVistos.has(e.target)) problemas.push(`Aresta ${e.id}: target "${e.target}" não existe`);
  if (e.source === e.target) problemas.push(`Aresta ${e.id}: self-loop (source === target)`);

  if (!e.tipo || !ARESTAS_VALIDAS.has(e.tipo)) {
    warnings.push(`Aresta ${e.id}: tipo "${e.tipo}" fora do vocabulário controlado`);
  }
}

// ----- Validação semântica -----
// 1. Todo nó NARRATIVA deve ter pelo menos uma aresta 'enquadra'
const narrativasSemEnquadra = GRAFO.nodes
  .filter(n => n.tipo === 'NARRATIVA')
  .filter(n => !GRAFO.edges.some(e => e.source === n.id && e.tipo === 'enquadra'))
  .map(n => n.id);
narrativasSemEnquadra.forEach(id => warnings.push(`${id}: NARRATIVA sem aresta 'enquadra' para fato/contexto`));

// 2. Nó com status=anulado deve ter aresta 'anulou' chegando
const anulados = GRAFO.nodes.filter(n => n.status === 'anulado').map(n => n.id);
anulados.forEach(id => {
  const temAnula = GRAFO.edges.some(e => e.target === id && e.tipo === 'anulou');
  if (!temAnula) warnings.push(`${id}: status=anulado mas nenhuma aresta 'anulou' chega aqui`);
});

// 3. Todo FATO ou DECISAO deve ter data
GRAFO.nodes
  .filter(n => (n.tipo === 'FATO' || n.tipo === 'DECISAO') && !n.data)
  .forEach(n => warnings.push(`${n.id}: ${n.tipo} sem campo data`));

// 4. Grafo não deve ter componentes desconectados grandes
// Union-find simples
const parent = new Map();
GRAFO.nodes.forEach(n => parent.set(n.id, n.id));
function find(x) {
  while (parent.get(x) !== x) {
    parent.set(x, parent.get(parent.get(x)));
    x = parent.get(x);
  }
  return x;
}
function union(a, b) {
  const ra = find(a), rb = find(b);
  if (ra !== rb) parent.set(ra, rb);
}
GRAFO.edges.forEach(e => {
  if (idsVistos.has(e.source) && idsVistos.has(e.target)) union(e.source, e.target);
});
const componentes = new Map();
GRAFO.nodes.forEach(n => {
  const r = find(n.id);
  componentes.set(r, (componentes.get(r) || 0) + 1);
});
const comps = [...componentes.values()].sort((a, b) => b - a);

// ----- Relatório -----
console.log('=== Grafo Didático — validate.js ===\n');
console.log(`Nós:            ${GRAFO.nodes.length}`);
console.log(`Arestas:        ${GRAFO.edges.length}`);
console.log(`Componentes conectados: ${comps.length} (maiores: ${comps.slice(0, 5).join(', ')})`);

const porTipo = {};
GRAFO.nodes.forEach(n => porTipo[n.tipo] = (porTipo[n.tipo] || 0) + 1);
console.log(`\nPor tipo:`);
Object.entries(porTipo).forEach(([k, v]) => console.log(`  ${k.padEnd(10)} ${v}`));

const porAlvo = {};
GRAFO.nodes.forEach(n => porAlvo[n.alvo || 'nenhum'] = (porAlvo[n.alvo || 'nenhum'] || 0) + 1);
console.log(`\nPor alvo:`);
Object.entries(porAlvo).forEach(([k, v]) => console.log(`  ${k.padEnd(10)} ${v}`));

const porStatus = {};
GRAFO.nodes.forEach(n => porStatus[n.status || '(ativo)'] = (porStatus[n.status || '(ativo)'] || 0) + 1);
console.log(`\nPor status:`);
Object.entries(porStatus).forEach(([k, v]) => console.log(`  ${k.padEnd(14)} ${v}`));

const totalFontes = GRAFO.nodes.reduce((s, n) => s + (n.fontes ? n.fontes.length : 0), 0);
const nosSemFonte = GRAFO.nodes.filter(n => !n.fontes || n.fontes.length === 0).length;
console.log(`\nFontes referenciadas: ${totalFontes}`);
console.log(`Nós sem fonte:        ${nosSemFonte} (${(100 * nosSemFonte / GRAFO.nodes.length).toFixed(0)}%)`);

if (warnings.length) {
  console.log(`\n⚠  Avisos (${warnings.length}):`);
  warnings.slice(0, 20).forEach(w => console.log(`   ${w}`));
  if (warnings.length > 20) console.log(`   ... e mais ${warnings.length - 20}`);
}

if (problemas.length) {
  console.log(`\n✗  PROBLEMAS (${problemas.length}):`);
  problemas.forEach(p => console.log(`   ${p}`));
  console.log('\n✗ FALHOU');
  process.exit(1);
}

console.log('\n✓ Grafo passou em todas as validações estruturais.');
process.exit(0);
