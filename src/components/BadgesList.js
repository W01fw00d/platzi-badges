import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import BadgesListItem from "../components/BadgesListItem";

function BadgesList(props) {
  const [query, setQuery] = React.useState("");

  const filteredBadges = props.badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
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
