import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:3000/products");
      if (!res.ok) throw new Error("No se pudo conectar al backend.");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("No se pudieron cargar los productos. ¿Backend iniciado?");
      setProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (product) => {
    setLoading(true);
    setError("");
    try {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      await fetchProducts();
    } catch {
      setError("Error al agregar producto.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError("");
    try {
      await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
      await fetchProducts();
    } catch {
      setError("Error al eliminar producto.");
    }
    setLoading(false);
  };

  const handleUpdate = async (id, product) => {
    setLoading(true);
    setError("");
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      setEditingProduct(null);
      await fetchProducts();
    } catch {
      setError("Error al actualizar producto.");
    }
    setLoading(false);
  };

  // Estilos embebidos premium y responsivos
  const styles = {
    app: {
      backgroundColor: "#0e0e0e",
      minHeight: "100vh",
      color: "#fff",
      padding: "2rem 1.5rem",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "980px",
      margin: "0 auto",
      transition: "background 0.4s",
    },
    logoBanner: {
      textAlign: "center",
      marginBottom: "0.5rem",
      paddingTop: "12px",
    },
    logo: {
      width: "115px",
      height: "auto",
      display: "inline-block",
      filter: "drop-shadow(0 0 5px rgba(39,174,96,0.6))",
      userSelect: "none",
      pointerEvents: "none"
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "900",
      marginBottom: "2rem",
      letterSpacing: "1.5px",
      userSelect: "none",
      textTransform: "uppercase",
      color: "#fff",
      textShadow: "0 1px 4px rgba(39,174,96,0.08),0 0 1px #222",
      lineHeight: "1.17",
    },
    divider: {
      border: "none",
      borderTop: "1.5px solid rgba(39, 174, 96, 0.20)",
      width: "100%",
      margin: "2.2rem 0 1.2rem 0",
      maxWidth: "960px",
    },
    error: {
      color: "#f66",
      textAlign: "center",
      fontWeight: "bold",
      background: "#220",
      borderRadius: "8px",
      margin: "1.5rem auto",
      padding: "1rem",
      maxWidth: "400px"
    },
    main: {
      flex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.logoBanner}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          style={styles.logo}
          draggable={false}
        />
      </div>
      <h1 style={styles.title}>NIKE PRODUCT DASHBOARD</h1>
      <ProductForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        editingProduct={editingProduct}
      />
      <hr style={styles.divider} />
      <div style={styles.main}>
        {error && <div style={styles.error}>{error}</div>}
        <ProductList
          products={products}
          loading={loading}
          onDelete={handleDelete}
          onEdit={setEditingProduct}
        />
      </div>
    </div>
  );
}

export default App;

