# Instruções para Publicação da Landing Page - Médicos de Gente

## Opção 1: Publicação com GitHub e Vercel (Recomendado)

### Passo 1: Criar uma conta no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" (Cadastrar-se)
3. Siga as instruções para criar sua conta
4. Confirme seu e-mail após o cadastro

### Passo 2: Criar um novo repositório no GitHub
1. Após fazer login, clique no botão "+" no canto superior direito
2. Selecione "New repository" (Novo repositório)
3. Dê um nome ao repositório (sugestão: "medicosdegente-site")
4. Deixe o repositório como "Public" (Público)
5. Clique em "Create repository" (Criar repositório)

### Passo 3: Enviar os arquivos para o GitHub
Existem duas maneiras de fazer isso:

**Opção A: Usando a interface do GitHub (mais simples)**
1. No seu repositório, clique no botão "Add file" (Adicionar arquivo) e selecione "Upload files" (Enviar arquivos)
2. Arraste todos os arquivos e pastas da landing page para a área indicada
3. Adicione uma mensagem como "Primeira versão do site"
4. Clique em "Commit changes" (Confirmar alterações)

**Opção B: Usando o GitHub Desktop (recomendado para atualizações futuras)**
1. Baixe e instale o [GitHub Desktop](https://desktop.github.com/)
2. Faça login com sua conta do GitHub
3. Clique em "File" > "Clone repository" (Clonar repositório)
4. Selecione seu repositório e escolha uma pasta local
5. Copie todos os arquivos da landing page para esta pasta
6. No GitHub Desktop, você verá as alterações listadas
7. Adicione uma mensagem como "Primeira versão do site"
8. Clique em "Commit to main" e depois em "Push origin"

### Passo 4: Criar uma conta na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" (Cadastrar-se)
3. Escolha a opção "Continue with GitHub" (Continuar com GitHub)
4. Autorize a Vercel a acessar sua conta do GitHub

### Passo 5: Publicar o site na Vercel
1. Na dashboard da Vercel, clique em "Add New..." > "Project"
2. Selecione o repositório "medicosdegente-site" da lista
3. Mantenha as configurações padrão (a Vercel detectará automaticamente que é um site estático)
4. Clique em "Deploy" (Publicar)
5. Aguarde alguns instantes enquanto a Vercel publica seu site
6. Após a conclusão, você receberá um link (URL) para acessar seu site

### Passo 6: Configurar seu domínio personalizado
1. Na dashboard da Vercel, acesse seu projeto
2. Clique na aba "Settings" (Configurações) e depois em "Domains" (Domínios)
3. Digite seu domínio: medicosdegente.com.br
4. Clique em "Add" (Adicionar)
5. A Vercel fornecerá instruções específicas para configurar seu domínio
6. Você precisará acessar o painel de controle do seu provedor de domínio (onde registrou medicosdegente.com.br) e atualizar os registros DNS conforme as instruções da Vercel

## Opção 2: Publicação em Hospedagem Tradicional

Se preferir usar uma hospedagem tradicional (como Hostgator, Locaweb, etc.):

1. Compacte todos os arquivos da landing page em um arquivo ZIP
2. Acesse o painel de controle da sua hospedagem
3. Procure por opções como "Gerenciador de Arquivos" ou "File Manager"
4. Navegue até a pasta principal do seu site (geralmente chamada "public_html" ou "www")
5. Faça upload do arquivo ZIP
6. Extraia o arquivo ZIP diretamente no servidor
7. Verifique se o arquivo index.html está na pasta raiz

## Como Atualizar o Site no Futuro

### Se estiver usando GitHub e Vercel:
1. Faça as alterações necessárias nos arquivos
2. Envie as alterações para o GitHub (usando a interface web ou GitHub Desktop)
3. A Vercel detectará automaticamente as mudanças e atualizará seu site

### Se estiver usando hospedagem tradicional:
1. Faça as alterações necessárias nos arquivos
2. Faça upload dos arquivos modificados para o servidor, substituindo os antigos

## Personalizações Comuns

### Para alterar textos:
1. Abra o arquivo `index.html` em um editor de texto (como Bloco de Notas ou Visual Studio Code)
2. Localize o texto que deseja alterar
3. Faça as modificações necessárias
4. Salve o arquivo e publique as alterações

### Para alterar imagens:
1. Prepare a nova imagem (mantenha o mesmo tamanho da original para melhores resultados)
2. Substitua o arquivo na pasta `assets/images/`
3. Se estiver mudando o nome do arquivo, lembre-se de atualizar a referência no arquivo HTML

### Para alterar cores:
1. Abra o arquivo `assets/css/style.css`
2. Localize a seção `:root` no início do arquivo
3. Modifique os valores das cores (ex: `--primary-color: #35579A;`)
4. Salve o arquivo e publique as alterações

## Suporte

Se precisar de ajuda com a publicação ou personalização do site, considere:
1. Contratar um desenvolvedor web para assistência pontual
2. Buscar tutoriais específicos no YouTube sobre GitHub, Vercel ou sua hospedagem
3. Entrar em contato com o suporte da sua hospedagem para orientações específicas
