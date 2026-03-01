import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async () => {
  await signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  );
  loginBox.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  load();
};

async function load() {
  const snap = await getDocs(collection(db, "pratos"));
  adminMenu.innerHTML = "";
  snap.forEach(d => {
    const p = d.data();
    adminMenu.innerHTML += `
      <div class="card">
        <div class="card-content">
          <h3>${p.nome}</h3>
          <input value="${p.preco}" onchange="updatePrice('${d.id}', this.value)">
          <button onclick="toggle('${d.id}', ${p.disponivel})">
            ${p.disponivel ? "Desativar" : "Ativar"}
          </button>
        </div>
      </div>
    `;
  });
}

window.toggle = async (id, estado) => {
  await updateDoc(doc(db, "pratos", id), { disponivel: !estado });
  load();
};

window.updatePrice = async (id, valor) => {
  await updateDoc(doc(db, "pratos", id), { preco: Number(valor) });
};
