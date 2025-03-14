Aqui está o README formatado em Markdown:

```markdown
# Panetone Calculator

## Descrição
Este é um sistema web desenvolvido para calcular a quantidade de ingredientes necessária para a preparação de panetones. O programa utiliza medidas padrão de 180g, 440g e 700g, mas também permite que o usuário insira uma medida personalizada para calcular as quantidades de ingredientes necessárias. O sistema foi construído utilizando HTML, CSS e JavaScript (Node.js com Programação Orientada a Objetos - POO).

## Índice
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Instalação e Configuração](#instalação-e-configuração)
6. [Uso](#uso)
7. [Testes](#testes)
8. [Deploy](#deploy)
9. [Contribuição](#contribuição)
10. [Equipe](#equipe)
11. [Licença](#licença)

## Descrição do Projeto
O objetivo deste projeto é criar uma ferramenta fácil de usar para calcular a quantidade de ingredientes necessária para fazer panetones, levando em consideração diferentes tamanhos de panetones, além de permitir que o usuário insira suas próprias medidas personalizadas. A aplicação foi desenvolvida em formato de sistema web, facilitando o acesso em qualquer dispositivo com navegador.

A importância deste projeto está em proporcionar um sistema simples, acessível e preciso para quem deseja fazer panetones em casa ou até mesmo para empresas que produzem panetones em grande escala, economizando tempo e oferecendo uma ferramenta útil para o planejamento das quantidades necessárias.

## Funcionalidades
- Cálculo das quantidades de ingredientes baseados nas medidas padrão de 180g, 440g e 700g.
- Opção de entrada personalizada para calcular a quantidade de ingredientes de acordo com o peso desejado.
- Interface amigável, acessível através de um site.
- Sistema baseado em Programação Orientada a Objetos (POO) com JavaScript.
- Possibilidade de adicionar mais funcionalidades no futuro, como salvar os cálculos ou personalizar ainda mais as quantidades.

## Tecnologias Utilizadas
- **HTML5**: Estruturação da página web.
- **CSS3**: Estilo visual da interface do usuário.
- **JavaScript (Node.js)**: Lógica do sistema e cálculos, utilizando Programação Orientada a Objetos (POO).
- **Git/GitHub**: Controle de versão e colaboração.

## Estrutura do Projeto
A organização do projeto segue o padrão de um site simples com a separação das responsabilidades de cada tecnologia.

```
/panetone-calculator
├── /assets            # Imagens e recursos estáticos (como ícones e logo)
├── /css               # Arquivos de estilo (CSS)
│   └── style.css      # Arquivo principal de estilo
├── /js                # Arquivos JavaScript
│   └── app.js         # Arquivo com a lógica de cálculos e funções principais
├── index.html         # Página principal do sistema
└── README.md          # Documento de instruções e explicação do projeto
```

## Instalação e Configuração
1. **Clonar o Repositório:**
   ```
   git clone https://github.com/seu-usuario/panetone-calculator.git
   ```

2. **Instalar Dependências:**
   Navegue até a pasta do projeto e instale as dependências necessárias:
   ```
   cd panetone-calculator
   npm install
   ```

3. **Executar o Projeto:**
   Após a instalação das dependências, abra o arquivo `index.html` em um navegador para começar a utilizar o sistema.

## Uso
1. Abra o arquivo `index.html` no navegador.
2. O usuário pode selecionar o tamanho do panetone entre as opções padrão ou inserir uma medida personalizada.
3. Com base na entrada, o sistema calcula e exibe a quantidade de ingredientes necessária para a receita.

## Testes
Os testes unitários para a funcionalidade de cálculos estão implementados utilizando o framework de testes JavaScript. Para executar os testes, siga os passos abaixo:

1. Instale as dependências de testes (caso não tenha feito isso ainda):
   ```
   npm install --save-dev jest
   ```

2. Execute os testes:
   ```
   npm test
   ```

A integração contínua (CI) também está configurada para rodar os testes automaticamente a cada commit em repositórios compatíveis.

## Deploy
Para fazer o deploy do projeto em um servidor de produção:

1. Configure o ambiente de servidor (pode usar plataformas como GitHub Pages, Netlify, Vercel ou um servidor próprio).
2. Publique os arquivos estáticos no servidor.
3. Acesse o sistema através da URL fornecida após o deploy.

## Contribuição
1. Faça um **fork** deste repositório.
2. Crie uma **branch** com sua funcionalidade ou correção:
   ```
   git checkout -b minha-funcionalidade
   ```
3. Realize suas alterações e envie um **commit**:
   ```
   git commit -am 'Adiciona nova funcionalidade'
   ```
4. **Push** para o repositório remoto:
   ```
   git push origin minha-funcionalidade
   ```
5. Abra um **pull request** detalhando as mudanças.

Para mais informações sobre como contribuir, consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md).

## Equipe
- **Scrum Master**: Bryan Prinz
- **Desenvolvedores**:
  - João Paulo
  - João Santos
  - João Galiotto
  - Yan

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE). Consulte o arquivo `LICENSE` para mais detalhes.
```

Esse é o README completo em Markdown que pode ser usado no seu repositório.
