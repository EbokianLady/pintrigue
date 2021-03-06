import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';
import SelectBoard from './select_board';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: { pin_id: '', description: '', link_url: '', title: ''},
      boardscroll: false,
      choiceDialogue: 'Choose a board (required)',
      photoFile: null,
      photoUrl: null,
      photoError: null,
    };
    this.showBoardScroll = this.showBoardScroll.bind(this);
    this.hideBoardScroll = this.hideBoardScroll.bind(this);
    this.handleBoard = this.handleBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  handleBoard(board) {
    this.setState({ boardId: board.id, choiceDialogue: board.name });
    this.hideBoardScroll();
  }

  handleUploadFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const rowHeight = (`${Math.round(img.height / (img.width / 23.6))}`);
        this.setState({ row_height: rowHeight });
      };
      img.src = fileReader.result;
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
      });
    };
    if (file && file.type === 'image/jpeg') {
      if (file.size < 2000000) {
        fileReader.readAsDataURL(file);
        this.setState({ photoError: null });
      } else {
        this.setState({ photoError: 'Please use a .jpg less than 2MB' });
      }
    }
  }

  displayBoardScroll() {
    if (this.state.boardscroll) {
      const boards = this.props.boards.map((board, i) => {
        return (
          <SelectBoard
            onSelectBoard={this.handleBoard}
            board={board}
            key={i}
            text='Select'
          />
        )
      });

      return (
        <div className='board-scroll-container'>
          {boards}
        </div>
      )
    }
  }

  update(field) {
    return (e) => {
      this.setState({ pin: { ...this.state.pin, [field]: e.target.value } });
    };
  }

  hideBoardScroll(e) {
    this.setState({ boardscroll: false });
  }

  showBoardScroll(e) {
    this.setState({ boardscroll: true });
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

  displayFooter() {
    if (this.state.photoError) {
      return (
        <p className="size-error" >{this.state.photoError}</p>
      )
    } else {
      return (
        <p> Use high-quality .jpg files less than 2MB.</p>
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
        <div className='pin-form-box'>
          <div className='pin-form-header'>
            <button
              className='oval-btn'
              onClick={this.goBack}>
              <i className="fas fa-chevron-left"></i>
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
            <div className='pin-form-left'>
              {this.displayPhoto()}
              <div className='upload-box'>
                <div className='upload-outline'>
                    <button className='upload-btn'>
                      <i className='fas fa-arrow-circle-up'></i>
                    </button>
                    <p>Click to upload</p>
                    <input type="file"
                      onChange={this.handleUploadFile.bind(this)}>
                    </input>
                    <div className="upload-footer">
                      {this.displayFooter()}
                    </div>
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
        </div>
      </div>
    )
  }
}

export default CreatePinForm;
