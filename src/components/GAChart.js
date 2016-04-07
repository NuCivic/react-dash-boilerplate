import React, { Component } from 'react';
import {Chart, Registry} from 'react-dashboard';
import CSV from 'csv-es6-data-backend';

export default class GAChart extends Chart {

  /**
   * This is an example that shows how to fetch data from
   * an external resource for this especific chart.
   *
   * Most of times you can avoid this and load all the needed
   * data for a dashboard in the this.props.globalData property.
   *
   * Notice getData is returning a promise. However if you are
   * using the global data you can return a value (array, number, etc.)
   *
   * Then for asynchronous calls you have to return a promise but for synchronous
   * calls (e.g. you are returning data derived from the globalData) you need to return
   * a value.
   */
  getData() {
    return new Promise(function(resolve, reject) {
      CSV.fetch({url:'http://demo.getdkan.com/node/9/download'})
      .then((data) => {
        let records = data.records.map((record) => ({date: Date.parse(record.date), price: Number(record.price)}))
        resolve([{
          key: 'Gold evolution',
          values: records
        }]);
      });
    });
  }
}

Registry.set('GAChart', GAChart);
