import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./Components/ContactApp";
import "./styles/style.css";

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);