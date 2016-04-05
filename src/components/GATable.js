import React, { Component } from 'react';
import {Registry, Table, Dataset} from 'react-dashboard';

export default class GATable extends Table {

  getData() {
    // return new Promise((resolve, reject) => {
    //   let dataset = new Dataset({
    //     backend: 'csv',
    //     url: 'http://demo.getdkan.com/node/9/download'
    //   });
    //   return dataset.fetch().then(() => {
    //     dataset.query({size: 100, from: 0}).then((data) =>{
    //       resolve(data.hits)
    //     });
    //   });
    // });

  }
}

Registry.set('GATable', GATable);
