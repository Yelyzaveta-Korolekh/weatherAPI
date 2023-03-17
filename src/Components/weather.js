import React, { Component } from "react";

class Weather extends Component {
    
  render() {
    return (
      <div>

        {this.props.city && (
          <div className="weather-info">
            <p>
             <span className="weather-items"> City: </span> {this.props.city},{this.props.country}
            </p>
            <p> <span className="weather-items">Temperature: </span> {this.props.temp}</p>
            <p> <span className="weather-items">Weather: </span> {this.props.weather} <img className="weatherIcon" src={this.props.weatherIcon} alt="" /> </p>
            <p> <span className="weather-items">wind speed: </span>{this.props.wind} </p>
          </div>
        )}
      </div>
    );
  }
}
export default Weather;
