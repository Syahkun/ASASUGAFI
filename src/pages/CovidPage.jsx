import React, { Fragment } from "react";

import ListCountry from "../components/ListCountry";
import { generateCovid } from "../store/actions/covidActions";

import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import CovidDetail from "./CovidDetail";
import CovidDetailComp from "../components/CovidDetailComp";
import Footer from "../components/Footer";

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
      <Fragment>
        <Navigation {...this.props} />
        <ListCountry
          handleRouter={(e) => this.handleRequestCategory(e)}
          {...this.props}
        />
        <CovidDetail />
        <Footer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = { generateCovid };

export default connect(() => ({}), mapDispatchToProps)(CovidPage);
