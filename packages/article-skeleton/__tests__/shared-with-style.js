import React from "react";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  hoistStyleTransform,
  minimaliseTransform,
  minimalWebTransform,
  stylePrinter
} from "@times-components/jest-serializer";
import "./mocks";
import { ContextProviderWithDefaults } from "@times-components/context";
import ArticleSkeleton from "../src/article-skeleton";
import articleFixture, { testFixture } from "../fixtures/full-article";
import { adConfig } from "./ad-mock";
import articleSkeletonProps from "./shared-article-skeleton-props";

jest.mock("@times-components/save-and-share-bar", () => "SaveAndShareBar");

export default () => {
  addSerializers(
    expect,
    compose(
      stylePrinter,
      minimalWebTransform,
      minimaliseTransform(
        (value, key) => key !== "style" && key !== "className"
      ),
      flattenStyleTransform,
      hoistStyleTransform
    )
  );

  // eslint-disable-next-line global-require
  require("jest-styled-components");

  beforeEach(() => {
    const nuk = {
      user: {
        isLoggedIn: true
      }
    };
    global.nuk = nuk;
  });

  afterEach(() => {
    global.nuk = {};
  });

  it("full article with style", () => {
    const article = articleFixture({
      ...testFixture,
      content: [
        {
          children: [
            {
              attributes: {},
              children: [
                {
                  attributes: {
                    value: "T"
                  },
                  children: [],
                  name: "text"
                }
              ],
              name: "dropCap"
            },
            {
              attributes: {
                value: "his being Black History Month, last week"
              },
              children: [],
              name: "text"
            }
          ],
          name: "paragraph"
        },
        {
          attributes: {
            display: "secondary",
            element: {
              attributes: {
                "chart-id": "csmgb"
              },
              value: "times-datawrapper"
            },
            id: "d2f83305-d558-4f78-f582-32115c659355",
            url:
              "//components.timesdev.tools/lib2/times-datawrapper-1.1.0/times-datawrapper.html"
          },
          children: [],
          name: "interactive"
        },
        {
          attributes: {
            display: "fullwidth",
            element: {
              attributes: {
                "chart-id": "csmgb"
              },
              value: "times-datawrapper"
            },
            id: "d2f83305-d558-4f78-f582-32115c659355",
            url:
              "//components.timesdev.tools/lib2/times-datawrapper-1.1.0/times-datawrapper.html"
          },
          children: [],
          name: "interactive"
        },
        {
          attributes: {
            caption: "An image caption",
            credits: "The image credits",
            display: "primary",
            ratio: "1500:1000",
            url: "https://image.io"
          },
          children: [],
          name: "image"
        },
        {
          attributes: {
            caption: "A secondary image caption",
            credits: "The secondary image credits",
            display: "secondary",
            ratio: "1500:1000",
            url: "https://image.io/secondary"
          },
          children: [],
          name: "image"
        },
        {
          attributes: {
            caption: "An inline image caption",
            credits: "The inline image credits",
            display: "inline",
            ratio: "1500:1000",
            url: "https://image.io/inline"
          },
          children: [],
          name: "image"
        },
        {
          attributes: {
            href: "https://link.io",
            target: "_blank"
          },
          children: [
            {
              attributes: {
                value: "Some Link"
              },
              children: [],
              name: "text"
            }
          ],
          name: "link"
        },
        {
          children: [
            {
              attributes: {},
              children: [
                {
                  attributes: {
                    value: "Some content"
                  },
                  children: [],
                  name: "text"
                }
              ],
              name: "paragraph"
            },
            {
              attributes: {
                caption: {
                  name: "AName",
                  text: "a text",
                  twitter: "@AName"
                }
              },
              children: [
                {
                  attributes: {
                    value: "The pull quote content"
                  },
                  children: [],
                  name: "text"
                }
              ],
              name: "pullQuote"
            },
            {
              attributes: {
                brightcoveAccountId: "57838016001",
                brightcovePolicyKey: "1.2.3.4",
                brightcoveVideoId: "4084164751001",
                caption: "This is video caption",
                display: "primary",
                posterImageId: "0c0309d4-1aeb-11e8-9010-1eef6ba5d3de",
                posterImageUrl: "https://image.io"
              },
              children: [],
              name: "video"
            },
            {
              attributes: {
                title: "Example title"
              },
              children: [
                {
                  children: [
                    {
                      children: [
                        {
                          attributes: {
                            value: "Example bullet text"
                          },
                          children: [],
                          name: "text"
                        }
                      ],
                      name: "listElement"
                    },
                    {
                      children: [
                        {
                          attributes: {
                            value: "An example "
                          },
                          children: [],
                          name: "text"
                        },
                        {
                          attributes: {
                            href: "https://example.io",
                            target: "_blank",
                            type: "topic"
                          },
                          children: [
                            {
                              attributes: {
                                value: "link"
                              },
                              children: [],
                              name: "text"
                            }
                          ],
                          name: "link"
                        }
                      ],
                      name: "listElement"
                    },
                    {
                      children: [
                        {
                          attributes: {
                            value: "More example text."
                          },
                          children: [],
                          name: "text"
                        }
                      ],
                      name: "listElement"
                    },
                    {
                      children: [
                        {
                          attributes: {
                            value: "Example text "
                          },
                          children: [],
                          name: "text"
                        },
                        {
                          attributes: {},
                          children: [
                            {
                              attributes: {
                                value: "this is bold "
                              },
                              children: [],
                              name: "text"
                            }
                          ],
                          name: "bold"
                        },
                        {
                          attributes: {},
                          children: [
                            {
                              attributes: {
                                value: "this is in italics."
                              },
                              children: [],
                              name: "text"
                            }
                          ],
                          name: "italic"
                        }
                      ],
                      name: "listElement"
                    }
                  ],
                  name: "unorderedList"
                }
              ],
              name: "keyFacts"
            }
          ],
          name: "paywall"
        },
        {
          name: "heading2",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "This is heading 2"
              }
            }
          ]
        },
        {
          name: "heading3",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "This is heading 3"
              }
            }
          ]
        },
        {
          name: "heading4",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "This is heading 4"
              }
            }
          ]
        },
        {
          name: "heading5",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "This is heading 5"
              }
            }
          ]
        },
        {
          name: "heading6",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "This is heading 6"
              }
            }
          ]
        }
      ]
    });

    const output = TestRenderer.create(
      <ContextProviderWithDefaults
        value={{
          user: { isLoggedIn: true }
        }}
      >
        <ArticleSkeleton
          {...articleSkeletonProps}
          adConfig={adConfig}
          analyticsStream={() => {}}
          data={article}
          onAuthorPress={() => {}}
          onLinkPress={() => {}}
          onRelatedArticlePress={() => {}}
          onTopicPress={() => {}}
          onTwitterLinkPress={() => {}}
          onVideoPress={() => {}}
          commentingConfig={{ account: "dummiy-spotim-id" }}
          paidContentClassName="paidContentClassName"
        />
      </ContextProviderWithDefaults>
    );

    expect(output).toMatchSnapshot();
  });
};
