import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles";
import config from "./config";

const StandardSlice = ({ itemCount, renderItems }) => {
  if (itemCount === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {renderItems(config({ itemCount })).map((item, index) => (
        <View
          key={item.props.id}
          style={
            index === itemCount - 1
              ? styles.itemContainerWithoutBorders
              : styles.itemContainer
          }
        >
          <View style={styles.item}>{item}</View>
        </View>
      ))}
    </View>
  );
};

StandardSlice.propTypes = {
  itemCount: PropTypes.number.isRequired,
  renderItems: PropTypes.func.isRequired
};

export default StandardSlice;
