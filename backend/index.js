const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, "products.json");

app.use(cors());
app.use(express.json());

function readProducts() {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}
function saveProducts(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

app.get("/products", (req, res) => {
  const products = readProducts();
  res.json(products);
});
app.post("/products", (req, res) => {
  const products = readProducts();
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});
app.put("/products/:id", (req, res) => {
  const products = readProducts();
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Producto no encontrado" });
  products[index] = { ...products[index], ...req.body };
  saveProducts(products);
  res.json(products[index]);
});
app.delete("/products/:id", (req, res) => {
  let products = readProducts();
  const id = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== id);
  saveProducts(products);
  res.json({ message: "Producto eliminado" });
});

console.log("Ruta real del archivo JSON:", DATA_FILE);
if (!fs.existsSync(DATA_FILE)) {
  console.warn("⚠️  ¡Archivo products.json NO EXISTE en la ruta indicada!");
} else {
  console.log("✅ Archivo products.json encontrado.");
}

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
