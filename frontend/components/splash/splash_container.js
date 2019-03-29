import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import Splash from './splash';

const msp = (state) => {
  return ({

  });
};

const mdp = (dispatch) => {
  return ({

  });
};

export default withRouter(connect(msp, mdp)(Splash));
