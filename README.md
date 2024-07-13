![Código Certo Coders](https://utfs.io/f/3b2340e8-5523-4aca-a549-0688fd07450e-j4edu.jfif)

# 📚 API RESTful de gerenciamento de tarefas
Este projeto tem como objetivo desenvolver uma API RESTful para gerenciamento de tarefas, proporcionando funcionalidades de CRUD (Create, Read, Update, Delete) de tarefas, autenticação de usuários e armazenamento dos dados em um banco de dados.

#### Deploy | Instância EC2 AWS: <a href="http://15.228.15.213:3000/api-docs/">api-task</a>

## Como executar o projeto: 
- Faça o clone do repositório na sua máquina local ou aonde deseja executá-lo: ```git clone https://github.com/Maracujacake/tasks-api.git```
- No caminho em que se encontra o projeto ou em um editor de código com o projeto aberto, execute o seguinte comando: ```./run.sh```
- O script run.sh é responsável por limpar o terminal e executar o comando npm run dev que deve executar a aplicação na porta 3000: ```http://localhost:3000/```
- Caso queira checar uma documentação mais agradável, basta acessar ```http://localhost:3000/api-docs``` com o projeto executando, ele abrirá uma página com a documentação do swagger

⚠️ Importante: Caso se depare com algum erro de CORS, é necessário mudar a URL no arquivo src/swagger.js para ```http://localhost:3000```


---

## Objetivos:
- Criar uma API que permita CRUD (Create, Read, Update, Delete) de tarefas. _V_
- Implementar autenticação de usuários. _V_
- Utilizar um banco de dados SQLite para armazenar as tarefas. _V_
- Documentar todo o processo e apresentar as conclusões.

## Requisitos Funcionais:
- Criar Tarefa: Endpoint para criar uma nova tarefa. _V_
- Listar Tarefas: Endpoint para listar todas as tarefas. _V_
- Atualizar Tarefa: Endpoint para atualizar uma tarefa existente. _V_
- Deletar Tarefa: Endpoint para deletar uma tarefa existente. _V_

## Autenticação de Usuários:
- Registro de Usuário: Endpoint para registrar um novo usuário. _V_
- Login de Usuário: Endpoint para autenticar um usuário e gerar um token JWT. _v_
- Proteção de Rotas: Garantir que apenas usuários autenticados possam acessar os endpoints de tarefas. _V_

## Banco de Dados:
- Utilizar SQLite como banco de dados para armazenar informações de usuários e tarefas. _V_

   #### Estrutura do Projeto:
   ```plaintext
   project-root/
   │
   ├── src/
   │   ├── controllers/
   │   ├── models/
   │   ├── routes/
   │   ├── middlewares/
   │   ├── database/
   │   └── app.js
   │
   ├── .env
   ├── .gitignore
   ├── README.md
   └── package.json
   ```
## Entregáveis:
   1. **Código Fonte:**
      - Código fonte do projeto, organizado conforme a estrutura acima. _V_
   2. **Repositório GitHub:**
      - Repositório público contendo o código fonte e documentação. _V_
   3. **Documentação:**
      - README.md com instruções sobre como configurar e executar o projeto, além de detalhes dos endpoints da API. _V_

**Construindo o amanhã, hoje.**
