// ReactDOM.render(React.createElement("input", {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"))


// ReactDOM.render(<input placeholder="Help text" />, document.getElementById("app")) 

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text???"

const elements = (<div clasName="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
    onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{helpText == "Help text???" ? "Yes": "No"}</p>
    </div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)