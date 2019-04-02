import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", is_public: true };
    // this.handleCancel = this.handleCancel.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    // this.props.clearErrors();
  }

  // handleCancel(e) {
  //   e.preventDefault();
  //   this.props.closeModal();
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createBoard(this.state).then(this.props.closeModal());
  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // onclick close modal
  render() {
    return (
      <div className="pin-form-buffer">
        <div className="pin-form-box">
          <div className="pin-form-header">
            <button
              className='save-btn'>
              <i className='fas fa-map-pin'></i>
              <p>Save</p>
            </button>
          </div>
          <div className="pin-form">
            <div className="upload-box">
              <div className="upload-outline">
                <button className="upload_btn">
                  <i class="fas fa-arrow-circle-up"></i>
                </button>
                <p>Click to upload</p>
              </div>
            </div>
            <div className="pin-form-content">
              <div className="pin-title">
                <textarea placeholder="Add your title">

                </textarea>
              </div>

              <div className="pin-description">
                <textarea placeholder="Tell everyone what your Pin is about">

                </textarea>
              </div>

              <div className="pin-url">
                <textarea placeholder="Add a destination link">

                </textarea>
              </div>

              <div className="board-choices">
                Board Choices
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePinForm;
