// =====================================================================
// CASOS — textos de contexto por "guarda-chuva" temático.
// Cada chave corresponde ao campo `caso` de nós em dados.js.
// =====================================================================

const CASOS = {
  'triplex': {
    titulo: 'Triplex do Guarujá',
    periodo: '2016–2022',
    resumo: 'Acusação de que Lula seria "proprietário oculto" do apartamento 164-A do Edifício Solaris em Guarujá, originalmente da Bancoop (cooperativa habitacional) e assumido pela OAS após a falência da Bancoop.',
    texto: `A denúncia do MPF/PR foi oferecida em 14/09/2016 (processo 5046512-94.2016.4.04.7000) sob a tese de que a OAS reservou e reformou o triplex como contrapartida por favorecimentos em contratos com a Petrobras — valor estimado R$ 2,2 milhões em propina, R$ 3,7 milhões no total incluindo guarda de bens.

A defesa de Lula sempre sustentou que Marisa Letícia era cotista da Bancoop e, com a transição para OAS/Solaris, a família não migrou para o novo contrato. Em 2016 Lula ingressou com ação para reaver R$ 815 mil pagos à Bancoop.

Sergio Moro (13ª Vara Federal de Curitiba) condenou Lula em 12/07/2017 a 9 anos e 6 meses; o TRF-4 confirmou e aumentou para 12 anos e 1 mês em 24/01/2018 (3x0). Lula foi preso em 07/04/2018, após discursar no Sindicato dos Metalúrgicos do ABC. Solto em 08/11/2019 após o STF declarar inconstitucional a prisão em 2ª instância.

Em 08/03/2021, o STF (Fachin, HC 193.726) anulou a condenação por INCOMPETÊNCIA da 13ª Vara (não por mérito). Em 23/03/2021, a 2ª Turma reconheceu a SUSPEIÇÃO de Moro (3x2, voto decisivo de Cármen Lúcia). Em 28/01/2022, a 12ª Vara Federal do DF declarou extinção da punibilidade por PRESCRIÇÃO — Lula tinha mais de 70 anos, prazo reduzido pela metade. Não houve absolvição no mérito.`
  },

  'atibaia': {
    titulo: 'Sítio de Atibaia',
    periodo: '2016–2023',
    resumo: 'Acusação de que reformas no "Sítio Santa Bárbara" (escriturado em nome de Fernando Bittar) teriam sido pagas por Odebrecht, OAS e Schahin em contrapartida a favorecimentos.',
    texto: `O MPF/PR denunciou Lula em 2016 (processo 5021365-32.2017.4.04.7000). As reformas totalizariam cerca de R$ 1,02 milhão — Odebrecht ~R$ 700 mil (aprovada por Emílio Odebrecht, segundo seu depoimento), OAS ~R$ 170 mil (reforma de cozinha), Schahin ~R$ 150 mil.

A defesa sustentou que o sítio é de propriedade da família Bittar (Fernando Bittar, filho do empresário Jacó Bittar), não de Lula; o ex-presidente apenas o utilizava como visitante. Em 05/2018, laudo da Polícia Federal apontou que NÃO foi encontrada menção ao sítio nos sistemas internos da Odebrecht (MyWebDay/Drousys) — fato que a defesa usou amplamente, especialmente após essas provas serem anuladas em 2023.

A juíza Gabriela Hardt (sucessora de Moro) condenou Lula em 06/02/2019 a 12 anos e 11 meses, fixando como vantagem indevida comprovada "ao menos R$ 170 mil". O TRF-4 confirmou e aumentou para 17 anos, 1 mês e 10 dias em 27/11/2020.

A condenação foi anulada pelo STF em 2021 (HC 193.726). O processo foi redistribuído à Justiça Federal do DF e, em fevereiro/2023, Ricardo Lewandowski encerrou-o monocraticamente por invalidade das provas da Odebrecht.`
  },

  'instituto': {
    titulo: 'Instituto Lula',
    periodo: '2016–2023',
    resumo: 'Dois processos distintos: o terreno em São Paulo que seria futura sede do Instituto (via Odebrecht) e doações oficiais da Odebrecht ao Instituto entre 2013-2014 (~R$ 4 milhões).',
    texto: `A acusação do MPF alegava que a Odebrecht adquiriu em 2010 um terreno em SP (~R$ 12 milhões) com recursos do "Setor de Operações Estruturadas" (depto. de propinas), destinado a ser futura sede do Instituto Lula em troca de favorecimento. A defesa afirmou que Lula visitou o imóvel mas considerou inadequado; o Instituto nunca utilizou o espaço.

Em paralelo, outro processo (5044305-83.2020.4.04.7000) tratava de doações OFICIAIS da Odebrecht ao Instituto Lula entre 2013-2014, somando ~R$ 4 milhões. A acusação as caracterizava como propina disfarçada; a defesa sustentava que eram doações regulares, declaradas e tributadas.

Ambos foram anulados pelo STF em 2021 (HC 193.726). Em setembro/2021, Ricardo Lewandowski suspendeu o processo. Em fevereiro/2023, encerrou-o em definitivo, fundamentando a decisão nas provas inidôneas da leniência Odebrecht (sistemas Drousys e MyWebDay).

Separadamente, a 1ª Vara Federal de São Bernardo do Campo arquivou (a pedido do próprio MPF) o inquérito sobre terreno em SBC — defesa documentou que o Instituto nunca recebeu doação de terreno e sempre funcionou em sede própria.`
  },

  'stf': {
    titulo: 'Decisões do STF',
    periodo: '2016–2024',
    resumo: 'Guarda-chuva para as decisões do Supremo que afetaram os casos — tanto favoráveis à acusação (HC 126.292, HC 152.752) quanto favoráveis às defesas (ADCs 43/44/54, HC 193.726, HC 164.493, decisão Toffoli sobre Odebrecht).',
    texto: `O STF foi palco de inflexões jurisprudenciais cruciais. Em 17/02/2016 (HC 126.292, relator Teori Zavascki), decidiu 7x4 que a prisão em 2ª instância era constitucional — jurisprudência que depois permitiu a prisão de Lula em 2018. Em 04-05/04/2018 (HC 152.752), negou 6x5 o HC preventivo de Lula, com voto decisivo de Rosa Weber que afirmou considerar a execução antecipada inconstitucional, mas votou conforme a jurisprudência vigente.

Em 07/11/2019, nas ADCs 43/44/54 (relator Marco Aurélio), o STF reverteu 6x5 e decidiu que a execução só poderia começar após o trânsito em julgado — Lula foi solto no dia seguinte.

Em 08/03/2021, Fachin anulou monocraticamente as condenações de Lula na Lava Jato de Curitiba (HC 193.726) por incompetência da 13ª Vara. O Plenário confirmou em 15/04/2021 por 8x3. Em 23/03/2021 a 2ª Turma, por 3x2, reconheceu Moro como suspeito (HC 164.493) — Cármen Lúcia mudou o voto de 2018 e completou a maioria.

Em 06/09/2023, Dias Toffoli declarou monocraticamente IMPRESTÁVEIS as provas obtidas dos sistemas Drousys e MyWebDay da Odebrecht, em qualquer esfera e grau de jurisdição. Caracterizou a prisão de Lula como "um dos maiores erros judiciais da história do país" — fundamentação do ministro, não dispositivo.`
  },

  'delacoes': {
    titulo: 'Delações premiadas',
    periodo: '2014–presente',
    resumo: 'Delações homologadas no âmbito da Lava Jato e processos conexos, com valores e status variados. Pela Lei 12.850/2013, delação é meio de obtenção de prova — não é prova por si só.',
    texto: `A Lei 12.850/2013, após a Lei 13.964/2019, determina explicitamente (art. 4º §16) que nenhuma sentença condenatória pode se basear apenas em declarações de colaborador — é obrigatória corroboração por elementos externos. Todo nó rotulado como ALEGAÇÃO neste grafo deve ser lido sob essa luz.

Vários desses acordos foram desconstituídos: o STF retirou a delação de Palocci da ação do terreno do Instituto Lula (2020, 2ª Turma); a PF concluiu em pelo menos 2 inquéritos que as alegações de Palocci eram "invenção" sem corroboração material. A delação de Delcídio foi tratada como mentirosa pelo próprio MPF-DF em 2019, que pediu absolvição de Lula; em 2022 Delcídio foi condenado em ação cível a indenizar Lula em R$ 10 mil por acusação falsa.

Léo Pinheiro (OAS) mudou de versão em abril/2017 — passou de 3 anos negando que o triplex fosse de Lula para afirmar que era "dono oculto". Com essa versão, a delação foi aceita pelo MPF. Em 2021, apresentou carta manuscrita de retratação.

A delação da Odebrecht (dez/2016, 77 executivos) foi a maior do Brasil. Os sistemas Drousys (mensageria) e MyWebDay (contabilidade de propinas) continham ~2.000 codinomes em ~100 milhões de itens. Em setembro/2023, Toffoli declarou todas essas provas imprestáveis.`
  },

  'vazajato': {
    titulo: 'Vaza Jato',
    periodo: '2019–2023',
    resumo: 'Série de reportagens iniciada em 09/06/2019 pelo The Intercept Brasil, baseada em mensagens de Telegram entre Moro e Dallagnol obtidas por hacker.',
    texto: `Walter Delgatti Neto invadiu contas de Telegram de autoridades e entregou o material a Glenn Greenwald. O The Intercept Brasil publicou a primeira matéria em 09/06/2019, revelando coordenação informal entre Moro (então juiz) e Dallagnol (procurador-chefe da Força-Tarefa Lava Jato) — Moro sugerindo mudança de fases, criticando a defesa de Lula, antecipando decisões.

A série totalizou 111 reportagens em consórcio ao longo de 7 meses (parceria com Folha, El País, Veja, UOL, Agência Pública, BuzzFeed). Entre as revelações: Moro sugerindo que a força-tarefa emitisse nota oficial contra a defesa; procuradores conspirando para impedir entrevista pré-eleitoral de Lula; dúvidas internas de Dallagnol — dias antes da denúncia — sobre se o triplex era de fato de Lula e se tinha relação com a Petrobras.

Delgatti foi condenado em 21/08/2023 pela Justiça Federal do DF a 20 anos e 1 mês de prisão — pelo MÉTODO (invasão de dispositivos), não pelo CONTEÚDO publicado. A autenticidade das mensagens nunca foi formalmente reconhecida pelo Judiciário, mas o conteúdo circunstanciou a decisão de suspeição de Moro em 2021.`
  },

  'master': {
    titulo: 'Caso Master / Dark Horse',
    periodo: '2025–2026',
    resumo: 'Investigação PF sobre negociação alegada entre Flávio Bolsonaro e Daniel Vorcaro (Banco Master) de R$ 134 mi, com parte do dinheiro destinado ao filme biográfico "Dark Horse" sobre Jair Bolsonaro.',
    texto: `A Operação Compliance Zero (nov/2025) atingiu o Banco Master de Daniel Vorcaro: R$ 27,7 bi bloqueados, 21 presos, 116 mandados. A partir desse eixo, o Intercept Brasil publicou em 13/05/2026 um áudio em que Flávio Bolsonaro cobra Vorcaro por R$ 134 milhões.

Em 23/10/2026, o Intercept divulgou documento da PF indicando que Vorcaro teria se comprometido a transferir US$ 24 milhões para a produção do filme "Dark Horse" — biopic sobre Jair Bolsonaro, com Jim Caviezel, roteiro de Mário Frias e direção de Cyrus Nowrasteh. Transferências entre fev-mai/2025 somaram 6 operações / US$ 10,6 mi (~R$ 61 mi). Parte do dinheiro enviado aos EUA veio de empresa de Fabiano Zettel, ligada à fraude do Banco Master.

Mensagem WhatsApp de Flávio em 16/11/2025: "Irmão, sou e serei sempre com você, não há meia conversa entre nós". Inicialmente, Flávio respondeu ao Intercept "é mentira"; depois da publicação, admitiu em vídeo nas redes que buscou investidores para o filme.

A investigação PF está em curso no STF, sob relatoria do min. André Mendonça. Investiga também se emendas parlamentares e projetos de Flávio beneficiaram o Banco Master. Nenhuma denúncia formal foi oferecida até out/2026.`
  },

  'bets': {
    titulo: 'Blaze / Willer Tomaz (apostas)',
    periodo: '2025–2026',
    resumo: 'Investigação sobre lavagem de dinheiro via plataforma de apostas Blaze. Advogado Willer Tomaz movimentou R$ 6,6 bi em apostas; Flávio Bolsonaro apontado como "usuário master" de conta aberta pelo advogado.',
    texto: `Willer Tomaz de Souza (advogado) movimentou R$ 6,6 bilhões em 53.310 apostas na plataforma Blaze entre 2025-2026, com depósitos de R$ 325 milhões. Documentos da Secretaria de Prêmios e Apostas registram R$ 5 bi em transações.

Flávio Bolsonaro apontado como "usuário master" de conta aberta pelo advogado. Vínculo entre eles desde ao menos 2019: viagens internacionais em jatos executivos, endereços comerciais compartilhados, disputa pela mansão de Angra dos Reis (acusação do jogador Richarlison em 2026). Tomaz também investigado desde ago/2025 na Operação Sem Desconto (desvios do INSS).

Em 07/08/2026, a PF descobriu uma sala oculta com máquina de contar cédulas em hangar de aviação de Tomaz no aeroporto de Brasília, atrás de porta metálica blindada escondida por parede de madeira.

Em 26/10/2026 (dia após o 2º turno das eleições), Alexandre de Moraes determinou a apreensão dos passaportes (brasileiro e diplomático) de Flávio, proibição de deixar o país e proibição de contato com Tomaz. Relator do inquérito no STF: Moraes.`
  },

  'rachadinhas': {
    titulo: 'Rachadinhas / Caso Queiroz (Flávio Bolsonaro)',
    periodo: '2007–2025',
    resumo: 'Investigação sobre esquema de devolução de salários de assessores do gabinete de Flávio Bolsonaro na ALERJ, operado alegadamente por Fabrício Queiroz.',
    texto: `O caso tornou-se público em dezembro/2018, quando O Estado de S.Paulo noticiou um Relatório de Inteligência Financeira do COAF apontando movimentação atípica de R$ 1,2 milhão na conta de Fabrício Queiroz — ex-PM e assessor parlamentar de Flávio na ALERJ por aproximadamente 17 anos.

O MP-RJ denunciou Flávio em 19/10/2020 por organização criminosa, peculato, lavagem e apropriação indébita. Alegação central: R$ 2,7 milhões em espécie usados por Flávio, oriundos do esquema. Mecanismos de lavagem alegados: franquia Kopenhagen (R$ 1,6 mi, 2015-2018), imóveis em Copacabana (R$ 638 mil), 19 imóveis entre 2007-2018.

Fabrício Queiroz foi preso em 18/06/2020 em Atibaia, em imóvel do advogado Frederick Wassef. Em depoimento ao MP-RJ em 2021, admitiu rachadinhas mas afirmou tê-las operado SOZINHO, sem conhecimento de Flávio. O MP argumentou implausibilidade da operação autônoma por 10+ anos.

Em 23/02/2021, o STJ anulou 4x1 a quebra de sigilo (voto condutor divergente de João Otávio de Noronha). Em 28/11/2023, o STF (HC 201.965, 2ª Turma, 3x1) anulou 4 dos 5 RIFs do COAF — fundamentação: "investigação disfarçada" (compartilhamento COAF↔MP antes de autorização judicial para investigar parlamentar com foro).

Em 16/05/2022, o Órgão Especial do TJ-RJ arquivou a denúncia, a pedido do próprio MP-RJ, após as provas serem invalidadas. Flávio nunca foi recebido como réu, nunca foi condenado. Em 02/2025, Gilmar Mendes negou recurso de reabertura (fora do prazo), registrando que nova denúncia com provas novas seria possível.`
  },

  'queiroz': {
    titulo: 'Fabrício Queiroz',
    periodo: '2018–2022',
    resumo: 'Operador apontado pelo MP-RJ como centralizador do esquema de rachadinhas no gabinete de Flávio.',
    texto: `Ex-PM, assessor parlamentar de Flávio Bolsonaro na ALERJ por ~17 anos (exonerado em 15/10/2018). O MP-RJ apontou-o como operador financeiro do esquema, centralizando devoluções de salário de assessores e repassando a Flávio.

Preso em 18/06/2020 em Atibaia (SP) em imóvel pertencente a Frederick Wassef, advogado histórico de Flávio. A prisão foi convertida em domiciliar em 07/2020 por razões humanitárias. Em depoimento ao MP-RJ em 2021, admitiu a existência das rachadinhas mas afirmou tê-las operado sozinho, sem conhecimento de Flávio — tese que o MP considerou implausível. O MP apontou que Queiroz também pagou mensalidades escolares das filhas de Flávio, o que contradizia a tese de operação autônoma. Negociou delação premiada em 2020, mas o acordo não foi fechado.`
  },

  'joias': {
    titulo: 'Joias sauditas',
    periodo: '2021–2024',
    resumo: 'Apreensão de joias da Chopard (presente do governo saudita) em outubro/2021 que deveriam ter sido incorporadas ao acervo público.',
    texto: `Em 26/10/2021, auditores da Receita Federal apreenderam no Aeroporto de Guarulhos mochila do assessor do então ministro Bento Albuquerque contendo colar, anel, relógio e brincos de diamantes com certificado Chopard — presente do governo saudita. A PF avaliou o conjunto em R$ 5.086.541.

Pelo decreto 9.796/2019 e Lei 8.394/1991, presentes de Estado valiosos devem ser incorporados ao acervo público (GADH/Presidência), não ao acervo pessoal. Entre out/2021 e dez/2022, oito tentativas documentadas de recuperar as peças envolveram gabinete presidencial, Ministério da Economia, MME e MRE. Um terceiro conjunto incluía Rolex em ouro branco e diamantes avaliado em mais de R$ 500 mil.

A PF indiciou Bolsonaro em 02/07/2024 por peculato, lavagem de dinheiro e associação criminosa, junto com Mauro Cid, Mauro Lourena Cid (pai), Frederick Wassef, Marcelo Câmara, Bento Albuquerque e Fabio Wajngarten. Delação de Mauro Cid afirmou que a venda das peças gerou US$ 86 mil, com US$ 18 mil entregues a Bolsonaro.

A defesa sustentou que a legislação não distingue claramente propriedade de presentes recebidos no cargo. Bolsonaro, Michelle, Câmara e Wajngarten optaram pelo silêncio.`
  },

  'vacinas': {
    titulo: 'Cartões de vacinação',
    periodo: '2021–2024',
    resumo: 'Alegação de inserção de dados falsos no ConecteSUS para fraudar certificados de vacina COVID-19.',
    texto: `Entre nov/2021 e dez/2022, foram feitas inserções no banco público ConecteSUS atribuindo doses de vacina COVID-19 a Jair Bolsonaro, sua filha de 12 anos e integrantes do círculo próximo. Bolsonaro declarou publicamente, em várias ocasiões, não ter se vacinado.

A PF indiciou Bolsonaro em 19/03/2024 (com mais 16 pessoas) por inserção de dados falsos em sistema público, uso de documento falso e associação criminosa. Delação de Mauro Cid afirmou que imprimiu os certificados e os entregou em mãos ao ex-presidente, com ordem partindo de Bolsonaro. Finalidade apontada: burlar restrições sanitárias em viagem aos EUA em dez/2022.

Bolsonaro negou ter ordenado qualquer adulteração.`
  },

  'golpe-8jan': {
    titulo: '8 de janeiro / Trama golpista',
    periodo: '2021–2025',
    resumo: 'Invasão de 8 de janeiro de 2023 e trama golpista alegada que a precedeu — reunião de 05/07/2022 com ministros, minuta do golpe, "Punhal Verde e Amarelo".',
    texto: `Em 05/07/2022, reunião ministerial no Palácio da Alvorada (gravada; sigilo retirado em 09/02/2024) teve Bolsonaro orientando ministros a disseminar dúvidas sobre urnas eletrônicas e credibilidade do Judiciário. Em 18/07/2022, reunião com embaixadores estrangeiros no Alvorada atacou o sistema eleitoral — peça central da decisão do TSE que o declarou inelegível por 8 anos em 30/06/2023 (5x2).

Em 08/01/2023, apoiadores invadiram e depredaram o Congresso, STF e Palácio do Planalto. Bolsonaro estava nos EUA desde 30/12/2022. Busca na residência de Anderson Torres (ex-ministro da Justiça) em janeiro/2023 encontrou a "minuta do golpe" — previa estado de defesa na sede do TSE para anular o resultado eleitoral.

Documento "Punhal Verde e Amarelo", manuscrito pelo general Mário Fernandes e impresso no Palácio do Planalto em 09/11/2022, previa assassinato de Lula, Alckmin e Alexandre de Moraes. Fernandes admitiu autoria em depoimento ao STF.

A Operação Tempus Veritatis (08/02/2024) apreendeu o passaporte de Bolsonaro. Em 12-14/02/2024, ele passou 2 dias na Embaixada da Hungria em Brasília. A PF indiciou Bolsonaro + 36 em 21/11/2024 (25 militares, 8 generais). A PGR denunciou Bolsonaro, Braga Netto e outros em 18/02/2025 por 5 crimes: golpe de Estado; organização criminosa armada; tentativa de abolição violenta do Estado Democrático; dano qualificado; deterioração de patrimônio tombado.`
  },

  'inelegibilidade': {
    titulo: 'Inelegibilidade (TSE)',
    periodo: '2022–2030',
    resumo: 'Decisão do TSE em 30/06/2023 que declarou Bolsonaro inelegível por 8 anos.',
    texto: `O TSE declarou Bolsonaro inelegível por 8 anos (até 2030) em 30/06/2023, por 5x2. Pela inelegibilidade: Benedito Gonçalves (relator), Floriano de Azevedo Marques, Cármen Lúcia, André Ramos Tavares e Alexandre de Moraes. Contra: Nunes Marques e Raul Araújo.

Fundamentação: abuso de poder político e uso indevido dos meios de comunicação na reunião de 18/07/2022 com embaixadores estrangeiros no Palácio do Alvorada. Braga Netto (vice na chapa) foi excluído da sanção.`
  },

  'cunha-lavajato': {
    titulo: 'Lava Jato — Eduardo Cunha',
    periodo: '2015–2023',
    resumo: 'Conjunto de processos de Cunha na Lava Jato — contas na Suíça, campo de Benin, navios-sonda da Petrobras.',
    texto: `Em 30/09/2015, o Ministério Público da Suíça enviou à PGR do Brasil documentos de investigação por lavagem de dinheiro contra Cunha. R$ 411 milhões movimentados no esquema; cerca de US$ 5 milhões / CHF 1,3 mi atribuídos diretamente a Cunha. Codinome alegado: "Carlos Trivoli".

Alegação central: Cunha teria recebido propinas por facilitar a contratação (2006-2007) de dois navios-sonda pela Petrobras junto à Samsung Heavy Industries, e por propina adicional pela compra de 50% de um campo de petróleo em Benin pela Petrobras (US$ 35,5 milhões pagos).

Cunha foi preso em 19/10/2016 por decisão de Sergio Moro. Permaneceu preso aproximadamente 3 anos e 5 meses em regime fechado/semiaberto até março/2020, quando ganhou domiciliar; livre em maio/2021 após Ney Bello (TRF-1) revogar a última prisão.

Moro condenou em 30/03/2017 a 15 anos e 4 meses (corrupção, lavagem, evasão); TRF-4 confirmou e reduziu para 14 anos e 6 meses em 2018. Em 09/09/2020, Bonat (sucessor de Moro) condenou-o a mais 15 anos e 11 meses no caso navios-sonda — ANULADA pelo STF em 29/05/2023 (3x2) por incompetência da Justiça Federal, aplicando a mesma tese do HC 193.726 do Lula.`
  },

  'cunha-fifa': {
    titulo: 'Operação Sépsis / FI-FGTS',
    periodo: '2016–2021',
    resumo: 'Desvio bilionário do Fundo de Investimento do FGTS em contratos do Porto Maravilha (RJ), via Caixa Econômica Federal.',
    texto: `Deflagrada em 01/07/2016 como desdobramento da Lava Jato (PF e MPF em SP, RJ, PE e DF). Objeto: desvio de bilhões do FI-FGTS destinados ao Porto Maravilha (RJ) via Caixa Econômica Federal.

Alvo preso: Lúcio Bolonha Funaro (operador do PMDB). Em delação, Funaro descreveu divisão de propina de ~3% do valor liberado: 50% Geddel Vieira Lima / 30% Cunha / 20% Funaro.

Em 31/05/2019, o juiz Vallisney de Souza Oliveira (10ª Vara Federal de Brasília) condenou Cunha a 24 anos e 10 meses de reclusão por corrupção passiva, lavagem e violação de sigilo funcional. A sentença citou "personalidade voltada ao crime" e "ganância e manutenção do projeto de Poder". Em 2021, o TRF-1 anulou essa condenação e devolveu o processo.`
  },

  'cunha-impeachment': {
    titulo: 'Impeachment de Dilma / cassação de Cunha',
    periodo: '2015–2016',
    resumo: 'Cronologia política crítica: PT abandonou proteção a Cunha na manhã de 02/12/2015; Cunha acolheu o pedido de impeachment contra Dilma na tarde do mesmo dia.',
    texto: `O pedido de impeachment contra Dilma foi protocolado em 15/10/2015 por Hélio Bicudo, Miguel Reale Júnior e Janaina Paschoal — e ficou pendente por semanas no gabinete de Cunha.

Em 02/12/2015, pela manhã, três deputados do PT anunciaram que votariam pela continuidade do processo contra Cunha no Conselho de Ética — o PT abandonou a "proteção" ao presidente da Câmara. Na tarde/noite do mesmo dia, Cunha acolheu formalmente o pedido de impeachment contra Dilma.

A leitura dominante na imprensa de esquerda (CartaCapital, Agência Pública) é de que a decisão foi retaliação política direta. A contraleitura (Estadão, O Globo) é de que Cunha já articulava o impeachment com a oposição desde agosto/2015 — Aécio Neves negou que fosse retaliação.

Em 05/05/2016, Teori Zavascki (STF) afastou Cunha da presidência da Câmara (confirmado unanimemente pelo plenário, 11x0). Em 12/09/2016, o plenário da Câmara cassou Cunha por 450x10 (9 abstenções) — mais longo processo da história do Conselho de Ética (11 meses). Inelegibilidade até 2027. O impeachment de Dilma foi concluído em 31/08/2016 (61x20 no Senado).`
  },

  'contexto': {
    titulo: 'Contexto geral',
    periodo: '2003–presente',
    resumo: 'Nós de contexto — operações, leis, eleições e eventos políticos que servem de pano de fundo para interpretar os casos.',
    texto: `Nós desta categoria não são, isoladamente, acusações ou decisões judiciais. São eventos ou institutos que moldam a interpretação dos outros nós: a Operação Lava Jato (17/03/2014), a Lei 12.850/2013 que regula delações premiadas, o impeachment de Dilma, as eleições presidenciais de 2018, a morte do min. Teori Zavascki (relator original da Lava Jato no STF). Também absolvições em processos secundários (Quadrilhão do PT, Caso Cerveró, Zelotes/MP 471) e a decisão do Comitê de Direitos Humanos da ONU (28/04/2022) que concluiu que o Brasil violou direitos de Lula no caso Triplex.`
  },

  'narrativa': {
    titulo: 'Narrativas midiáticas',
    periodo: '2014–presente',
    resumo: 'Enquadramentos interpretativos publicados, rotulados pela fonte. Narrativa aqui não é "verdade" ou "mentira" — é como a mesma base factual é apresentada de formas diferentes.',
    texto: `Cada nó rotulado NARRATIVA é identificado pela fonte emissora (veículo, livro, documentário, ator institucional). O rótulo preserva a autoria, não hierarquiza verdade.

Deslocamentos temporais importantes: 2014-2018 houve predominância das narrativas acusatórias no mainstream (Veja, Globo, Estadão); em junho/2019 a Vaza Jato (The Intercept) inverteu parte do eixo de legitimidade; em 2021-2022 STF e ONU institucionalizaram parcialmente a narrativa de "julgamento parcial" nos casos de Lula.

O grafo inclui tanto narrativas acusatórias (Veja "chefe do esquema", O Globo "cerco de depoimentos", IstoÉ "descontrole", filme da Lava Jato) quanto defensivas (CartaCapital "máquina de exageros", Intercept "Vaza Jato", Brasil 247 "lawfare", Agência Pública "digitais do FBI", Conjur "devido processo violado", OAB, Documentário "Democracia em Vertigem"). Arestas de tipo "contradiz" marcam quando duas narrativas enquadram os mesmos fatos de forma oposta.`
  },

  'milicias-digitais': {
    titulo: 'Inquérito das Milícias Digitais (INQ 4.874)',
    periodo: '2021–presente',
    resumo: 'Inquérito do STF sobre organização com estrutura setorizada para atacar instituições democráticas via redes sociais.',
    texto: `Instaurado em 2021 sob relatoria de Alexandre de Moraes. Investiga organização com estrutura setorizada (política, produção, publicação, financiamento) voltada a atacar instituições democráticas via redes sociais. Base da operação que apreendeu o celular do ex-presidente Bolsonaro. Teve múltiplas prorrogações.

Narrativas favoráveis a Bolsonaro (Revista Oeste, Jovem Pan opinião) enquadram o inquérito como "concentração em um relator único" e questionam o escopo, invocando "liberdade de expressão". Narrativas acusatórias (Intercept, Pública) o apresentam como instrumento necessário para enfrentar milícias digitais com cadeia de comando.`
  },

  'lavajato': {
    titulo: 'Operação Lava Jato (operação)',
    periodo: '2014–2021',
    resumo: 'Operação iniciada em 17/03/2014 pela PF em Curitiba. Investigou esquema de corrupção na Petrobras e desdobrou-se em várias frentes.',
    texto: `Deflagrada em 17/03/2014 pela PF em Curitiba, com foco inicial no doleiro Alberto Youssef e no ex-diretor da Petrobras Paulo Roberto Costa. A operação se desdobrou em mais de 70 fases e atingiu políticos, empreiteiras e doleiros em todo o país. Foi extinta formalmente em 03/02/2021.

A Força-Tarefa em Curitiba, coordenada por Deltan Dallagnol, foi responsável pelos processos contra Lula, Cunha, Dirceu e outros. A operação foi objeto de crítica jurídico-técnica (Conjur, OAB, STF a partir de 2021) por práticas como condução coercitiva sem recusa prévia à intimação, interceptação de linhas de advogados, vazamentos seletivos à imprensa, e — após a Vaza Jato (2019) — coordenação informal entre juiz e acusação.

Impactos consolidados: várias condenações originadas da Lava Jato foram anuladas pelo STF entre 2021-2023, sob diferentes fundamentos (incompetência, suspeição, nulidade de provas da Odebrecht). O debate sobre o que foi legítimo e o que foi excesso continua ativo.`
  },

  'palestras': {
    titulo: 'Palestras / Instituto Lula (secundário)',
    periodo: '2011–2016',
    resumo: 'Investigações sobre palestras pagas de Lula após o governo (2011+) e sobre doações ao Instituto Lula.',
    texto: `Após deixar a Presidência em 2010, Lula passou a fazer palestras remuneradas (R$ 200 mil cada, segundo Antonio Palocci). O MPF investigou se palestras pagas por empresas (Odebrecht, OAS, LIDE) seriam propina disfarçada. Os processos específicos derivados dessa linha foram anulados em 2021 (HC 193.726) ou arquivados.`
  },

  'cabral-rj': {
    titulo: 'Esquema RJ (Cabral)',
    periodo: '2007–2024',
    resumo: 'Conjunto de operações que apuraram alegado esquema de ~R$ 300 mi em propinas no governo RJ (2007-2014) via cobrança de 5% sobre faturamento de empreiteiras.',
    texto: `Sérgio Cabral (MDB) governou o RJ entre 2007-2014 no auge de recursos (pré-sal, Copa 2014, Olimpíadas 2016). Preso em 17/11/2016 (Operação Calicute, 37ª fase da Lava Jato) em sua residência no Leblon, foi levado ao presídio de Bangu.

Entre 2017-2021, foi condenado em pelo menos 10 ações penais pela 7ª Vara Federal do RJ (juiz Marcelo Bretas), acumulando mais de 425 anos de pena (Calicute 45a 2m, Eficiência 22a 8m, Fatura Exposta 33a, Mascate, Saqueador, PAC Favelas, entre outras). Alegações centrais: taxa de 5% sobre faturamento das empreiteiras; operador declarado foi Carlos Miranda; esposa Adriana Ancelmo também condenada.

Em 06/02/2020, Fachin homologou delação de Cabral com a PF (compromisso de devolver R$ 380 mi). Em 27/05/2021, STF ANULOU a delação por 7x4, por entender que a PF não podia celebrar acordos sem o MPF. A delação citava alegado pagamento de R$ 4 mi a Dias Toffoli — Toffoli votou pela anulação (crítica à auto-interessada composição do voto).

Em 16/12/2022, a 2ª Turma do STF revogou a última prisão preventiva (3x2), após 6 anos e 1 mês de cárcere contínuo. Em março/2024, o TRF-2 ANULOU 3 condenações (Unfair Play, Ratatouille, C'est Fini) por incompetência de Bretas — 40 anos e 6 meses foram subtraídos. Em agosto/2024, STJ liberou-o do uso de tornozeleira. Em 03/06/2025, o CNJ condenou Marcelo Bretas à APOSENTADORIA COMPULSÓRIA por parcialidade, interferência na PF, vazamentos e tentativa de beneficiar Wilson Witzel.`
  },

  'garotinho-rj': {
    titulo: 'Esquema RJ (Garotinho/Campos)',
    periodo: '2016–2026',
    resumo: 'Investigações sobre uso eleitoral do programa social Cheque Cidadão em Campos dos Goytacazes e esquema de propinas em obras habitacionais.',
    texto: `Anthony Garotinho (ex-PT/PDT/PSB/MDB/PR/PROS/Republicanos) foi governador do RJ 1999-2002 e secretário de segurança no governo de sua esposa Rosinha (2003-2007). Foi preso 4 vezes entre 2016-2019: Operação Chequinho (11/2016), condenação de 1ª instância (09/2017), nova prisão (11/2017, com greve de fome), e Operação Domus (09/2019, com Rosinha).

A Operação Chequinho apurou o uso eleitoral do programa social Cheque Cidadão (R$ 200/família) em Campos para comprar votos nas eleições municipais de 2016 favorecendo candidatos aliados e a reeleição de Rosinha. Entre maio-agosto/2016, novos beneficiários aumentaram em mais de 17 mil.

Após 10 anos de instâncias (1ª vara, TRE-RJ, TRE-RJ, TSE, 2ª Turma STF confirmando), em 27/03/2026 o ministro Cristiano Zanin (STF) ANULOU a condenação criminal por prova ilícita — dados extraídos de computadores da Secretaria sem cadeia de custódia e sem perícia. A delegada da PF Carla de Melo Dolinski havia denunciado publicamente em 05/2018 "conluio entre juiz, promotor e colegas da PF" para forçar confissões.

Paralelamente, foi condenado em ação civil de improbidade (caso "Saúde em Movimento", R$ 234 mi), com trânsito em julgado no STF em 11/07/2025: suspensão de direitos políticos até 2033. Em 2026, candidato ao governo do RJ pelo Republicanos, teve registro negado; recebeu 274.411 votos (3,17%) no 1º turno — ANULADOS pelo TSE em 08/10/2026 (5x2); com retotalização, Douglas Ruas (candidato de direita) foi declarado eleito no 1º turno.`
  },

  'zambelli': {
    titulo: 'Carla Zambelli — arma e CNJ',
    periodo: '2022–2026',
    resumo: 'Duas condenações distintas pelo STF: perseguição com arma em 29/10/2022 (véspera do 2º turno) e invasão ao sistema do CNJ via hacker Walter Delgatti.',
    texto: `Em 29/10/2022, Carla Zambelli (PL-SP, deputada federal) perseguiu com arma de fogo em punho o jornalista Luan Araújo (apoiador de Lula) em SP, dia antes do 2º turno. Em 22/08/2025 o STF condenou-a por 9x2 por porte ilegal de arma + constrangimento ilegal: 5 anos e 3 meses em regime semiaberto.

Em 03-04/01/2023, o hacker Walter Delgatti (o mesmo da Vaza Jato) invadiu o sistema do CNJ e inseriu um mandado de prisão FORJADO contra Alexandre de Moraes. Delgatti afirmou ter sido contratado por Zambelli por R$ 40 mil. Em agosto/2023, em depoimento à CPMI do 8 de Janeiro, Delgatti declarou ter se reunido com Bolsonaro no Alvorada — teria sido perguntado se poderia invadir urnas eletrônicas se tivesse o código-fonte.

Em 14/05/2025, a 1ª Turma do STF condenou Zambelli e Delgatti UNANIMEMENTE (5x0) por invasão de dispositivo informático + falsidade ideológica. Zambelli: 10 anos em regime fechado + indenização coletiva de R$ 2 mi (compartilhada com Delgatti). Delgatti: 8 anos e 3 meses.

Em junho/2025, Zambelli fugiu para a Itália via Argentina. Em 29/07/2025, foi presa em Roma e levada ao presídio feminino de Rebibbia. A Corte de Apelação italiana concedeu extradição parcial em maio/2026 (caso da arma, não CNJ); a Corte de Cassação anulou e exigiu reanálise. Em 11/12/2025, Moraes declarou perda de mandato (Câmara havia rejeitado por quórum insuficiente); Zambelli renunciou em 14/12/2025.`
  },

  'silveira': {
    titulo: 'Daniel Silveira — ataques ao STF',
    periodo: '2021–2026',
    resumo: 'Vídeo defendendo AI-5 e atacando ministros do STF (02/2021), condenação pelo STF (04/2022, 8a 9m), indulto imediato de Bolsonaro anulado pelo STF (05/2023).',
    texto: `Em 16/02/2021, Daniel Silveira (PSL/PL-RJ, deputado federal) publicou vídeo defendendo a edição do AI-5 (instrumento mais duro da ditadura militar) e xingando ministros do STF — Moraes, Fachin, Barroso, Gilmar, Marco Aurélio, Toffoli. Preso em flagrante na mesma noite por ordem monocrática de Moraes. Em 17/02, o Plenário do STF referendou unanimemente; a Câmara confirmou por 364x130.

Em 20/04/2022, o Plenário do STF condenou Silveira por 10x1 (único voto dissidente: Nunes Marques, que votou pela absolvição parcial). Pena: 8 anos e 9 meses em regime inicial FECHADO + multa R$ 192,5 mil + perda de mandato (primeira cassação de deputado decretada diretamente pelo STF, sem passar pelo Plenário da Câmara — precedente constitucional controverso).

Em 21/04/2022, UM DIA depois da condenação, Bolsonaro assinou o Decreto 11.090/2022 concedendo indulto individual específico a Silveira. Em 10/05/2023, o STF ANULOU o decreto por 8x2, declarando-o inconstitucional por "desvio de finalidade" (Bolsonaro teria usado o indulto para atacar decisão do próprio Supremo em favor de aliado político).

Em 02/02/2023, Silveira foi preso novamente em Petrópolis — danificou tornozeleira e manteve ataques públicos. Em 29/09/2025, Moraes autorizou progressão para regime aberto com tornozeleira (cumpriu 4a 1m 26d + 389 dias de remição). Em setembro/2026, a defesa reitera pedido ao STF para retirar a tornozeleira.`
  },

  'collor': {
    titulo: 'Fernando Collor — dois ciclos',
    periodo: '1990–2026',
    resumo: 'Único ex-presidente com DOIS tipos de responsabilização: impeachment político de 1992 (crime de responsabilidade, PC Farias) e condenação criminal pelo STF em 2023 (Lava Jato / BR Distribuidora).',
    texto: `Em 1992, Pedro Collor acusou publicamente Paulo César Farias (PC Farias, ex-tesoureiro da campanha) de operar esquema de propinas com conivência do presidente. CPMI aprovou relatório em 26/08/1992 (16x5). Câmara autorizou impeachment em 29/09/1992 (441x38). Em 29/12/1992, antes da votação final no Senado, Collor renunciou — Senado prosseguiu e o condenou (76x3), aplicando inelegibilidade de 8 anos. STF, na AP 307 (1994), absolveu Collor por 5x3 por falta de provas de participação; PC Farias foi condenado por unanimidade.

Em 2006, Collor voltou à política eleito senador por AL (PRTB → PTB). Reeleito em 2014. Em 14/07/2015, a Operação Politeia (PF/MPF) deflagrou buscas contra ele — primeira ofensiva da Lava Jato diretamente contra políticos. Alegação: ~R$ 29 mi em propinas da UTC/Odebrecht/Camargo pela indicação de Pedro Grossi para presidência da BR Distribuidora.

Em 24/05/2023 (plenário virtual), STF condenou Collor por 8x2 (voto dissidente de Gilmar Mendes criticou duramente as delações). Pena total: 8 anos e 10 meses em regime fechado por corrupção passiva + lavagem (associação criminosa prescreveu).

Em 25/04/2025, Moraes certificou trânsito em julgado e determinou prisão imediata — Collor preso no aeroporto de Maceió tentando embarcar para Brasília. Em 01/05/2025, Moraes concedeu prisão DOMICILIAR humanitária (Parkinson, bipolaridade, apneia). Local: cobertura de 600 m² na orla de Maceió, avaliada em R$ 9 mi. Em outubro/2026, cumpre 1 ano e 6 meses em domiciliar.

Collor foi o PRIMEIRO ex-presidente brasileiro preso em definitivo por sentença transitada em julgado — status único até a prisão de Bolsonaro em 11/2025.`
  },

  'renan': {
    titulo: 'Renan Calheiros — longevidade',
    periodo: '1995–2026',
    resumo: 'Senador por 32 anos (1995-2027) com 25-40 inquéritos/processos no STF; nenhum resultou em condenação criminal definitiva.',
    texto: `Renan Calheiros (MDB-AL) foi senador por 4 mandatos consecutivos e presidente do Senado em 4 ocasiões. Em 2007, o caso Mônica Veloso (lobista Cláudio Gontijo da Mendes Júnior teria custeado R$ 9 mil/mês de pensão alimentícia extra) o fez renunciar à presidência do Senado. O Inq. 2593 virou ação penal (peculato); 11 anos depois, em 2018, a 2ª Turma do STF ABSOLVEU Renan por insuficiência de provas (relator Fachin).

Em 05/12/2016, Marco Aurélio afastou-o monocraticamente da presidência do Senado por ser réu em processo penal. Em 07/12/2016, o Plenário do STF (voto de Toffoli) decidiu que Renan poderia PERMANECER como presidente, mas ficou fora da linha de sucessão presidencial.

Na Operação Zelotes (MP 471/09 — a mesma MP dos processos de Lula), investigação de propina de montadoras foi ARQUIVADA por Lewandowski em 2018 por falta de "lastro probatório mínimo". Em delação da Odebrecht (março/2017), foi acusado de R$ 1 milhão em propina (2012) via motorista do operador Milton Lyra — PGR pediu ARQUIVAMENTO; PF indiciou.

Em fevereiro/2026, o último inquérito pendente foi arquivado. Em outubro/2026, Renan perdeu a eleição ao Senado (derrotado por Arthur Lira do PP e Marina JHC do PSDB) e encerra 32 anos de Senado — teria chegado a 40 se eleito. Nunca condenado criminalmente em definitivo.`
  },

  'juca': {
    titulo: 'Romero Jucá — "estancar a sangria"',
    periodo: '2016–2026',
    resumo: 'Áudio icônico de maio/2016 em que, interlocutor de Sérgio Machado, defende "mudar o governo pra estancar a sangria" (Lava Jato) via pacto político pós-impeachment com participação do STF.',
    texto: `Em 23/05/2016, a Folha de S.Paulo divulgou áudio em que Romero Jucá (então ministro do Planejamento interino de Temer, senador MDB-RR) dizia a Sérgio Machado (ex-presidente da Transpetro, delator que gravou) que o impeachment de Dilma seria necessário para "estancar a sangria" das investigações da Lava Jato — ambos investigados. O áudio sugere pacto político pós-impeachment com envolvimento do STF para desacelerar a operação.

A frase virou símbolo da crítica ao impeachment como manobra de autoproteção. Jucá afastou-se do Ministério em 24/05/2016.

Em 04/06/2019, MPF/PR denunciou Jucá por R$ 1 milhão em propinas de contratos entre Galvão Engenharia e Transpetro (2010). Em 2024, Dias Toffoli TRANCOU a ação penal por "ausência de justa causa" (colaborações sem corroboração externa).

Em 2018, Jucá PERDEU a reeleição ao Senado (3º lugar, 17,34%, atrás de Chico Rodrigues/DEM e Mecias de Jesus/PRB) — encerrou 6 mandatos consecutivos. Em agosto/2026, Flávio Dino (STF) SUSPENDEU uma condenação do TRF-1 de 9a 10m por entender incompetência do TRF-1 — processo remetido ao STF.`
  },

  'geddel': {
    titulo: 'Geddel — R$ 51 mi em espécie',
    periodo: '2016–2026',
    resumo: 'Fato icônico: PF encontrou R$ 51 milhões em malas de dinheiro em apartamento em Salvador (05/09/2017). Condenado em definitivo pelo STF.',
    texto: `Geddel Vieira Lima (MDB-BA), ex-ministro da Secretaria de Governo de Temer e ex-vice-presidente da Caixa Econômica Federal. Em 03/07/2017, preso na Operação Cui Bono (Caixa / FI-FGTS) — delações de Lúcio Funaro e Joesley Batista apontaram R$ 16 milhões de propina a Geddel, esquema conjunto com Cunha somando R$ 105 milhões.

Em 05/09/2017, deflagrada a OPERAÇÃO TESOURO PERDIDO: PF encontrou mais de R$ 51 milhões em espécie em apartamento em Salvador (bairro da Graça) de titularidade de Silvio Silveira (teria "emprestado" o imóvel). Digitais de Geddel identificadas no local. A imagem icônica das malas de dinheiro tornou-se símbolo da corrupção pós-Lava Jato. Geddel admitiu posteriormente, em podcast, que o dinheiro seria para campanha ao governo da BA em 2018.

Em 22/10/2019, a 2ª Turma do STF condenou Geddel por 14 anos e 10 meses (lavagem unânime + associação criminosa 3x2 — Fachin, Celso de Mello, Cármen Lúcia pela condenação; Gilmar e Lewandowski pela absolvição em associação). Em agosto/2021, 2ª Turma afastou a condenação por associação criminosa; pena final por lavagem: 13 anos e 4 meses.

Preso na Papuda, foi transferido para Salvador em dezembro/2019 (Fachin). Em julho/2020, Toffoli concedeu domiciliar humanitária (covid). Em 10/09/2021, Fachin autorizou semiaberto.

ALCANCE DO HC 193.726 (Lula) sobre Geddel: NÃO foi beneficiado — o processo não derivava da 13ª Vara de Curitiba e foi julgado direto pelo STF.`
  },

  'arruda': {
    titulo: 'Mensalão do DEM — Arruda',
    periodo: '2009–2026',
    resumo: 'Primeiro governador cassado no Brasil pós-redemocratização. Vídeo icônico de Durval Barbosa (delator) mostrando Arruda recebendo maços de dinheiro na Secretaria de Governo do DF.',
    texto: `Em 27/11/2009, a Operação Caixa de Pandora (PF) deflagrou buscas contra Arruda (DEM, governador do DF). O delator Durval Barbosa, ex-secretário de Relações Institucionais, gravou 30 vídeos (55 min entregues à Justiça). O vídeo central mostra Arruda recebendo maço de notas de Durval na própria Secretaria de Governo — dinheiro colocado em envelope e levado por assessor. Outra imagem (empresário com dinheiro na cueca) tornou-se símbolo do escândalo.

Em 11/02/2010, Arruda foi preso preventivamente pelo STJ (relator Fernando Gonçalves) — tentativa de suborno da testemunha jornalista Edson Sombra. Em 05/03/2010, o STF confirmou a prisão por 9x1. Em 16/03/2010, o TRE-DF cassou o mandato por infidelidade partidária — primeiro governador cassado no Brasil pós-redemocratização. Em 12/04/2010, Corte Especial do STJ revogou a prisão.

Condenado por improbidade administrativa pela 2ª Vara da Fazenda Pública do DF: perda de direitos políticos por 12 anos + multa R$ 152,5 mil + devolução de R$ 257 mil. Em 2017, 1ª Turma do STF condenou-o a 3 anos, 10 meses e 20 dias por falsidade ideológica continuada (recibos falsos para justificar R$ 50 mil de Durval). STF anulou essa condenação posteriormente.

Candidatura 2026: PSD; TRE-DF (03/09/2026) impediu registro UNANIMEMENTE; TSE confirmou (24/09/2026, 5x2). Inelegível até 11/12/2030 por sucessivas condenações em 2ª instância por improbidade dolosa.`
  },

  'richa': {
    titulo: 'Beto Richa — Lava Jato Paraná',
    periodo: '2015–2026',
    resumo: 'Governador PR (2011-2018) e primeiro governador tucano atingido pela Lava Jato. 3 prisões curtas em 2018-2019; todas as ações anuladas por Toffoli em 2023.',
    texto: `Beto Richa (PSDB-PR, filho de José Richa) governou o Paraná entre 2011-2018. Paradoxo central: o governador do estado onde a Lava Jato nasceu caiu nela — investigado pela mesma 13ª Vara Federal de Curitiba.

Sofreu 3 prisões curtas (totalizando ~30 dias de cárcere, nenhuma condenação):
1. 11/09/2018: Operação Rádio Patrulha + Operação Piloto (53ª fase da Lava Jato — codinome Odebrecht "Piloto"). Solto em 14/09/2018 por HC de ofício de Gilmar Mendes, que considerou prisão com "fundamentos políticos" às vésperas da eleição. Esposa Fernanda e irmão Pepe também presos.
2. Janeiro/2019: Operação Integração (55ª fase) — propinas da Econorte (R$ 2,7 mi + 3 imóveis). Danos estimados em R$ 8,4 bi no sistema de pedágios.
3. 19/03/2019: Operação Quadro Negro (MP-PR, Justiça Estadual) — desvio de R$ 20-22 mi em contratos escolares.

Em 05/06/2019, MPF o denunciou na Operação Piloto por R$ 7,5 mi (R$ 3,5 mi SOE Odebrecht + R$ 3,4 mi imóvel subavaliado + R$ 600 mil caixa 2 em 2014). Codinome: "Piloto". Virou réu em 01/07/2019 (23ª Vara Federal Curitiba).

Em 19/12/2023, Dias Toffoli (STF) ANULOU ABSOLUTAMENTE todas as ações (Rádio Patrulha, Piloto, Integração, Quadro Negro). Fundamentação: aplicação da jurisprudência pós-Spoofing/Vaza Jato — mensagens entre procurador Diogo Castor de Mattos e Moro revelaram "conluio processual" análogo ao HC 193.726 de Lula. Fux confirmou em 2024.

Em 2018, Richa havia renunciado ao governo em 06/04/2018 para disputar o Senado — teve derrota ESMAGADORA em 07/10/2018 (6º lugar, &lt;4%). Em 2026, candidato a deputado federal pelo PSDB-PR, recebeu ~57 mil votos — PSDB não atingiu quociente eleitoral no PR, clã Richa fica sem cargo pela primeira vez em décadas.`
  },

  'geral': {
    titulo: 'Geral',
    periodo: '—',
    resumo: 'Nós que não se enquadram num caso específico (ministros, operações, leis, eleições, entidades institucionais).',
    texto: `Esta categoria agrupa nós transversais a múltiplos casos. Ministros do STF que atuaram em processos de várias figuras, operações de abrangência geral, leis e eventos políticos que afetam o conjunto dos casos. Esses nós não "pertencem" a um caso específico — são o pano de fundo institucional comum.`
  }
};
