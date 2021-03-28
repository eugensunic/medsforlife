import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import * as user from './Functions.js';
@connect(store => {
  return {
    natural: store.natural
  };
})
export default class Natural extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input_first: undefined, first_check: false, input_second: undefined, second_check: false };
  }

  onChange(val) {
    if (val === 'first') this.setState({ first_check: !this.state.first_check, input_first: undefined });

    if (val === 'second') this.setState({ second_check: !this.state.second_check, input_second: undefined });
  }
  render() {
    var array_natural = [
      'Apple cide vinegar',
      'DGL',
      'Probiotics',
      'Aloe vera',
      'Digestive enzymes',
      'Gluten free diet',
      'Papaya',
      'Paleo diet',
      'Betaine HCL',
      'Slippery elm',
      'Honey manuka',
      'Ginger',
      'Sodium bicarbonate',
      'Almonds',
      'Acidophilius',
      'Magnesium',
      'Kefir',
      'Low carb diet',
      'Vitamins',
      'L-glutamine',
      'Magnesium citrate',
      'Marshmallow root tea',
      'Mastic gum',
      'Oatmeal',
      'Mint',
      'Herbal enzymes',
      'Calcium tab',
      'Persimmon tea',
      'Lemon',
      'Turmeric',
      'VLC diet',
      'Dairy free',
      'Lactose free',
      'Primrose oil',
      'Candida diet',
      'Vitamin B complex',
      'Mustard',
      'Vitamin D3',
      'Low sugar diet',
      'Melatonin',
      'Zinflori',
      'Gentian root',
      'Medical cannabis',
      'Gum chewing',
      'Fiber pills',
      'Lemon juice',
      'Coconut water',
      'Dehydrated strawberries',
      'Dandelion root',
      'Apple',
      'Bitters',
      'Soy milk',
      'Alkalete',
      'Acupuncture',
      'Warm water',
      'D-limonene',
      'Plain crackers',
      'Homemade apple juice',
      'Celery',
      'Wheat diet',
      'Toast',
      'Oil',
      'Chamomile tea',
      'Cabbage juice',
      'GAPS diet',
      'Fennel seeds',
      'Fast tract diet',
      'Potassium punch',
      'Kyo-dolphilus',
      'Pineapple',
      'Niacin',
      'Wheat-Belly diet',
      'Grain-free diet',
      'Jalapeno snacks'
    ];

    return (
      <div className="row" id="natural_remedies">
        <h3>
          Natural remedies <span className="lowfont">(optional)</span>
        </h3>
        <div className="col-sm-4">
          <p>Helped remedies</p>
          <Select
            name="natural_helped"
            className={'widing' + this.props.input_one}
            value={this.props.natural.naturalhelped}
            options={user.pushToObject(array_natural)}
            searchable={true}
            multi={true}
            onChange={e => this.props.dispatch({ type: 'natural_helped', payload: e })} //ovu funckije moras van izrokat
          />
          <p className="inline">Remedy not found?</p>
          <input className="inline" type="checkbox" checked={this.state.first_check} onChange={this.onChange.bind(this, 'first')} />
          {this.state.first_check === false ? (
            <span />
          ) : (
            <div>
              <p />{' '}
              <input
                className={user.isValidString(this.state.input_first) + ' input_expand'}
                type="text"
                value={this.state.input_first || ''}
                onChange={e => this.setState({ input_first: e.target.value })}
                placeholder="write your natural remedy"
                maxLength="60"
              />
              <button
                className="confirm_button_alternative"
                onClick={() => {
                  user.updateSelect(this.props.natural.naturalhelped, 'natural_helped', this.state.input_first);
                  this.setState({ input_first: '' });
                }}>
                Confirm
              </button>
            </div>
          )}
        </div>
        <div className="col-sm-4">
          <p>Not helped remedies</p>
          <Select
            name="natural_not_helped"
            className={'widing' + this.props.input_two}
            value={this.props.natural.naturalnothelped}
            options={user.pushToObject(array_natural)}
            searchable={true}
            multi={true}
            onChange={e => this.props.dispatch({ type: 'natural_nothelped', payload: e })} //ovu funckije moras van izrokat
          />
          <p className="inline">Remedy not found?</p>
          <input className="inline" type="checkbox" checked={this.state.second_check} onChange={this.onChange.bind(this, 'second')} />
          {this.state.second_check === false ? (
            <span />
          ) : (
            <div>
              <p />{' '}
              <input
                className={user.isValidString(this.state.input_second) + ' input_expand'}
                type="text"
                value={this.state.input_second || ''}
                onChange={e => this.setState({ input_second: e.target.value })}
                placeholder="write your natural remedy"
                maxLength="60"
              />
              <button
                className="confirm_button_alternative"
                onClick={() => {
                  user.updateSelect(this.props.natural.naturalnothelped, 'natural_nothelped', this.state.input_second);
                  this.setState({ input_second: '' });
                }}>
                Confirm
              </button>
            </div>
          )}
        </div>
        <div className="col-sm-4" />
      </div>
    );
  }
}
