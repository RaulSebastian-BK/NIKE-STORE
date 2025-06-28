import React, { useState, useEffect, useRef } from "react";

function ProductForm({ onCreate, onUpdate, editingProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [focusIdx, setFocusIdx] = useState(-1);

  const inputRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setImage(editingProduct.image || "");
    } else {
      setName("");
      setPrice("");
      setImage("");
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, image };
    if (editingProduct) {
      onUpdate(editingProduct.id, product);
    } else {
      onCreate(product);
    }
    setName("");
    setPrice("");
    setImage("");
    setFocusIdx(-1);
  };

  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
      maxWidth: "960px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    input: (focus) => ({
      padding: "0.65rem 1.05rem",
      fontSize: "1.04rem",
      borderRadius: "6px",
      border: focus ? "2px solid #41f673" : "1.5px solid #27ae60",
      outline: focus ? "2px solid #27ae6070" : "none",
      flexGrow: 1,
      minWidth: "170px",
      backgroundColor: "#181818",
      color: "#eee",
      transition: "border-color 0.26s, outline 0.26s",
      fontWeight: "500",
      letterSpacing: "0.2px",
      boxShadow: focus ? "0 0 0 1.5px #27ae60aa" : "none",
    }),
    button: {
      backgroundColor: "#27ae60",
      border: "none",
      color: "#fff",
      padding: "0 1.45rem",
      fontWeight: "800",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.2s, transform 0.16s",
      minWidth: "100px",
      fontSize: "1.04rem",
      outline: "none",
      letterSpacing: "0.5px",
      boxShadow: "0 2px 6px #27ae601c",
    }
  };

  // Interacciones botón
  const btnHover = (e) => {
    e.target.style.background = "#41f673";
    e.target.style.color = "#121212";
    e.target.style.transform = "scale(1.07)";
  };
  const btnUnhover = (e) => {
    e.target.style.background = "#27ae60";
    e.target.style.color = "#fff";
    e.target.style.transform = "scale(1)";
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}
      autoComplete="off"
      spellCheck="false"
    >
      <input
        ref={inputRefs[0]}
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={styles.input(focusIdx === 0)}
        onFocus={() => setFocusIdx(0)}
        onBlur={() => setFocusIdx(-1)}
      />
      <input
        ref={inputRefs[1]}
        placeholder="Precio"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={styles.input(focusIdx === 1)}
        onFocus={() => setFocusIdx(1)}
        onBlur={() => setFocusIdx(-1)}
      />
      <input
        ref={inputRefs[2]}
        placeholder="URL de imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={styles.input(focusIdx === 2)}
        onFocus={() => setFocusIdx(2)}
        onBlur={() => setFocusIdx(-1)}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseEnter={btnHover}
        onMouseLeave={btnUnhover}
        onFocus={btnHover}
        onBlur={btnUnhover}
      >
        {editingProduct ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}

export default ProductForm;
