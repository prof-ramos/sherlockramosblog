# Diretrizes e Memórias do Projeto (sherlockramosblog)

## Memórias do Tipo `project` (Contexto e Arquitetura)

- **Arquivo de Configuração**: O arquivo de configuração principal é estritamente `hugo.yaml` (YAML, não `.yml` nem `config.toml`).
- **Tema**: O tema em uso é o **PaperMod**, configurado como submódulo Git em `themes/PaperMod`.
- **Modo Inicial da Home**: O site utiliza `profileMode` ativado em `params.profileMode.enabled: true` (com foto de perfil, título, subtítulo e botões para `/posts/` e `/tags/`).
- **Ícones Sociais**:
  - Em PaperMod, `params.socialIcons` aceita `name: twitter` (para o ícone clássico do pássaro) ou `name: x` (para o logotipo moderno do X). O perfil atual aponta para `https://x.com/GatoMaconhado_`.
- **Artefatos de Build**:
  - `public/`, `resources/_gen/` e `.hugo_build.lock` NUNCA devem ser versionados no Git. Devem permanecer listados no `.gitignore`.
- **Repositório Remoto**:
  - Repositório no GitHub: `prof-ramos/sherlockramosblog`.
  - Branch padrão: `main`.

---

## Memórias do Tipo `feedback` (Boas Práticas e Prevenção de Erros)

- **Atenção a `.gitignore` antes de `git add .`**:
  - Ao rodar `hugo` localmente para testes ou compilação, o Hugo gera pastas e arquivos efêmeros (`public/`, `.hugo_build.lock`). Sempre verifique se o `.gitignore` está configurado antes de executar `git add .`, para evitar poluir o histórico de commits com builds.
- **Pipelines Git cegos (`&&`)**:
  - Nunca rode sequências como `git init && git commit -m "..."` em repositórios que já possuem commits ou cujo working tree possa estar limpo. O `git commit` sem mudanças encerra com código de saída 1 e aborta qualquer comando posterior encadeado com `&&`.
- **Depreciações do Hugo (v0.158+)**:
  - A chave `languageCode` foi depreciada a favor de `locale`. Priorize sintaxes atualizadas ao ajustar configurações do Hugo.
- **`README.md` com propósito**:
  - Evite deixar arquivos `README.md` vazios (0 bytes) no repositório inicial; popule ao menos com título e instruções mínimas de execução (`hugo server -D`).
