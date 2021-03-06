import { StyleSheet } from "react-native";
import vh from "../../Units/vh";
import vw from "../../Units/vw";

import { store } from "../../WooCommerceWrapper/store";
const state = store.getState();
const config = state.ConfigReducer;
const { primary_heading_color, primaryColor } = config;
export default StyleSheet.create({
  banner: {
    width: "100%",
    height: vh * 22,
    marginVertical: vh * 2,
    justifyContent: "center",
  },
  title: { marginLeft: vw * 4 },
  heading: { color: primaryColor, fontSize: vh * 2.5, marginBottom: vh * 2 },
  p1: {
    color: primary_heading_color,
    fontSize: vh * 1.8,
    marginBottom: vh * 4,
  },
  p2: { color: primary_heading_color, fontSize: vh * 1.8 },
});
