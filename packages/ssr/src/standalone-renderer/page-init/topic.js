const defaultMapTopicToConfig = require("../../lib/ads/make-topic-ad-config")
  .defaultClient;
const makeUrls = require("../../lib/make-urls");

const rootTag = "main-container";

window.nuk = window.nuk || {};
window.nuk.ssr = {
  ...window.nuk.ssr,
  ...makeUrls,
  mapTopicToAdConfig: defaultMapTopicToConfig,
  rootTag
};
