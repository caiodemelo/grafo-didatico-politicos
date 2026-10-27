# Grafo Didático — Corrupção no Brasil: fato, contexto, narrativa

Ferramenta didática que modela casos jurídicos públicos como um grafo tipado,
separando **o que é fato documentado** de **o que é alegação de uma parte**,
**decisão judicial**, **contexto** e **narrativa midiática rotulada por fonte**.

Objetivo: usar teoria dos grafos como instrumento epistemológico para discutir
publicamente a diferença entre fato bruto, enquadramento interpretativo e
decisão institucional — sem tomar partido político.

## Uso rápido

```bash
# Validar integridade estrutural
node validate.js

# Abrir
open index.html   # macOS
xdg-open index.html  # Linux
```

Standalone — não requer servidor nem build step. Dependências via CDN com SRI.

## Arquitetura

```
index.html      Interface Cytoscape.js + Dagre, busca investigativa,
                filtros, timeline, painel de detalhes. ~900 LOC.
dados.js        Fonte única da verdade do grafo. Dois arrays:
                nodes[] (187) e edges[] (251).
validate.js     Validação estrutural. Rodar antes de distribuir.
README.md       Este arquivo.
```

## Framework epistemológico

Cada nó recebe um **tipo** que declara sua natureza epistêmica. Esta é a
contribuição metodológica central do projeto.

| Tipo        | Definição operacional                                                      | Cor      |
|-------------|-----------------------------------------------------------------------------|----------|
| `FATO`      | Evento com registro primário verificável (sentença, nota, áudio, documento) | azul     |
| `DECISAO`   | Sentença, acórdão ou HC publicado por tribunal                              | roxo     |
| `ALEGACAO`  | Afirmação de uma parte (delação, denúncia) — não é fato                     | âmbar    |
| `CONTEXTO`  | Fato de pano de fundo (lei, operação, conjuntura)                           | cinza    |
| `NARRATIVA` | Enquadramento interpretativo publicado, **rotulado pela fonte**             | rosa     |
| `PESSOA`    | Pessoa física ou coletivo nomeado                                           | verde    |

### Regras de decisão

- **FATO vs ALEGAÇÃO**: se a existência do evento depende do testemunho de uma parte,
  é `ALEGACAO`. Se tem registro independente (foto, nota fiscal, acórdão, movimentação
  bancária confirmada por perícia), é `FATO`.
- **DECISAO vs FATO**: toda decisão judicial é um fato, mas ganha nó próprio
  porque mobiliza arestas específicas (`condenou`, `anulou`, `defende`).
- **NARRATIVA vs FATO**: narrativa é o *enquadramento* de um conjunto de fatos
  por uma fonte específica. "Veja apresentou Lula como chefe do esquema" é
  narrativa (`n-veja-chefe`); as capas em si são fatos. Toda narrativa é
  rotulada pela fonte — nunca classificada como "verdade" ou "mentira".
- **Status**: `ativo` (vigente), `anulado` (reformado por instância superior),
  `arquivado` (absolvição / prescrição / trancamento), `em-andamento`.

### Vocabulário de arestas

| Tipo              | Semântica                                            |
|-------------------|------------------------------------------------------|
| `acusou`          | Órgão/alegação → pessoa acusada                      |
| `delatou`         | Pessoa delatora → alegação (ou → pessoa acusada)     |
| `condenou`        | Decisão → pessoa condenada                           |
| `anulou`          | Decisão superior → decisão/prova anulada             |
| `contradiz`       | Dois nós com versões conflitantes                    |
| `baseia-se-em`    | Decisão/narrativa → fato ou alegação que a sustenta  |
| `enquadra`        | Narrativa → fato/contexto que ela interpreta         |
| `cronologico`     | Sequência temporal entre eventos                     |
| `defende`         | Decisão → pessoa que a decisão favorece              |
| `envolve`         | Relação genérica (ex: réu → processo)                |
| `retratou`        | Pessoa delatora → retratação posterior               |

## Como o grafo garante simetria

Para evitar viés, toda **ALEGACAO** aponta para a pessoa acusada, mas aparece
nos filtros com a mesma dignidade que uma **DECISAO** absolutória. O grafo
inclui explicitamente:

- Delações **retratadas** (carta de Léo Pinheiro, PF concluindo que Palocci "inventou")
- Decisões **anuladas** (dash tracejado + status visível)
- **Absolvições** em casos pouco citados (Quadrilhão PT, Cerveró, Zelotes/MP 471)
- **Votos dissidentes** (Fux na 1ª Turma do STF, voto condutor em casos específicos)
- Narrativas **contraditórias** sobre os mesmos fatos (aresta `contradiz`)

## Limitações conhecidas

1. **Dados compilados por LLM** (snapshot 26/10/2026). Agentes de pesquisa web
   foram usados para extrair fatos; **todas** as afirmações devem ser validadas
   contra fontes primárias antes de citação acadêmica. 59% dos nós têm pelo menos
   uma fonte URL referenciada; os demais são derivados de contexto conhecido.
2. **Datas posteriores a janeiro/2026** foram removidas para evitar alucinação
   de eventos. Isso afeta sobretudo: julgamento do golpe (STF 09/2025), prisão
   de Bolsonaro (11/2025), Lei Magnitsky, PL da Dosimetria.
3. **Subjetividade na classificação FATO vs NARRATIVA**: a regra está documentada
   acima, mas casos de fronteira existem. Contribuições podem revisar.
4. **Grafo é um recorte** — foca em Lula, Jair Bolsonaro, Flávio Bolsonaro e
   Eduardo Cunha. Outros casos importantes (Aécio, Temer, Dilma pedaladas) não
   estão modelados.
5. **Busca investigativa** usa padrões regex em pt-BR hardcoded (~10 padrões).
   Linguagem natural arbitrária pode cair no fallback de busca textual.
6. **Nós sem data** (ex: `d-arquivamento-sbc`): preencher quando disponível.

## Como contribuir

### Adicionar um nó

Edite `dados.js`. Formato mínimo:

```js
{ id:'f-exemplo', alvo:'lula', label:'Exemplo', tipo:'FATO',
  titulo:'Título completo do evento',
  descricao:'Descrição factual, 1-3 parágrafos.',
  data:'2017-04-13', peso:5, caso:'triplex', status:'ativo',
  fontes:[{titulo:'Nome da fonte', url:'https://...'}] },
```

Rode `node validate.js` para checar.

### Adicionar uma aresta

```js
{ id:'e123', source:'f-exemplo', target:'p-lula', tipo:'acusou', label:'opcional' },
```

### Convenções de ID

- `p-xxx` — pessoa
- `e-xxx` — entidade/empresa
- `c-xxx` — contexto
- `f-xxx` — fato
- `d-xxx` — decisão judicial
- `a-xxx` — alegação / delação
- `n-xxx` — narrativa

### Padrões de busca

Novos padrões ficam em `index.html`, dentro do bloco "BUSCA INVESTIGATIVA".
Cada padrão é uma função que recebe a query normalizada e retorna
`{tituloQ, resposta, nos:Set, arestas:Set}` ou `null`.

## Reprodução

A pesquisa factual que alimentou este grafo foi conduzida com agentes LLM
rodando em paralelo (research subagents), especializados em: (a) casos judiciais;
(b) decisões do STF; (c) delações premiadas; (d) enquadramentos midiáticos.
Para cada caso, as versões acusatória e defensiva foram levantadas de forma
balanceada.

## Licença

O código (index.html, dados.js, validate.js) é fornecido sob licença MIT.
O conteúdo factual é compilação de fontes públicas; cada afirmação deve ser
atribuída à sua fonte primária quando citada.

## Verificação antes de citar

Para qualquer uso acadêmico ou jornalístico:

1. `node validate.js` — passar sem problemas estruturais
2. Clicar em pelo menos 3 fontes aleatórias — verificar que a página existe e
   corrobora o fato alegado
3. Verificar que não há datas pós-janeiro/2026 no nó clicado
4. Confirmar a classificação epistêmica (FATO/ALEGACAO/DECISAO/NARRATIVA)
   contra a definição deste README
