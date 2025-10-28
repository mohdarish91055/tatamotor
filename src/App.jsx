import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import PopupForm from "./pages/PopupForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-mono">
      <Navbar />
      <Home />
      <Footer />
      <PopupForm />
    </div>
  );
}

export default App;
