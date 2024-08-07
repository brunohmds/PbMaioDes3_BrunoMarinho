# Desafio 3 - Programa de Bolsas Compass.UOL

## Descrição

Este projeto consiste no desenvolvimento de uma API RESTful para gerenciar usuários e eventos, utilizando as tecnologias e conhecimentos aprendidos no curso. A API permite que usuários autenticados possam criar, ler e excluir eventos.

## Tecnologias Utilizadas

- **Node.js** e **TypeScript**
- **Express.js** para o framework de servidor
- **MongoDB** para o banco de dados
- **Mongoose** para a modelagem de dados
- **Joi** para validação de entrada
- **Swagger** para documentação da API
- **bcrypt** para hashing de senhas
- **Jest** para testes

## AWS

Como parte do desafio, também existe a integração com serviços AWS.

**AWS EC2** para hospedagem
**AWS S3** para armazenamento de arquivos

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:brunohmds/PbMaioDes3_BrunoMarinho.git
   cd PbMaioDes3_BrunoMarinho

   ```

2. **Instale as dependências:**

   npm install

3. **Configure as variáveis de ambiente**

   - JWT_SECRET=sua_chave_secreta
   - AWS_ACCESS_KEY_ID=sua_chave_de_acesso
   - AWS_REGION=sua_regiao
   - S3_BUCKET=sua_bucket

4. **Inicialize o banco de dados**

   Tenha certeza de que o MongoDB esteja rodando na porta padrão (27017) ou na porta configurada nas variáveis de ambiente (arquivo .env)

5. **Execute a aplicação**

   npm start ou npm run dev

## EndPoints

    A documentação completa da API pode ser acessada através do Swagger.
    Após iniciar a aplicação, você pode visualizar a documentação dos endpoints acessando o seguinte endereço:

    http://localhost:3000/api-docs

## Integração com serviços AWS

    A API pode ser executada em uma instância EC2 da AWS.
    Certifique-se de configurar as regras de segurança e o grupo de segurança para permitir o tráfego nas portas necessárias.

    Após realizar as configurações citadas, siga os 5 passos anteriormente citados para rodar a API localmente.
