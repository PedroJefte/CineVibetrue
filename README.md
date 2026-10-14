# 🎬 CineVibe

Catálogo de filmes e animes feito com **HTML, CSS e JavaScript puro**. Na página inicial você navega pelos destaques, busca por título e marca favoritos; em cada filme vê sinopse, elenco e pode deixar uma avaliação com estrelas e um comentário.

🔗 **Acesse:** https://pedrojefte.github.io/CineVibetrue/

<!-- Coloque aqui um print da página inicial: arraste a imagem para o editor do GitHub que ele gera o link -->
<img width="1600" height="787" alt="WhatsApp Image 2026-10-14 at 09 41 20" src="https://github.com/user-attachments/assets/49f6ea5d-2aa0-4349-8f9b-cc094c47cf31" />

## ✨ Funcionalidades

- **Catálogo** com 12 títulos (filmes e animes), com nota, gênero e ano
- **Busca em tempo real** pelo título, sem recarregar a página; a busca das páginas de detalhe leva para a inicial já filtrada
- **Favoritos** com ❤️, salvos no navegador (`localStorage`), que continuam marcados ao voltar ao site
- **Página de detalhe** de cada título com sinopse e elenco com fotos
- **Avaliação com estrelas** (1 a 5) e comentários
- **Layout responsivo** para celular e tablet

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS, media queries)
- JavaScript (DOM, eventos, `localStorage`, `URLSearchParams`)

## 📁 Estrutura

```
CineVibetrue/
├── index.html        # página inicial: carrossel, busca e cards
├── *.html            # uma página de detalhe por título
├── css/
│   ├── index.css     # estilos da página inicial
│   └── detalhes.css  # estilos das páginas de detalhe
├── js/
│   ├── search.js     # busca por título
│   ├── fav.js        # favoritos com localStorage
│   └── Estrela.js    # avaliação com estrelas e comentários
└── img/              # pôsteres e fotos do elenco
```

## ▶️ Como rodar

Não precisa instalar nada:

```bash
git clone https://github.com/PedroJefte/CineVibetrue.git
```

Abra o `index.html` no navegador (ou use a extensão Live Server do VS Code).

## 💡 O que aprendi

- Manipular o DOM com JavaScript: filtrar elementos, criar comentários e trocar ícones
- Guardar dados no navegador com `localStorage`
- Evitar que texto digitado pelo usuário vire HTML na página (`textContent` em vez de `innerHTML`)
- Organizar CSS em arquivos separados e adaptar o layout com media queries

## 🔜 Próximos passos

- [ ] Gerar os cards e as páginas de detalhe a partir de um arquivo JSON, em vez de um HTML por filme
- [ ] Buscar dados reais da API do TMDB
- [ ] Salvar os comentários no `localStorage`
- [ ] Página "Meus favoritos"

## ⚖️ Aviso

Pôsteres e fotos usados apenas para fins de estudo, sem fins comerciais. Os direitos pertencem aos estúdios e fotógrafos.

## 👤 Autor

**Pedro Jefte** · [LinkedIn](https://www.linkedin.com/in/pedro-jefte-407651405/) · [GitHub](https://github.com/PedroJefte)
