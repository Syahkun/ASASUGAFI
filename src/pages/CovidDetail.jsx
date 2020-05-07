import React, { Fragment } from "react";
import { connect } from "react-redux";
import { generateCovid } from "../store/actions/covidActions";
import CovidDetailComp from "../components/CovidDetailComp";
import ListCountry from "../components/ListCountry";

class CovidDetail extends React.Component {
    componentDidMount = async () => {
        const paramCategory = await this.props.match.params.category;
        this.props.generateCovid(paramCategory);
    };

    render() {
        return (
            <Fragment>
                <ListCountry />
                <div>
                    <CovidDetailComp />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.covid.data,
    };
};

const mapDispatchToProps = { generateCovid };

export default connect(mapStateToProps, mapDispatchToProps)(CovidDetail);