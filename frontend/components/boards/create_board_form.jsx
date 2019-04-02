import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", is_public: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(user).then(this.props.closeModal);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // onclick close modal
  render() {
    return (
      <div className="session-format">
        <div className="session-page">
          <div className="board-form-box">
            <div className="form-header">
              <h2>Create Board</h2>
              <i class="fas fa-times"></i>
            </div>

            <form onSubmit={this.handleSubmit} className="session-form">
              <div className="board-name">
                <h4>Name</h4>
                <TextInput
                  className="input board-name"
                  name="Like 'Places to Go' or 'Recipes to Make'"
                  value={this.state.name}
                  onChange={this.update('name')}
                />
              </div>
            </form>
            <button className="rectangle-btn" onClick={this.handleSubmit}>Create</button>
            <button className="rectangle-btn" onClick={this.handleDemo}>Demo</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateBoardForm;
