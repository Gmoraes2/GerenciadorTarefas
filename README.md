Task Manager | React + Vite

Aplicação web de gerenciamento de tarefas desenvolvida com React 18, utilizando arquitetura SPA, persistência local de dados e controle de tema (Dark Mode).

Aplicação em produção:
https://gerenciador-tarefas-oufqn2p4u-gmoraes2s-projects.vercel.app/

Sobre o Projeto

O Task Manager é uma aplicação front-end que permite criar, visualizar, concluir e remover tarefas. O projeto foi estruturado com foco em organização de componentes, boas práticas de estado e navegação entre páginas.

A aplicação simula comportamentos reais de um sistema produtivo, incluindo persistência de dados no navegador e deploy em ambiente de produção.

Tecnologias Utilizadas

React 18

Vite

TailwindCSS

React Router DOM

UUID

Lucide React

LocalStorage API

ESLint

Vercel (Deploy)

Funcionalidades

Criação de novas tarefas

Marcação de tarefas como concluídas

Exclusão de tarefas

Página de detalhes com navegação via query params

Persistência automática utilizando LocalStorage

Alternância entre Light e Dark Mode com salvamento de preferência

Arquitetura do Projeto

Organização baseada em separação de responsabilidades e reutilização de componentes:

src/
├── componentes/
├── pages/
├── App.jsx
├── main.jsx

A estrutura facilita manutenção, escalabilidade e reaproveitamento de código.

Conceitos Aplicados

useState para controle de estado

useEffect para sincronização com LocalStorage

Manipulação imutável de arrays

Navegação SPA com React Router

Uso de URLSearchParams para envio de dados entre rotas

Controle global de tema utilizando classe “dark” do Tailwind

Persistência client-side

Deploy

A aplicação está publicada na Vercel, demonstrando experiência com:

Build de aplicação React com Vite

Configuração de ambiente de produção

Publicação e disponibilização pública do projeto

Link de acesso:
https://gerenciador-tarefas-oufqn2p4u-gmoraes2s-projects.vercel.app/

Como Executar Localmente

git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio
npm install
npm run dev
