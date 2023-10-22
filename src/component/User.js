import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName } = this.props;
    return (
      <div>
        <h3> This site is built by {userName} </h3>
      </div>
    );
  }
}
export default User;
