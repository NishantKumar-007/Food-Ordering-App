import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dummy",
    };
  }
  //using this method because it is called after rendering is done
  async componentDidMount() {
    console.log("didmount called");
    const data = await fetch("https://api.github.com/users/NishantKumar-007");
    const json = await data.json();
    this.setState({
      name: json.name,
    });
  }
  render() {
    return (
      <div>
        <h1>This is India's world famous restaurant.</h1>
        <User userName={this.state.name}></User>
      </div>
    );
  }
}

export default About;
