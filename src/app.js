import React, { Component } from 'react';
import {Dashboard, Dataset} from 'react-dashboard';
import NVD3Chart from 'react-nvd3';

export default class GADashboard extends Dashboard {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  onAutocompleteChange(payload) {
    console.log(payload.value);
  }

}
