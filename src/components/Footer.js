import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <h1>
                    {this.props.title}
                </h1>
                <p>&copy; All user rights reserved</p>

            </footer>
        )
    }


}
export default Footer