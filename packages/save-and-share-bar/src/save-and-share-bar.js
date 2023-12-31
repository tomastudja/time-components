/* eslint-env browser */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { TcText, TcView, checkStylesForUnits } from "@times-components/utils";
import {
  IconFacebook,
  IconTwitter,
  IconCopyLink
} from "@times-components/icons";
import UserState from "@times-components/user-state";
import { SectionContext } from "@times-components/context";
import { SaveStar } from "@times-components/ts-components";

import getTokenisedArticleUrlApi from "./get-tokenised-article-url-api";
import withTrackEvents from "./tracking/with-track-events";
import SharingApiUrls from "./constants";
import styles from "./styles";
import BarItem from "./bar-item";
import EmailShare from "./email-share";

/* eslint-disable jsx-a11y/anchor-is-valid */
class SaveAndShareBar extends Component {
  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(e) {
    const { onCopyLink, articleUrl } = this.props;
    e.preventDefault();

    navigator.clipboard.writeText(articleUrl);
    onCopyLink();
  }

  render() {
    const {
      articleId,
      articleUrl,
      savingEnabled,
      sharingEnabled,
      onShareOnFB,
      onShareOnTwitter
    } = this.props;

    return (
      <TcView style={styles.container} data-testid="save-and-share-bar">
        {sharingEnabled && (
          <TcView style={styles.rowItem}>
            <TcText style={checkStylesForUnits(styles.label)}>Share</TcText>
            <SectionContext.Consumer>
              {({ publicationName }) => (
                <UserState
                  state={UserState.showTokenisedEmailShare}
                  fallback={
                    <EmailShare
                      {...this.props}
                      shouldTokenise={false}
                      publicationName={publicationName}
                    />
                  }
                >
                  <EmailShare
                    {...this.props}
                    shouldTokenise
                    publicationName={publicationName}
                  />
                </UserState>
              )}
            </SectionContext.Consumer>
            <BarItem
              onPress={onShareOnTwitter}
              target="_blank"
              dataTestId="share-twitter"
              url={`${SharingApiUrls.twitter}?text=${articleUrl}`}
            >
              <IconTwitter
                fillColour="currentColor"
                height={styles.svgIcon.height}
                title="Share on Twitter"
              />
            </BarItem>
            <BarItem
              onPress={onShareOnFB}
              target="_blank"
              dataTestId="share-facebook"
              url={`${SharingApiUrls.facebook}?u=${articleUrl}`}
            >
              <IconFacebook
                fillColour="currentColor"
                height={styles.svgIcon.fb.height}
                title="Share on Facebook"
              />
            </BarItem>
            <BarItem
              color={styles.svgIcon.save.strokeColour}
              hoverColor={styles.svgIcon.hoverFillColour}
              onPress={this.copyToClipboard}
              dataTestId="copy-to-clickboard"
              url=""
            >
              <IconCopyLink
                fillColour="currentColor"
                height={styles.svgIcon.height}
                title="Copy link to clipboard"
              />
            </BarItem>
          </TcView>
        )}
        {savingEnabled ? (
          <UserState
            state={UserState.showArticleSaveButton}
            serverRender={false}
          >
            <TcView style={styles.rowItemRight} data-testid="save-star">
              <SaveStar articleId={articleId} />
            </TcView>
          </UserState>
        ) : null}
      </TcView>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
SaveAndShareBar.propTypes = {
  articleId: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  articleHeadline: PropTypes.string.isRequired,
  getTokenisedShareUrl: PropTypes.func,
  onCopyLink: PropTypes.func.isRequired,
  onShareOnFB: PropTypes.func,
  onShareEmail: PropTypes.func,
  onShareOnTwitter: PropTypes.func,
  savingEnabled: PropTypes.bool.isRequired,
  sharingEnabled: PropTypes.bool.isRequired
};

/* Serves as an indication when share links are clicked for tracking and analytics */
SaveAndShareBar.defaultProps = {
  onShareOnFB: () => {},
  onShareOnTwitter: () => {},
  onShareEmail: () => {},
  getTokenisedShareUrl: getTokenisedArticleUrlApi
};

export default withTrackEvents(SaveAndShareBar);
