import {
  colours,
  fonts,
  spacing,
  editionBreakpoints
} from "@times-components/styleguide";

const smallBreakpointStyles = {
  container: {
    backgroundColor: colours.functional.border,
    paddingTop: spacing(4)
  },
  heading: {
    color: colours.section.comment,
    fontFamily: fonts.bodyRegular,
    fontSize: 16,
    lineHeight: 18
  },
  headingContainer: {
    paddingBottom: spacing(1),
    paddingTop: spacing(2)
  },
  mastheadContainer: {
    alignItems: "center"
  },
  mastheadStyleST: {
    height: 54,
    width: 283
  },
  mastheadStyleTimes: {
    height: 51,
    width: 283
  },
  text: {
    textAlign: "center"
  }
};

const mediumBreakpointStyles = {
  container: {
    backgroundColor: colours.functional.border,
    paddingTop: spacing(6),
    marginHorizontal: spacing(6),
    marginVertical: spacing(3)
  },
  heading: {
    color: colours.section.comment,
    fontFamily: fonts.bodyRegular,
    fontSize: 15,
    lineHeight: 15
  },
  headingContainer: {
    paddingTop: spacing(2)
  },
  mastheadContainer: {
    alignItems: "center"
  },
  mastheadStyleST: {
    height: 54,
    width: 283
  },
  mastheadStyleTimes: {
    height: 42,
    width: 227
  },
  text: {
    textAlign: "center"
  }
};

export default breakpoint =>
  breakpoint === editionBreakpoints.medium
    ? mediumBreakpointStyles
    : smallBreakpointStyles;
