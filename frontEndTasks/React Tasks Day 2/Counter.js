import React, { Component } from "react";

class Task2 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    changeDataI = () => {
        // this.setState({empName:"NithishBlaze", empSal:this.state.empSal+5000})
        this.setState((prevstate) => ({count: prevstate.count + 1 }));
    }
    changeDataP = () => {
        // this.setState({empName:"NithishBlaze", empSal:this.state.empSal+5000})
        this.setState((prevstate) => ({count: prevstate.count - 1 }));
    }
    changeDataR = () => {
        // this.setState({empName:"NithishBlaze", empSal:this.state.empSal+5000})
        this.setState((prevstate) => ({count: prevstate.count = 0 }));
    }
    render() {
        return (
            <div style={{
                width:"50%",
                margin:"0 auto",
                textAlign:"center"

            }}>
                <h2>Counter web</h2>
                <p> Counter:<strong> {this.state.count}</strong></p>
                <div style={{display:"flex ", justifyContent:"space-between"}}>
                <button type="button" className="btn btn-success" onClick={() => this.changeDataI()}> Increment ++ </button>
                <button type="button" className="btn btn-success" onClick={() => this.changeDataP()}> Decrement -- </button>
                <button type="button" className="btn btn-success" onClick={() => this.changeDataR()}> Reset </button>
                </div>
            </div>
        )
    }
}

export default Task2