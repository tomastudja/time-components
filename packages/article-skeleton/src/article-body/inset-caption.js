import React from "react";
import { TcView } from "@times-components/utils";
import styled from "styled-components";
import { breakpoints, spacing } from "@times-components/ts-styleguide";

import Caption from "@times-components/caption";

// SHOULD BE IN STYLES
const InsetCaptionStyle = styled(TcView)`
  padding-left: ${spacing(2)};

  @media (min-width: ${breakpoints.medium}px) {
    padding-left: 0px;
  }
`;

const InsetCaptionWeb = ({ caption, credits }) => (
  <InsetCaptionStyle>
    <Caption credits={credits} text={caption} />
  </InsetCaptionStyle>
);

InsetCaptionWeb.propTypes = {
  ...Caption.propTypes
};

InsetCaptionWeb.defaultProps = {
  ...Caption.defaultProps
};

export default InsetCaptionWeb;
