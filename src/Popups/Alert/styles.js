import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/fonts';
import vw from '../../Units/vw';
import vh from '../../Units/vh';
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
  modalTouchable: {
    backgroundColor: primary_background_color,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: vh * 100,
    width: vw * 100,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: secondaryColor,
    borderRadius: 3 * vw,
    paddingTop: vh * 2,
    paddingBottom: vh * 4,
    alignItems: 'center',
    paddingHorizontal: vw * 8,
  },
  check: {width: vw * 15, height: vh * 5, marginBottom: vh * 1},
  title: {fontSize: vw * 5, marginVertical: vh * 1},
  Message: {
    fontSize: vw * 4.3,
    textAlign: 'center',
    color: primary_heading_color,
    marginTop: vh * 1.5,
  },
  redirect: {fontSize: vw * 3.5, marginTop: vh * 3},
  login: {
    fontSize: vw * 3.5,
    textDecorationLine: 'underline',
    color: primary_message_color,
  },
  BtnContainer: {marginTop: vh * 3, width: '50%'},
  cross: {width: vw * 3, height: vh * 2},
  imageBg: {
    shadowColor: primaryColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: vw * 2,
    elevation: 7,
    width: vw * 70,
    backgroundColor: secondaryColor,
    paddingBottom: vh * 3,
    // minHeight:vh*20,
  },
  crossContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingTop: vh * 1.5,
    paddingRight: vw * 3,
  },
  // cross:{
  //   width: vw * 3,

  // },
  container: {alignItems: 'center', justifyContent: 'center'},
  checkMark: {width: vw * 10, height: vh * 5, marginBottom: vh * 1},
  text: {
    fontSize: vh * 2.2,
    width: '95%',
    textAlign: 'center',
    color: primary_heading_color,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh * 3,
    width: '80%',
  },
  yesBtn: {
    backgroundColor: secondary_font_color,
    width: '44%',
    height: vh * 5.4,
  },
  noBtn: {
    width: '44%',
    backgroundColor: secondaryColor,
    color: secondary_font_color,
    borderWidth: vw * 0.3,
    borderColor: secondary_font_color,
    height: vh * 5.4,
  },
  request: {
    backgroundColor: secondary_font_color,
    width: '35%',
    marginTop: vh * 2,
    height: vh * 5,
  },
});
