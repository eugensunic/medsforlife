import React from 'react';
import Select from 'react-select';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //make a section on other drugs what longterm side effects to they cause: cholesterol, diabetes, high blood pressure meds, nsaids etc. don't forget that.
    return (
      <div className="my_comments_section_starter">
        <h4 className="overwrite_h4">
          Eugen Sunic's conclusion on posts, stories, comments, discussions <span className="little-font">(after at least 1000+ of them read)</span>{' '}
        </h4>
        <ul>
          <li>
            When it comes to heartburn I&#39;ve noticed that maybe 10% out of all posters are taking H2 blockers (ranitidine, zantac etc.). Instead of trying H2 blockers
            first they are immediately given or seek PPIs
          </li>
          <li>
            Many people take other medication along with PPIs, other medication are (the most common ones used: blood pressure, NSAIDS, diabetes, cholesterol, anxiety
            drugs etc.)
          </li>
          <li>Many people complain about weight gain due to PPIs</li>
          <li>
            A good amount of people complain about different brands (side effects), some are definitely better for some people. Patients need to find the right/correct
            PPI generic/brand. The one, which will cause minimal or no side effects
          </li>
          <li>
            People who have been on this drug continuously (daily) for a long time (10+ years) do get side effects but most of them get minor side effects rather than
            horror stories sides (CKD, nephritis, osteoporosis, dementia, heart problems etc.). Basically they have side effects which aren&#39;t life threatening.
          </li>
          <li>People have a lot of side effects from omeprazole, they are complaining about it, especially the users who&#39;ve been on it short-term</li>
          <li>Some people are alergic to these drugs</li>
          <li>You can see through the posts that most side effect reports come from people who are adapting to the drug (short term users)</li>
          <li>No one talks about this drugs in terms of PPIs causing cancer</li>
          <li>
            GERD, Barrett&#39;s and stomach problems seem to be inherited. There are many people whose ancestors (parents, grandparents) have/had the same disease.
            Genetics obviously plays a role in getting the disease for some people
          </li>
          <li>People are saying that it is very hard to get off from PPIs once you start taking them</li>
          <li>Many patients are reporting acid rebound effect after stopping their PPI therapy.</li>
          <li>Many of them have weaned off the meds by decreasing the dosage gradually over a period of time</li>
          <li>People are having trouble even with a small hiatal hernia</li>
          <li>
            Some people just need the meds no matter what. There are a lot of people who have managed their diet are thin-slim eat healthy, don't eat gluten, don't drink,
            don&#39;t smoke but still have reflux because of the dysfunctional sphincter or/and the hiatal hernia or other problem
          </li>
          <li>
            There are a lot of commentators scaring PPIs users. they aren&#39;t just telling them that PPIs are bad, instead they are scaring them by telling them to get
            off the drug immediately
          </li>
          <li>
            People are more and more worried because of the increasing media reports that PPIs cause life threatening diseases (CKD, dementia, osteoporosis, heart
            problems, premature death, cancer etc.)
          </li>
          <li>
            A lot of people think that people who are on this meds are those who don&#39;t take care of their lifestyle and this is the reason why they have upper
            abdominal problems
          </li>
          <li>Quite a few people with stomach and GERD problems haven&#39;t been drinking or smoking before getting the upper abdominal issues</li>
          <li>Maybe 10-15% (subjectively) trust pharmaceutical companies</li>
        </ul>
      </div>
    );
  }
}
