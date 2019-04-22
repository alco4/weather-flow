import React from 'react';

const renderData = function (day) {
    return <div key={day.dayNumber}>
        <p>{day.dayNumber} - {day.temp}ºC - {day.description}</p>
    </div>;
};

const WeatherInfo = props => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>
                        {props.error}
                    </p>
                </div>
            }
            {
                props.currentWeather ?
                    <div className="card card-body" >
                        <h2> Current Weather </h2>
                        <p>Min: {props.currentWeather.min}°C - Max: {props.currentWeather.max}°C - humidity: {props.currentWeather.humidity}</p>
                    </div>
                    :
                    <div className="card card-body">
                        <p>Loading...</p>
                    </div>
            }
            {
                props.daysData ?
                    <div className="card card-body" >
                        <h2> {props.title} </h2>

                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        {
                            props.daysData.map(renderData)
                        }
                    </div>
                    :
                    <div className="card card-body">
                        <p>No Request Yet</p>
                    </div>
            }

        </div>
    )
}

export default WeatherInfo;