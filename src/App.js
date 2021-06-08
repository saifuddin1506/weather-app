import React from 'react';
import Weather from './Components/Weather'
import Form from './Components/Form'
import 'weather-icons/css/weather-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {};
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.weathericon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
      Atmosphere: "wi-fog"
    }
  }


  get_weathericon(icons, rid) {
    switch (true) {
      case rid >= 200 && rid <= 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rid >= 300 && rid <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rid >= 500 && rid <= 531:
        this.setState({ icon: icons.Rain });
        break;
      case rid >= 600 && rid <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rid >= 700 && rid <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rid === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rid >= 800 && rid <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=a4130bfb0d1c88ca6e3e3c227e82ee4b"
    if (city && country) {
      const api_call = await fetch(url);
      const response = await api_call.json();
      console.log(response);
      if (response.name && response.sys.country) {
        this.setState({
          city: response.name + ',' + response.sys.country,
          celsius: Math.floor(response.main.temp - 273.15),
          temp_min: Math.floor(response.main.temp_min - 273.15),
          temp_max: Math.floor(response.main.temp_max - 273.15),
          description: response.weather[0].description
        });
        this.get_weathericon(this.weathericon, response.weather[0].id)
      }
      else {
        alert("City not found");
        e.target.elements.city.value = "";
        e.target.elements.country.value = "";
      }
    }
    else {
      this.setState({ error: true });
    }
  }
  render() {
    return (
      <div className="App">
        <Form getf={this.getWeather} error={this.state.error} />
        <Weather city={this.state.city}
          celsius={this.state.celsius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
          weathericon={this.state.icon}
        />
      </div>
    )
  }
}



export default App;
