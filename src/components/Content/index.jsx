import React from "react";
import { Redirect } from "react-router-dom";

export default () => {
  return (
    <div>
      Content
      <Redirect from="*" to="/some" />
    </div>
  );
};
