import React from "react"
import { createRoot } from 'react-dom/client'
import App from "./App"
import "./css/style.css"


const app = createRoot(document.getElementById("app"))
// const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />) 