🎬 Movie Explorer

Movie Explorer é um aplicativo web construído com Next.js e TypeScript para explorar filmes de forma rápida e agradável. Utiliza uma API de filmes para buscar dados atualizados como títulos, posters, sinopses e outros detalhes.
Este projeto serve tanto como uma ferramenta para descobrir e pesquisar filmes quanto como um exemplo de app moderno usando as melhores práticas do Next.js.

📌 Funcionalidades
- Busca de filmes por título ou gênero
- Listagem de filmes populares
- Detalhes completos de cada filme (sinopse, release, nota, etc.)
- Design responsivo para desktop e mobile
- Renderização otimizada com Next.js
#
🚀 Como usar localmente
Pré-requisitos
🟢 Node.js (v16+ recomendado)
📦 npm ou yarn
#
- Clone o repositório:
git clone https://github.com/LeonardoLauermann/movie-explorer.git
cd movie-explorer
#
- Instale as dependências:
npm install | yarn
#
- Configuração da API de filmes:
Crie um arquivo .env.local na raiz do projeto e adicione sua chave de API:
NEXT_PUBLIC_API_KEY=SuaApiKeyAqui
Substitua NEXT_PUBLIC_API_KEY pelo nome correto da variável usada no código (conforme implementação).
#
- Inicie o servidor de desenvolvimento:
npm run dev | yarn dev
Abra no navegador:
👉 http://localhost:3000
