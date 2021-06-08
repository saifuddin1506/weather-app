import React from 'react'
import './Form.css'
export default function Form(props) {

    function error() {
        return (
            <div className="alert alert-danger mx-5" role="alert">
                please enter city and country both
            </div>
        )
    }
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.getf}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

