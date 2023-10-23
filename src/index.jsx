import React from "react";
import { createRoot } from "react-dom/client"
import MyNoteApp from "./components/MyNoteApp";
import "./styles/style.css"

const root = createRoot(document.getElementById("root"));
root.render(<MyNoteApp />);