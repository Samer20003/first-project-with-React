import ReactDOM from "react-dom/client"; // for rendering app componant

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root"); // it is in index.html and we passed it to createRoot methode
ReactDOM.createRoot(entryPoint).render(<App />);
// createRoot and render methode are responsable for rendering single root component which is app compnanet which may have insted componanet that we needed
