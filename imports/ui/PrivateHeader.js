import React from "react";
import { Accounts } from "meteor/accounts-base";

const PrivateHeader = ({ title }) => {
  const onLogout = () => {
    Accounts.logout();
  };
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <button className="button--link-text" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
