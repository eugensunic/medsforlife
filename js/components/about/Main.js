import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar.js';
import Newstats from '../Newstats/Newstats.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';
import { withRouter, Route, Router, Link } from 'react-router-dom';

@connect(store => {
  return {
    navbar: store.nav
  };
})
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCreatorAge() {
    const date1 = new Date('08/30/1991');
    const date2 = new Date(Date.now())
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) / 365
    return Math.floor(diffDays);
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row" style={{ marginTop: 15, marginBottom: 10 }}>
          <div className="col-sm-6 about_first ">
            <h4 className="overwrite_h4">Introduction</h4>
            <p>
              I’m Eugen Sunic ({this.getCreatorAge()}) creator of the application. I created the whole idea from scratch and then translated it into code (database, server code, browser
              rendering, design). If you are interested in technologies and programming languages used to build this app then check the last section of the page.
            </p>
            <p>I was on the drugs (PPIs) for a short time some 6 years ago because of gastritis. The condition has resolved.</p>
            <p>
              The reason why I decided to create the app was because I wanted to build an application involving medications but was not sure initially which medication
              should I choose as a starting point. The first idea was to pick everything that I could, but soon realized that it would be impossible to come up with an
              end product alone of such immense magnitude.
            </p>
            <p>I decided to invest time and follow the trends in terms of drug/medication discussion.</p>
            <p>
              Proton pump inhibitors became widely discussed after the release of kidney studies. After that numerous studies followed, and PPIs became and are still one
              of the most discussed drugs especially because they are a new class of drugs who hit the market in late eighties to early nineties. There are many arguments
              for and against them but still no scientific proof or conclusion that they are harmful.
            </p>
            <p>
              For those who wish to contact me I’m available on this address <i className="mail_address">eugen.sunic@gmail.com</i>. I speak English, French and Croatian
              so you may write me in these languages.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="center" style={{ marginTop: 50 }}>
              <img src="../pics/me.jpg" className="about_image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 center" style={{ marginTop: 110, marginBottom: 50 }}>
            <a href="/medsforlife/post-collector/" target="_blank" className="center linking_app">
              Application used for collecting comments
            </a>
          </div>
          <div className="col-sm-6  about_second">
            <h4 className="overwrite_h4">About the project</h4>
            <p>
              As you could already see, the main purpose of this site is to collect Internet posts where people/patients express their thoughts about PPIs.
              <strong> The main Criteria</strong> where the decision is made whether to collect the post or not was the{' '}
              <strong>time spent on the drug (duration of treatment)</strong>. In other words, if the post did not specify the treatment duration then the post was
              rejected hence not collected. If the duration was specified then the post was collected and displayed on the web
              <span
                className="change_cursor"
                onClick={() => {
                  this.props.dispatch({ type: 'home_element', payload: 'home' });
                }}>
                {' '}
              </span>.
            </p>
            <p>
              On the other hand, comments were extracted if people/patients talked about their doctors opinion on the drug, what doctors told them and how are they
              behaving when prescribing these drugs for a longer period of time. Also, comments from doctors who have posted on their behalf were also gathered and
              displayed.
            </p>
            <p>
              All of these stories can be filtered based on your wishes. For example, if you want to see stories from people who were on these drugs for 20+ years every
              day you can just click on a button which will filter those specific stories. If you want to display stories where patients are on high doses and see their
              side effects or maybe see posts of patients who are just on omeprazole, nexium, pantoprazole or some other PPI generic/brand you can also do that. There are
              a lot of combinations, which will filter the posts based on your needs and interest.
            </p>
            <p>
              Not only are the posts across the Internet included. The statistics has been generated out of them to see how conditions, drugs, side effects, nutrient
              deficiency, brands rank from the most prevalent, worse, best etc.
            </p>
            <p>
              Apart from this, a unique question and answer pages were created in order for patients to inform themselves about the drug and their condition, find an
              effective way to lower their side effects and to improve their quality of life with or without drugs.
            </p>
            <p>There is also a valuable page for all patients where they can follow the ongoing research which is being done.</p>
            <p>
              The reason of collecting such posts is the huge media reporting about the PPIs side effects. If you search for PPIs dangers, side effects, long-term
              consequences etc. you will see how much information has been posted recently about them. I can definitely say that they have become the most talked topic in
              the world in terms of Pharmaceutical drugs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 about_third">
            <h4 className="overwrite_h4">Research & Vision</h4>
            <p>
              Numerous researches have been done which point that PPIs could be the culprit for kidney, heart, brain problems. The ongoing researches are focused on
              kidneys which relate these drugs to nephritis, chronic kidney disease and kidney failure.
            </p>
            <p>
              There is no evidence for all the above mentioned, only correlation to them which doesn’t prove that PPIs really cause them. Remember,
              <strong> correlation&ne;causation</strong>. However, patients should be aware of those researches and check their vital organs from time to time to avoid
              any possible complications.
            </p>
            <p>
              The vision of this application is to form a platform which will improve the usage of this drugs especially for patients who are on them for a long time. The
              input page is one of the best way to see if these drugs really cause some serious side effects. The input-page app was created after a year of collecting
              posts and thinking carefully what information one needs to give in order to get accurate results, so please{' '}
              <Route
                render={({ history }) => (
                  <span
                    className="change_cursor"
                    onClick={() => {
                      history.push('/form');
                      this.props.dispatch({ type: 'input_element', payload: 'input' });
                    }}>
                    {' '}
                    <strong>fill the form here.</strong>
                  </span>
                )}
              />
            </p>
            <p>
              I’m not a supporter of PPIs and do not work for any drug related company. I have spent an entire year in order to make this work. No one wanted to
              participate in this project, therefore I had to do it on my own. If there is a programmer, doctor, pharmacist or anyone else who thinks that he or she can
              contribute to it then please contact me at <i className="mail_address">eugen.sunic@gmail.com</i>.
            </p>
          </div>
          <div className="col-sm-6 center">
            <div style={{ marginTop: 50 }} />
          </div>
        </div>
        <div className="row">
          <div className="my_comments_section_starter" style={{ marginBottom: 2 }}>
            <strong>NOTE: </strong>
            <ul>
              <li> Every post collected from another site is referenced, the date as well as the post username are also present</li>
              <li> Most answers in the question section are also referenced. In this way accurate information is provided to the patient</li>
              <li>
                {' '}
                Posts have been minimally modified. Modification includes only: syntax and grammar correction. The meaning of the posts has not been modified (this can be
                checked on the URL reference)
              </li>
              <li> Statistics have been fetched from the collected post database and not a single number was modified in terms of percentage and value</li>
              <li> The input-form app does not collect any of your personal information (you can read more on the input-form app page) </li>
              <li> The website is adjusted for all screen resolutions</li>
              <li> The website does not have adds</li>
              <li> The website does not have a monetization system, its revenue is 0$</li>
            </ul>
          </div>
          <p>
            <strong>Technologies used for building this app:</strong>
            <br />
            MySQL, HTML, CSS, Bootstrap, Vanilla JS (JavaScript), jQuery, React Redux
          </p>
        </div>

        <Social shown={false} />
        <Navfooter />
      </div>
    );
  }
}
