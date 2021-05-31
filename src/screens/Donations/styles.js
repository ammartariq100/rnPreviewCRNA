import {StyleSheet} from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';

import { store } from '../../WooCommerceWrapper/store';
const state = store.getState()
const config = state.ConfigReducer
const {
  primary_heading_color,
  primary_section_color,
  primary_font_color,
  secondary_font_color,
  primaryColor,
  secondaryColor,
  primary_placeholder_Color,
  primary_border_color,
  primary_background_color,
  secondary_background_color,
  primary_message_color,
  drawer_Active_Color,
  drawer_inActive_Color,
  default_color,
} = config
export default StyleSheet.create({
  input: {width: '100%', marginBottom: vh * 2},
  txtArea: {
    width: '100%',
    height: vh * 15,
    borderRadius: vw * 3,
    alignItems: 'flex-start',
    paddingTop: vh * 1,
    marginBottom: vh * 4,
  },
  contactTxt: {color: primaryColor, fontSize: vh * 2.8, marginTop: vh * 4},
  contactRow: {flexDirection: 'row', alignItems: 'center', marginTop: vh * 1.5},
  contacticon: {width: vw * 3, height: vh * 2, marginRight: vw * 2},
  contact: {color: primaryColor, fontSize: vh * 2},
});
