const products = [
  {
    features: [
      "High-speed data transfer",
      "Compact and portable design",
      "Durable and water-resistant",
      "Compatible with multiple devices",
    ],
    description: "This 128GB USB adapter is a versatile and reliable storage solution.",
    price: "Naira 2,000",
    sn: 1,
    name: "128GB USB Adapter",
    image: "assets/images/electronics/shop475.png",
    warranty: "1-year warranty",
  },

  {
    features: [
      "High-speed data transfer",
      "Compact and portable design",
      "Durable and water-resistant",
      "Compatible with multiple devices",
    ],
    description: "This 128GB USB adapter is a versatile and reliable storage solution.",
    price: "Naira 2,000",
    sn: 1,
    name: "128GB USB Adapter",
    image: "assets/images/electronics/shop475.png",
    warranty: "1-year warranty",
  },
];

function displayProducts() {
  const container = document.getElementById("card-container");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card col-md-4 mb-3 p-3";

    const image = document.createElement("img");
    image.src = product.image;
    image.className = "img-fluid card-custome";

    const text = document.createElement("h4");
    text.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    card.appendChild(image);
    card.appendChild(text);
    card.appendChild(price);

    card.onclick = () => {
      const popup = document.getElementById("popup");
      const popupContent = document.getElementById("popup-content");

      const featuresList = product.features.map((feature) => `<li>${feature}</li>`).join("");

      const content = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="img-fluid mb-2">
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Features:</strong></p>
        <ul>${featuresList}</ul>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Warranty:</strong> ${product.warranty}</p>
        <button id="buy-button" class="btn btn-primary">Buy Now</button>
      `;

      popupContent.innerHTML = content;
      popup.style.display = "block";

      document.getElementById("buy-button").addEventListener("click", () => {
        alert("Buy button clicked!");
      });
    };

    container.appendChild(card);
  });
}

displayProducts();

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});