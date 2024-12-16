import React, { Component } from "react";
import Zoro from "../assets/images/zoro.jpg"
import Logo from "../assets/images/background.jpg"
class ToggleImageComp extends Component{

    constructor(props){
        super(props);
        this.state = {
               showZoro:true 
        }
    }
    changeState = () => {
            this.setState((prevstate)=>({
                showZoro:!prevstate.showZoro
            }))
    }

    render(){
        return(
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img src={this.state.showZoro ? Zoro : Logo}/>
                <br/>
                <button type="button" onClick={this.changeState}>Toggle Image</button>
            </div>
        )
    }
}

export default ToggleImageComp