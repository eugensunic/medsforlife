import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import * as user from './Functions.js';
@connect(store => {
  return {
    other: store.other
  };
})
export default class Other extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input_first: undefined };
  }
  displayOther(options) {
    return (
      <div className="row">
        <div>
          <p />{' '}
          <input
            className={user.isValidString(this.state.input_first) + ' input_expand'}
            style={{ marginBottom: 7 }}
            type="text"
            value={this.state.input_first || ''}
            onChange={e => this.setState({ input_first: e.target.value })}
            placeholder="write your drug"
            maxLength="60"
          />
          <button
            className="confirm_button_alternative"
            onClick={() => {
              user.updateSelect(this.props.other.otherdrug, 'other', this.state.input_first);
              this.setState({ input_first: '' });
            }}>
            Confirm
          </button>
        </div>

        <Select
          name="other-drug"
          className={'widing' + this.props.input_one}
          value={this.props.other.otherdrug}
          options={options}
          searchable={true}
          multi={true}
          onChange={e => this.props.dispatch({ type: 'other', payload: e })} //ovu funckije moras van izrokat
        />
      </div>
    );
  }
  onRadio(val) {
    if (val === 'first') {
      this.props.dispatch({ type: 'radio_other', payload: [true, false] });
    }
    if (val === 'second') {
      this.props.dispatch({ type: 'radio_other', payload: [false, true] });
    }
  }
  render() {
    var options = null;
    var other_array = [
      'Ranitidine',
      'Gaviscon',
      'Pepcid',
      'Antibiotic',
      'NSAIDs',
      'Calcium carbonate',
      'Tums',
      'Statin',
      'Paracetomol',
      'Aspirin',
      'Ibuprofen',
      'Sucralfate',
      'Famotidine',
      'Cimetidine',
      'Prednisone',
      'Beta blocker',
      'Blood pressure meds',
      'Plavix',
      'Laxative',
      'Ondasetron',
      'Claritine',
      'SSRI',
      'Zoloft',
      'Antacid',
      'Pepto-bismol',
      'Thyroid meds',
      'Fosamax',
      'Reglan',
      'Domperidone',
      'Naprosyn',
      'Xanax',
      'Alprazolam',
      'Diazepam',
      'Calcium channel blocker',
      'Valium',
      'Corticosteroids',
      'Aspirin',
      'Celecoxib',
      'Celebrex',
      'Diclofenac',
      'Diflunisal',
      'Cambia',
      'Cataflam',
      'Voltaren',
      'Zipsor',
      'Zorvolex',
      'Etodolac',
      'Ibuprofen',
      'Motrin',
      'Advil',
      'Ketoprofen',
      'Ketorolac',
      'Toradol',
      'Nabumetone',
      'Naproxen',
      'Naprosyn',
      'Aleve',
      'Anaprox',
      'Naprelan',
      'Oxaprozin',
      'Daypro',
      'Prioxicam',
      'Salsate',
      'Sulindac',
      'Clinoril',
      'Tolmetin',
      'Thizaide diuretics',
      'Beta blockers',
      'ACE inhibitors',
      'ARBs',
      'Calcium channel blockers',
      'Renin inhibitors',
      'Bumetanide',
      'Chlorthalidone',
      'Ethacrynate',
      'Furosemide',
      'HCTZ',
      'Indapimide',
      'Methyclothiazide',
      'Enduron',
      'Lozol',
      'Esidrix',
      'Microzide',
      'Hydrodiuril',
      'Lasix',
      'Edecrin',
      'Diuril',
      'Hygroton',
      'Bumex',
      'Atorvastatin',
      'Lipitor',
      'Fluvastatin',
      'Lescol',
      'Lovastatin',
      'Plivastatin',
      'Livalo',
      'Pravastatin',
      'Pravachol',
      'Rosuvastatin',
      'Crestor',
      'Simvastatin',
      'Zocor',
      'Norvasc',
      'Fluticasone',
      'Salmeterol',
      'Advair Diskus',
      'Budesonide',
      'Formoterol',
      'Symbicort',
      'Mometasone',
      'Formoterol',
      'Humira',
      'Harvoni',
      'Enbrel',
      'Remicade',
      'Enbrel',
      'Mabthera',
      'Rituxan',
      'Revlimid',
      'Avastin',
      'Herceptin',
      'Lantus',
      'Prevnar',
      'Prevenar',
      'Xarelto',
      'Eylea',
      'Lyrica',
      'Neulasta',
      'Seretide',
      'Advair',
      'Copaxone',
      'Sovaldi',
      'Tecfidera',
      'Januvia',
      'Opdivo',
      'Adalimumab',
      'Ledipasvir',
      'sofosbuvir',
      'Etanercept',
      'Infliximab',
      'Rituximab',
      'Lenalidomide',
      'Bevacizumab',
      'Trastuzumab',
      'Insulin',
      'Rivaroxaban',
      'Aflibercept',
      'Pregabalin',
      'Pegfilgrastim',
      'Salmeterol',
      'Glatiramer',
      'Sofosbuvir',
      'Dimethyl fumarate',
      'Sitagliptin',
      'Nivolumab',
      'Adalimumab',
      'Humira',
      'Harvoni',
      'Enbrel',
      'Infliximab',
      'Remicade',
      'Rituximab',
      'Mabthera',
      'Bevacizumab',
      'Avastin',
      'Trastuzumab',
      'Herceptin',
      'Lenalidomide',
      'Revlimid',
      'Sofosbuvir',
      'Sovaldi',
      'Seretide',
      'Advair',
      'Abilify',
      'Aripiprazole',
      'Remicade',
      'Infliximab',
      'Neulasta'
    ];

    return (
      <div>
        <div className="row" id="other_radio">
          <h3>Other drugs</h3>
          <p className="inline">Are you taking any other drugs along with PPIs (blood pressure, pain, cholesterol meds...)?</p>
          <div className={'inline' + this.props.radio}>
            <span
              className={
                this.props.other.radio_other != undefined ? (this.props.other.radio_other[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'
              }
              onClick={() => this.onRadio('first')}>
              YES
            </span>
            <span
              className={
                this.props.other.radio_other != undefined
                  ? this.props.other.radio_other[1] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                  : 'radio_normal_input cancel_margin_last'
              }
              onClick={() => this.onRadio('second')}>
              NO
            </span>
          </div>
        </div>
        {this.props.other.radio_other != undefined
          ? this.props.other.radio_other[0] === true ? this.displayOther.call(this, user.pushToObject(user.removeDuplicates(other_array.sort()))) : ''
          : ''}
      </div>
    );
  }
}
