import React, { Component } from 'react';
import {Registry, Choropleth} from 'react-dashboard';

// Stub for data call
import topodata from 'json!../../data/us.json';
import domainData from 'dsv?delimiter=\t!../../data/unemployment.tsv';

export default class GAChoropleth extends Choropleth {
  getCustomData() {
    return {
      topodata: topodata,
      domainData: domainData
    }
  }
}

Registry.set('GAChoropleth', GAChoropleth);