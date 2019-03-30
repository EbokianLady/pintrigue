import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures: [
        "https://s3.amazonaws.com/pintrigue-pro/behappy.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/bells.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/blossoms.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/salad.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/letterpress.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/gothic.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/mural.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/bread.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/citrus.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/threads.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/coffee.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/woods.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/door.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/leaves.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/light_bulbs.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/map.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/city.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/cherries.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/flowers.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/bridge.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/books.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/breakfast.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/watercolor.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/arch.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/pencils.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/stairs.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/cat.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/tea.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/jars.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/tea2.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/threads2.jpg",
        "https://s3.amazonaws.com/pintrigue-pro/typography2.jpg"
      ]
    };
  }

  render() {
    const pictures = this.state.pictures.map((url, i) => {
      return (
        <div className="splash-pic-box" key={i} >
          <img className="splash-pic" src={url} />
        </div>
      )
    });
    return (
      <div className="main-splash">
        <div className="splash-container">
          {pictures}
        </div>
      </div>
    )
  }
}

export default Splash;