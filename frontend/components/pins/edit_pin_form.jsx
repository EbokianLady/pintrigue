import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {

  }

  update(field) {
    return (e) => {
      this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.pin.title);
    formData.append('pin[description]', this.state.pin.description);
    formData.append('pin[link_url]', this.state.pin.link_url);
    formData.append('pin[picture]', this.state.photoFile);
    formData.append('pin[row_height]', this.state.row_height);
    this.props.createPin(formData, this.state.boardId)
      .then(() => this.props.history.push(`/boards/${this.state.boardId}`));
  }

  displayPhoto() {
    if (this.state.photoUrl) {
      return (
        <div className="preview-picture" >
          <img src={this.state.photoUrl} />
        </div>
      )
    }
  }

  goBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const { pin } = this.state;

    return (
      <div className='pin-form-buffer'>
        {/* <div className='pin-form-box'>
          <div className='pin-form-header'>
            <button
              className='oval-btn'
              onClick={this.goBack}>
              <i class="fas fa-chevron-left"></i>
              <p>Back</p>
            </button>
            <button
              className='save-btn'
              onClick={this.handleSubmit} >
              <i className='fas fa-map-pin'></i>
              <p>Save</p>
            </button>
          </div>
          <div className='pin-form'>
            {this.displayPhoto()}
            <div className='upload-box'>
              <div className='upload-outline'>
                <button className='upload-btn'>
                  <i className='fas fa-arrow-circle-up'></i>
                </button>
                <p>Click to upload</p>
                <input type="file"
                  onChange={this.handleFile.bind(this)}>
                </input>
                <div className="upload-footer">
                  {this.displayFooter()}
                </div>
              </div>
            </div>
            <div className='pin-form-content'>
              <div className='pin-title'>
                <textarea
                  placeholder='Add your title'
                  onChange={this.update('title')}>
                </textarea>
              </div>

              <div className='pin-description'>
                <textarea
                  placeholder='Tell everyone what your Pin is about'
                  onChange={this.update('description')}>
                </textarea>
              </div>

              <div className='pin-url'>
                <textarea
                  placeholder='Add a destination link'
                  onChange={this.update('link_url')}>
                </textarea>
              </div>
              <div
                className='board-choices'
                onClick={this.showBoardScroll} >
                <p>{this.state.choiceDialogue}</p>
                <div className='arrow-down'>
                  <i className='fas fa-chevron-down'></i>
                </div>
              </div>
            </div>
          </div>
          {this.displayBoardScroll()}
        </div> */}
      </div>
    )
  }
}

export default EditPinForm;
