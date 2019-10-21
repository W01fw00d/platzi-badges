import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log('1. constructor()');
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout((data) => {
      this.setState({
        data: [
          {
            id: "0",
            firstName: "Marc",
            lastName: "Román",
            email: "email@fake.com",
            jobTitle: "Posición",
            twitter: "fake_twitter",
            avatarUrl: "https://www.gravatar.com/avatar?d=identicon"
          },
          {
            id: "1",
            firstName: "Cati",
            lastName: "Teruel",
            email: "email@fake.com",
            jobTitle: "Posición",
            twitter: "fake_twitter",
            avatarUrl: "https://www.gravatar.com/avatar?d=identicon"
          }
        ],
      })
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conference Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <BadgesList badges={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Badges;
