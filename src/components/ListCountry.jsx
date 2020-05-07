import React, { Fragment } from "react";
import {Link} from "react-router-dom";

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

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#" tabIndex="-1"
                           aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>




            {/*<div className="card text-center">*/}
            {/*    <div className="card-header">*/}
            {/*        <div className="container">*/}
            {/*        <ul className="nav nav-tabs card-header-tabs">*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("brunei")} className="nav-link nav-country" to="#">Brunei</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("cambodia")} className="nav-link nav-country" to="#">Kamboja</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("indonesia")} className="nav-link nav-country" to="#">Indonesia</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("malaysia")} className="nav-link nav-country" to="#">Malaysia</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("myanmar")} className="nav-link nav-country" to="#">Myanmar</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("philippines")} className="nav-link nav-country" to="#">Filipina</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("thailand")} className="nav-link nav-country" to="#">Thailand</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("vietnam")} className="nav-link nav-country" to="#">Vietnam</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("timor-leste")} className="nav-link nav-country" to="#">Timor Leste</Link>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <Link onClick={() => changeRouter("laos")} className="nav-link nav-country" to="#">Laos</Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*<div className="card-body">*!/*/}
            {/*    /!*    This is Card*!/*/}
            {/*    /!*    /!*<h5 className="card-title">Special title treatment</h5>*!/*!/*/}
            {/*    /!*    /!*<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*!/*!/*/}
            {/*    /!*    /!*<a href="#" className="btn btn-primary">Go somewhere</a>*!/*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}

            {/*<div className="container mt-5">*/}
            {/*    <div className="btn-group" role="group" aria-label="Basic example">*/}
            {/*        <button onClick={() => changeRouter("brunei")} type="button" className="btn btn-secondary">Brunei</button>*/}
            {/*        <button onClick={() => changeRouter("cambodia")} type="button" className="btn btn-secondary">Cambodia</button>*/}
            {/*        <button onClick={() => changeRouter("indonesia")} type="button" className="btn btn-secondary">Indonesia</button>*/}
            {/*        <button onClick={() => changeRouter("laos")} type="button" className="btn btn-secondary">Laos</button>*/}
            {/*        <button onClick={() => changeRouter("malaysia")} type="button" className="btn btn-secondary">Malaysia</button>*/}
            {/*        <button onClick={() => changeRouter("myanmar")} type="button" className="btn btn-secondary">Myanmar</button>*/}
            {/*        <button onClick={() => changeRouter("philippines")} type="button" className="btn btn-secondary">Philippines</button>*/}
            {/*        <button onClick={() => changeRouter("singapore")} type="button" className="btn btn-secondary">Singapura</button>*/}
            {/*        <button onClick={() => changeRouter("thailand")} type="button" className="btn btn-secondary">Thailand</button>*/}
            {/*        <button onClick={() => changeRouter("vietnam")} type="button" className="btn btn-secondary">Vietnam</button>*/}
            {/*        <button onClick={() => changeRouter("timor-leste")} type="button" className="btn btn-secondary">Timor Leste</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Fragment>
    );
};

export default ListCountry;