import React from "react";
import { View, Text } from "react-native";
import Link from "@times-components/link";
import Markup, { builder as mb } from "./markup-builder";
import propTypes from "./markup-proptype";

const styles = {
  italic: {
    fontStyle: "italic"
  },
  bold: {
    fontWeight: "bold"
  }
};

const tagMap = new Map([
  [
    "p",
    {
      tag: Text,
      attrs() {}
    }
  ],
  [
    "a",
    {
      tag: Link,
      attrs({ href }) {
        return {
          url: href
        };
      }
    }
  ],
  [
    "b",
    {
      tag: Text,
      attrs() {
        return {
          style: styles.bold
        };
      }
    }
  ],
  [
    "i",
    {
      tag: Text,
      attrs() {
        return {
          style: styles.italic
        };
      }
    }
  ],
  [
    "span",
    {
      tag: Text,
      attrs() {}
    }
  ],
  [
    "author",
    {
      tag: Link,
      attrs({ slug }) {
        return {
          url: `profile/${slug}`
        };
      }
    }
  ],
  [
    "div",
    {
      tag: View,
      attrs() {},
      wrapText: Text
    }
  ]
]);

const MarkupNative = ({ ast, wrapIn }) =>
  <Markup ast={ast} tagMap={tagMap} wrapIn={wrapIn} />;

MarkupNative.propTypes = propTypes;

export default MarkupNative;

export const builder = mb(tagMap);
