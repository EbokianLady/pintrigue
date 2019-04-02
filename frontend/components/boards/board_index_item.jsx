import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
  }

  turnOffVisibility(e) {
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    this.setState({ visible: true });
  }

  // TO-DO current user permissions
  displayEdit() {
    if (this.state.visible) {
      return (
        <button
          className="b-index-link">
          <i className="fas fa-pen b-fas"></i>
        </button>
      )
    }
  }

  render() {
    const { board } = this.props;

    return (
      <div 
        className="b-index-frame"
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <Link
          to={`/boards/${board.id}`} >
          <div className="b-cover">
            {/* {images} */}
          </div>
          <div className="b-info">
            <div>
              <h3 className="b-index-title">{board.name}</h3>
              <p className="b-index-pincount">15 Pins</p>
            </div>
          </div>
        </Link>
        {this.displayEdit()}
      </div>
    )
  }
}


export default BoardIndexItem;

