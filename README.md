#Gerenciador de tarefas| React + Vite

Aplicação moderna de gerenciamento de tarefas desenvolvida com React 18, focada em componentização, boas práticas de estado e navegação entre páginas.

O projeto simula um cenário real de aplicação SPA, incluindo persistência local, rotas dinâmicas e controle de tema (Dark Mode).

##Preview

Gerencie tarefas de forma simples e eficiente:

## Criar tarefas

## Marcar como concluída

##Remover tarefas

## Visualizar detalhes

## Alternar entre Light/Dark Mode

## Persistência automática com LocalStorage

## Tecnologias Utilizadas
Tecnologia	Finalidade
React 18	Construção da interface
Vite	Build tool moderna e rápida
TailwindCSS	Estilização utilitária
React Router DOM	Navegação SPA
UUID	Geração de IDs únicos
Lucide React	Ícones
LocalStorage API	Persistência de dados
ESLint	Padronização de código
## Arquitetura do Projeto

Organização baseada em separação de responsabilidades:

src/
 ├── assets/
 ├── componentes/
 │    ├── AddTasks.jsx
 │    ├── Tasks.jsx
 │    ├── Button.jsx
 │    ├── Input.jsx
 │    └── Title.jsx
 ├── pages/
 │    └── TaskPage.jsx
 ├── App.jsx
 ├── main.jsx
# Estrutura pensada para:

Reutilização de componentes

Escalabilidade

Manutenção simples

Separação entre UI e lógica

## Conceitos Técnicos Aplicados

useState para controle de estado

useEffect para sincronização com LocalStorage

Manipulação imutável de arrays

Props drilling controlado

Navegação com useNavigate

Query Params com URLSearchParams

Condicional de classes com Tailwind

Persistência de tema (Dark Mode) via document.documentElement

# Dark Mode

Implementado utilizando:

darkMode: "class" no Tailwind

Controle via estado global

Persistência no LocalStorage

Transição suave com transition-colors

O tema é mantido mesmo após atualização da página.

## Persistência de Dados

As tarefas são armazenadas no navegador utilizando:

localStorage.setItem("tasks", JSON.stringify(tasks))

Isso garante:

Experiência contínua

Simulação de comportamento backend

Melhor UX

 Integração com API (Opcional)

Estrutura preparada para consumir API externa:

https://jsonplaceholder.typicode.com/todos?_limit=7

Permite simular dados remotos e adaptar facilmente para backend próprio.

# Como Executar
# Clonar repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

Aplicação disponível em:

http://localhost:5173
# Evolução Técnica Demonstrada

Este projeto demonstra:

Domínio de React básico-intermediário

Organização limpa de código

Pensamento de escalabilidade

Controle de estado eficiente

Manipulação de rotas SPA

Experiência com ferramentas modernas (Vite + Tailwind)
