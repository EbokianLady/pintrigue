import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import Discovery from './discovery';

const msp = (state) => {
  return ({

  });
};

const mdp = (dispatch) => {
  return ({

  });
};

export default withRouter(connect(msp, mdp)(Discovery));
