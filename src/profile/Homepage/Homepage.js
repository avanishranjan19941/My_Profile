import React    from "react";
import template from "./Homepage.jsx";

class Homepage extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Homepage;
