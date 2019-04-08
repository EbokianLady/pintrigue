import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      user: {
        description: user.description || '',
        location: user.location || '',
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        id: user.id,
      },
      changed: false,
      photoError: null,
      selectPhoto: false,
    };

    this.displayPhoto = this.displayPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hidePhotoChoice = this.hidePhotoChoice.bind(this);
    this.showPhotoChoice = this.showPhotoChoice.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username);
  }

  update(field) {
    return (e) => {
      this.setState({
        user: { ...this.state.user, [field]: e.currentTarget.value },
        changed: true,
      });
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file && file.type === 'image/jpeg') {
      if (file.size < 2000000) {
        fileReader.readAsDataURL(file);
        this.setState({ photoError: null });
      } else {
        this.setState({ photoError: 'Please use a .jpg less than 2MB' });
      }
    }
    this.hidePhotoChoice();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[description]', this.state.user.description);
    formData.append('user[location]', this.state.user.location);
    formData.append('user[first_name]', this.state.user.first_name);
    formData.append('user[last_name]', this.state.user.last_name);
    // formData.append('user[username]', this.state.user.username);
    formData.append('user[id]', this.state.user.id);

    if ( this.state.photoFile ) {
      formData.append('user[photo]', this.state.photoFile);
    }

    this.props.updateUser(formData, this.state.user.id)
      .then(() => this.props.history.push(`/${this.props.username}`));
  }

  displayDoneButton() {
    if (this.state.changed) {
      return (
        <button
          className={'rectangle-btn save-btn'}
          onClick={this.handleSubmit} >
          Done
        </button>
      )
    } else {
      return (
        <button
          className={'rectangle-btn disabled'} >
          Done
        </button>
      )
    }
  }

  displayPhoto() {
    if (this.state.photoUrl) {
      return (
        <div className="edit-image" >
          <img src={this.state.photoUrl} />
        </div>
      )
    } else if (this.state.user.photoUrl !== '') {
      return (
        <div className='edit-image'>
          <img src={this.state.user.photoUrl} />
        </div>
      )
    } else {
      return (
        <div className='edit-image'>
          default
        </div>
      )
    }
  }

  displayChoosePhoto() {
    if (this.state.selectPhoto) {
      return (
        <div className="modal-transparency">
          <div className="modal-child">
            <div className="modal-page">
              <div className="pic-selector-box">
                <div className="mini-header">
                  <h3>Change your picture</h3>
                  <div onClick={this.hidePhotoChoice}>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="mini-body">
                  <button className="save-btn">
                    <input type="file"
                      onChange={this.handleFile.bind(this)}>
                    </input>
                    <p>Choose photo</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  displaySizeError() {
    if (this.state.photoError) {
      return (
        <div className='size-error' >{this.state.photoError}</div>
      )
    }
  }

  hidePhotoChoice(e) {
    this.setState({ selectPhoto: false });
  }

  showPhotoChoice(e) {
    this.setState({ selectPhoto: true });
  }

  render() {
    const { user } = this.state;

    return (
      <div className='user-edit-container'>
        {this.displayChoosePhoto()}
        <div className='user-edit-box'>
          <div className='user-edit-header'>
            <div className='user-edit-text'>
              <h2>Edit Profile</h2>
              <p>People on Pintrigue will get to know you with the info below</p>
            </div>
            <div className='user-edit-links'>
              <Link
                className='rectangle-btn'
                to={`/${this.props.username}`}>
                Cancel
              </Link>
              {this.displayDoneButton()}
            </div>
          </div>

          <div className='user-edit-photo'>
            <h4>Photo</h4>
            <div>
              {this.displayPhoto()}
              <button className='rectangle-btn'
                onClick={this.showPhotoChoice}>
                Change
              </button>
            </div>
            {this.displaySizeError()}
          </div>

          <div className='user-name'>
            <div>
              <h4>First name</h4>
              <TextInput
                className='input edit-name'
                name={user.first_name}
                value={user.first_name}
                onChange={this.update('first_name')}
              />
            </div>
            <div>
              <h4>Last name</h4>
              <TextInput
                className='input edit-name'
                name={user.last_name}
                value={user.last_name}
                onChange={this.update('last_name')}
              />
            </div>
          </div>

          {/* <div className='user-username'>
            <h4>Username</h4>
            <div>
              <p>www.pintrigue.herokuapp.com/</p>
              <TextInput
                className='input edit-username'
                name={user.username}
                value={user.username}
                onChange={this.update('username')}
              />
            </div>
          </div> */}

          <div className='user-about'>
            <h4>About your profile</h4>
            <TextInput
              className='input edit-about'
              name={user.description}
              value={user.description}
              onChange={this.update('description')}
            />
          </div>

          <div className='location'>
            <h4>Location</h4>
            <TextInput
              className='input edit-location'
              name={user.location}
              value={user.location}
              onChange={this.update('location')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default UserEdit;
