// Fonte única de dados da dinâmica "PGE-SP: A Travessia" — Cartas-Problema
// Baseado no documento oficial "Cartas-problema - DINÂMICA · Travessias"

export const EIXOS = {
  governanca: { nome: "Governança", cor: "#2f7d4f", corClara: "#e8f3ec", cartas: [1,2,3,4,5,6] },
  tecnologia: { nome: "Tecnologia", cor: "#c0392b", corClara: "#f8e9e7", cartas: [7,8,9] },
  processos:  { nome: "Processos",  cor: "#2f7488", corClara: "#e8f1f3", cartas: [10,11,12,13] },
  pessoas:    { nome: "Pessoas",    cor: "#e0861f", corClara: "#fbeee0", cartas: [14,15,16,17,18] }
};

const PERGUNTAS_PADRAO = [
  "O que devemos levar adiante?",
  "O que precisamos rever?",
  "O que ainda precisamos aprender melhor?",
  "Qual mudança faria diferença para mais de uma banca ou área?",
  "Que apoio, projeto, capacidade ou decisão institucional seria necessário?",
  "O que poderia ser testado ou preparado ao longo de 2027?",
  "Qual seria um sinal observável de avanço?",
  "O que precisaria ser simplificado, interrompido ou protegido?",
  "Ao final, proponham um primeiro movimento de preparação para 2027."
];

const PERGUNTAS_CARTA_01 = [
  "O que deu certo nessa situação?",
  "O que deu errado e que consequências isso gerou?",
  "O que poderia ter sido feito diferente?",
  "Que aperfeiçoamento mais geral poderia ter evitado os problemas desse caso?",
  "O que ainda precisamos entender melhor para conseguirmos propor esses aperfeiçoamentos?",
  "Que apoio, projeto, capacidade ou decisão institucional seria necessário para permitir essa mudança?",
  "O que poderia ser testado ou preparado ao longo de 2027?",
  "Qual seria um sinal observável de avanço?"
];

export const CARTAS = {
  1: { eixo:"governanca", titulo:"Duas áreas, uma mesma questão", subtitulo:"Quando Contencioso e Consultivo enxergam partes diferentes do problema",
       origem:"Falta de visão sistêmica e sinergia entre as áreas da Procuradoria, especialmente entre Contencioso e Consultivo.",
       situacaoProblema:"Uma questão aparece para o Contencioso e o Consultivo, mas cada área recebe apenas uma parte da informação, trabalha com tempos distintos e formula respostas pelo menos parcialmente contraditórias.",
       tensao:"Especialização é necessária, mas não pode produzir uma atuação fragmentada da instituição.",
       pergunta:"Em que momento e por qual mecanismo diferentes áreas deveriam construir uma leitura comum?",
       perguntas: PERGUNTAS_CARTA_01 },

  2: { eixo:"governanca", titulo:"A gestão que precisa estar mais perto", subtitulo:"Quando a gestão é percebida como distância",
       origem:"Carência de uma estrutura de gestão valorizada que dê suporte à atividade finalística.",
       situacaoProblema:"Decisões de pessoas, recursos, processos e prioridades são tomadas sem que a atividade finalística reconheça claramente como o apoio pode ajudá-la.",
       tensao:"A gestão é indispensável, mas perde valor quando não traduz suas decisões em apoio percebido no cotidiano.",
       pergunta:"Que mudança aproximaria gestão e atividade finalística sem confundir papéis?",
       perguntas: PERGUNTAS_PADRAO },

  3: { eixo:"governanca", titulo:"A decisão que ninguém quer assumir", subtitulo:"Quando a cooperação dilui a responsabilidade",
       origem:"Falta de visão sistêmica e clareza sobre responsabilidades nos temas transversais.",
       situacaoProblema:"Em temas transversais, consultas, reuniões e validações podem se multiplicar sem clareza sobre quem decide, em que prazo e com quais critérios.",
       tensao:"Cooperação não pode significar ausência de decisão.",
       pergunta:"Que decisão precisa de autoridade clara, prazo e regra de escalonamento?",
       perguntas: PERGUNTAS_PADRAO },

  4: { eixo:"governanca", titulo:"A urgência que governa tudo", subtitulo:"Quando o imediato elimina o importante",
       origem:"Carência de uma estrutura de gestão valorizada e necessidade de maior convergência entre necessidades individuais e demandas institucionais.",
       situacaoProblema:"Demandas urgentes ocupam continuamente a agenda. Temas estratégicos são reconhecidos, mas não encontram tempo protegido, critério de prioridade ou responsável por sustentar sua continuidade.",
       tensao:"Responder ao urgente é inevitável; permitir que ele governe tudo é uma escolha.",
       pergunta:"Que critério e que governança permitiriam proteger o estratégico sem ignorar a urgência?",
       perguntas: PERGUNTAS_PADRAO },

  5: { eixo:"governanca", titulo:"A resposta correta que não produz entendimento", subtitulo:"Quando a qualidade técnica não basta",
       origem:"Atuação pouco propositiva e proativa da Procuradoria junto a seus interlocutores; necessidade de comunicação mais clara.",
       situacaoProblema:"Uma manifestação ou orientação pode estar tecnicamente correta, mas não ser compreendida por quem precisa decidir, executar ou dialogar com a Procuradoria. Isso gera novas consultas, ruído e perda de confiança.",
       tensao:"Comunicar bem não é simplificar o direito; é fazer com que a orientação produza compreensão e ação.",
       pergunta:"Como tornar a comunicação mais clara, útil e adequada a diferentes públicos sem perder rigor?",
       perguntas: PERGUNTAS_PADRAO },

  6: { eixo:"governanca", titulo:"Chegar antes do problema", subtitulo:"Quando a Procuradoria é chamada apenas no final",
       origem:"Atuação pouco propositiva e proativa da Procuradoria junto a seus interlocutores.",
       situacaoProblema:"A PGE participa quando o conflito já está instalado, a decisão já foi tomada ou a margem de escolha já diminuiu. O conhecimento jurídico existe, mas não chega ao momento em que poderia prevenir ou orientar.",
       tensao:"Atuar de forma propositiva exige sair da posição de resposta sem perder independência e rigor.",
       pergunta:"Que relação, canal ou capacidade permitiria à PGE antecipar problemas e, com isso, ampliar seu valor?",
       perguntas: PERGUNTAS_PADRAO },

  7: { eixo:"tecnologia", titulo:"A tecnologia que não acompanha o mar", subtitulo:"Quando a complexidade cresce mais rápido que as ferramentas",
       origem:"Baixa capacidade tecnológica da Procuradoria.",
       situacaoProblema:"As demandas se multiplicam, os ambientes digitais se tornam mais complexos e os Procuradores precisam combinar sistemas, planilhas e soluções improvisadas para concluir tarefas essenciais.",
       tensao:"Não basta digitalizar etapas: é preciso ampliar a capacidade real de trabalhar melhor.",
       pergunta:"Qual capacidade tecnológica faria diferença no dia a dia?",
       perguntas: PERGUNTAS_PADRAO },

  8: { eixo:"tecnologia", titulo:"A ferramenta que não muda o jeito de trabalhar", subtitulo:"Quando a inovação para na implantação",
       origem:"Baixa capacidade tecnológica da Procuradoria.",
       situacaoProblema:"Uma nova ferramenta ou solução é disponibilizada, mas a rotina permanece igual. As pessoas não sabem quando usar, não percebem valor ou não recebem tempo e apoio para incorporar a mudança.",
       tensao:"A tecnologia pode existir sem produzir transformação.",
       pergunta:"O que precisa acontecer para uma solução deixar de ser ferramenta disponível e virar prática institucional?",
       perguntas: PERGUNTAS_PADRAO },

  9: { eixo:"tecnologia", titulo:"A informação que chega depois da decisão", subtitulo:"Quando os dados estão espalhados",
       origem:"Baixa capacidade tecnológica da Procuradoria; falta de visão sistêmica e sinergia entre as áreas da Procuradoria.",
       situacaoProblema:"Informações relevantes estão em sistemas distintos, documentos dispersos ou na memória de pessoas específicas.",
       tensao:"Sem informação confiável e no tempo certo, a instituição reage em vez de antecipar.",
       pergunta:"Que integração de dados, processo ou responsabilidade faria a informação chegar antes?",
       perguntas: PERGUNTAS_PADRAO },

  10: { eixo:"processos", titulo:"O apoio que chega tarde", subtitulo:"Quando a estrutura não acompanha a atividade finalística",
        origem:"Ausência de uma estrutura de apoio eficiente para auxiliar os Procuradores.",
        situacaoProblema:"O Procurador enfrenta uma demanda complexa e precisa mobilizar sozinho informações, apoio técnico, administrativo ou institucional que deveriam estar disponíveis no momento certo. A solução depende de contatos pessoais, insistência e conhecimento informal de quem procurar.",
        tensao:"A atividade finalística exige concentração, mas o apoio institucional é fragmentado e imprevisível.",
        pergunta:"Como transformar apoio disperso em uma capacidade institucional acessível, responsiva e confiável?",
        perguntas: PERGUNTAS_PADRAO },

  11: { eixo:"processos", titulo:"O trabalho que ninguém enxerga", subtitulo:"Quando o esforço necessário não aparece no fluxo",
        origem:"Ausência de uma estrutura de apoio eficiente para auxiliar os Procuradores; falta de padronização e sistematização de procedimentos, rotinas e serviços.",
        situacaoProblema:"Triagens, buscas, alinhamentos, conferências, reconstruções de histórico e sucessivas validações consomem tempo, mas raramente são reconhecidos como parte do processo de trabalho.",
        tensao:"O que é invisível não é medido, priorizado nem redesenhado.",
        pergunta:"Que trabalho oculto precisamos tornar visível para reduzir desperdício e proteger a qualidade da entrega?",
        perguntas: PERGUNTAS_PADRAO },

  12: { eixo:"processos", titulo:"Cada um faz de um jeito", subtitulo:"Quando a autonomia produz desigualdade",
        origem:"Falta de padronização e sistematização de procedimentos, rotinas e serviços.",
        situacaoProblema:"Rotinas semelhantes são executadas com critérios, documentos, prazos e níveis de controle diferentes. O resultado depende mais da unidade ou da pessoa do que da necessidade do trabalho.",
        tensao:"Padronizar pode reduzir risco, mas padronizar demais pode sufocar a inteligência local.",
        pergunta:"O que precisa ser comum em toda a PGE-SP e onde a autonomia deve permanecer?",
        perguntas: PERGUNTAS_PADRAO },

  13: { eixo:"processos", titulo:"O conhecimento que vai embora pela porta", subtitulo:"Quando a memória institucional depende de pessoas",
        origem:"Falta de padronização e sistematização de procedimentos, rotinas e serviços; ausência de mecanismos de gestão do conhecimento.",
        situacaoProblema:"Uma solução funciona, um aprendizado é produzido, mas não é registrado ou compartilhado. Quando alguém muda de função ou se ausenta, a equipe precisa reconstruir o caminho.",
        tensao:"A experiência acumulada só vira patrimônio se puder ser encontrada e reutilizada.",
        pergunta:"Como transformar conhecimento disperso em memória viva, acessível e atualizada?",
        perguntas: PERGUNTAS_PADRAO },

  14: { eixo:"pessoas", titulo:"O pacto remoto que ainda não foi escrito", subtitulo:"Quando autonomia e disponibilidade se chocam",
        origem:"Falta de clareza e definição quanto ao modelo de trabalho remoto.",
        situacaoProblema:"No trabalho remoto, diferentes equipes adotam expectativas distintas sobre presença, entregas, comunicação, acompanhamento e colaboração. O resultado pode ser liberdade para uns e insegurança para outros.",
        tensao:"Autonomia sem pactos claros pode produzir assimetria, isolamento e desconfiança.",
        pergunta:"Que acordos mínimos tornariam o trabalho remoto mais claro, justo e produtivo?",
        perguntas: PERGUNTAS_PADRAO },

  15: { eixo:"pessoas", titulo:"O núcleo que precisa se reconhecer como equipe", subtitulo:"Quando a distância aumenta a necessidade de coordenação",
        origem:"Falta de clareza e definição quanto ao trabalho desterritorializado e à organização em núcleos.",
        situacaoProblema:"Núcleos e equipes desterritorializadas reúnem pessoas que trabalham em lugares diferentes, com vínculos e rotinas distintas. Sem ritos e responsabilidades claros, a autonomia pode virar fragmentação.",
        tensao:"A distância física exige mais clareza de propósito, comunicação e coordenação.",
        pergunta:"Que condições permitem que um núcleo distribuído funcione como equipe, e não apenas como soma de pessoas?",
        perguntas: PERGUNTAS_PADRAO },

  16: { eixo:"pessoas", titulo:"O acordo que não se sustenta", subtitulo:"Quando interesses individuais e coletivos se afastam",
        origem:"Necessidade de maior convergência entre os interesses individuais e coletivos entre Procuradores e com a Procuradoria.",
        situacaoProblema:"Uma mudança é institucionalmente desejável, mas seus custos, riscos ou efeitos são percebidos de maneira diferente por grupos e pessoas. Sem espaço de pactuação, a decisão formal não se converte em compromisso real.",
        tensao:"A convergência não nasce apenas de uma regra; depende de confiança, reconhecimento e participação.",
        pergunta:"Que pacto tornaria mais possível alinhar escolhas individuais e necessidades coletivas?",
        perguntas: PERGUNTAS_PADRAO },

  17: { eixo:"pessoas", titulo:"Pessoas demais e de menos", subtitulo:"Quando a distribuição não acompanha o trabalho real",
        origem:"Seleção e distribuição de pessoal realizada de forma desproporcional e ineficiente.",
        situacaoProblema:"A demanda, a complexidade e as competências disponíveis mudam, mas a distribuição de pessoas permanece baseada em arranjos históricos, informações incompletas ou soluções emergenciais.",
        tensao:"Alocar pessoas é também escolher quais capacidades a instituição conseguirá oferecer.",
        pergunta:"Que dados e critérios deveriam orientar uma distribuição mais justa e estratégica?",
        perguntas: PERGUNTAS_PADRAO },

  18: { eixo:"pessoas", titulo:"A carreira que precisa olhar para frente", subtitulo:"Quando o desenvolvimento não acompanha a transformação",
        origem:"Ausência de mecanismos de gestão de pessoas para organização, capacitação e atendimento de Procuradores e servidores.",
        situacaoProblema:"Novas tecnologias, novas formas de trabalho, problemas complexos e maior interação com governo e população exigem capacidades que nem sempre estão previstas nos percursos de desenvolvimento.",
        tensao:"A instituição pode ter pessoas experientes e, ainda assim, não estar preparando as competências de que precisará.",
        pergunta:"Que competências devem começar a ser desenvolvidas antes que se tornem urgentes?",
        perguntas: PERGUNTAS_PADRAO }
};
