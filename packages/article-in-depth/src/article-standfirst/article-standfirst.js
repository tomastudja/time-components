import React from "react";
import PropTypes from "prop-types";
import { checkStylesForUnits } from "@times-components/utils";
import { colours } from "@times-components/ts-styleguide";
import styles from "../styles";
import { StandfirstContainer } from "../styles/responsive";

const HeaderStandfirst = ({ standfirst, color }) => {
  if (!standfirst) return null;

  return (
    <StandfirstContainer
      role="heading"
      aria-level="2"
      styles={{ ...checkStylesForUnits(styles.standFirst), color }}
      testID="standfirst"
    >
      {standfirst}
    </StandfirstContainer>
  );
};

HeaderStandfirst.propTypes = {
  color: PropTypes.string,
  standfirst: PropTypes.string
};

HeaderStandfirst.defaultProps = {
  color: colours.functional.white,
  standfirst: null
};

export default HeaderStandfirst;
