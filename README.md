# Ioasys Books

Esse projeto em ReactJs com Typescript foi realizado de acordo com a  [Documentação da Ioasys](https://bitbucket.org/ioasys/desafio-books-frontend/src/master/).

## Início

O projeto foi realizado utilizando Docker, para roda-lo você pode utilizar:

### `docker-compose up -d --build`

O comando reliza a instalação das bibliotecas de acordo com package.json e faz compilação.\
Abra [http://localhost:3000](http://localhost:3000) para acessar no navegador.

Caso queira entrar dentro do container via terminal, basta rodar:

### `docker exec -it ioasys_books sh`

Dentro do container podemos utilizar os comandos já conhecidos como yarn install, yarn build, yarn start ...\
Nada impede de rodar o projeto sem a utilização do docker, basta rodar os comandos normalmente.

## Informações do desenvolvimento

O projeto foi desenvolvido utilizando Typescript, cultura DevOps, conceito de estilização Mobile First,\
utilizando pré-processadores de CSS como SASS, biblioteca Eslint.

#### O que faltou?

Integração do filtro (funcionalidade adicional) com a api,\
Sistema de paginação dos livros,\
Sistema de rotas privadas e validador de token,\
Loading com animação para o carregamento das páginas.

#### Preview

![image](https://user-images.githubusercontent.com/44443621/147184083-9a53c21d-f547-4d94-9f1a-6c33e86ee65a.png)
![image](https://user-images.githubusercontent.com/44443621/147184187-5c30bebf-0fde-4035-ade8-84a9b0f57a23.png)
![image](https://user-images.githubusercontent.com/44443621/147184583-2ffcf77b-9dac-4863-90ca-d3a59d6b77a0.png)
![image](https://user-images.githubusercontent.com/44443621/147184863-4326f4d2-169b-4278-b5e0-fae312d62dc0.png)

