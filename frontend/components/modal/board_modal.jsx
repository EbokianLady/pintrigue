import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateBoardFormContainer from '../boards/create_board_form_container';

function Modal(props) {
  if (!props.modal) {
    return null;
  }

  let component;
  switch (props.modal) {
    case 'newBoard':
      component = <CreateBoardFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div>
      <div className="modal-transparency">
        <div className="modal-child">
          {component}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()) // do I need this here?
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
