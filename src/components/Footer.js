import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    <p>&copy; All user rights reserved</p>
                </div>


                <div>
                    <h1>
                        {this.props.title}
                    </h1>

                </div>
            </footer >
        )
    }


}
export default Footer