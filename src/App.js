import React, { Component } from "react";
import "./App.css";
import Info from "./Components/info";

import Weather from "./Components/weather";
import Form from "./Components/form";
const apiKey = "520b6972c9c6cd26bc7390a960947ddc";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    weather: undefined,
    weatherIcon: undefined,
  };

  checkCloud(data) {
    var body = document.getElementsByTagName("body")[0];
    if (data.clouds.all > 70) {
      body.style.backgroundImage =
        "url('https://proza.ru/pics/2019/11/24/1028.jpg')";
    } else if (data.clouds.all > 30 && data.clouds.all < 70) {
      body.style.backgroundImage =
        "url('https://uztag.info/upload/iblock/9b9/9b962520f5385ec0b6c190890c03db11.jpg') ";
    } else {
      body.style.backgroundImage =
        "url('https://pibig.info/uploads/posts/2021-05/1621850833_2-pibig_info-p-solnechno-priroda-krasivo-foto-2.jpg')";
    }
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const apiURL = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await apiURL.json();
      console.log(
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );
      this.setState({
        temp: Math.ceil(data.main.temp),
        city: data.name,
        country: data.sys.country,
        wind: Math.ceil(data.wind.speed),
        weather: data.weather[0].description,
        weatherIcon:
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
      });

      this.checkCloud(data);
    } else {
      alert("Write a city");
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          weather={this.state.weather}
          weatherIcon={this.state.weatherIcon}
        />
      </div>
    );
  }
}

export default App;
