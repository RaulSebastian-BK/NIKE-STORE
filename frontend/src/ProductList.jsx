import React from "react";

function ProductList({ products, loading, onDelete, onEdit }) {
  const styles = {
    container: {
      maxWidth: "960px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      minHeight: "200px"
    },
    card: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181818",
      padding: "1rem",
      borderRadius: "10px",
      boxShadow: "0 0 15px rgba(0,0,0,0.8)",
      transition: "box-shadow 0.22s",
    },
    image: {
      width: "90px",
      height: "90px",
      objectFit: "cover",
      borderRadius: "10px",
      marginRight: "1.25rem",
      boxShadow: "0 0 8px rgba(39,174,96,0.7)",
      flexShrink: 0,
      background: "#111",
    },
    name: {
      flexGrow: 1,
      fontWeight: "700",
      fontSize: "1.1rem",
      color: "#f1f1f1",
    },
    price: {
      marginRight: "1rem",
      color: "#27ae60",
      fontWeight: "600",
      minWidth: "90px",
      textAlign: "right",
      userSelect: "none",
    },
    button: {
      padding: "0.45rem 0.9rem",
      fontSize: "0.9rem",
      fontWeight: "600",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      marginLeft: "0.5rem",
      transition: "background-color 0.22s",
    },
    editButton: {
      backgroundColor: "#fff",
      color: "#0e0e0e",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
    empty: {
      color: "#41f673",
      fontWeight: "bold",
      textAlign: "center",
      margin: "2.7rem auto 0 auto",
      opacity: 0.84,
      fontSize: "1.17rem",
      fontStyle: "italic",
      letterSpacing: "0.3px",
      minHeight: "60px"
    },
    loading: {
      color: "#fff",
      textAlign: "center",
      fontStyle: "italic",
      margin: "2.7rem 0 0 0"
    }
  };

  if (loading) {
    return <div style={styles.loading}>Cargando productos...</div>;
  }

  if (!products || products.length === 0) {
    return (
      <div style={styles.empty}>
        No hay productos aún.
        <br />
        <span style={{ color: "#19ec74" }}>Agrega el primero y hazlo legendario.</span>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
              draggable={false}
            />
          )}
          <div style={styles.name}>{product.name}</div>
          <div style={styles.price}>${product.price}</div>
          <button
            style={{ ...styles.button, ...styles.editButton }}
            onClick={() => onEdit(product)}
            aria-label={`Editar ${product.name}`}
          >
            Editar
          </button>
          <button
            style={{ ...styles.button, ...styles.deleteButton }}
            onClick={() => onDelete(product.id)}
            aria-label={`Eliminar ${product.name}`}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

