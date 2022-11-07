import React from "react";


class Times extends React.Component {
  state = {
    curTime: "",
  };

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    var today = new Date(),
      curTime =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    this.setState({ curTime });
  };

  render() {
    return (
      <div className="App">
        <p>Timezone (GMT-5) : {this.state.curTime}</p>
      </div>
    );
  }
}

export default Times;
