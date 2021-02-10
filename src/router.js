import React from "react";
import { Redirect, Route } from "react-router-dom";


export const ProtectedRoute = ({
  user,
  path,
  loggedInPath,
  children,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user !== null && user !== undefined) {
          return children;
        }
        if (user === null || user === undefined) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

const IsUserRedirect = ({ path, user, loggedInPath, children, ...rest }) => {

  return (
    <Route
      {...rest}
      render={() => {
        if (user === undefined || user === null) {
          return children;
        }
        if (user !== null && user !== undefined) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

export { IsUserRedirect };
