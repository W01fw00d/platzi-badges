import React from "react";
import "./styles/BadgesList.css";

import Gravatar from "../components/Gravatar";

class BadgesListItem extends React.Component {
  render() {
    let badge = this.props.badge;

    return (
      <React.Fragment>
        <div className="col-3">
          <Gravatar className="Badge__item-avatar" email={badge.email} />
        </div>
        <div className="col-9">
          <b>
            {badge.firstName} {badge.lastName}
          </b>
          <br />
          @{badge.twitter}
          {/* <a href={"https://twitter.com/" + badge.twitter}>@{badge.twitter}</a> */}
          <br />
          {badge.jobTitle}
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesListItem;
