/* 
  Projeto: Entre Mar & Fera
  Autor: Yas ✨
  Descrição:
  JavaScript responsável pelas interações visuais,
  animações e filtro por categoria.
*/

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     ANIMAÇÃO DOS CARDS AO SCROLL
  ================================= */
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  cards.forEach(card => observer.observe(card));


  /* ================================
     SCROLL SUAVE (links internos)
  ================================= */
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  /* ================================
     FILTRO POR CATEGORIA
  ================================= */
  const botoesFiltro = document.querySelectorAll(".filtros button");
  const titulosCategoria = document.querySelectorAll(".categoria-titulo");

  botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {

      // Botão ativo
      botoesFiltro.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      const filtro = botao.dataset.filter;

      // Mostra / esconde cards
      cards.forEach(card => {
        if (filtro === "todos" || card.dataset.categoria === filtro) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Mostra títulos apenas quando "todos"
      titulosCategoria.forEach(titulo => {
        titulo.style.display = (filtro === "todos") ? "block" : "none";
      });

    });
  });

});
