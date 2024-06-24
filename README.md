### Burgers Challenge

Este repositório contém o código-fonte do projeto Burgers Challenge, uma aplicação desenvolvida para fins do desafio da Experis. Abaixo estão as instruções para executar o código, além de detalhes sobre as decisões de projeto e suposições feitas durante o desenvolvimento.

---

### Como Executar

Para executar este projeto, siga os passos abaixo:

1. **Pré-requisitos:**
   - Node v20.x
   - Bibliotecas listadas no arquivo `package.json` instaladas. Você pode instalá-las usando npm:
     ```
     npn install
     ```

2. **Clonar o repositório:**
   ```
   git clone https://github.com/1uri-silva/burgers-challenge.git

   cd burgers-challenge
   ```

3. **Configurar variáveis de ambiente:**
   - O projeto pode precisar de configuração específica de variáveis de ambiente. Consulte o arquivo `.env.example` para saber quais variáveis precisam ser definidas e configure-as em um arquivo `.env`.

4. **Executar a aplicação:**
   ```
   npm dev
   ```

5. **Acessar a aplicação:**
   - Após iniciar a aplicação, ela estará disponível em `http://localhost:5173` (ou outra URL específica que aparecerá no console).

---

### Processo e Escolhas

**Tecnologias Utilizadas:**

1. **Vite**
Optei por utilizar Vite como o bundler devido ao seu desempenho excepcionalmente rápido durante o desenvolvimento.
Escolhi React como framework de frontend devido à sua popularidade, vasta comunidade de desenvolvedores e suporte robusto para construção de interfaces de usuário dinâmicas.

2. **Jest**
Jest foi escolhido como framework de teste devido à sua simplicidade, rapidez de configuração e suporte integrado para testes de unidade e integração.
Utilizei Jest para escrever testes automatizados para componentes React, funções JavaScript (Typescript), e lógica de negócios.

3. **Tailwind CSS**
Optei por utilizar Tailwind CSS como framework CSS devido à sua abordagem utility-first, que nos permite estilizar rapidamente componentes sem escrever CSS personalizado.
A flexibilidade e customização oferecidas pelo Tailwind CSS facilitaram a manutenção e a consistência visual em todo o projeto.

4. **Testing Library**
Implementei Testing Library para testes de usuário baseados em comportamento, garantindo que os componentes se comportem conforme o esperado do ponto de vista do usuário final.

---

### Informações Adicionais

**Funcionalidades Implementadas:**

- Adicionei uma seção onde tem o banner da lanchonete que pode alterar de acordo ao que cada establecimento fizer.
- Também implementei alteração de cores de componentes dinamicamente, também de acordo com o que a lanchonete difinir.
- Adição de produtos ao carrinho, contando também com cálculos individuais e peço total dos produtos no carrinho.
- Adicionei testes unitários para garantir a funcionalidade da aplicação, tanto na renderização quanto no comportamento do usuário.

**Exemplos de Uso:**

- Para iniciar o servidor de desenvolvimento, execute `npm run dev`.
- Para construir o projeto para produção, execute `npm run build` seguido de `npm run preview`.

**Sobre Mim:**
- Tenho proficiência em JavaScript/TypeScript e um pouco de Python e Go, estou sempre explorando novos frameworks e bibliotecas para melhorar minhas habilidades.

---

### Contato

- **Email:** iurirodrigues2200@gmail.com
- **LinkedIn:** [Meu Perfil](https://www.linkedin.com/in/iuri-rodrigues)
- **Portifolio:** [Iuri](https://deploy-portfolio-8vdl.onrender.com)