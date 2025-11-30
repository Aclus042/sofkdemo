// Conteúdo das páginas da Ficha embutido no JavaScript
const fichaContent = {
  atributos: `
<div class="card">
  <h2>1. Atributos: Carne, Mente e Alma</h2>
  <div class="meta">Fundamentos • Escala Narrativa</div>
  <p>Em SOFK, atributos não geram bônus numéricos.</p>
  <p>Eles definem a escala, o impacto e a potência narrativa de cada personagem.</p>
</div>

<div class="card card-red">
  <h2>Carne</h2>
  <div class="meta">Atributo • Físico</div>
  <p>Representa o físico, a resistência, a força e as expressões corporais.</p>
  <div class="highlight subtle">
    <p><strong>Aspectos:</strong> força, vitalidade, impacto físico, beleza, apelo e presença corporal</p>
  </div>
  <ul class="level-list">
    <li>
      <span class="level-badge">1</span>
      <div class="level-content">
        <strong>comum, presente mas modesto</strong>
      </div>
    </li>
    <li>
      <span class="level-badge">2</span>
      <div class="level-content">
        <strong>treinado, marcante</strong>
      </div>
    </li>
    <li>
      <span class="level-badge">3</span>
      <div class="level-content">
        <strong>extraordinário, impressionante</strong>
      </div>
    </li>
  </ul>
</div>

<div class="card card-blue">
  <h2>Mente</h2>
  <div class="meta">Atributo • Intelecto</div>
  <p>Representa raciocínio, astúcia, lógica, foco e memória.</p>
  <div class="highlight subtle">
    <p><strong>Aspectos:</strong> lógica, estratégia, memória, controle emocional, percepção</p>
  </div>
  <ul class="level-list">
    <li>
      <span class="level-badge gold">1</span>
      <div class="level-content">
        <strong>funcional</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">2</span>
      <div class="level-content">
        <strong>afiada, eficiente</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">3</span>
      <div class="level-content">
        <strong>brilhante, cirúrgica</strong>
      </div>
    </li>
  </ul>
</div>

<div class="card card-yellow">
  <h2>Alma</h2>
  <div class="meta">Atributo • Espiritual</div>
  <p>Representa vontade, carisma, aura, ressonância espiritual e conexão com vidas passadas.</p>
  <div class="highlight subtle">
    <p><strong>Aspectos:</strong> sua afinidade com o Véu, sua identidade espiritual, sua vida passada</p>
  </div>
  <ul class="level-list">
    <li>
      <span class="level-badge gold">1</span>
      <div class="level-content">
        <strong>chamativa</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">2</span>
      <div class="level-content">
        <strong>magnética</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">3</span>
      <div class="level-content">
        <strong>arrebatadora</strong>
      </div>
    </li>
  </ul>
</div>

<div class="card">
  <h2>Escala de Atributos</h2>
  <div class="meta">Cada atributo vai de 1 a 3</div>
  
  <div class="rule-box">
    <h3>Nível 1 — Natural</h3>
    <p>Você é humano. Os limites do corpo e da mente são comuns.</p>
  </div>
  
  <div class="rule-box">
    <h3>Nível 2 — Treinado</h3>
    <p>Você tem experiência, domínio ou refinamento.</p>
    <p>Seu corpo, mente ou alma já fugiram do ordinário.</p>
  </div>
  
  <div class="rule-box">
    <h3>Nível 3 — Extraordinário</h3>
    <p>Você é raro.</p>
    <p>Um fisiculturista, um prodígio intelectual, alguém que viveu mais de uma vez.</p>
    <p class="text-accent"><strong>Você ultrapassa o humano — e isso tem custo.</strong></p>
  </div>
  
  <div class="highlight gold mt-1">
    <p>O atributo nunca altera o dado.</p>
    <p>Ele determina o nível e a forma das habilidades do personagem, e o que ele consegue fazer sem rolar dados.</p>
  </div>
</div>
  `,

  pericias: `
<div class="card">
  <h2>2. Perícias — Como você faz o que faz</h2>
  <div class="meta">Mecânica • Domínio Técnico</div>
  <p>As perícias são o domínio técnico real de um personagem.</p>
  <p>Elas determinam quão estável, segura e precisa é a ação.</p>
  
  <div class="highlight gold mt-1">
    <p><strong>Toda ação começa usando 1d6.</strong></p>
  </div>
</div>

<div class="card">
  <h2>Progressão de Dados</h2>
  <div class="meta">Cada perícia relevante aumenta o passo do dado</div>
  
  <ul class="level-list">
    <li>
      <span class="level-badge">d6</span>
      <div class="level-content">
        <strong>Sem perícia</strong>
        <span>Base para qualquer ação</span>
      </div>
    </li>
    <li>
      <span class="level-badge gold">d8</span>
      <div class="level-content">
        <strong>Uma vantagem/perícia</strong>
        <span>Algum conhecimento relevante</span>
      </div>
    </li>
    <li>
      <span class="level-badge gold">d10</span>
      <div class="level-content">
        <strong>Duas vantagens/perícias</strong>
        <span>Experiência significativa</span>
      </div>
    </li>
    <li>
      <span class="level-badge gold">d12</span>
      <div class="level-content">
        <strong>Três vantagens/perícias</strong>
        <span>Domínio absoluto</span>
      </div>
    </li>
  </ul>
  
  <div class="separator"></div>
  <p>Esse aumento não representa "poder bruto".</p>
  <p><strong class="text-gold">Ele representa controle.</strong></p>
  
  <div class="quote">Perícia é a diferença entre o caos e o domínio.</div>
</div>

<div class="card">
  <h2>Dados: o eixo de Estabilidade</h2>
  <div class="meta">Mecânica • Dados</div>
  <p>Em SOFK, o dado usado importa mais que o número rolado.</p>
  <p>Cada tipo de dado representa um nível de estabilidade da ação:</p>
  
  <table class="sofk-table">
    <tr><th>Dado</th><th>Representa</th></tr>
    <tr><td><strong class="text-accent">d6</strong></td><td>Caos, instinto, improviso, interferência da vida passada</td></tr>
    <tr><td><strong class="text-gold">d8</strong></td><td>Treinamento comum, técnica básica, foco parcial</td></tr>
    <tr><td><strong class="text-gold">d10</strong></td><td>Especialização, experiência real, domínio sólido</td></tr>
    <tr><td><strong class="text-gold">d12</strong></td><td>Maestria, sincronia espiritual, excelência absoluta</td></tr>
  </table>
</div>

<div class="card">
  <h2>Como tudo se encaixa na prática</h2>
  <div class="meta">Exemplo • Aplicação</div>
  
  <div class="highlight">
    <p><strong>Exemplo: John Motoboy dispara em alta velocidade</strong></p>
  </div>
  
  <p>John tenta atirar numa criatura enquanto pilota sua moto no caos da avenida.</p>
  
  <div class="rule-box">
    <h3>Ação base: 1d6</h3>
    <p class="text-muted">É difícil e caótica</p>
  </div>
  
  <p class="mt-1"><strong>Agora entram as perícias:</strong></p>
  
  <ul class="level-list">
    <li>
      <span class="level-badge gold">d8</span>
      <div class="level-content">
        <strong>John é motociclista</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">d10</span>
      <div class="level-content">
        <strong>John tem treinamento de combate em rodovias</strong>
      </div>
    </li>
    <li>
      <span class="level-badge gold">d12</span>
      <div class="level-content">
        <strong>Sua vida passada é de um Dullahan</strong>
        <span>(cavaleiros perfeitos)</span>
      </div>
    </li>
  </ul>
  
  <div class="highlight subtle mt-1">
    <p>O <strong class="text-gold">resultado final</strong> depende do dado.</p>
    <p>O <strong class="text-accent">impacto narrativo</strong> depende do atributo.</p>
    <p>A <strong>justificativa</strong> de por que ele usa aquele dado vem das perícias.</p>
  </div>
</div>
  `,

  estrutura: `
<div class="card">
  <h2>3. Estrutura da Ficha de Personagem de SOFK</h2>
  <div class="meta">Organização • Divisões</div>
  <p>A ficha de SOFK é dividida em duas grandes áreas:</p>
  
  <div class="stat-grid mt-1">
    <div class="stat-block">
      <div class="stat-label">Corpo Narrativo</div>
      <div class="stat-value" style="font-size: 1rem; margin-top: 0.5rem;">Passado, Presente, Futuro + Cordas</div>
    </div>
    <div class="stat-block">
      <div class="stat-label">Corpo Físico</div>
      <div class="stat-value" style="font-size: 1rem; margin-top: 0.5rem;">Vida, Estresse, Atributos</div>
    </div>
  </div>
  
  <div class="highlight gold mt-1">
    <p>Essa ficha integra mecânica e narrativa de maneira simbiótica — cada escolha diz algo sobre quem você é, quem você foi, e quem você tenta ser.</p>
  </div>
</div>

<div class="card">
  <h2>CARDS – Identidade Fragmentada do Personagem</h2>
  <div class="meta">Sistema • Identidade</div>
  <p>Os cards definem quem seu personagem é em três dimensões temporais:</p>
  
  <div class="mt-1">
    <span class="tag red">Presente</span>
    <span class="tag yellow">Passado</span>
    <span class="tag green">Futuro</span>
  </div>
</div>

<div class="card card-red">
  <h2>🔻 Cards de Presente</h2>
  <div class="meta">3 slots – fixos</div>
  <p>O jogador escolhe 3 cards de Presente ao criar o personagem.</p>
  
  <div class="separator"></div>
  <p><strong>Eles definem:</strong></p>
  <ul class="list">
    <li>Habilidades atuais</li>
    <li>Traços contemporâneos</li>
    <li>Atributos iniciais (Carne / Mente / Alma)</li>
  </ul>
  
  <div class="rule-box">
    <h3>Distribuição de Atributos</h3>
    <p>Cada personagem começa com <strong>1 ponto</strong> em cada atributo.</p>
    <p>O jogador recebe <strong class="text-gold">3 pontos extras</strong> para distribuir, sem ultrapassar 3 por atributo.</p>
  </div>
  
  <div class="highlight subtle">
    <p>Cards de Presente <strong>não aumentam</strong> ao longo do jogo.</p>
    <p>Representam quem o personagem é hoje.</p>
  </div>
</div>

<div class="card card-yellow">
  <h2>🟨 Cards de Passado</h2>
  <div class="meta">0–3 slots</div>
  <p>Ligados à vida passada.</p>
  
  <div class="separator"></div>
  <p><strong>Jogadores que começam como:</strong></p>
  <ul class="level-list">
    <li>
      <span class="level-badge">0</span>
      <div class="level-content">
        <strong>Mundanos</strong>
        <span>Nenhum card inicial</span>
      </div>
    </li>
    <li>
      <span class="level-badge gold">1</span>
      <div class="level-content">
        <strong>Espurcos</strong>
        <span>1 card inicial</span>
      </div>
    </li>
  </ul>
  
  <p class="mt-1">Durante a campanha, o personagem pode ganhar até <strong class="text-gold">+2 cards de Passado</strong>.</p>
  
  <div class="separator"></div>
  <p><strong>Cards de Passado representam:</strong></p>
  <ul class="list bullet">
    <li>Poder esotérico</li>
    <li>Ecos de traumas antigos</li>
    <li>Vícios, obsessões e habilidades da vida passada</li>
  </ul>
  
  <div class="highlight">
    <p>Eles também são a fonte da tensão narrativa do <strong>cabo de guerra</strong>.</p>
  </div>
</div>

<div class="card card-green">
  <h2>🟩 Cards de Futuro</h2>
  <div class="meta">4 slots principais</div>
  <p>Cards de Futuro representam <strong>quem você pode se tornar</strong>.</p>
  
  <div class="separator"></div>
  <p><strong>São um sistema de progressão:</strong></p>
  <ul class="list">
    <li>Treinamentos</li>
    <li>Evoluções de habilidades</li>
    <li>Marcas de superação</li>
    <li>Novos talentos esotéricos ou mundanos</li>
  </ul>
  
  <div class="highlight subtle mt-1">
    <p>Também podem ocupar slots liberados pela <strong>vitória contra a vida passada</strong> no Problema das Cordas.</p>
  </div>
</div>
  `,

  cordas: `
<div class="card">
  <h2>4. O PROBLEMA DAS CORDAS</h2>
  <div class="meta">Coração do Sistema • Conflito</div>
  <p>É o conflito fundamental entre:</p>
  
  <div class="stat-grid mt-1">
    <div class="stat-block" style="border: 1px solid var(--gold);">
      <div class="stat-value" style="font-size: 1.5rem;">🟨</div>
      <div class="stat-label">Vida Passada</div>
      <div class="text-muted" style="font-size: 0.85rem; margin-top: 0.25rem;">Corda Amarela</div>
    </div>
    <div class="stat-block" style="border: 1px solid var(--accent);">
      <div class="stat-value" style="font-size: 1.5rem;">🟥</div>
      <div class="stat-label">Identidade Atual</div>
      <div class="text-muted" style="font-size: 0.85rem; margin-top: 0.25rem;">Corda Vermelha</div>
    </div>
  </div>
  
  <p class="mt-1">As duas cordas se encontram num ponto central na ficha.</p>
  
  <div class="separator"></div>
  <p><strong>Esse conflito define:</strong></p>
  <ul class="list">
    <li>Quanta autonomia você tem</li>
    <li>Quanto controle a sua vida passada tem</li>
    <li>A integridade psicológica e narrativa do personagem</li>
  </ul>
</div>

<div class="card card-red">
  <h2>🔥 Quando a vida passada vence</h2>
  <div class="meta">Cordas • Derrota</div>
  
  <ul class="list dash">
    <li>Você perde 1 card de Presente</li>
    <li>O slot só pode ser preenchido com 1 card de Passado</li>
    <li>Você deve ficar com pelo menos 1 card de Presente</li>
  </ul>
</div>

<div class="card card-blue">
  <h2>💧 Quando o personagem vence</h2>
  <div class="meta">Cordas • Vitória</div>
  
  <ul class="list dash">
    <li>Você perde 1 card de Passado</li>
    <li>O slot só pode virar um card de Futuro</li>
  </ul>
</div>

<div class="card">
  <h2>O Ciclo Simbólico</h2>
  <div class="meta">Cordas • Ciclo</div>
  <p>Isso cria o ciclo simbólico:</p>
  
  <div class="flow">
    <span class="flow-item"><span class="tag yellow">Passado</span></span>
    <span class="flow-arrow">→</span>
    <span class="flow-item"><span class="tag red">Presente</span></span>
    <span class="flow-arrow">→</span>
    <span class="flow-item"><span class="tag green">Futuro</span></span>
    <span class="flow-arrow">→</span>
    <span class="flow-item"><span class="tag yellow">Passado</span></span>
  </div>
  
  <div class="quote">Uma dança constante entre identidade, trauma e reinvenção.</div>
</div>
  `,

  vida: `
<div class="card">
  <h2>5. A Vida do Personagem</h2>
  <div class="meta">Mecânica • Dano</div>
  <p>SOFK usa uma escala acumulativa de dano com 4 camadas.</p>
</div>

<div class="card">
  <h2>Tipos de Dano</h2>
  <div class="meta">Vida • Escalas</div>
  
  <ul class="level-list">
    <li>
      <span class="level-badge" style="background: rgba(66, 165, 245, 0.2); border-color: #42a5f5; color: #64b5f6;">🔹</span>
      <div class="level-content">
        <strong>Superficial</strong>
        <span>Arranhões, contusões leves</span>
      </div>
    </li>
    <li>
      <span class="level-badge" style="background: rgba(255, 193, 7, 0.2); border-color: #ffc107; color: #ffd54f;">🔸</span>
      <div class="level-content">
        <strong>Leve</strong>
        <span>Ferimentos que doem, mas não incapacitam</span>
      </div>
    </li>
    <li>
      <span class="level-badge" style="background: rgba(255, 152, 0, 0.2); border-color: #ff9800; color: #ffb74d;">🔶</span>
      <div class="level-content">
        <strong>Grave</strong>
        <span>Ferimentos sérios, requerem atenção</span>
      </div>
    </li>
    <li>
      <span class="level-badge" style="background: rgba(244, 67, 54, 0.2); border-color: #f44336; color: #e57373;">🟥</span>
      <div class="level-content">
        <strong>Letal</strong>
        <span>Risco de vida iminente</span>
      </div>
    </li>
  </ul>
</div>

<div class="card">
  <h2>Conversões de Dano</h2>
  <div class="meta">Vida • Acúmulo</div>
  
  <div class="rule-box">
    <h3>Sistema de Acúmulo</h3>
    <p><strong>3 Superficiais</strong> → 1 Leve</p>
    <p><strong>3 Leves</strong> → 1 Grave</p>
    <p><strong>3 Graves</strong> → 1 Letal</p>
  </div>
  
  <div class="highlight mt-1">
    <p><strong class="text-accent">1 Letal</strong> = risco de morte iminente</p>
    <p><strong class="text-accent">2 Letais</strong> = morte certa</p>
  </div>
</div>
  `,

  estresse: `
<div class="card">
  <h2>6. Estresse do Personagem</h2>
  <div class="meta">Mecânica • Pressão</div>
  <p>O estresse é tanto combustível quanto ruína para o personagem.</p>
</div>

<div class="card">
  <h2>ESTRESSE — Combustível e Ruína</h2>
  <div class="meta">Fontes • Acúmulo</div>
  
  <p><strong>Estresse vem de:</strong></p>
  <ul class="list bullet">
    <li>Uso de habilidades da vida passada</li>
    <li>Colapsos mentais</li>
    <li>Trauma</li>
    <li>Quebra emocional</li>
  </ul>
</div>

<div class="card card-red">
  <h2>Consequências do Estresse</h2>
  <div class="meta">Estresse • Efeitos</div>
  
  <p><strong>Quanto mais estresse:</strong></p>
  <ul class="list dash">
    <li>Mais difícil resistir à vida passada</li>
    <li>Mais frequentes episódios de perda de controle</li>
    <li>A vida passada pode assumir o corpo para sobreviver</li>
  </ul>
  
  <div class="highlight mt-1">
    <p>Isso cria um comportamento emergente:</p>
  </div>
  
  <div class="quote">O personagem teme seu próprio poder.</div>
</div>
  `
};

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a[data-page]");
  const content = document.getElementById("content-area");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
      document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
    });
  }

  function loadPage(page, push = true) {
    const pageData = fichaContent[page];
    if (pageData) {
      content.innerHTML = `<div class="page fade-in">${pageData}</div>`;
      setActiveLink(page);
      if (push) history.pushState({ page }, '', `#${page}`);
      content.scrollIntoView({ behavior: 'smooth' });
    } else {
      content.innerHTML = `<div class="card"><h2>Erro</h2><p>Página não encontrada.</p></div>`;
    }
  }

  function setActiveLink(page) {
    links.forEach(a => a.classList.toggle('active', a.dataset.page === page));
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
      
      // Close mobile menu after clicking a link
      if (navLinks.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Handle back/forward
  window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) || location.hash.replace('#', '') || 'atributos';
    loadPage(page, false);
  });

  // Load initial page from hash or default
  const initial = location.hash.replace('#', '') || 'atributos';
  loadPage(initial, false);
});
