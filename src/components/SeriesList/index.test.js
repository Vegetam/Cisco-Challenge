import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import SeriesList from './index';


  it('should render list of series tv', () => {
    const series = ['doctor who'];
    const component = document.createElement(<SeriesList list={series} />);
    expect(component).toMatchSnapshot();
  });