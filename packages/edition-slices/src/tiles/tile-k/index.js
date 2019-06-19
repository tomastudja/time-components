import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components/styleguide";
import Image from "@times-components/image";
import {
  getTileImage,
  TileLink,
  TileSummary,
  withTileTracking
} from "../shared";
import styleFactory from "./styles";

const TileK = ({ onPress, tile, breakpoint }) => {
  const styles = styleFactory(breakpoint);
  const crop = getTileImage(tile, "crop32");

  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <Image
        aspectRatio={3 / 2}
        relativeWidth={crop.relativeWidth}
        relativeHeight={crop.relativeHeight}
        relativeHorizontalOffset={crop.relativeHorizontalOffset}
        relativeVerticalOffset={crop.relativeVerticalOffset}
        style={styles.imageContainer}
        uri={crop.url}
      />
      <TileSummary
        headlineStyle={styles.headline}
        style={styles.summaryContainer}
        tile={tile}
      />
    </TileLink>
  );
};

TileK.propTypes = {
  breakpoint: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired
};

TileK.defaultProps = {
  breakpoint: editionBreakpoints.small
};

export default withTileTracking(TileK);
