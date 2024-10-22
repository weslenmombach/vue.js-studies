<script setup></script>

<template>
  <header>
    <h1>DIRETÓRIOS</h1>
    <p>Criação de pastas, diretórios, configurações, estrutura de projetos e outros</p>
    <hr />
    <h2>Aula sobre package.json e package-lock.json.</h2>
    <p>Caracteres e sets para versões localizados no package.json</p>
    <p>
      package-lock.json é criado automaticamente e representa árvore de pacotes que fazem parte do
      projeto facilitando na hora do compartilhamento as infomrações com outras pessoas.
    </p>
  </header>
  <hr />
  <p>node_modules normalmente não vai no compartihamento de projetos, pois já temos os json.</p>
  <p>
    Os json são arquivos que guardar as configs do projeto e relações de dependências dos projetos
  </p>
  <p>node_modules é onde é criado cada uma das dependências</p>
  <p>
    .gitignore é onde listamos diretórios e arquivos que devem ser ignorados no processo de
    versionamento
  </p>
  <p>README.md é basicamente pra descrever sobre o projeto, documentação, orientações e outros</p>
  <hr />
  <h2>Composição das versões e caracteres exclusivos</h2>
  <p>
    Basicamente temos 3 partes desta composição do npm e eles definem as versões, suas dependências
    e pré requisitos, representadas por ~ e ^ <br />
    Exemplo: 5.6.7 <br />
    Por exemplo, para patch e minor quando muda para o 5.7.0 ele continua na mesma versão porém com
    novas funcionalidades e com versões antigas obsoletas porém funcionais ainda. <br />
    Quando é feito alteração no major, tudo que foi marcado como obsoleto tem alterações concretas
    na versão, entrando aí os caracteres abordando que os pacotes sejam mais consistentes, fazendo
    com que cada caracter represente alterações na versão.
  </p>
  <ul>
    <li>major que é a principal></li>
    <li>minor que é a menor</li>
    <li>patch que é a bugs</li>
  </ul>
  <hr />
  <h1>RECONSTRUÇÃO DE DEPENDÊNCIAS</h1>
  <p>
    Pra reconstruir, utilizamos o npm install ou npm i para ler os arquivos de configuração e
    recriar o node_modules e package-lock.
  </p>
  <hr />
  <h1>O QUE É GIT, GITHUB E BITBUCKET</h1>
  <p>
    Git é sistema de versionamento distribuído local e depois podendo ser centralizada no github e o
    mais utilizado
  </p>
  <p>
    Github é serviço de criação de repositório central nesses projetos, criando repositório de modo
    central, podendo evoluir localmente por outros programadores (branches)
  </p>
  <p>
    Bitbucket é serviço de criação de repositório central nesses projetos, criando repositório de
    modo central, podendo evoluir localmente por outros programadores (branches)
  </p>
  <hr />
  <h1>Alteração de informações de usuário</h1>
  <p>
    Para alterar, utilizo de git config --global user.name "NomeDeUsuário" e git config --global
    user.email<br />
    Pra verificar os valores, utilizo de git config --global --list <br />
    Pra fazer local, só não uso o --global
  </p>
  <p>Configurações locais são mandatórias</p>
  <hr />
  <h1>Criação de Usuário do Bitbucket</h1>
  <h2>Bitbucket permite manter controle de versionamento de forma privada</h2>
  <p>Criaçào de repositório e linkagem de repositório central e no bitbucket</p>
  <p>Utilizamos de git remote add respoitoryBitbucket "LINK DO REPOSITÓRIO"</p>
  <p>
    Utilizamos o set-url pra alterar um repositório remoto usando git remote set-url respoitoryBitbucket "LINK DO REPOSITÓRIO"
  </p>
</template>

<style></style>
