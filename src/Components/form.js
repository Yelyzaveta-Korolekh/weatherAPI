import React, { Component } from "react";

class Form extends Component {
    render(){
        return(
           
            <form className="inputForm" onSubmit={this.props.weatherMethod} > 
                <input type="text" name="city" placeholder="City"/>
                <button>Get Weather</button>
                
            </form> 
            
        );
    }
}
export default Form;