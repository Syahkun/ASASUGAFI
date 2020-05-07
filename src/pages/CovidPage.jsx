import React from "react";

import ListCountry from "../components/ListCountry";
import { generateCovid } from "../store/actions/covidActions";

import { connect } from "react-redux";

class CovidPage extends React.Component {
    componentDidMount = async () => {
        const paramCategory = await this.props.match.params.category;
        this.props.generateCovid(paramCategory);
    };

    handleRequestCategory = async (categoryName) => {
        await this.props.history.replace("/covid-news/" + categoryName);
        const paramCategory = this.props.match.params.category;
        this.props.generateCovid(paramCategory);
    };

    render() {
        return (
            <div>
                <ListCountry
                    handleRouter={(e) => this.handleRequestCategory(e)}
                    {...this.props}
                />
            </div>
        );
    }
}

const mapDispatchToProps = { generateCovid };

export default connect(() => ({}), mapDispatchToProps)(CovidPage);