# front_cursos
- Realização de novas matrículas
- Cancelamento de matrículas
- Pesquisa por aluno ou curso
- Paginação dos resultados

## Tecnologias Utilizadas

- Vue.js 3
- Bootstrap 5
- Fetch API para requisições HTTP
- Vue Router para navegação
- Environment variables para configuração

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- API Backend em execução

## Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
Entre no diretório do projeto:
cd front_cursos
Instale as dependências:
npm install

Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
VUE_APP_API_URL=http://localhost:5000
Inicie o servidor de desenvolvimento:
npm run serve

##Uso
Após iniciar o servidor, acesse http://localhost:8080 no seu navegador. O sistema oferece uma interface intuitiva com as seguintes seções:

/ - Página inicial com listagem de cursos
/alunos - Gerenciamento de alunos
/matriculas - Gerenciamento de matrículas

📦 Build para Produção
Para gerar a build de produção:

npm run build
Os arquivos serão gerados no diretório dist/.

## Estrutura do Projeto
front_cursos/
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── App.vue
│   └── main.js
├── public/
├── .env
└── package.json

✒️ Autores
Leandro Barros - Desenvolvimento - https://github.com/L34NDP0

