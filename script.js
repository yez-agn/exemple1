fetch("assets/data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("products-container");

    data.produits.forEach(produit => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="assets/images/${produit.image}" alt="${produit.nom}">
        <h3>${produit.nom}</h3>
        <p>${produit.prix}</p>
        <a href="details.html?id=${produit.id}" class="btn small">Voir détails</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Erreur de chargement du JSON :", error));
