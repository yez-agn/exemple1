// Fonction pour récupérer l'ID dans l'URL
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const productId = getProductId();

fetch("assets/data.json")
  .then(response => response.json())
  .then(data => {
    const produit = data.produits.find(p => p.id == productId);

    if (!produit) {
      document.getElementById("product-details").innerHTML =
        "<p>Produit non trouvé.</p>";
      return;
    }

    const detailsSection = document.getElementById("product-details");
    detailsSection.innerHTML = `
      <div class="details-container">
        <div class="details-image">
          <img src="assets/images/${produit.image}" alt="${produit.nom}">
        </div>
        <div class="details-info">
          <h2>${produit.nom}</h2>
          <p class="price">${produit.prix}</p>
          <p>Matière : Cuir / Tissu (exemple)</p>
          <p>Taille : Petit / Moyen / Grand</p>
          <p>Couleur : Noir / Beige / Rose</p>
          <a href="https://wa.me/229XXXXXXXX" class="btn primary">Commander sur WhatsApp</a>
        </div>
      </div>
    `;
  })
  .catch(error => console.error("Erreur de chargement du JSON :", error));
