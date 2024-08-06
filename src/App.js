import React from "react"
import Header from "./components/header"
import Image from "./components/image"
import logo from "./img/3147aa77.png"
// import * as ReactDOMClient from 'react-dom/client'
// Старый вариант предыдущих версий REACT

// ReactDOM.render(React.createElement("input", {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"))


// ReactDOM.render(<input placeholder="Help text" />, document.getElementById("app")) 


// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")

// const helpText = "Help text???"


// функция в новом стиле
// const App = () =>{
// // function App() {
//   return (<div className="name">
//     <Header></Header>
//     <h1>{helpText}</h1>
//     <input placeholder={helpText}
//       onClick={inputClick} onMouseEnter={mouseOver} />
//     <p>{helpText === "Help text???" ? "Yes" : "No"}</p>
//   </div>)
// }
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)

    }

    helpText = "Help text???"
    render() {
        return (<div className="name" >
            <Header title="Site header"></Header>
            <Header title="Site header!"></Header>
            <Header title="Site header!!"></Header>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                onChange={event => this.setState({userData: event.target.value})}
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.state.helpText === "Help text???" ? "Yes" : "No"}</p>
            <Image image={logo} />
            <img src={logo} alt=""></img>
        </div>)

    }
    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("Clicked")
    }
    mouseOver() { console.log("Mouse Over") }
}
export default App