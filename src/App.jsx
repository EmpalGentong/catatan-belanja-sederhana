// import { useState } from 'react'

function App() {
  // eslint-disable-next-line no-unused-vars
  const groceryItems = [
    {
      id: 1,
      name: "Kopi Bubuk",
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: "Gula Pasir",
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: "Air Mineral",
      quantity: 3,
      checked: false,
    },
  ];

  function Header() {
    return <h1>Catatan Belanjaku 📝</h1>;
  }

  function Form() {
    return (
      <form className="add-form">
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="text" placeholder="nama barang..." />
        </div>
        <button>Tambah</button>
      </form>
    );
  }

  function List() {
    return (
      <div className="list">
        <ul>
          <li key={1}>
            <input type="checkbox" />
            <span style={{ textDecoration: "line-through" }}> 1 Kopi </span>
            <button>&times;</button>
          </li>

          <li key={2}>
            <input type="checkbox" />
            <span>5 Gula Pasir</span>
            <button>&times;</button>
          </li>
          <li key={3}>
            <input type="checkbox" />
            <span>3 Air Mineral</span>
            <button>&times;</button>
          </li>
        </ul>
      </div>
    );
  }

  function Action() {
    return (
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    );
  }

  function Grocery() {
    return (
      <>
        <List />
        <Action />
      </>
    );
  }

  function Footer() {
    return (
      <footer className="stats">
        Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
      </footer>
    );
  }
  return (
    <div className="app">
      <Header />
      <Form />
      <Grocery />
      <Footer />
    </div>
  );
}

export default App;
