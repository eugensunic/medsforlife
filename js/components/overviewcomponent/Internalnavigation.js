import React from 'react';

export default class InternalNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentsDidMount() {}

  render() {
    return (
      <div style={{ marginLeft: 15 }}>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#eaeaea' }}
          onClick={() => {
            document.querySelector('#basic-extract').scrollIntoView();
          }}>
          Person basic info
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#f0e4e4' }}
          onClick={() => {
            document.querySelector('#condition-extract').scrollIntoView();
          }}>
          Disease
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#d3e6f2' }}
          onClick={() => {
            document.querySelector('#drugs-extract-part1').scrollIntoView();
          }}>
          PPI Drugs
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#f8e3c4' }}
          onClick={() => {
            document.querySelector('#sides-extract-part1').scrollIntoView();
          }}>
          Side effects
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#fafafa' }}
          onClick={() => {
            document.querySelector('#other-nutrient-extract').scrollIntoView();
          }}>
          Other drugs & Nutrient
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#b5e0b5' }}
          onClick={() => {
            document.querySelector('#natural-extract').scrollIntoView();
          }}>
          Natural supplements
        </span>
        <span
          className="internal_navigation"
          style={{ backgroundColor: '#eaeaea' }}
          onClick={() => {
            document.querySelector('#extra-extract-part1').scrollIntoView();
          }}>
          Extra info
        </span>
      </div>
    );
  }
}
