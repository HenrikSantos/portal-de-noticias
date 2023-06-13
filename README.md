# PT-BR

Desafio técnico para o projeto voluntário [Tech pro Bem](https://www.linkedin.com/company/techprobem/).

## Iniciando o Projeto
- Instale as dependências:
```bash
npm install
```
- Renomeie o arquivo .env.example para .env.local;
- Dentro do arquivo .env.local altere o campo com a sua KEY da API [newsapi.org](https://newsapi.org/);
- Inicie o server de desenvolvimento:

```bash
npm run dev
```

- Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## Observações
- Optei por não utilizar o "Image" do "next/image" pois algumas imagens retornadas pela newsapi usam o protocolo http e não https, além disso, seria necessário permitir todos os domínios das imagens ou adicioná-los manualmente.
- No ReadMe do projeto dizia ser necessário colocar o "Texto da notícia" dentro da página de detalhes da notícia, infelizmente o retorno da API limita o "Texto da notícia" em 200 caracteres, logo optei por reutilizar o campo "description".

# EN

Technical challenge for the volunteer project [Tech pro Bem](https://www.linkedin.com/company/techprobem/).

## Getting Started

- Install dependencies
```bash
npm install
```

- Rename the file .env.example to .env.local;
- Inside the .env.local file, change the field with your API KEY from [newsapi.org](https://newsapi.org/);
- Start the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
