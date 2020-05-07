import React, { Fragment } from "react";

const ListCountry = (props, changeRouter) => {
    changeRouter = async (category) => {
        if (props.handleRouter) {
            props.handleRouter(category);
        } else {
            props.history.replace("/covid-news/" + category);
        }
    };
    return (
        <Fragment>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="container mt-5">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={() => changeRouter("brunei")} type="button" className="btn btn-secondary">Brunei</button>
                    <button onClick={() => changeRouter("cambodia")} type="button" className="btn btn-secondary">Cambodia</button>
                    <button onClick={() => changeRouter("indonesia")} type="button" className="btn btn-secondary">Indonesia</button>
                    <button onClick={() => changeRouter("laos")} type="button" className="btn btn-secondary">Laos</button>
                    <button onClick={() => changeRouter("malaysia")} type="button" className="btn btn-secondary">Malaysia</button>
                    <button onClick={() => changeRouter("myanmar")} type="button" className="btn btn-secondary">Myanmar</button>
                    <button onClick={() => changeRouter("philippines")} type="button" className="btn btn-secondary">Philippines</button>
                    <button onClick={() => changeRouter("singapore")} type="button" className="btn btn-secondary">Singapura</button>
                    <button onClick={() => changeRouter("thailand")} type="button" className="btn btn-secondary">Thailand</button>
                    <button onClick={() => changeRouter("vietnam")} type="button" className="btn btn-secondary">Vietnam</button>
                    <button onClick={() => changeRouter("timor-leste")} type="button" className="btn btn-secondary">Timor Leste</button>
                </div>
            </div>
        </Fragment>
    );
};

export default ListCountry;