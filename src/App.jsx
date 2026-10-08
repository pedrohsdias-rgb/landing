import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <p>
          Desenvolvimento De Sistemas &gt; Senai &gt; Pedro Dias
        </p>
      </header>

      <h1>
        Transforme ideias em sistemas.
      </h1>

      <section>
        <h2>O que é Desenvolvimento de Sistemas</h2>
        <p>
          Desenvolvimento de Sistemas é a área da tecnologia dedicada a projetar, construir, testar e manter software que resolve problemas ou automatiza processos.
          Envolve desde a modelagem das necessidades do usuário até a implementação do código, passando por banco de dados, interfaces, integrações (APIs), testes e manutenção.
          Pode incluir aplicações web, móveis, de desktop, sistemas embarcados e serviços (back-end).
        </p>
      </section>

      <section>
        <h2>Qual o objetivo do curso (Técnico em Desenvolvimento de Sistemas)</h2>
        <p>
          Formar profissionais capazes de entender requisitos e transformar essas necessidades em soluções de software funcionais e bem estruturadas.
          Ensinar conceitos e práticas essenciais: lógica de programação, desenvolvimento front‑end e back‑end, bancos de dados, APIs, controle de versão (Git), boas práticas de desenvolvimento e testes.
          Preparar o aluno para trabalhar em equipes, usar ferramentas do mercado e construir projetos que demonstrem suas competências (portfólio).
          Favorecer empregabilidade em funções técnicas iniciais e fornecer base para evolução para cargos como desenvolvedor pleno, full‑stack ou especializações posteriores.
        </p>
      </section>

      <section>
        <h2>O que um profissional dessa área faz (atividades típicas)</h2>
        <ul>
          <li>Levantamento e análise de requisitos: conversar com clientes/usuários para entender o que deve ser feito.</li>
          <li>Planejamento e design: definir arquitetura, modelar dados (bancos) e desenhar interfaces (UX/UI básicas).</li>
          <li>Programação/implementação: escrever código para front‑end (interfaces) e back‑end (regras de negócio, APIs). Tecnologias comuns: HTML, CSS, JavaScript, frameworks (ex.: React), Node.js, SQL, entre outras.</li>
          <li>Integração e versionamento: usar Git/GitHub para controlar versões e colaborar com a equipe.</li>
          <li>Testes e qualidade: criar e executar testes, corrigir bugs e garantir que a aplicação funcione corretamente.</li>
          <li>Deploy e manutenção: publicar aplicações em servidores/serviços de nuvem e acompanhar atualizações, segurança e desempenho.</li>
          <li>Documentação e suporte: documentar código e funcionalidades e dar suporte aos usuários quando necessário.</li>
          <li>Trabalho em equipe: participar de reuniões, revisar código (code review) e seguir metodologias ágeis.</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades e comportamentos importantes</h2>
        <ul>
          <li>Raciocínio lógico e capacidade de resolver problemas</li>
          <li>Boa comunicação e colaboração</li>
          <li>Curiosidade e aprendizagem contínua (tecnologias mudam rápido)</li>
          <li>Atenção a detalhes, qualidade e segurança</li>
        </ul>
      </section>

      <section>
        <h2>O que você aprende</h2>
        <p>
          No curso Técnico em Desenvolvimento de Sistemas, você constrói uma base sólida para criar soluções digitais completas.
          Ao longo do curso, são desenvolvidos conhecimentos essenciais que vão desde os fundamentos da programação até o desenvolvimento
          de aplicações web, APIs, bancos de dados e versionamento de projetos.
        </p>
      </section>

      <section>
        <h2>Lógica de programação</h2>
        <p>
          Você aprende a pensar de forma estruturada, criando algoritmos, resolvendo problemas e entendendo como transformar ideias em código.
          Essa é a base essencial para qualquer desenvolvimento de software.
        </p>
      </section>
      <section>O
        <h2> Desenvolvimento web</h2>
        <ul>
          <li>O curso apresenta os conceitos de criação de sites e sistemas para navegador</li>
            <li> unindo estrutura, estilo,</li>
            <li> interatividade e organização de páginas para construir aplicações online funcionais e atraentes.</li>
        </ul>
      </section>
      <section className="tech-section">
  <h2>Tecnologias que você vai aprender</h2>
  <p>
    Durante o curso você terá contato com as principais ferramentas e
    linguagens usadas no mercado de desenvolvimento de sistemas.
  </p>

  <div className="tech-grid">
    <div className="tech-card tech-html">
      <span className="tech-icon">🌐</span>
      <h3>HTML</h3>
      <p>Estrutura e semântica das páginas web.</p>
    </div>

    <div className="tech-card tech-css">
      <span className="tech-icon">🎨</span>
      <h3>CSS</h3>
      <p>Estilização, layout e design responsivo.</p>
    </div>

    <div className="tech-card tech-js">
      <span className="tech-icon">⚡</span>
      <h3>JavaScript</h3>
      <p>Lógica, interatividade e comportamento das aplicações.</p>
    </div>

    <div className="tech-card tech-react">
      <span className="tech-icon">⚛️</span>
      <h3>React</h3>
      <p>Criação de interfaces modernas e componentizadas.</p>
    </div>

    <div className="tech-card tech-node">
      <span className="tech-icon">🟢</span>
      <h3>Node.js</h3>
      <p>Back-end com JavaScript no servidor.</p>
    </div>

    <div className="tech-card tech-sql">
      <span className="tech-icon">🗄️</span>
      <h3>SQL</h3>
      <p>Bancos de dados relacionais e consultas.</p>
    </div>

    <div className="tech-card tech-git">
      <span className="tech-icon">🔀</span>
      <h3>Git & GitHub</h3>
      <p>Controle de versão e colaboração em equipe.</p>
    </div>
  </div>
</section>
{/* ===== Áreas de Atuação ===== */}
<section className="areas-section">
  <h2>Áreas de atuação</h2>
  <p>
    Ao concluir o curso, você poderá atuar em diferentes frentes do
    desenvolvimento de sistemas.
  </p>

  <div className="areas-grid">
    <div className="area-card area-frontend">
      <span className="area-icon">💻</span>
      <h3>Desenvolvimento Frontend</h3>
      <p>
        Criação de interfaces visuais e interativas usando HTML, CSS,
        JavaScript e React, focando na experiência do usuário.
      </p>
    </div>

    <div className="area-card area-backend">
      <span className="area-icon">⚙️</span>
      <h3>Desenvolvimento Backend</h3>
      <p>
        Construção da lógica do servidor, APIs, autenticação e integração
        com bancos de dados usando Node.js e outras tecnologias.
      </p>
    </div>

    <div className="area-card area-fullstack">
      <span className="area-icon">🔗</span>
      <h3>Desenvolvimento Full Stack</h3>
      <p>
        Atuação completa: frontend + backend. Capacidade de desenvolver
        sistemas inteiros, da interface ao servidor.
      </p>
    </div>

    <div className="area-card area-apps">
      <span className="area-icon">📱</span>
      <h3>Desenvolvimento de Aplicações</h3>
      <p>
        Criação de sistemas web, desktop ou móveis que resolvem
        necessidades reais de empresas e usuários.
      </p>
    </div>

    <div className="area-card area-banco">
      <span className="area-icon">🗄️</span>
      <h3>Banco de Dados</h3>
      <p>
        Modelagem, criação e manutenção de bancos de dados relacionais,
        consultas SQL e organização eficiente das informações.
      </p>
    </div>

    <div className="area-card area-suporte">
      <span className="area-icon">🛠️</span>
      <h3>Suporte e Manutenção de Sistemas</h3>
      <p>
        Correção de bugs, atualizações, melhorias de desempenho e
        suporte técnico para sistemas já em produção.
      </p>
    </div>
  </div>
</section>

{/* ===== Exemplos de Projetos ===== */}
<section className="projetos-section">
  <h2>Exemplos de projetos</h2>
  <p>
    Durante e após o curso, você será capaz de construir sistemas como estes:
  </p>

  <div className="projetos-grid">
    <div className="projeto-card proj-clientes">
      <span className="projeto-icon">👥</span>
      <h3>Sistema de Cadastro de Clientes</h3>
      <p>
        Cadastro, edição, busca e exclusão de clientes com validação de
        dados e armazenamento em banco de dados.
      </p>
    </div>

    <div className="projeto-card proj-estoque">
      <span className="projeto-icon">📦</span>
      <h3>Sistema de Estoque</h3>
      <p>
        Controle de entrada e saída de produtos, alertas de estoque baixo
        e relatórios de movimentação.
      </p>
    </div>

    <div className="projeto-card proj-agendamento">
      <span className="projeto-icon">📅</span>
      <h3>Aplicação de Agendamentos</h3>
      <p>
        Marcação de horários, visualização de agenda, confirmação e
        cancelamento de compromissos.
      </p>
    </div>

    <div className="projeto-card proj-loja">
      <span className="projeto-icon">🛒</span>
      <h3>Loja Virtual</h3>
      <p>
        Catálogo de produtos, carrinho de compras, finalização de pedidos
        e área administrativa.
      </p>
    </div>

    <div className="projeto-card proj-dashboard">
      <span className="projeto-icon">📊</span>
      <h3>Dashboard Administrativo</h3>
      <p>
        Painel com gráficos, indicadores e visão geral do desempenho de
        um sistema ou negócio.
      </p>
    </div>

    <div className="projeto-card proj-tarefas">
      <span className="projeto-icon">✅</span>
      <h3>Aplicativo de Tarefas</h3>
      <p>
        Criação, organização e acompanhamento de tarefas com status,
        prazos e prioridade.
      </p>
    </div>
  </div>
</section>
<section className="cta-section">
  <h2>Seu futuro na tecnologia pode começar aqui.</h2>
  <p>
    Conheça o curso Técnico em Desenvolvimento de Sistemas e dê o
    primeiro passo para se tornar um profissional da área.
  </p>
  <a
    href="https://www.senai.br"
    target="_blank"
    rel="noopener noreferrer"
    className="cta-button"
  >
    Conhecer o curso
  </a>
</section>

<footer className="footer">
  <div className="footer-content">
    <h3>Técnico em Desenvolvimento de Sistemas</h3>
    <p>SENAI</p>
    <p>2026</p>
    <p>Pedro Dias</p>
    <div className="footer-line"></div>
  </div>
</footer>
    </>
  )
}

export default App