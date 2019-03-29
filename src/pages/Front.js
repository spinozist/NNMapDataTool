import React from "react";
import SimpleSearch from "../components/front-view/SimpleSearch"
import GuidedSearch from "../components/front-view/GuidedSearch"
import Profile from "../components/front-view/Profile"

const Front = () => (
  <div id="front-page">
      <SimpleSearch />
      <GuidedSearch />
      <Profile />
  </div>
);

export default Front;