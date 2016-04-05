import React, { Component } from 'react';
import {Chart, Registry} from 'react-dashboard';

export default class GAChart extends Chart {
  getData() {
    return fetch('http://localhost:3004/data');
  }

  onData(data) {
    data.json().then((data) => this.setData(data))
  }
}

Registry.set('GAChart', GAChart);
