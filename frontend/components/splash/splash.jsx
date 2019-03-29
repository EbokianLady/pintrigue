import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [
      "https://s3.amazonaws.com/pintrigue-pro/behappy.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/bells.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/blossoms.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/breakfast.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/bridge.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/cherries.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/citrus.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/city.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/coffee.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/door.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/leaves.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/letterpress.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/light_bulbs.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/map.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/mural.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/pencils.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/salad.jpg",
      "https://s3.amazonaws.com/pintrigue-pro/watercolor.jpg"
    ] };
  }

  componentDidMount() {

  }

  render() {
    const pictures = this.state.pictures.map((url, i) => <img src={url} key={i}></img>)
    return (
      <div>
        {pictures}
      </div>
    )
  }
}

export default Splash;
