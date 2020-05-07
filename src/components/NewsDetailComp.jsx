import React, {Fragment} from "react";

const NewsDetailComp = (props) => {
const {title, author, description, publish, url} = props;

    return (
        <Fragment>
            <div className="container">
                <div className="card mb-3 p-3">
                    <a href={url}><div className="card-title">
                        <h4>{title}</h4>
                    </div></a>
                    <div className="card-body" style={{textAlign: 'left'}}>
                        <p>{description}</p>
                        <br/>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default (NewsDetailComp);