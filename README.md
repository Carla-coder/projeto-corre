# Projeto Corre!

**Projeto-Corre!** é um aplicativo simples e interativo, desenvolvido como uma adaptação criativa do sistema do **LEKA - Aprenda Jogando!**, o aplicativo que será apresentado em meu TCC. Nesta versão, a ideia foi reaproveitar o logotipo, os ícones e o conceito do LEKA para criar um app gamificado, que motiva os usuários a completar tarefas de forma divertida. Com animações e uma navegação prática, o Projeto-Corre! serve como uma demonstração de habilidades em desenvolvimento mobile, utilizando React Native e Expo.

## Etapas para criar este aplicativo:

### Configuração do Projeto:

Iniciei o projeto React Native utilizando yarn e expo (ou CLI React Native).

Estruturei o projeto com componentes para cada decisão do fluxograma sugerido.

![Diagrama Corre](https://github.com/user-attachments/assets/d62305de-5d33-4a27-950d-4c74bff17fdf)

### Tela Inicial:

- Exibe o "Início" e pergunta: "Terminou?"

- Botões para "Sim" e "Não".

### Fluxo de Decisões:

Baseado no fluxograma, implementei os passos seguintes:

- Se "Não", mostre "CORRE".

- Se "Sim", pergunte: "Fez mobile?"

- Continuei o fluxo com verificações para "Fez documentação?" e "Fez apresentação?".

- Cada decisão leva a uma nova tela ou mensagem.

### Feedback Visual:

- Mostra mensages como "CORRE!" de forma divertida.

- Exibe "Fim" quando o fluxo termina.

### Estilo:

Usei estilos simples para interface clara, com botões grandes e textos visíveis, além de ícones .gif e .png para deixar as telas mais interativas.

### Estrutura de Pastas

```bash
projeto-corre/
├── App.js                # Arquivo principal do aplicativo
├── assets/               # Pasta para armazenar imagens e animações
│   ├── conclui.gif       # Gif para a tela de perguntas concluídas
│   ├── logo.png          # Logotipo exibido na tela inicial
│   ├── opcao.gif         # Gif exibido na tela final
│   ├── tempo-2.gif       # Gif animado para a tela "Corre!"
├── node_modules/         # Dependências instaladas pelo gerenciador de pacotes
├── package.json          # Configurações e dependências do projeto
├── screens/              # Pasta contendo os componentes das telas do app
│   ├── Inicio.js         # Tela inicial do aplicativo
│   ├── Pergunta.js       # Tela de perguntas e navegação
│   ├── Fim.js            # Tela final de congratulações
│   ├── Corre.js          # Tela exibida quando a resposta é "Não"
│   ├── Sair.js           # Tela para confirmação de saída do sistema
└── yarn.lock             # Arquivo de bloqueio das dependências gerenciadas pelo Yarn
```
## Como rodar o projeto

1. Clone este repositório em sua máquina local.

- Abra com VSCode.

2. Certifique-se de ter o Yarn instalado globalmente:

```bash
  npm install --global yarn
```
3. Crie o projeto com o comando:

```bash
  npx create-expo-app projeto-corre --template blank
```

4. Entre no diretório do projeto:

```bash
  cd projeto-corre
```

5. Instale as dependências:

```bash
  yarn add @react-navigation/native 
  react-native-screens 
  react-native-safe-area-context 
  react-native-gesture-handler 
  react-native-reanimated 
  react-native-vector-icons
  yarn add @react-navigation/stack
```
6. Se der erro digite o comando:

```bash
   npx expo install react-native-web react-dom @expo/metro-runtime
```

7. Inicie o servidor de desenvolvimento do Expo:

```bash
    npm run web [(comando para inicializar o navegador (Starting Metro Bumbler)]
```

 8.  O APK está na pasta docs

## Tecnologias utilizadas

**Expo:** Framework para desenvolvimento de apps.

**React Native:** Biblioteca principal para criação de interfaces.

**React Navigation:** Gerenciamento de navegação.

**JavaScript:** Linguagem de programação principal.

**Yarn:** Gerenciador de pacotes.

## Funcionalidades

- **Navegação Simples:** Uso de React Navigation para navegação entre telas.
- **Animações Motivacionais:** Exibição de gifs e imagens para interação visual.
- **Fluxo Gamificado:** Tela inicial, perguntas sequenciais e mensagem de finalização.
- **Botão Sair:** Permite que o usuário saia do aplicativo a partir da tela Fim, funcionalidade implementada com BackHandler.exitApp(). (Disponível apenas para dispositivos Android).
- **Geração de APK:** Compatível com o comando de construção do APK para instalação em dispositivos Android.

![fotos-mobile-atualizada](https://github.com/user-attachments/assets/92d5ecbc-a935-4192-9da7-4fef1297aa77)

## Documentação

- Acesse a documentação pelo link https://reactnavigation.org/

## Autores

- [@Carla-coder](https://www.github.com/Carla-coder)

## Instituição de Ensino

Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Terceiro Semestre (2024)

Professor responsável pelo Projeto: Robson B. Souza https://github.com/robsonbsouzaa
