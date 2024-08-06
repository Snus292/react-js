import React, { useEffect, useState } from "react"
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
    const [click,setClick] = useState(0)//hook useState для передачи состояния
    
    useEffect(()=>{
        document.title = `You clicked ${click} times`//2ой пример hook useEffect для изменения заголовка док(для функции)
    })
    // console.log(click)
    
    return (
        <button onClick={()=> setClick(click + 1)}>{text}{click}</button>
    )
}


export default Button