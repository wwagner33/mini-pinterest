# Mini-Pinterest 🚀

> Uma “versão light” do Pinterest para você brincar de organizar e compartilhar suas imagens favoritas sem complicação.

## Autores

- **Prof. Wellington Wagner F. Sarmento** (Sistemas e Mídias Digitais, UFC)  
- **Dra. Patrícia de Sousa Paula** (Ciência da Computação, UFC)

## Sobre

Mini-Pinterest é um app didático que mostra na prática como montar um CRUD de imagens:

- **Backend**: Node.js + Express + Sequelize (SQLite)  
- **Upload**: Multer para receber e renomear arquivos  
- **Thumbs**: Sharp para gerar miniaturas  
- **Frontend**: Alpine.js para uma UI reativa sem complexidade  
- **Banco**: SQLite — leve como churrasco de domingo, mas faz o serviço!

## Requisitos Funcionais

| ID    | Título                        | User Story                                                                                                                                          |
|-------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| RF01  | Fazer upload de imagem        | Como usuário, quero enviar uma imagem via formulário para que ela seja renomeada, salva em disco e seus metadados gravados no SQLite.                |
| RF02  | Listar imagens                | Como usuário, quero ver minhas imagens em uma galeria dinâmica para navegar pelos meus pins com facilidade.                                           |
| RF03  | Editar metadados              | Como usuário, quero editar título e descrição de um pin inline para corrigir ou atualizar informações sem recarregar a página.                       |
| RF04  | Excluir imagem                | Como usuário, quero remover um pin indesejado, para manter a galeria organizada e liberar espaço no servidor.                                        |
| RF05  | Validar uploads               | Como usuário, quero que apenas arquivos `.jpg`, `.png` ou `.gif` de até 5 MB sejam aceitos, para não entupir meu app de imagens gigantes.           |
| RF06  | Servir arquivos estáticos     | Como usuário, quero que o servidor sirva o HTML, CSS, JS e as imagens uploadadas diretamente via `/public`.                                          |
| RF07  | Autenticar usuários           | Como usuário, quero me cadastrar e logar para gerenciar minhas próprias imagens de forma segura.                                                    |
| RF08  | Paginar e filtrar imagens     | Como usuário, quero ver só 20 pins por vez e poder buscar por título ou tags, para não virar jedi do scroll infinito.                                |
| RF09  | Gerar thumbnails              | Como usuário, quero ver miniaturas na galeria para carregar tudo rapidinho e só puxar a imagem full quando clicar.                                   |
| RF10  | Curtir e comentar             | Como usuário, quero marcar pins como favoritos e deixar comentários para interagir com a galera.                                                    |
| RF11  | Tratar erros e logs           | Como desenvolvedor, quero registrar erros e logs para facilitar o debugging e não ficar caçando fantasma no console.                                  |
| RF12  | Testes automatizados          | Como desenvolvedor, quero ter testes unitários e de integração (Jest + Supertest) para garantir que nada quebre sem eu perceber.                    |
| RF13  | Configurar via variáveis      | Como desenvolvedor, quero manter todas as credenciais e caminhos no `.env`, sem espalhar segredos no código.                                        |
| RF14  | Garantir layout responsivo    | Como usuário, quero usar o app em celular, tablet ou desktop sem ver o layout quebrar feito castelo de cartas.                                      |
| RF15  | Implementar segurança extra   | Como desenvolvedor, quero proteger contra XSS, uploads maliciosos e flood de requests, para não virar notícia de hacker no Twitter.                  |


## Arquitetura do Sistema
<img src="docs/arquitetura.png"/>

> Você pode gerar essa imagem localmente com PlantUML PicoWeb Server ou [PlantUML Online](https://www.plantuml.com/plantuml).


## Estrutura de Pastas

```
mini-pinterest/
├── package.json
├── .env                # chave JWT, limites e caminhos
├── database.sqlite     # banco SQLite
├── src/
│   ├── app.js          # ponto de entrada
│   ├── config/
│   │   └── database.js # setup Sequelize/SQLite
│   ├── models/
│   │   ├── Image.js
│   │   ├── User.js
│   │   └── ...
│   ├── routes/
│   │   ├── images.js
│   │   ├── auth.js
│   │   └── ...
│   └── utils/
│       ├── renameFile.js
│       └── logger.js
└── public/
    ├── index.html
    ├── css/
    │   └── styles.css
    └── uploads/
        ├── thumbs/
        └── full/
```


## Tecnologias

* **Node.js** + **Express**
* **Sequelize** (SQLite)
* **Multer** (upload) + **Sharp** (thumbnails)
* **Alpine.js** (UI reativa)
* **dotenv**, **helmet**, **express-rate-limit**, **winston**
* **Jest** + **Supertest** (testes)



## Pré-requisitos

* **Node.js** ≥ 14
* **npm** ≥ 6 ou **yarn**


## Instalação & Uso

1. Clone o repo

   ```bash
   git clone https://github.com/wwagner33/mini-pinterest.git
   cd mini-pinterest
   ```
2. Instale dependências

   ```bash
   npm install
   ```
3. Crie um `.env` baseado no `.env.example`
4. Execute em modo dev

   ```bash
   npm run dev
   ```
5. Abra no browser

   ```bash
   http://localhost:3000
   ```

---

## Contribuição

1. Faça um fork
2. Crie uma branch (`git checkout -b feature/x`)
3. Commit suas alterações (`git commit -m "feat: descrição"`)
4. Push na branch (`git push origin feature/x`)
5. Abra um Pull Request e espere o café esfriar ☕

---

## Licença

Este projeto está sob a [GNU GPLv3](LICENSE). Faça bom uso e compartilhe sorrisos! 😄
