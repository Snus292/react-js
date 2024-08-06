import React from "react"
//устраревающий метод  defaultProps в функциональных компонента
// const Button = (props) => {
//     return (
//         <button>{props.text}</button>
//     )
// }
// Button.defaultProps={
//     text: "Button"
// }



// задаем значение по умолчанию для параметра 
// text прямо в объявлении функции. Теперь, если text не будет 
// передан, он будет автоматически установлен в "Button".

const Button = ({ text = "Button" }) => {
    return (
        <button>{text}</button>
    )
}


export default Button