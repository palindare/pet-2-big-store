import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main"
import Basket from "./Basket/Basket";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/basket" element={<Basket/>}/>
  </Routes>
    </>
  );
}

export default App;
