import React from "react";


class Click extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        first_color : true
        }
    }

    clickColor =()=> {
        this.setState((prevState)=>({
            first_color: !prevState.first_color
        }))
    }
    render() {
        const redSquare = this.state.first_color ? "red" : "blue"
        const blueSquare = this.state.first_color ? "blue" : "red"

        return(
            <div>
                <div className="red" onClick={this.clickColor} style={{backgroundColor: redSquare,}}></div>
                <div className="blue" onClick={this.clickColor} style={{backgroundColor: blueSquare,}}></div>
            </div>

        )
    }
}


export default Click;
