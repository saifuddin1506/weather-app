import React from 'react'

export default function Weather(props) {

    function minmax(min, max) {
        if (min && max) {
            return (
                <>
                    <span className="px-4 display-5">{min}&deg;</span>
                    <span className="px-4 display-5">{max}&deg;</span>
                </>
            )
        }

    }
    return (
        <div className="container text-light ">
            <div className="cards pt-3">
                <h1 className="my-3">{props.city}</h1>
                <h5 className="py-4">
                    <i className={"wi " + props.weathericon + " display-1"}></i>
                </h5>
                {props.celsius ? <h1 className="py-2">{props.celsius}&deg;</h1> : null}
                {minmax(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    )
}
