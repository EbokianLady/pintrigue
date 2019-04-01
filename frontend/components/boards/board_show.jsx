import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinBoardIndexContainer from '../pins/pin_board_index_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  render() {
    const { board } = this.props;

    if (board) {
      return (
        <div>
          <div className="profile-buffer">
            <div className="profile-box">
              <div className="profile">
                <nav className="profile-nav">
                  <div className="prof-buttons prof-plus"
                    onClick={this.toggleDropdown}>
                    <i className="fas fa-plus p2-fas"></i>
                    <div id="profile-dropdown" className="profile-hidden" hidden={true}>
                      <button className="dropdown-item">
                        Create pin
                      </button>
                    </div>
                  </div>
                  <button
                    className="prof-buttons" >
                    <i className="fas fa-pen p2-fas"></i>
                  </button>
                </nav>

                <section className="profile-body">
                  <h2 className="profile-name">
                    {board.name}
                  </h2>
                  <div className="profile-follows"></div>
                </section>
              </div>
            </div>
          </div>
          <div className="index-buffer">
            <PinBoardIndexContainer />
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default BoardShow;
