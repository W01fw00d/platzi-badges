import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
        </div>
      );
    }

    return (
      <div>
        <div>
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li className="Badge__item row" key={badge.id}>
                  <div className="col-3">
                    <img
                      className="Badge__item-avatar"
                      src={badge.avatarUrl}
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-9">
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
