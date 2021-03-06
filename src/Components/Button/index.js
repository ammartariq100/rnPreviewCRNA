import React from "react";
import { Text, View } from "react-native";
import TextMedium from "../TextMedium";
import styles from "./styles";
import TouchableHOC from "../../Components/TouchableHOC";

export default (props) => {
  return (
    <TouchableHOC
      style={[
        styles.container,
        props.btnContainer, {

          backgroundColor: this.props.ConfigReducer.secondary_font_color,
          shadowColor: this.props.ConfigReducer.primaryColor,
        }
      ]}
      onPress={props.onPress}
    >
      <TextMedium
        style={[
          styles.label,
          props.labelStyle,
          {color:this.props.ConfigReducer.secondaryColor,}
        ]}
      >
        {props.title}
      </TextMedium>
    </TouchableHOC>
  );
};
