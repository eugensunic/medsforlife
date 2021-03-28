import React from 'react';

export default class Navfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div className="footer">
        <div className="footer-inner-content">
          Icons made by{' '}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
            CC 3.0 BY
          </a>
        </div>
        <span className="go-up" onClick={()=> setTimeout(()=> { window.scrollTo(0, 0);}, 100)}>Go up</span>
      </div>
    );
  }
}
