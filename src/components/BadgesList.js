import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import BadgesListItem from "../components/BadgesListItem";

function BadgesList(props) {
  const badges = props.badges;
  if (props.badges.length === 0) {
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
          {badges.map(badge => {
            return (
              <li className="Badge__item row" key={badge.id}>
                <Link
                  className="Link__contains text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BadgesList;
