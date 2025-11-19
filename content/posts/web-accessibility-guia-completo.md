---
title: "Web Accessibility: Guia Completo para Desenvolvedores"
date: 2025-01-17T09:00:00-03:00
draft: false
tags: ["acessibilidade", "a11y", "wcag", "desenvolvimento-web"]
categories: ["Development"]
description: "Guia prático de acessibilidade web seguindo as diretrizes WCAG 2.1 com exemplos de código e melhores práticas."
cover:
    image: ""
    alt: "Web Accessibility"
    caption: "Tornando a web acessível para todos"
    relative: false
showToc: true
TocOpen: true
---

## Por Que Acessibilidade Importa?

Acessibilidade web não é opcional - é essencial. Mais de 1 bilhão de pessoas no mundo têm algum tipo de deficiência, e todos merecem acesso igual à informação e serviços online.

### Além do Óbvio

Acessibilidade beneficia **todos**:

- **Idosos**: Melhor contraste e textos maiores
- **Usuários móveis**: Touch targets adequados
- **Conexões lentas**: Sites que funcionam sem JavaScript
- **SEO**: Estrutura semântica melhora ranqueamento
- **Legal**: Evita processos e multas

## WCAG 2.1: Os Quatro Princípios

### 1. Perceptível

Informação deve ser apresentada de forma que usuários possam perceber.

#### 1.1 Alternativas de Texto

```html
<!-- ✅ Bom: Alt text descritivo -->
<img
  src="grafico-vendas.png"
  alt="Gráfico de barras mostrando aumento de 50% nas vendas de Q1 para Q2"
/>

<!-- ❌ Ruim: Alt text genérico -->
<img src="grafico.png" alt="gráfico" />

<!-- ✅ Bom: Imagem decorativa -->
<img src="divisor.png" alt="" />
```

#### 1.2 Contraste de Cores

**Requisitos WCAG AA**:
- Texto normal: 4.5:1
- Texto grande (18pt+ ou 14pt+ bold): 3:1
- Componentes de UI: 3:1

```css
/* ✅ Bom: Contraste 7.2:1 */
.text {
  color: #000000;
  background: #ffffff;
}

/* ❌ Ruim: Contraste 2.8:1 */
.text-low-contrast {
  color: #999999;
  background: #ffffff;
}
```

**Ferramentas**:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (Lighthouse)

#### 1.3 Conteúdo Adaptável

Use HTML semântico:

```html
<!-- ✅ Bom: Semântica clara -->
<article>
  <h2>Título do Artigo</h2>
  <p>Conteúdo do artigo...</p>
</article>

<!-- ❌ Ruim: Divs genéricas -->
<div class="article">
  <div class="title">Título do Artigo</div>
  <div class="content">Conteúdo...</div>
</div>
```

### 2. Operável

Interface deve ser operável por todos.

#### 2.1 Acessibilidade por Teclado

**Tudo deve funcionar com teclado**:

```html
<!-- ✅ Bom: Button nativo -->
<button onclick="salvar()">Salvar</button>

<!-- ❌ Ruim: Div como botão -->
<div onclick="salvar()">Salvar</div>

<!-- ⚠️ Aceitável: Div com ARIA (mas prefira button) -->
<div
  role="button"
  tabindex="0"
  onclick="salvar()"
  onkeypress="handleKeyPress(event)"
>
  Salvar
</div>
```

#### 2.2 Indicadores de Foco

**Sempre visíveis e com contraste adequado**:

```css
/* ✅ Bom: Indicador customizado */
button:focus-visible {
  outline: 2px solid #0284c7;
  outline-offset: 2px;
}

/* ❌ Ruim: Remove outline */
button:focus {
  outline: none; /* Nunca faça isso! */
}
```

#### 2.3 Tempo Suficiente

```javascript
// ✅ Bom: Aviso antes de expirar
let timeoutWarning;
let timeout;

function startTimer() {
  // Avisa 60s antes
  timeoutWarning = setTimeout(() => {
    showWarning('Sua sessão expirará em 1 minuto');
  }, 14 * 60 * 1000); // 14 minutos

  // Expira em 15 minutos
  timeout = setTimeout(logout, 15 * 60 * 1000);
}

function extendSession() {
  clearTimeout(timeoutWarning);
  clearTimeout(timeout);
  startTimer();
}
```

### 3. Compreensível

Conteúdo deve ser compreensível.

#### 3.1 Formulários Acessíveis

```html
<!-- ✅ Exemplo completo de formulário acessível -->
<form>
  <div class="form-field">
    <!-- Label associado -->
    <label for="email">
      Email
      <span aria-label="obrigatório">*</span>
    </label>

    <!-- Input com atributos de acessibilidade -->
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-invalid="false"
      aria-describedby="email-help email-error"
      autocomplete="email"
    />

    <!-- Texto de ajuda -->
    <p id="email-help" class="form-help">
      Nunca compartilharemos seu email.
    </p>

    <!-- Mensagem de erro (inicialmente oculta) -->
    <p
      id="email-error"
      class="form-error"
      role="alert"
      aria-live="polite"
      hidden
    >
      <!-- Erro será inserido aqui -->
    </p>
  </div>

  <button type="submit">Enviar</button>
</form>
```

#### 3.2 Validação de Formulários

```javascript
function validateEmail(input) {
  const errorMsg = document.getElementById('email-error');

  if (!input.validity.valid) {
    // Mostra erro
    input.setAttribute('aria-invalid', 'true');
    errorMsg.textContent = 'Por favor, insira um email válido';
    errorMsg.hidden = false;
    return false;
  } else {
    // Remove erro
    input.setAttribute('aria-invalid', 'false');
    errorMsg.hidden = true;
    return true;
  }
}
```

#### 3.3 Mensagens de Status

```html
<!-- Loading -->
<div role="status" aria-live="polite">
  <span aria-label="Carregando">⏳</span>
  Salvando...
</div>

<!-- Sucesso -->
<div role="alert" aria-live="assertive">
  ✓ Dados salvos com sucesso!
</div>

<!-- Erro -->
<div role="alert" aria-live="assertive">
  ✗ Erro ao salvar. Tente novamente.
</div>
```

### 4. Robusto

Conteúdo deve funcionar com tecnologias assistivas.

#### 4.1 HTML Válido

```bash
# Valide seu HTML
npx html-validate "**/*.html"
```

#### 4.2 ARIA Correto

**Regras de ouro do ARIA**:

1. **Não use ARIA se HTML semântico existir**
2. **Não mude semântica nativa**
3. **Elementos interativos devem ser acessíveis por teclado**
4. **Não use `role="presentation"` ou `aria-hidden` em elementos focáveis**
5. **Elementos interativos devem ter nome acessível**

```html
<!-- ✅ Bom: HTML semântico (sem ARIA) -->
<button>Clique aqui</button>

<!-- ⚠️ Use ARIA apenas quando necessário -->
<div
  role="button"
  tabindex="0"
  aria-pressed="false"
>
  Toggle
</div>

<!-- ❌ Ruim: ARIA esconde elemento focável -->
<button aria-hidden="true">Botão</button>
```

## Componentes Comuns

### Modal/Dialog Acessível

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirmar Exclusão</h2>
  <p id="dialog-description">
    Tem certeza que deseja excluir este item?
  </p>

  <button onclick="closeDialog()">Cancelar</button>
  <button onclick="confirmDelete()">Excluir</button>
</div>
```

```javascript
// Gerenciamento de foco
function openDialog() {
  const dialog = document.querySelector('[role="dialog"]');
  const firstFocusable = dialog.querySelector('button');

  // Salva elemento com foco atual
  previousFocus = document.activeElement;

  // Move foco para dialog
  dialog.removeAttribute('hidden');
  firstFocusable.focus();

  // Trap focus dentro do dialog
  dialog.addEventListener('keydown', trapFocus);
}

function closeDialog() {
  const dialog = document.querySelector('[role="dialog"]');

  dialog.setAttribute('hidden', '');
  dialog.removeEventListener('keydown', trapFocus);

  // Restaura foco
  previousFocus.focus();
}

function trapFocus(e) {
  if (e.key === 'Tab') {
    const focusable = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }

  if (e.key === 'Escape') {
    closeDialog();
  }
}
```

### Tabs Acessíveis

```html
<div class="tabs">
  <div role="tablist" aria-label="Sample Tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0"
    >
      Tab 1
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1"
    >
      Tab 2
    </button>
  </div>

  <div
    role="tabpanel"
    id="panel-1"
    aria-labelledby="tab-1"
    tabindex="0"
  >
    Conteúdo da Tab 1
  </div>

  <div
    role="tabpanel"
    id="panel-2"
    aria-labelledby="tab-2"
    tabindex="0"
    hidden
  >
    Conteúdo da Tab 2
  </div>
</div>
```

## Testes de Acessibilidade

### Testes Automatizados

```bash
# Pa11y
npm install -g pa11y
pa11y https://example.com

# axe-core
npm install -g @axe-core/cli
axe https://example.com

# Lighthouse
npx lighthouse https://example.com --only-categories=accessibility
```

### Testes Manuais

**Checklist básico**:

- [ ] Navegue apenas com teclado (Tab, Shift+Tab, Enter, Espaço, Setas)
- [ ] Use leitor de tela (NVDA, JAWS, VoiceOver)
- [ ] Teste em modo de alto contraste
- [ ] Desabilite CSS e veja se faz sentido
- [ ] Aumente zoom para 200%
- [ ] Teste em diferentes dispositivos

### Testes com Usuários

Inclua pessoas com deficiências nos seus testes:
- Usuários cegos (leitores de tela)
- Usuários com baixa visão
- Usuários com deficiências motoras
- Usuários com deficiências cognitivas

## Ferramentas Essenciais

### Extensões de Navegador

- **axe DevTools**: Testes automáticos robustos
- **WAVE**: Visualização de problemas
- **Lighthouse**: Auditoria completa
- **Accessibility Insights**: Da Microsoft

### Leitores de Tela

- **NVDA** (Windows - Gratuito)
- **JAWS** (Windows - Pago)
- **VoiceOver** (macOS/iOS - Nativo)
- **TalkBack** (Android - Nativo)

### Simuladores

- **Funkify**: Simula diferentes deficiências
- **ColorOracle**: Simulador de daltonismo
- **ChromeLens**: Chrome extension para simulações

## Recursos de Aprendizado

### Documentação Oficial

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [W3C WAI](https://www.w3.org/WAI/)

### Cursos e Tutoriais

- [Web Accessibility by Google (Udacity)](https://www.udacity.com/course/web-accessibility--ud891)
- [Deque University](https://dequeuniversity.com/)
- [A11ycasts (YouTube)](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

### Comunidades

- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)

## Conclusão

Acessibilidade não é uma feature - é um requisito fundamental. Comece pequeno:

1. Use HTML semântico
2. Adicione alt text em imagens
3. Teste com teclado
4. Verifique contraste de cores
5. Rode ferramentas automatizadas

Cada melhoria conta. A web deve ser para todos! 🌐✨

---

**Quer aprender mais?** Confira nossa série sobre acessibilidade:
- Design Tokens e Acessibilidade
- Formulários Acessíveis: Guia Completo
- Testes Automatizados de Acessibilidade
- ARIA: Quando e Como Usar
