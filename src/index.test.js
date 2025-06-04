import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('index entry point', () => {
  it('renders App component', () => {
    require('./index'); // eslint-disable-line global-require
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <App />,
      document.getElementById('root'),
    );
  });
});
