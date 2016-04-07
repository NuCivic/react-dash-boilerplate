/**
 * Remove the css files you don't need because
 * they are loaded by the environment. For instance
 * DKAN loads bootstrap then we should not load
 * boostrap again.
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nvd3/build/nv.d3.min.css';
import 'react-select/dist/react-select.min.css';
import 'fixed-data-table/dist/fixed-data-table.min.css';
import 'react-dashboard/dist/react-dashboard.min.css';


/**
 * Don't remove this. Required dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { settings } from './settings';

/**
 * Add your custom components here. For example, if you
 * need to add a chart and the data provided doesn't formated
 * properly to feed the chart then you need to create a new
 * chart component that inherits from Chart and add a function
 * to retrieve the data well formated. Let's standarize derived
 * component names in this way: [ProjectInitial][ComponentType].
 * For instance: GACharts.
 *
 */
import GAChart from './components/GAChart';
import GAChoropleth from './components/GAChoropleth';
import GATable from './components/GATable';
import GAMetric from './components/GAMetric';
import GAGoal from './components/GAGoal';
import MyCustomLayout from './layouts/MyCustomLayout';
import GADashboard from './dashboard';

/**
 * This renders the GADAshboard
 */
document.addEventListener('DOMContentLoaded', function(event) {
  ReactDOM.render(<GADashboard {...settings} layout={MyCustomLayout}/>, document.getElementById('root'));
});
