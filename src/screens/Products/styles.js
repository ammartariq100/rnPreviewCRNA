import {StyleSheet} from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
import {
  primary_heading_color,
  primary_section_color,
  primary_font_color,
  secondary_font_color,
  primaryColor,
  secondaryColor,
  primary_placeholder_Color,
  primary_border_color,
} from '../../../config.json';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh * 2,
    paddingHorizontal: vw * 5,
  },
  headerInner: {flexDirection: 'row', alignItems: 'center'},
  sort: {height: vh * 2, width: vw * 5, marginRight: vw * 1},
  sortText: {color: primaryColor, fontSize: vh * 1.5},
  flatlist: {paddingHorizontal: vw * 5, marginTop: vh * 2},
});
