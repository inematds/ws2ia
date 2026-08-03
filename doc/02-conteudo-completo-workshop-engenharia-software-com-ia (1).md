# Workshop Avançado de Engenharia de Software com IA

## Conteúdo completo

A inteligência artificial já não está limitada à geração de pequenos trechos de código. As ferramentas atuais conseguem analisar repositórios, criar arquivos, executar comandos, modificar sistemas, rodar testes, investigar falhas e revisar alterações.

Essa evolução muda profundamente a engenharia de software.

O desafio principal já não é fazer a IA escrever código. O desafio é fazer a IA produzir mudanças corretas, seguras, verificáveis e coerentes com a arquitetura do sistema.

O novo modelo de desenvolvimento exige que os profissionais saibam estruturar especificações, ambientes, regras, testes, loops de execução, mecanismos de revisão e critérios de qualidade.

A IA aumenta a velocidade de produção. Sem controle, ela também pode aumentar a velocidade dos erros, da dívida técnica e da complexidade.

---

# Parte 1 — Onde realmente está a IA na engenharia de software

A evolução do uso de IA no desenvolvimento pode ser observada em três grandes fases.

## Fase 1 — Autocomplete

A IA sugere linhas, funções ou pequenos trechos de código enquanto o programador trabalha.

Nesse estágio, o humano continua responsável por quase todas as decisões.

## Fase 2 — Assistente

A IA responde perguntas, explica código, cria funções, gera arquivos e ajuda a resolver problemas.

Ela já participa ativamente da implementação, mas ainda depende de instruções frequentes.

## Fase 3 — Agente

O agente recebe uma tarefa, explora o repositório, lê documentação, modifica arquivos, executa comandos, roda testes, analisa erros e tenta corrigir a própria implementação.

Essa fase exige um novo tipo de engenharia.

Um agente precisa de:

- acesso controlado ao repositório;
- contexto;
- documentação;
- ferramentas;
- ambiente de execução;
- memória;
- estado;
- permissões;
- regras;
- testes;
- critérios de conclusão;
- mecanismos de interrupção;
- registros das ações realizadas.

O agente não deve ser tratado apenas como um chatbot. Ele deve ser tratado como um componente operacional dentro de um sistema controlado.

---

# Parte 2 — Por que os fundamentos voltaram a importar

A IA consegue gerar código rapidamente, mas não substitui o conhecimento de engenharia.

Sem fundamentos, o profissional pode não perceber:

- problemas de concorrência;
- falhas de segurança;
- erros de modelagem;
- inconsistências no banco de dados;
- dependências frágeis;
- problemas de desempenho;
- incompatibilidades;
- falhas de arquitetura;
- impactos em outros sistemas;
- comportamentos não documentados.

Quanto mais código a IA produz, mais importante se torna a capacidade de avaliar o resultado.

O profissional que domina arquitetura, testes, sistemas operacionais, redes, APIs, segurança, bancos de dados e infraestrutura consegue utilizar a IA com muito mais eficiência.

O conhecimento durável não está em decorar uma ferramenta. Está em compreender como sistemas funcionam.

---

# Parte 3 — Spec-Driven Development

Spec-Driven Development significa desenvolvimento orientado por especificações.

O fluxo básico é:

```text
Intenção
→ especificação estruturada
→ plano
→ implementação
→ testes
→ verificação
```

Uma especificação não deve ser apenas um texto genérico. Ela precisa reduzir ambiguidades e transformar a intenção em critérios verificáveis.

## Elementos de uma boa especificação

### Problema

Qual problema precisa ser resolvido?

### Objetivo

Qual resultado deve ser alcançado?

### Escopo

O que faz parte da tarefa?

### Fora do escopo

O que não deve ser alterado?

### Entradas

Quais dados ou eventos entram no sistema?

### Saídas

Quais resultados o sistema deve produzir?

### Contratos

Quais interfaces, formatos e comportamentos devem ser preservados?

### Condições de erro

O que deve acontecer quando algo falhar?

### Restrições

Quais tecnologias, padrões, limites e regras devem ser respeitados?

### Critérios de aceitação

Como será possível verificar que a tarefa foi concluída corretamente?

### Testes

Quais testes precisam ser criados ou executados?

### Definição de pronto

Quais condições precisam ser atendidas para considerar o trabalho concluído?

## Exemplo de especificação ruim

```text
Crie um sistema de pagamentos.
```

Esse pedido deixa muitas decisões abertas.

## Exemplo de especificação mais completa

```text
Criar um serviço de pagamentos que:

- aceite PIX e cartão;
- impeça duplicidade por chave de idempotência;
- registre todos os estados da transação;
- processe webhooks;
- realize retentativas;
- gere logs estruturados;
- preserve compatibilidade com a API atual;
- não armazene dados sensíveis de cartão;
- inclua testes unitários e de integração;
- tenha rollback para migrações;
- bloqueie o merge se os testes falharem.
```

Quanto melhor a especificação, menor a chance de o agente tomar decisões incompatíveis com o sistema.

---

# Parte 4 — Harness Engineering

Harness Engineering é a engenharia da estrutura que envolve o modelo de IA.

O modelo é apenas uma parte do sistema.

O harness define:

- o que o agente consegue ver;
- quais ferramentas ele pode usar;
- quais ações ele pode executar;
- quais regras deve seguir;
- como o contexto é selecionado;
- como o estado é preservado;
- como os resultados são verificados;
- quando a execução deve parar;
- quais ações exigem aprovação.

## Componentes de um harness

### Instruções

Regras gerais do projeto e do agente.

### Contexto

Arquivos, documentos, exemplos e informações relevantes para a tarefa.

### Ferramentas

Terminal, editor, busca, testes, banco de dados, APIs e outros recursos.

### Permissões

Definição do que pode ser lido, alterado, executado ou publicado.

### Sandbox

Ambiente isolado para execução segura.

### Memória

Informações persistentes ou temporárias utilizadas durante a tarefa.

### Estado

Registro do ponto atual do trabalho.

### Observabilidade

Logs, métricas e histórico das ações realizadas.

### Verificadores

Testes e validações que avaliam a qualidade do resultado.

### Limites

Tempo, custo, número de tentativas, arquivos modificados e ações permitidas.

### Aprovação humana

Intervenção obrigatória em ações críticas.

## Fluxo de um harness

```text
Pedido
→ leitura da especificação
→ seleção de contexto
→ criação do plano
→ execução em ambiente isolado
→ testes
→ revisão
→ quality gates
→ aprovação
→ entrega
```

O diferencial não está somente no prompt. Está no sistema criado ao redor do agente.

---

# Parte 5 — Loop Engineering

Loop Engineering é o desenho de ciclos de execução e correção.

Um agente normalmente trabalha em um ciclo:

```text
Observar
→ entender
→ planejar
→ executar
→ testar
→ avaliar
→ corrigir
→ repetir
```

## Elementos de um bom loop

### Objetivo verificável

O agente precisa saber o que deve alcançar.

### Estado persistente

O sistema deve registrar o que já foi feito.

### Condição de parada

O loop precisa saber quando encerrar.

### Limite de tentativas

Evita que o agente fique repetindo a mesma ação.

### Limite de custo

Controla consumo de tokens, tempo e recursos.

### Tratamento de falhas

Define como agir quando uma etapa falha.

### Rollback

Permite voltar ao estado anterior.

### Fallback

Define uma alternativa quando o caminho principal não funciona.

### Aprovação humana

Interrompe o loop antes de ações críticas.

## Exemplo de loop de correção

```text
Ler a issue
→ reproduzir o erro
→ localizar a causa
→ criar um teste que falha
→ implementar a menor correção
→ executar os testes
→ revisar o diff
→ aprovar ou corrigir novamente
```

Loop Engineering não significa simplesmente mandar a IA continuar até funcionar.

Significa criar uma sequência controlada, mensurável e verificável.

---

# Parte 6 — Automações

As automações conectam os agentes aos acontecimentos reais do processo de engenharia.

## Exemplos

- uma issue aprovada aciona um agente;
- uma falha de CI inicia uma investigação;
- uma dependência vulnerável gera uma proposta de atualização;
- um pull request aciona revisão automática;
- uma queda de cobertura bloqueia o merge;
- uma alteração de API atualiza documentação;
- um incidente gera diagnóstico inicial;
- um erro em produção inicia um processo de reprodução.

## Fluxo básico

```text
Evento
→ classificação
→ seleção do agente
→ execução
→ validação
→ decisão
→ entrega
```

Nem toda tarefa deve ser totalmente autônoma.

Mudanças em produção, banco de dados, infraestrutura, permissões e segurança precisam de controles adicionais.

---

# Parte 7 — Code Review com IA

A revisão de código com IA pode analisar mais do que apenas o diff.

Um agente revisor pode:

- explorar arquivos relacionados;
- verificar contratos;
- analisar testes;
- encontrar duplicações;
- identificar riscos;
- comparar com padrões do repositório;
- revisar arquitetura;
- procurar falhas de segurança;
- avaliar desempenho;
- verificar compatibilidade.

## Fluxo recomendado

```text
Agente implementador
→ testes determinísticos
→ agente revisor independente
→ análise de segurança
→ quality gates
→ revisão humana
```

O agente que revisa não deve depender totalmente das conclusões do agente que implementou.

A separação reduz o risco de ambos repetirem a mesma suposição incorreta.

## Pontos que o code review deve avaliar

- legibilidade;
- simplicidade;
- aderência ao escopo;
- segurança;
- desempenho;
- cobertura de testes;
- compatibilidade;
- consistência arquitetural;
- tratamento de erros;
- impacto operacional;
- manutenção futura.

---

# Parte 8 — Quality Gates

Quality Gates são condições obrigatórias antes de uma mudança avançar.

## Exemplos

- build concluído;
- lint aprovado;
- testes unitários aprovados;
- testes de integração aprovados;
- testes de contrato aprovados;
- cobertura mínima alcançada;
- nenhuma vulnerabilidade crítica;
- nenhum segredo exposto;
- contratos preservados;
- migrações reversíveis;
- desempenho dentro do limite;
- revisão concluída;
- aprovação humana.

## Princípio fundamental

Uma regra escrita em texto é útil.

Uma regra transformada em teste automático é muito mais confiável.

## Exemplo de pipeline

```text
Build
→ lint
→ testes
→ cobertura
→ análise estática
→ segurança
→ revisão
→ aprovação
→ deploy
```

O código só avança quando todos os gates obrigatórios são atendidos.

---

# Parte 9 — Modernização segura de sistemas legados

A IA pode ajudar muito na modernização de sistemas antigos.

Ela pode:

- mapear dependências;
- explicar código;
- identificar regras de negócio;
- gerar testes de caracterização;
- documentar interfaces;
- encontrar código morto;
- criar adaptadores;
- converter módulos isolados;
- ampliar cobertura;
- comparar comportamento antigo e novo.

Mas reescrever um sistema inteiro de uma vez é arriscado.

## Riscos do legado

- regras não documentadas;
- integrações ocultas;
- comportamentos usados por outros sistemas;
- dependências antigas;
- conhecimento concentrado em poucas pessoas;
- exceções históricas;
- requisitos regulatórios;
- processos operacionais manuais.

## Processo recomendado

```text
Inventário
→ mapa de dependências
→ testes de caracterização
→ identificação de fronteiras
→ alteração pequena
→ execução paralela
→ comparação
→ migração gradual
```

A IA deve reduzir o risco, não ampliar o risco.

---

# Parte 10 — Arquitetura legível para agentes

Um sistema precisa ser compreensível também para agentes.

Isso exige:

- estrutura previsível;
- módulos bem definidos;
- contratos explícitos;
- nomes consistentes;
- documentação próxima ao código;
- testes rápidos;
- comandos padronizados;
- exemplos;
- instruções versionadas;
- poucas fontes conflitantes de verdade.

## Exemplo de estrutura

```text
/docs
  arquitetura.md
  dominios.md
  decisoes/
  playbooks/

/specs
  pagamentos/
  usuarios/

/skills
  criar-migracao/
  revisar-api/
  corrigir-bug/

/scripts
  validate.sh
  test-changed.sh

AGENTS.md
README.md
```

## AGENTS.md

O arquivo pode conter:

- visão geral do sistema;
- comandos principais;
- regras do projeto;
- localização da documentação;
- limitações;
- critérios de qualidade;
- ações proibidas;
- referências para skills e playbooks.

Ele não deve concentrar todo o conhecimento do projeto. Deve funcionar como um mapa.

---

# Parte 11 — Como evitar overengineering

A IA tende a produzir soluções aparentemente completas, mesmo quando uma solução menor seria suficiente.

Ela pode criar:

- abstrações prematuras;
- camadas desnecessárias;
- interfaces redundantes;
- frameworks internos;
- muitos arquivos;
- configurações excessivas;
- dependências desnecessárias;
- tratamentos de casos hipotéticos;
- padrões aplicados sem necessidade.

## Controles recomendados

- implementar a menor mudança possível;
- preservar a estrutura existente;
- justificar novos componentes;
- proibir dependências sem aprovação;
- limitar o número de arquivos alterados;
- comparar solução simples e solução extensível;
- remover código não utilizado;
- avaliar custo de manutenção;
- evitar refatorações fora do escopo.

## Regra prática

```text
Implemente a menor alteração que satisfaça os critérios de aceitação.
Não crie novas abstrações, dependências ou camadas sem necessidade comprovada.
```

---

# Parte 12 — Dívida técnica produzida por IA

A IA pode aumentar muito o volume de código produzido.

Mesmo que a taxa de erro por linha permaneça igual, o número total de problemas pode crescer.

## Formas de dívida técnica

- duplicação semântica;
- inconsistência entre módulos;
- dependências desnecessárias;
- testes limitados ao caminho feliz;
- documentação desatualizada;
- código fora dos padrões;
- tratamento incompleto de erros;
- violações arquiteturais;
- complexidade excessiva;
- problemas de segurança;
- soluções que passam nos testes, mas violam a intenção.

## Controle da dívida

- revisão contínua;
- análise de arquitetura;
- métricas de complexidade;
- limites de tamanho de mudança;
- refatorações pequenas;
- testes de regressão;
- documentação versionada;
- remoção de código morto;
- quality gates;
- revisão independente.

---

# Parte 13 — Playbooks

Playbooks são procedimentos reutilizáveis para tarefas recorrentes.

## Playbook de nova funcionalidade

```text
Ler a especificação
→ confirmar escopo
→ mapear impacto
→ criar plano
→ implementar mudança mínima
→ criar testes
→ executar quality gates
→ revisar
→ documentar
→ preparar pull request
```

## Playbook de correção de bug

```text
Reproduzir o erro
→ registrar evidência
→ identificar causa
→ criar teste que falha
→ implementar correção
→ executar regressão
→ revisar impacto
→ documentar
```

## Playbook de modernização

```text
Mapear dependências
→ criar testes de caracterização
→ definir fronteira
→ criar adaptador
→ migrar pequeno módulo
→ executar em paralelo
→ comparar resultados
→ liberar gradualmente
```

## Playbook de incidente

```text
Coletar logs
→ classificar gravidade
→ preservar evidências
→ identificar causa provável
→ criar mitigação
→ validar
→ aplicar correção
→ registrar aprendizado
```

---

# Parte 14 — Skills

Skills são capacidades reutilizáveis que orientam o agente em tarefas específicas.

## Exemplos de skills

- analisar repositório;
- gerar especificação;
- criar plano de implementação;
- reproduzir bug;
- gerar testes;
- implementar mudança mínima;
- revisar arquitetura;
- revisar segurança;
- atualizar documentação;
- preparar pull request;
- modernizar módulo legado;
- analisar incidente;
- verificar banco de dados;
- validar deploy.

## Estrutura de uma skill

Uma skill pode definir:

- objetivo;
- quando usar;
- entradas;
- ferramentas;
- etapas;
- critérios de aceitação;
- ações proibidas;
- tratamento de falhas;
- formato da saída;
- verificações obrigatórias.

---

# Parte 15 — Rules

Rules são regras permanentes ou condicionais que limitam o comportamento dos agentes.

## Exemplos

- nunca alterar testes para esconder uma falha;
- nunca inserir segredos no repositório;
- não adicionar dependência sem justificar;
- preservar APIs públicas;
- não executar deploy sem aprovação;
- não modificar banco de produção diretamente;
- não remover logs de segurança;
- produzir evidência dos testes;
- limitar o número de tentativas;
- parar quando o custo ultrapassar o limite;
- pedir aprovação antes de ações destrutivas;
- não realizar refatoração fora do escopo.

Rules reduzem decisões arbitrárias.

---

# Parte 16 — Governança

Governança é o conjunto de controles que define como a IA pode operar dentro da empresa.

## Elementos de governança

- identidade do agente;
- permissões;
- responsabilidades;
- auditoria;
- logs;
- controle de custos;
- ambientes permitidos;
- dados acessíveis;
- ações proibidas;
- aprovação humana;
- política de segurança;
- retenção de informações;
- tratamento de incidentes.

## Níveis de autonomia

### Nível 1 — Assistência

A IA apenas sugere.

### Nível 2 — Execução supervisionada

A IA executa, mas cada ação importante precisa ser aprovada.

### Nível 3 — Execução controlada

A IA executa tarefas delimitadas e passa por quality gates.

### Nível 4 — Autonomia operacional limitada

A IA executa fluxos completos dentro de regras e ambientes específicos.

### Nível 5 — Autonomia crítica

Não deve ser adotada sem controles extremamente rigorosos.

---

# Parte 17 — Modelo completo de desenvolvimento AI First

```text
1. Receber a demanda
2. Classificar a tarefa
3. Criar ou revisar a especificação
4. Mapear o impacto
5. Selecionar a skill
6. Configurar o contexto
7. Criar o plano
8. Executar em ambiente isolado
9. Rodar testes
10. Aplicar quality gates
11. Realizar revisão independente
12. Solicitar aprovação humana
13. Entregar
14. Monitorar
15. Registrar aprendizado
```

Esse modelo permite utilizar IA de forma produtiva sem transformar o desenvolvimento em uma caixa-preta.

---

# Parte 18 — Projeto prático do workshop

O projeto final pode reunir todos os conceitos.

## Etapa 1 — Escolha do problema

Selecionar uma funcionalidade, bug ou módulo legado.

## Etapa 2 — Especificação

Criar uma especificação completa.

## Etapa 3 — Harness

Definir ferramentas, contexto, permissões e limites.

## Etapa 4 — Loop

Criar o ciclo de execução, teste e correção.

## Etapa 5 — Implementação

Executar a menor mudança possível.

## Etapa 6 — Quality Gates

Aplicar build, lint, testes, segurança e revisão.

## Etapa 7 — Revisão independente

Utilizar outro agente ou processo para revisar a alteração.

## Etapa 8 — Entrega

Preparar o pull request e as evidências.

---

# Conclusão

A engenharia de software com IA não elimina a engenharia tradicional.

Ela aumenta a importância dos fundamentos.

Os modelos e ferramentas mudarão rapidamente. O conhecimento durável está em saber:

- especificar;
- estruturar contexto;
- criar harnesses;
- desenhar loops;
- automatizar;
- testar;
- revisar;
- controlar arquitetura;
- limitar autonomia;
- modernizar com segurança;
- aplicar governança;
- transformar regras em verificações executáveis.

O profissional mais valioso não será apenas aquele que sabe pedir código à IA.

Será aquele que sabe construir o sistema no qual a IA pode trabalhar com segurança, qualidade, velocidade e controle.
