import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { VerticalLayout } from "@times-components/slice-layout";
import { TileK } from "../../tiles";
import { ResponsiveSlice } from "../shared";
import styles from "./styles";

class Standard extends Component {
  constructor(props) {
    super(props);

    this.renderMedium = this.renderMedium.bind(this);
    this.renderSmall = this.renderSmall.bind(this);
  }

  getTiles(breakpoint) {
    const {
      slice: { items },
      onPress
    } = this.props;

    return items.map((tile, index) => (
      <TileK
        breakpoint={breakpoint}
        key={tile.articleId}
        onPress={onPress}
        tile={tile}
        tileName={`standardItem${index + 1}`}
      />
    ));
  }

  renderMedium(breakpoint) {
    return (
      <View style={styles.container}>
        <VerticalLayout tiles={this.getTiles(breakpoint)} />
      </View>
    );
  }

  renderSmall(breakpoint) {
    return <VerticalLayout tiles={this.getTiles(breakpoint)} />;
  }

  render() {
    return (
      <ResponsiveSlice
        renderSmall={this.renderSmall}
        renderMedium={this.renderMedium}
      />
    );
  }
}

Standard.propTypes = {
  onPress: PropTypes.func.isRequired,
  slice: PropTypes.shape({
    items: PropTypes.array.isRequired
  }).isRequired
};

export default Standard;
