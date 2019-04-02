import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", is_public: true };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    // this.props.clearErrors();
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then(this.props.closeModal());
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // onclick close modal
  render() {
    return (
      <div className="modal-page">
        <div className="board-form-box">
          <div className="form-header">
            <h3>Create board</h3>
          </div>
          <form className="board-form">
            <div className="board-name">
              <p>Name</p>
              <TextInput
                className="input board-name"
                name="Like 'Places to Go' or 'Recipes to Make'"
                value={this.state.name}
                onChange={this.update('name')}
              />
            </div>
          </form>
          <div className="button-footer">
            <button className="rectangle-btn" onClick={this.handleCancel}>Cancel</button>
            <button className="rectangle-btn" onClick={this.handleSubmit}>Create</button>
          </div>
            {/* <i class="fas fa-times"></i> */}
        </div>
      </div>
    )
  }
}

export default CreateBoardForm;
