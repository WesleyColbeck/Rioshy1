import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const menu = document.getElementById("menu");
let pratos = [];

window.filterCategory = (cat) => {
  render(pratos.filter(p => p.categoria === cat));
};

function render(lista) {
  menu.innerHTML = "";
  lista.forEach(p => {
    menu.innerHTML += `
      <div class="card">
        <img src="${p.imagem}">
        <div class="card-content">
          <h3>${p.nome}</h3>
          <p>${p.ingredientes}</p>
          <p class="price">R$ ${p.preco}</p>
        </div>
      </div>
    `;
  });
}

const snap = await getDocs(collection(db, "pratos"));
snap.forEach(doc => {
  const d = doc.data();
  if (d.disponivel) pratos.push(d);
});
render(pratos);
