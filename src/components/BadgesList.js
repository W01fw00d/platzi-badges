import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="Badges__list">
        <div className="Badges__container">
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li className="Badge row" key={badge.id}>
                  <div className="col-3">
                    <img
                      className="Badge__avatar"
                      src={badge.avatarUrl}
                      alt="Avatar"
                    />
                  </div>
                  <div className="Badge__section-info col-9">
                    <b>
                      {badge.firstName} {badge.lastName}
                    </b>
                    <br />
                    <a href={"https://twitter.com/" + badge.twitter}>
                      @{badge.twitter}
                    </a>
                    <br />
                    {badge.jobTitle}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BadgesList;
