import React from 'react';

const WeatherForm = ({getCityWeather}) => (
    <div className="card card-body">
        <form>
            <div className="form-group">
                <h3 className="title">city selector</h3>
                <select name="city" className="form-control" onChange={getCityWeather} autoFocus>
                    <option></option>
                    <option>london, GB</option>
                    <option>New York, US</option>
                    <option>Paris, FR</option>
                    <option>Sydney, AU</option>
                    <option>Madrid, ES</option>
                </select>
            </div>
        </form>
    </div>
);

export default WeatherForm;