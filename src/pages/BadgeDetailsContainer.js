import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";
import api from "../api";

import "./styles/BadgeDetails.css";

class BadgeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const state = this.state;

    if (state.loading) {
      return <PageLoading />;
    }

    if (state.error) {
      return <PageError error={state.error} />;
    }

    return <BadgeDetails badge={state.data} />;
  }
}

export default BadgeDetailsContainer;
