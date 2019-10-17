import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  state = {
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
    ]
  };

  render() {
    return (
      <div className="div">
        <Navbar />

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
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>
        </div>

        <BadgesList badges={this.state.data} />
      </div>
    );
  }
}

export default Badges;
