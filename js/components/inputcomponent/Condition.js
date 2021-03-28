import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import * as user from './Functions.js';
@connect(store => {
  return {
    condition: store.condition
  };
})
export default class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_check: false, second_check: false, input_first: undefined, input_second: undefined };
  }

  onChange(val) {
    if (val === 'first') this.setState({ first_check: !this.state.first_check, input_first: undefined });
    else if (val === 'second') this.setState({ second_check: !this.state.second_check, input_second: undefined });
  }

  render() {
    var gas = [
      'Duodenitis',
      "Barrett's esophagus",
      'Achalasia',
      'Duodenal ulcer',
      'Erosive Esophagitis',
      'NERD(nonerosive reflux disease)',
      'Stomach ulcer',
      'Helicobacter Pylori',
      'Indigestion',
      'Zollinger-Ellison syndrome',
      'Gastroesophageal reflux disease (GERD)',
      'Celiac Disease',
      'Irritable Bowel Syndrome',
      'Gastritis',
      'Candida Overgrowth',
      'Hiatal Hernia',
      'Lactose intolerant',
      'Gluten intolerance',
      'Laryngopharyngeal reflux (LPR)',
      'Eosinophilic Esophagitis (EoE)',
      'Esophagitis',
      'Esophagus ulcer',
      'Atrophic gastritis',
      'Chronic gastritis',
      'Acute gastritis',
      'Schatzki ring',
      'Gastroparesis',
      'Stomach cancer',
      'Esophagus cancer',
      'Duodenal cancer',
      'Esophagus dysplasia',
      'Stomach dysplasia',
      'Hypersecretion of gastric acid',
      'Acid reflux'
    ];
    var rest = [
      'Asthma',
      'Diabetes',
      'Crohn’s Disease',
      'Anxiety disorder',
      'Sinusitis',
      'Hypertension',
      'Anemia',
      'Tachycardia',
      'Bradycardia',
      'Gallstones',
      'Gallbladder disease',
      'Pancreatitis',
      'Arhtritis',
      'Asthma',
      'Heart disease',
      'Kidney disease',
      'Bulimia',
      'Divertriculosis',
      'Colitis',
      'Ulcerative colitis',
      'Anorexia',
      'Bronchitis',
      'Fybromyalgia',
      'High blood pressure',
      'Acne',
      'Allergy',
      'ADHD',
      "Alzheimer's",
      'Arthritis',
      'Asperger syndrome',
      'Raynauds syndrome',
      'Autism',
      'Back pain',
      'Alopecia',
      'Bipolar disorder',
      'Schizophrenia',
      'Bladder cancer',
      'Bone cancer',
      'Brain cancer',
      'Breast cancer',
      'Brain tumor',
      'Bursitis',
      'Carpal tunnel syndrome',
      'Cervical cancer',
      'High Cholesterol',
      'Colorectal cancer',
      'Heart failure',
      'Depression',
      'Diarrhea',
      'Drug abuse',
      'Ear problem',
      'Dermatitis',
      'Endometriosis',
      'Erectile dysfunction',
      'Epilepsy',
      'Eye Problem',
      'Fibromyalgia',
      'Freckle',
      'Flu',
      'Osteopenia',
      'Osteoporosis',
      'Generalized Anxiety Disorder',
      'Herpes simplex',
      'Glomerulonephritis',
      'Gonorrhea',
      'Gum Diseases',
      'Gynecomastia',
      'Headache',
      'Migraine',
      'Myocardial infarction',
      'Cardiovascular disease',
      'Heel Pain',
      'Hemorrhoids',
      'Hepatitis',
      'Herniated Discs',
      'AIDS',
      'HIV',
      'Hives',
      'Hyperglycemia',
      'Hyperkalemia',
      'Hyperthyroidism',
      'Infectious mononucleosis',
      'Infertility',
      'Type 1 diabetis',
      'Type 2 diabetis',
      'Irritable bowel syndrome',
      'Itching',
      'Juvenile diabetis',
      'Nephropathy',
      'Leukemia',
      'Liver tumour',
      'Lung cancer',
      'Melena',
      'Dementia',
      'Mucus In Stool',
      'Multiple sclerosis',
      'Obsessive-compulsive disorder',
      'Osteoarthritis',
      'Ovarian cancer',
      'Chronic pain',
      'Panic attack',
      "Parkinson's disease",
      'Personality disorder',
      'Phobia',
      'Hypochondriasis',
      'Poliomyelitis',
      'Conjunctivitis',
      'Posttraumatic stress disorder',
      'Prostate cancer',
      'Psoriasis',
      'Renal failure',
      'Rheumatoid arthritis',
      'Rosacea',
      'Sciatica',
      'Skin cancer',
      'Skin rash',
      'Sleep disorder',
      'Social anxiety disorder',
      'Syphilis',
      'Testicular cancer',
      'Tuberculosis',
      'Candidiasis',
      'Yeast infection',
      'Tinnitus'
    ];
    var condition_cause = [
      'Dementia',
      'Nephritis',
      'CKD (chronic kidney disease)',
      'Osteoporosis',
      'Osteopenia',
      'Heart disease',
      'Cardiovascular disease',
      'Clostridium difficile infection',
      'Hypochloridia',
      'Small Intestinal Bacterial Overgrowth (SIBO)',
      'Candida Overgrowth',
      'Cognitive disorder',
      'Food intolerance',
      'Leaky gut',
      'Anxiety',
      'Pneumonia',
      'Gallstones',
      'Gallbladder disease',
      'Pancreatitis',
      'Depresion',
      'Bone fracture',
      'Kidney failure',
      'Kidney problem',
      'Gastroparesis',
      'Kidney stone',
      'Stomach polyps'
    ];
    var options = [];
    //--------------------------------------------------------------------------------------------------------------
    return (
      <div className="row" id="condition">
        <h3>Condition</h3>

        <div className="col-sm-4 bootstrap_col_modification" style={{ marginTop: this.props.class_modification.marginTop }}>
          <p className="inline">Digestive/gastro related</p>
          <Select
            name="gastro"
            className={'widing' + this.props.error_gastro}
            value={this.props.condition.gastro}
            options={user.pushToObject(gas.sort())}
            searchable={true}
            multi={true}
            onChange={e => this.props.dispatch({ type: 'condition_gastro', payload: e })} //ovu funckije moras van izrokat
          />
          <p className="inline">Disease not found</p>
          <input className="inline" type="checkbox" checked={this.state.first_check} onChange={this.onChange.bind(this, 'first')} />
          {this.state.first_check === false ? (
            <span />
          ) : (
            <div>
              <p />{' '}
              <input
                className={user.isValidString(this.state.input_first)}
                value={this.state.input_first || ''}
                type="text"
                onChange={e => this.setState({ input_first: e.target.value })}
                placeholder="write your condition"
                maxLength="60"
              />
              <button
                className="ok_button"
                onClick={() => {
                  user.updateSelect(this.props.condition.gastro, 'condition_gastro', this.state.input_first);
                  this.setState({ input_first: '' });
                }}>
                OK
              </button>
            </div>
          )}
        </div>
        <div className="col-sm-4 bootstrap_col_modification">
          <p className="inline">Other Condition (asthma, diabetes...)</p>

          <Select
            name="other"
            className={'widing' + this.props.error_other}
            value={this.props.condition.other}
            options={user.pushToObject(user.removeDuplicates(rest.sort()))}
            searchable={true}
            multi={true}
            onChange={e => {
              this.props.dispatch({ type: 'condition_other', payload: e });
            }}
          />

          <p className="inline">Disease not found</p>
          <input className="inline" type="checkbox" checked={this.state.second_check} onChange={this.onChange.bind(this, 'second')} />
          {this.state.second_check === false ? (
            <span />
          ) : (
            <div>
              <p />{' '}
              <input
                className={user.isValidString(this.state.input_second)}
                value={this.state.input_second || ''}
                type="text"
                onChange={e => this.setState({ input_second: e.target.value })}
                placeholder="write your condition"
                maxLength="60"
              />
              <button
                className="ok_button"
                onClick={() => {
                  user.updateSelect(this.props.condition.other, 'condition_other', this.state.input_second);
                  this.setState({ input_second: '' });
                }}>
                OK
              </button>
            </div>
          )}
          <br />
          <p className="inline disease_blank">Leave blank if you don&#39;t have any other diseases</p>
        </div>
        <div className="col-sm-4 bootstrap_col_modification">
          <p className="inline">PPI related (kidney problem, dementia...)</p>

          <Select
            name="ppi"
            className={'widing' + this.props.error_ppi}
            value={this.props.condition.ppi}
            options={user.pushToObject(condition_cause.sort())}
            searchable={true}
            multi={true}
            onChange={e => {
              this.props.dispatch({ type: 'condition_ppi', payload: e });
            }}
          />
          <p className="inline disease_blank">Leave blank if you don&#39;t have any disease that you could contribute to PPIs</p>
          <p className="inline" />
        </div>
      </div>
    );
  }
}
