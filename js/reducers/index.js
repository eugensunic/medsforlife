import { combineReducers } from 'redux';

import tag1 from './asynctag1';
import tag2 from './asynctag2';
import header from './asyncheader';
import overviewstats from './overviewstats.js';
import overviewstats_extra from './overviewstatsextra.js';
import filtercall from './filtersql';
import getId from './getmax';
import bar_change from './barchange';
import color_navigation from './color_change_navigation';

import data_input from './datainputpage/datainput';
import basic from './datainputpage/basic';
import condition from './datainputpage/condition';
import drug from './datainputpage/drug';
import sides from './datainputpage/sides';
import nutrient from './datainputpage/nutrient';
import natural from './datainputpage/natural';
import extra from './datainputpage/extra';
import other from './datainputpage/other';

import conditionstat from './datastats/conditionstat.js';
import conditionppistat from './datastats/conditionppistat.js';
import sidestat from './datastats/sidestat.js';
import genericstat from './datastats/genericstat.js';
import brandstat from './datastats/brandstat.js';
import otherstat from './datastats/otherstat.js';
import usedstat from './datastats/usedstat.js';
import nutrientstat from './datastats/nutrientstat.js';
import naturalstat from './datastats/naturalstat.js';
import everything from './otherstats/everything.js';
import dr from './doctorstats/dr.js';
import ph from './pharmastats/ph.js';
import dr_all from './doctor_call_all.js';
import pharma_all from './pharma_call_all.js';
import nav from './navbar/nav.js';
import post from './post.js';

export default combineReducers({
  tag1,
  tag2,
  header,
  bar_change,
  color_navigation,
  filtercall,
  getId,
  data_input,
  basic,
  condition,
  drug,
  sides,
  nutrient,
  natural,
  extra,
  other,
  conditionstat,
  conditionppistat,
  sidestat,
  genericstat,
  brandstat,
  otherstat,
  usedstat,
  nutrientstat,
  naturalstat,
  everything,
  dr,
  ph,
  dr_all,
  pharma_all,
  nav,
  overviewstats,
  overviewstats_extra,
  post
});
