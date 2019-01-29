import React from "react";
import PropTypes from "prop-types";
import { LeadOneAndTwoSlice } from "@times-components/slice-layout";
import { PrimaryTile } from "../../tiles";

const LeadOneAndOneSlice = ({ lead, support }) => (
  <LeadOneAndTwoSlice
    renderLead={() => <PrimaryTile tile={lead} withImage withSummaryMargins />}
    renderSupport1={() => <PrimaryTile tile={support} withSummaryMargins />}
    renderSupport2={() => null}
  />
);

LeadOneAndOneSlice.propTypes = {
  lead: PropTypes.shape({}).isRequired,
  support: PropTypes.shape({}).isRequired
};

export default LeadOneAndOneSlice;