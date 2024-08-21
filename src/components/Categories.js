import React, { Component } from "react"

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "All"
                },
                {
                    key: "chairs",
                    name: "Chairs"
                },
                {
                    key: "tables",
                    name: "Tables"
                },
                {
                    key: "sofas",
                    name: "Sofas"
                },
                {
                    key: "lighting",
                    name: "Lighting"
                }

            ]
        }
    }
    render() {
        return (
            <div className="categories" >
                <ul className="list-unstyled">
                    {this.state.categories.map(el => (
                        <li key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Categories