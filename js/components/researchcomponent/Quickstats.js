import React from 'react';

export default class Quickstats extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: 40, marginBottom: 40 }}>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3265012/" target="_blank">
                How many people develop Barrett’s?
              </a>
            </span>
            <p />
            <span className="percent_research">20 out of 100 000 people on AVG</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              {' '}
              <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/definition-facts" target="_blank">
                How many people suffer from GERD?
              </a>
            </span>
            <p />
            <span className="percent_research">20% of US population</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.cancer.org/cancer/stomach-cancer/about/key-statistics.html" target="_blank">
                How many people get stomach cancer each year?
              </a>
            </span>
            <p />
            <span className="percent_research">26,240 cases out of 321 mil. people (2018, US)</span>
          </div>
        </div>
        <div className="row" style={{ marginBottom: 40 }}>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.cancer.org/cancer/esophagus-cancer/about/key-statistics.html" target="_blank">
                How many people get esophagus cancer each year?
              </a>
            </span>
            <p />
            <span className="percent_research">17,290 cases out of 321 mil. people (2018, US)</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              <a
                href="https://www.washingtonpost.com/national/health-science/heartburn-drugs-cost-billions-each-year-but-consumers-can-keep-costs-in-check/2014/07/07/8e85e02c-aabd-11e3-98f6-8e3c562f9996_story.html?utm_term=.13b835adaec4"
                target="_blank">
                How much money does Nexium generate a year?
              </a>
            </span>
            <p />
            <span className="percent_research">$6 B (US)</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.medscape.com/viewarticle/818227" target="_blank">
                How many patients with GERD will develop Barrett’s?
              </a>
            </span>
            <p />
            <span className="percent_research">5%</span>
          </div>
        </div>
        <div className="row" style={{ marginBottom: 40 }}>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.medscape.com/viewarticle/818227" target="_blank">
                How many patients with Barrett’s progress to cancer?
              </a>
            </span>
            <p />
            <span className="percent_research">(0.3% - 0.7%)</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4025077/" target="_blank">
                How many patients progress from LGD to cancer?
              </a>
            </span>
            <p />
            <span className="percent_research">(0.5%-1.4%)</span>
          </div>
          <div className="col-sm-4 center">
            <span>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4025077/" target="_blank">
                How many patients progress from LGD to HGD/EAC?
              </a>
            </span>
            <p />
            <span className="percent_research">13%</span>
          </div>
        </div>
      </div>
    );
  }
}
