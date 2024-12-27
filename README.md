# Teste Técnico – Desenvolvedor Backend

Bem-vindo ao repositório do Teste Técnico para a posição de Desenvolvedor(a) Backend. Este projeto foi desenvolvido utilizando Node.js, TypeScript e NestJS, conforme as especificações fornecidas, com o objetivo de demonstrar habilidades em desenvolvimento backend.

## Índice

- [Objetivo](#objetivo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Endpoints Implementados](#endpoints-implementados)
- [Diferenciais Implementados](#diferenciais-implementados)
- [Considerações Finais](#considerações-finais)
- [Autor](#autor)

## Objetivo

Avaliar a capacidade de escrever código limpo, escalável e bem estruturado, atendendo aos requisitos especificados para a criação de endpoints de usuários e tutoriais.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Docker](https://www.docker.com/)

## Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [Docker](https://www.docker.com/) instalado (opcional).

### Passo a Passo

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias, conforme o exemplo em `.env.example`.

4. **Executar a aplicação:**

   **Modo desenvolvimento:**

   ```bash
   npm run start:dev
   ```

   **Utilizando Docker:**

   ```bash
   docker-compose up
   ```

## Endpoints Implementados

### Usuários

#### Cadastro de Usuário

- **Método:** POST
- **Rota:** /user/signup
- **Descrição:** Cria um novo usuário.

#### Login de Usuário

- **Método:** POST
- **Rota:** /user/login
- **Descrição:** Realiza o login do usuário e retorna um token de autenticação.

### Tutoriais

#### Listar Tutoriais

- **Método:** GET
- **Rota:** /tutorial
- **Descrição:** Retorna uma lista de tutoriais com filtros por título e data, paginação e uso de cache.

#### Adicionar Novo Tutorial

- **Método:** POST
- **Rota:** /tutorial
- **Descrição:** Adiciona um novo tutorial.

#### Editar Tutorial

- **Método:** PATCH
- **Rota:** /tutorial/{id}
- **Descrição:** Atualiza um tutorial existente com base no ID.

#### Remover Tutorial

- **Método:** DELETE
- **Rota:** /tutorial/{id}
- **Descrição:** Remove um tutorial existente com base no ID.

## Diferenciais Implementados

- **Manutenibilidade do Código:** Estrutura modularizada, seguindo princípios SOLID e utilizando Design Patterns adequados.
- **Uso de Docker:** Configuração de containers para facilitar a implantação e execução da aplicação.
- **Documentação:** Código bem documentado, facilitando a compreensão e manutenção.
- **Cobertura de Testes:** Implementação de testes unitários e de integração para garantir a qualidade do código.
- **Modelagem de Dados:** Estrutura de dados planejada para atender aos requisitos funcionais e não funcionais.
- **Segurança:** Implementação de práticas de segurança, como criptografia de senhas e validação de entradas.
- **Tratamento de Erros:** Mecanismos para captura e tratamento adequado de exceções e erros.
- **Arquitetura:** Estrutura modularizada, com camadas de serviço e repositório desacopladas, facilitando a escalabilidade e manutenção.

## Considerações Finais

Este projeto foi desenvolvido com o intuito de demonstrar habilidades em desenvolvimento backend, seguindo as melhores práticas de mercado e atendendo aos requisitos especificados no teste técnico.

## Autor

Katryel Menezes