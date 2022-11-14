import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null };
  // }

  state = { lat: null };

  componentDidMount() {
    console.log("componentDidMount - Updating geolocation");

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - ");
  }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

root.render(<App />, document.querySelector("#root"));
