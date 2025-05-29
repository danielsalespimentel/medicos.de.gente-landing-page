# Instruções para o Blog - Médicos de Gente

Este documento contém instruções para manutenção e atualização do blog do site Médicos de Gente.

## Estrutura do Blog

O blog foi implementado com a seguinte estrutura:

```
blog/
├── assets/
│   ├── css/
│   │   └── blog.css
│   └── js/
│       └── blog.js
├── posts/
│   ├── diferenca-entre-urgencia-e-emergencia.html
│   ├── como-preparar-casa-atendimento-medico-domiciliar.html
│   ├── pressao-alta-quando-preocupante.html
│   └── ... (outros posts)
└── index.html
```

## Como Adicionar Novos Artigos

Para adicionar um novo artigo ao blog, siga os passos abaixo:

1. **Crie um novo arquivo HTML na pasta `blog/posts/`**
   - Use um nome de arquivo amigável para URL (sem acentos, espaços ou caracteres especiais)
   - Exemplo: `novo-artigo-sobre-saude.html`

2. **Copie a estrutura de um post existente**
   - Use qualquer arquivo da pasta `posts` como modelo
   - Mantenha a mesma estrutura HTML, alterando apenas o conteúdo

3. **Atualize o conteúdo do novo post**
   - Título (`<title>` e `<h1>`)
   - Meta tags (description, og:title, og:description, og:url)
   - Data do post
   - Conteúdo do artigo
   - Fontes de referência

4. **Atualize a navegação entre posts**
   - No post que era o mais recente, adicione um link "Próximo artigo" apontando para o novo post
   - No novo post, adicione um link "Artigo anterior" apontando para o post que era o mais recente

5. **Adicione o novo post à página principal do blog**
   - Abra o arquivo `blog/index.html`
   - Adicione um novo card de post no início da seção `blog-posts` (para manter a ordem do mais recente para o mais antigo)
   - Use a mesma estrutura dos cards existentes, atualizando título, data, resumo e link

## Exemplo de Card para Novo Post

```html
<div class="post-card">
    <div class="post-card-image">
        <img src="../assets/images/favicon.png" alt="Médicos de Gente">
    </div>
    <div class="post-card-content">
        <div class="post-card-date">26 de Maio de 2025</div>
        <h2 class="post-card-title">Título do Novo Artigo</h2>
        <div class="post-card-excerpt">
            <p>Breve resumo do conteúdo do artigo, com aproximadamente duas linhas.</p>
        </div>
        <a href="posts/nome-do-arquivo.html" class="post-card-link">Ler mais <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

## Dicas para Manutenção

- **Datas dos posts**: Mantenha a ordem cronológica, com o post mais recente sempre no topo
- **URLs amigáveis**: Use nomes de arquivo descritivos e sem caracteres especiais
- **Imagens**: Se quiser adicionar imagens específicas para os posts, coloque-as em uma pasta como `blog/assets/images/posts/`
- **Responsividade**: O layout já está responsivo, funcionando bem em dispositivos móveis e desktop
- **SEO**: Mantenha as meta tags atualizadas para cada post, especialmente title, description e Open Graph

## Integração com o Site Principal

O blog já está integrado ao site principal através de:

1. Item "Blog" no menu de navegação principal
2. Link "Blog" no rodapé do site
3. Navegação consistente entre o blog e o site principal

Ao fazer upload dos arquivos, certifique-se de manter essa estrutura de navegação intacta.
