# Sherlock Ramos Blog

Blog pessoal desenvolvido com [Hugo](https://gohugo.io/) e o tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod/).

## Novo CMS

A nova aplicação em [cms/](cms/) usa Payload, Next.js, Turso e Vercel Blob para
escrever e publicar pelo navegador. Consulte o [manual do CMS](cms/README.md)
para painel, execução local, importação e recuperação. O Hugo permanece na raiz
durante a validação da migração. O [manual do Hugo](manual-hugo.md) documenta o
fluxo anterior.

## Executar Localmente

```bash
# Baixar o tema PaperMod na primeira execução após clonar o projeto
git submodule update --init --recursive

# Iniciar o servidor de desenvolvimento com rascunhos ativados
hugo server -D
```

O site estará acessível em `http://localhost:1313/`.

Se aparecer `Page Not Found` e o Hugo avisar que não encontrou layouts,
confira se o tema foi baixado com o comando de submódulos acima e reinicie o servidor.
