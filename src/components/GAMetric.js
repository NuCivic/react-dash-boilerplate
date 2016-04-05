import React, { Component } from 'react';
import {Registry, Metric} from 'react-dashboard';


export default class GAMetric extends Metric {

  getRandomMetric() {
    return Math.floor(Math.random() * 100) ;
  }

}

Registry.set('GAMetric', GAMetric);