import React from 'react';

export default class Allnatural extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="natural_section_starter">
        <h4 className="overwrite_h4">
          All natural <span className="little-font">(all natural products collected in posts)</span>
        </h4>

        <h5 className="black-color">
          <strong>Top 10 choices</strong>
        </h5>
        <ul>
          <li>Apple cide vinegar</li>
          <li>DGL (deglycyrrhizinated licorice)</li>
          <li>Probiotics</li>
          <li>Aloe vera</li>
          <li>Digestive enzymes</li>
          <li>Gluten free diet</li>
          <li>Papaya (capsules, raw)</li>
          <li>Paleo diet</li>
          <li>Betaine HCL</li>
        </ul>
        <div className="row">
          <h5 className="black-color">
            <strong>Other natural products</strong>
          </h5>
          <div className="col-sm-4">
            <ul>
              <li>Slippery elm</li>
              <li>Honey (manuka, other)</li>
              <li>Ginger (capsules, raw, tea)</li>
              <li>Sodium bicarbonate</li>
              <li>Almonds</li>
              <li>Acidophilius</li>
              <li>Magnesium</li>
              <li>Kefir</li>
              <li>Low carb diet</li>
              <li>Vitamins</li>
              <li>L-glutamine</li>
              <li>Magnesium citrate</li>
              <li>Marshmallow root tea</li>
              <li>Mastic gum</li>
              <li>Oatmeal</li>
              <li>Mint</li>
              <li>Herbal enzymes</li>
              <li>Calcium tab</li>
              <li>Persimmon tea</li>
              <li>Lemon</li>
              <li>Turmeric</li>
              <li>VLC diet</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <li>Dairy free, lactose free</li>
              <li>Primrose oil</li>
              <li>Candida diet</li>
              <li>Vitamin B complex</li>
              <li>Mustard</li>
              <li>Vitamin D3</li>
              <li>Low sugar diet</li>
              <li>Melatonin</li>
              <li>Zinflori</li>
              <li>Gentian root</li>
              <li>Medical cannabis</li>
              <li>Gum chewing</li>
              <li>Fiber pills</li>
              <li>Lemon juice</li>
              <li>Coconut water</li>
              <li>Dehydrated strawberries</li>
              <li>Dandelion root</li>
              <li>Apple</li>
              <li>Bitters</li>
              <li>Soy milk</li>
              <li>Alkalete</li>
              <li>Spectrazyme by metagenics</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <li>Acupuncture</li>
              <li>Warm water</li>
              <li>D-limonene</li>
              <li>Plain cream crackcers</li>
              <li>Homemade (apple juice)</li>
              <li>Celery</li>
              <li>Wheat diet</li>
              <li>Toast</li>
              <li>Oil</li>
              <li>Chamomile tea</li>
              <li>Cabbage juice</li>
              <li>GAPS diet</li>
              <li>Fennel seeds</li>
              <li>Fast tract diet</li>
              <li>Potassium punch</li>
              <li>Kyo-dolphilus</li>
              <li>Pineapple</li>
              <li>Niacin (B3)</li>
              <li>Wheat-Belly Diet</li>
              <li>Grain-free diet</li>
              <li>Jalapeno snacks</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
