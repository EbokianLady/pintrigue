import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateBoardFormContainer from '../boards/create_board_form_container';
import EditBoardFormContainer from '../boards/edit_board_form_container';

function Modal({ modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch(modal) {
    case 'createBoard':
      component = <CreateBoardFormContainer/>;
      break;
    case 'editBoard':
      component = <EditBoardFormContainer/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-transparency" onClick={closeModal} >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
