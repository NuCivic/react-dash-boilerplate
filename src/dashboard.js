import React, { Component } from 'react';
import {Dashboard, Dataset} from 'react-dashboard';
import NVD3Chart from 'react-nvd3';

export default class GADashboard extends Dashboard {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  onAction(payload) {
    switch(payload.actionType) {
      case 'AUTOCOMPLETE_CHANGE':
        console.log('AUTOCOMPLETE_CHANGE');
        break;
    }
  }

}
