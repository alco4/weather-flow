import React, { Component } from 'react';
import WheatherInfo from './WeatherInfo';
import WheatherForm from './WeatherForm';
import { WEATHER_KEY } from '../keys';
import './WeatherContainer.css';
import consultApi from '../api.js';


class WeatherContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            long: '',
            lat: '',
            days: [],
            countries: [],
            cities: [],
            temperatures: [],
            error: null
        }

        this.getLocationWeather = this.getLocationWeather.bind(this);
        this.getCityWeather = this.getCityWeather.bind(this);
        this.getCurrentWeather = this.getCurrentWeather.bind(this);
        this.formatFiveDays = this.formatFiveDays.bind(this);
    }

    componentDidMount() {
        this.getLocationWeather();
    }

    getLocationWeather = async (event) => {
        let success = async (resp) => {
            let lat = ('' + resp.coords.latitude).split('.');
            let long = ('' + resp.coords.longitude).split('.');
            const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_KEY}&units=metric`;
            const data = await consultApi(API_URL);
            const title = 'Actual city';
            const cityValue = data.city.name;
            const countryValue = data.city.country;
            this.getCurrentWeather(cityValue, countryValue);
            this.formatFiveDays(data, title);
        }
        let error = (error) => {
            console.log(`error in geographic position`);
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    getCityWeather = async e => {
        e.preventDefault();
        const cityValue = e.target.value.split(',')[0];
        const countryValue = e.target.value.split(',')[1];
        if (cityValue && countryValue) {
            const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const data = await consultApi(API_URL);
            const title = 'Weather of selected city';
            this.getCurrentWeather(cityValue, countryValue);
            this.formatFiveDays(data, title);
        } else {
            this.setState({ error: 'Please enter a city and a country' });
        }
    }

    getCurrentWeather = async (cityValue, countryValue) => {
        let currentWeather = {};
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
        const data = await consultApi(API_URL);
        currentWeather = {
            min: data.main.temp_min,
            max: data.main.temp_max,
            humidity: data.main.humidity,
        }
        this.setState({
            currentWeather: currentWeather
        }
        )
        return currentWeather;
    }

    formatFiveDays = (data, title) => {
        const dayOne = data.list[0];
        const dayTwo = data.list[8];
        const dayThree = data.list[15];
        const dayFour = data.list[23];
        const dayFive = data.list[31];

        const fiveDaysData = [
            {
                dayNumber: dayOne.dt_txt.split(' ')[0],
                temp: dayOne.main.temp,
                description: dayOne.weather[0].description,
            },
            {
                dayNumber: dayTwo.dt_txt.split(' ')[0],
                temp: dayTwo.main.temp,
                description: dayTwo.weather[0].description,
            },
            {
                dayNumber: dayThree.dt_txt.split(' ')[0],
                temp: dayThree.main.temp,
                description: dayThree.weather[0].description,
            },
            {
                dayNumber: dayFour.dt_txt.split(' ')[0],
                temp: dayFour.main.temp,
                description: dayFour.weather[0].description,
            },
            {
                dayNumber: dayFive.dt_txt.split(' ')[0],
                temp: dayFive.main.temp,
                description: dayFive.weather[0].description,
            }
        ]

        this.setState({
            title: title,
            daysData: fiveDaysData,
            city: data.city.name,
            country: data.city.country,
            error: null
        })
    }

    render() {
        return (
            <div id="main" className="container p-4">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <WheatherForm getCityWeather={this.getCityWeather} />
                        <WheatherInfo {...this.state} />
                    </div>
                </div>
            </div>
        )
    }

}

export default WeatherContainer;