---
layout: doc
title: Documento de Visão - Guris' Comedy Club
---


![Guris' Comedy Club](https://d3gf5wsgt7m4.cloudfront.net/FREE_LICENSE/WqW_Image_1.png)

# Documento de Visão

* **Nome do Projeto:** Sistema de Gestão Guris’ Comedy Club
* **Versão:** 4.8
* **Data:** 30/05/2026
* **Integrantes:** Guilherme Luis Schmitz Langenberg, João Vitor Boscatto Pierezan, Luis Henrique dos Santos, Pedro Carbonari Prestes.

---

## 1. Introdução

O Guris’ Comedy Club quer um sistema para organizar a parte administrativa e o dia a dia do estabelecimento. O clube tem clientes divididos em três grupos: Espectador Comum, Sócio VIP (Espectadores que pagam mensalidade) e Comediante. Cada pessoa tem um cadastro com nome, data de nascimento (para conferir a idade mínima), endereço, telefone, e-mail e um número de identificação.
Os Sócios VIP pagam uma mensalidade para ter vantagens, enquanto o público comum compra ingressos na hora. O sistema controla quem está com o pagamento em dia (ativo) e quem está devendo (inativo). Para facilitar, o sistema gera ingressos, aceita PIX, cartões e cuida de devoluções de dinheiro se um show for cancelado. Além disso, para manter a contabilidade em dia, o sistema emite e armazena o número da nota fiscal de todos os pagamentos realizados.
O clube tem vários lugares que podem ser reservados, como mesas na frente do palco e camarotes. O cliente escolhe o show, o horário e marca a mesa que quer no mapa do site. O sistema confere se o lugar está livre e confirma a reserva. Se precisar, o cliente pode cancelar ou trocar o ingresso, e o sistema avisa tudo por mensagem automática.
Além disso, o clube organiza shows de stand-up e gravações. Os administradores cadastram os shows colocando a data, a hora, o limite de pessoas, quem vai se apresentar e o preço. Os clientes compram pelo site e os funcionários conseguem tirar uma lista de quem vai e ver se a casa está lotada.
O sistema tem uma área só para o cliente, onde ele pode:
Ver o que já comprou e o que pagou.
Abrir o QR Code do ingresso e ver a mesa reservada.
Mudar o telefone ou endereço.
Pagar mensalidades atrasadas ou ingressos.
Acessar e baixar a nota fiscal das suas compras e mensalidades.
Os donos do clube também têm ferramentas para ver como o negócio está indo, com relatórios de:
Dinheiro que entrou com ingressos e mensalidades.
Quais mesas foram mais usadas e quais comediantes vendem mais.
Quantas pessoas reservaram e quantas realmente apareceram no show.
Para ser seguro e rápido, o sistema é ligado à portaria. A entrada é feita lendo o QR Code do ingresso no celular ou pela digital (biometria) dos sócios VIP. O sistema também controla quem pode entrar em cada lugar, separando o que é área do público e o que é o camarim dos artistas.


### 1.1 Objetivo
O objetivo deste projeto é desenvolver e implementar um sistema web e integrado que automatize os processos de cadastro de usuários (clientes e comediantes), vendas de ingressos e gestão de mensalidades de sócios VIP, controle de reservas de mesas/camarotes, emissão de relatórios gerenciais e controle de acesso biométrico/QR Code na portaria, visando reduzir falhas operacionais e melhorar a experiência do público após a implantação.

### 1.2 Escopo
Este projeto visa desenvolver o Sistema de Gestão Guris’ Comedy Club, que terá como finalidade centralizar e automatizar as operações diárias do clube de comédia. O sistema se destina aos clientes (espectadores comuns e sócios VIP), aos artistas (comediantes), aos funcionários da portaria/atendimento e aos administradores/donos do clube.

### 1.3 Definições, Acrônimos e Abreviações
* **Sócio VIP:** Cliente recorrente que paga uma mensalidade para obter vantagens exclusivas no clube.
* **Espectador Comum:** Cliente que compra ingressos de forma avulsa, sem vínculo de mensalidade.
* **QR Code:** Código de barras bidimensional utilizado para validação rápida de ingressos na entrada.
* **PIX:** Meio de pagamento instantâneo brasileiro.
* **SG-GCC:** Sistema de Gestão Guris’ Comedy Club.

### 1.4 Público-alvo
Este documento destina-se a todas as partes interessadas envolvidas no desenvolvimento, implementação e uso do software Sistema de Gestão Guris’ Comedy Club. Isso inclui membros da equipe de desenvolvimento, gerentes de projeto, clientes, usuários finais e outras partes interessadas relevantes.

---

## 2. Descrição do Projeto

### 2.1 Visão Geral do Projeto
O Guris’ Comedy Club necessita de uma plataforma que integre tanto a área pública (venda de ingressos, reservas de mesas pelo mapa do site e área do cliente) quanto a área administrativa (gerenciamento de shows, controle de adimplência de sócios, relatórios financeiros e integração com a portaria via QR Code e biometria). O sistema trará benefícios como automação de mensagens, maior segurança nas restrições de áreas (público vs. camarim) e dados consolidados para tomadas de decisão dos proprietários.

O objetivo deste documento é fornecer uma visão geral do projeto do Sistema de Gestão Guris’ Comedy Club. Ele descreve a finalidade do projeto, os principais stakeholders envolvidos, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema.

### 2.2 Stakeholders
* **Administradores / Donos do Clube:** Responsáveis por gerenciar o negócio, cadastrar shows, definir preços e analisar os relatórios financeiros e de desempenho.
* **Funcionários (Atendimento/Portaria):** Responsáveis por operar o sistema na entrada do evento, extrair listas de presença, conferir lotação e validar o acesso de clientes e comediantes.
* **Espectador Comum:** Cliente final que utiliza o sistema para comprar ingressos avulsos, reservar mesas, efetuar pagamentos e gerenciar seus dados na área do cliente.
* **Sócio VIP:** Cliente recorrente que utiliza o sistema para pagar mensalidades, reservar mesas com vantagens e acessar o clube via biometria ou QR Code.
* **Comediante:** Artista cadastrado no sistema associado aos shows e cujos dados de venda servem para alimentar os relatórios de desempenho da casa.
* **Equipe de Desenvolvimento:** Responsável por projetar, programar e testar o software.

---

## 3. Principais Recursos e Funcionalidades

### 3.1 Requisitos Funcionais (RF)
* **RF01 - Cadastro de Usuários:** O sistema deve permitir o cadastro de pessoas (Espectador Comum, Sócio VIP e Comediante), coletando Nome, Data de Nascimento, Endereço, Telefone, E-mail e Número de Identificação.
* **RF02 - Controle de Adimplência de Sócios VIP:** O sistema deve monitorar o status do pagamento das mensalidades dos Sócios VIP, classificando-os como "Ativo" (em dia) ou "Inativo" (devedor).
* **RF03 - Venda de Ingressos e Gestão de Pagamentos:** O sistema deve processar a venda de ingressos e mensalidades aceitando as modalidades PIX e Cartão.
* **RF04 - Emissão de Nota Fiscal:** O sistema deve emitir e armazenar o número da nota fiscal de todos os pagamentos realizados.
* **RF05 - Reserva de Lugares via Mapa:** O sistema deve disponibilizar um mapa interativo das mesas e camarotes para que o cliente escolha o show, horário e assento desejado, validando se o local está livre.
* **RF06 - Cancelamento, Troca e Reembolso:** O sistema deve permitir o cancelamento ou troca de ingressos pelo cliente, bem como automatizar a devolução do dinheiro caso um show seja cancelado, enviando uma notificação automática.
* **RF07 - Cadastro de Eventos (Shows/Gravações):** O sistema deve permitir que administradores cadastrem shows inserindo data, hora, limite de público, comediante(s) e preço.
* **RF08 - Área do Cliente:** O sistema deve disponibilizar um painel onde o cliente pode visualizar seu histórico de compras, abrir o QR Code do ingresso, alterar dados cadastrais (telefone/endereço), pagar débitos e baixar notas fiscais.
* **RF09 - Módulo de Relatórios Gerenciais:** O sistema deve gerar relatórios sobre: faturamento (ingressos e mensalidades), ocupação de mesas, comediantes que mais vendem e taxa de comparecimento (No-show).
* **RF10 - Controle de Acesso na Portaria:** O sistema deve validar a entrada do público por meio da leitura de QR Code ou por biometria (exclusivo para Sócios VIP).
* **RF11 - Controle de Permissão de Áreas:** O sistema deve gerenciar e restringir o acesso físico/lógico diferenciando a Área do Público e o Camarim dos Artistas.

### 3.2 Requisitos Não Funcionais (RNF)
* **RNF01 - Segurança :** O sistema deve validar a data de nascimento no cadastro para garantir que o cliente possui a idade mínima permitida pelo estabelecimento e o sistema deve garantir a proteção de dados dos sócios por meio de autenticação segura, bem como seguir as normas da LGPD(Lei Geral de Proteção de Dados), criptografia de dados sensíveis e controle de acesso baseado em perfis (Sócio e administrador).
* **RNF02 - Desempenho / Tempo de Resposta:** A validação do QR Code ou biometria na portaria deve ocorrer em tempo real (tempo de resposta inferior a 2 segundos) para evitar filas.
* **RNF03 - Compatibilidade (Dispositivos Móveis):** O mapa de assentos e a área do cliente (exibição de QR Code) devem ser responsivos, funcionando perfeitamente em smartphones.
* **RNF04 - Disponibilidade:** O site para compra de ingressos e reserva de mesas deve estar disponível 24 horas por dia, 7 dias por semana.

---

## 4. Diagrama de Caso de Uso

### 4.1 Descrição de Caso de Uso


[Acessar o Diagrama de Classes](https://app.diagrams.net/#G1CgMqT4UGFpvdx0XUvF17QpHUdkYI0UkT#%7B%22pageId%22%3A%22OWyEm38nAWpxvRS8QmXi%22%7D)

#### Caso de Uso 01: Reservar Mesa pelo Mapa do Site
* **Ator Principal:** Cliente (Espectador Comum ou Sócio VIP).
* **Pré-condições:** O cliente deve estar autenticado no sistema. O show pretendido deve estar cadastrado e com vagas disponíveis.
* **Fluxo Principal:**
  1. O cliente acessa a listagem de shows e seleciona o evento e horário desejados.
  2. O sistema exibe o mapa de assentos do clube (mesas da frente e camarotes), diferenciando os lugares livres dos ocupados.
  3. O cliente clica sobre a mesa/camarote desejado livre.
  4. O sistema valida que o assento continua livre e solicita a confirmação.
  5. O cliente confirma a reserva e avança para a tela de pagamento.
  6. Após a confirmação do pagamento, o sistema gera o ingresso com o QR Code e confirma a reserva da mesa.
* **Fluxo Alternativo (Lugar Ocupado):** No passo 3, se o cliente tentar selecionar uma mesa já reservada, o sistema impede a seleção e emite um alerta orientando o cliente a escolher outro assento.

#### Caso de Uso 02: Validar Entrada na Portaria
* **Ator Principal:** Funcionário da Portaria / Sistema de Controle de Acesso.
* **Ator Secundário:** Cliente.
* **Pré-condições:** O cliente deve possuir um ingresso válido (QR Code) ou cadastro ativo de Sócio VIP (Biometria).
* **Fluxo Principal (Via QR Code):**
  1. O cliente apresenta o QR Code do ingresso em seu smartphone na portaria.
  2. O funcionário realiza a leitura do QR Code através do leitor integrado ao sistema.
  3. O sistema valida o código, verifica se o ingresso pertence ao show daquela data/horário e se ainda não foi utilizado.
  4. O sistema exibe a mensagem "Acesso Permitido" e indica a mesa reservada do cliente.
  5. O sistema registra a presença do cliente para o relatório de comparecimento.
* **Fluxo Alternativo (Sócio VIP via Biometria):** No passo 1, o Sócio VIP insere sua digital no leitor biométrico. O sistema busca o cadastro, verifica se a mensalidade está "Ativa", exibe "Acesso Permitido" e registra a entrada.
* **Fluxo de Exceção (Ingresso Inválido/Mensalidade Atrasada):** Se o QR Code já tiver sido usado ou se o Sócio VIP constar como "Inativo", o sistema exibe "Acesso Negado", detalhando o motivo (ex: mensalidade atrasada) para que o funcionário tome as providências.

---

## 5. Diagrama de Caso de Uso

[Acessar o Diagrama de Caso de Uso](https://app.diagrams.net/#G1ozGlITNWDb8Tm11aC3IAst74ndpEKll1#%7B%22pageId%22%3A%22B2ubYMIL8hGskjKbpCVO%22%7D)

---

## 6. Protótipos de Telas
[Acessar o Figma do Comedy Club](https://www.figma.com/design/vQwvF9M91bJy4x4s4AAY7G/COMEDY-CLUB?m=auto&t=UmlbchN1DsROyf9B-1)

---

## 7. Cronograma e Entrega

**Fase 1: Levantamento, Análise e Design do Sistema (Semanas 1 a 3)**
* Modelagem do banco de dados (Cadastro de usuários, controle de assentos/mapa e notas fiscais).
* Arquitetura de segurança e permissões de acesso cliente, funcionario e cliente VIP.
* Design de interface home, ingressos, calendário.

**Fase 2: Desenvolvimento do principal e Área do Cliente (Semanas 4 a 8)**
* Módulo de cadastro e login diferenciado (Espectador, Sócio VIP, Comediante).
* Desenvolvimento da Área do Cliente (Alteração de dados, histórico de compras e visualização de QR Code).
* Implementação do Mapa de Assentos interativo (Mesas e camarotes).

**Fase 3: Integrações Financeiras, Notificações e Faturamento (Semanas 9 a 11)**
* Integração com gateways de pagamento (PIX e Cartões) para ingressos e mensalidades dos Sócios VIP.
* Desenvolvimento do motor de reembolsos/devoluções por cancelamento de shows.
* Integração com o sistema de Nota Fiscal (Geração, armazenamento e download).
* Configuração do sistema de mensagens automáticas (Confirmação, cancelamento e troca de ingressos).

**Fase 4: Painel Administrativo, Relatórios e Integração com Portaria (Semanas 12 a 14)**
* Desenvolvimento do painel do administrador (Cadastro de shows, horários, limites e preços).
* Módulo de listagem de presença e controle de lotação para os funcionários.
* Criação dos relatórios gerenciais (Faturamento, mesas mais usadas, engajamento de comediantes e taxa de comparecimento).
* Integração de software com o hardware da portaria (Leitor de QR Code e leitor biométrico para VIPs).

**Fase 5: Homologação, Ajustes e Implantação (Semanas 15 a 16)**
* Testes de carga (Simular o site lotado no momento de abertura de vendas de um show grande).
* Testes de segurança física e digital (Controle de acesso às áreas restritas/camarins).

---

## 8. Riscos e Mitigação

| ID | Risco Identificado | Nível (Probabilidade / Impacto) | Estratégia de Mitigação (Ações Preventivas e Contingência) |
|---|---|---|---|
| **R01** | **Falha na integração com hardware da portaria:** Dificuldade técnica na leitura de biometria (VIPs) ou QR Code no momento do show, gerando filas. | Médio / Alto | **Preventiva:** Antecipar testes de comunicação do software com o hardware ainda nas fases iniciais.<br>**Contingência:** Desenvolver um módulo de "Baixa Manual" onde o funcionário da portaria possa liberar a entrada digitando o CPF ou localizando o nome do cliente no sistema. |
| **R02** | **Indisponibilidade do sistema por pico de acessos:** O site pode cair devido ao alto tráfego simultâneo quando as vendas para um show muito esperado forem abertas. | Médio / Alto | **Preventiva:** Utilizar infraestrutura de hospedagem em nuvem com autoescalonamento (auto-scaling). Realizar os testes de carga previstos na Fase 5 simulando múltiplos acessos. |
| **R03** | **Atraso no cronograma de desenvolvimento:** Complexidade maior do que a esperada na Fase 3 (Integração com PIX, Cartão e emissão de Nota Fiscal), atrasando as entregas. | Alto / Médio | **Preventiva:** Utilizar metodologias ágeis com acompanhamento semanal da equipe. Focar na entrega do Produto Mínimo Viável (MVP), priorizando o funcionamento do núcleo do sistema (venda e controle de entrada). |
| **R04** | **Instabilidade na API de Pagamentos/Notas Fiscais:** O gateway de pagamento (banco) ou o sistema da prefeitura/estado (para NF) ficarem fora do ar no momento da compra do cliente. | Alto / Médio | **Contingência:** Implementar rotinas assíncronas no sistema. Se a NF não puder ser gerada na hora, o sistema aprova a compra e coloca a emissão da NF em uma "fila" para ser gerada e enviada por e-mail assim que a API externa voltar. |
| **R05** | **Vulnerabilidade de Dados (LGPD):** Vazamento de dados pessoais de clientes (endereço, telefone, e-mail) ou manipulação indevida de dados financeiros. | Baixo / Alto | **Preventiva:** Implementar criptografia de dados sensíveis no banco de dados, utilizar senhas com hash seguro e aplicar um controle rigoroso de níveis de acesso. |
| **R06** | **Conflito no mapa de reservas de assentos (Double Booking):** Dois clientes tentarem reservar a mesma mesa no exato mesmo segundo, causando venda duplicada. | Médio / Alto | **Preventiva:** Implementar bloqueio pessimista ou otimista no banco de dados: assim que o primeiro cliente clicar na mesa, ela muda para o status "Em negociação" por 10 minutos, ficando bloqueada até a aprovação do pagamento. |

---

## 9. Custos e Orçamento

Abaixo consta a estimativa inicial dos custos previstos para o desenvolvimento e manutenção do projeto durante o ciclo de 16 semanas:

### 9.1 Custos de Desenvolvimento (Simulado/Equipe)
* Equipe técnica (4 desenvolvedores dedicados part-time durante 4 meses): R$ 24.000,00

### 9.2 Custos de Infraestrutura e Serviços Terceirizados (Mensais/Anuais)
* Servidor Cloud e Banco de Dados (Ambiente de homologação e produção): R$ 250,00 / mês
* API de Emissão de Notas Fiscais Eletrônicas e Gateway de Pagamentos: R$ 180,00 / mês
* Serviço de Disparo de Mensagens Automáticas (Notificações): R$ 70,00 / mês

### 9.3 Custos de Hardware (Aquisição Única para o Estabelecimento)
* 02 Leitores Biométricos USB de mesa para portaria: R$ 600,00
* 02 Leitores de QR Code / Código de Barras bidimensional: R$ 500,00

**Custo Total Estimado Inicial de Implantação:** R$ 26.800,00

---

## 10. Considerações Finais

Este documento de visão fornece uma visão geral do projeto do Sistema de Gestão Guris’ Comedy Club. Ele descreve a finalidade, os principais stakeholders, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema. Ao centralizar as operações, integrando desde o mapa de reservas online até o hardware físico na portaria e relatórios de métricas, o sistema valida-se como uma solução robusta para sanar os gargalos administrativos do clube de comédia. Este documento servirá como base definitiva para o desenvolvimento do projeto, auxiliando na compreensão, alinhamento e tomadas de decisão de todas as partes interessadas envolvidas.
---
next: false
---
