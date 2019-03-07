import React from "react";
import { ScrollView } from "react-native";
import {
  mockEditionSlice,
  mockDailyRegisterSlice
} from "@times-components/fixture-generator";

import {
  TileA,
  TileAE,
  TileB,
  TileC,
  TileD,
  TileE,
  TileF,
  TileG,
  TileH,
  TileI,
  TileJ,
  TileL,
  TileM,
  TileN,
  TileO,
  TileP,
  TileQ,
  TileR,
  TileS,
  TileT,
  TileU,
  TileV,
  TileW,
  TileX,
  TileY,
  TileZ,
  TileAA,
  TileAB
} from "./src/tiles";

const tile = mockEditionSlice(1).items[0];
const dailyRegisterItem = mockDailyRegisterSlice().birthdaysToday;

const preventDefaultedAction = decorateAction =>
  decorateAction([
    ([e, ...args]) => {
      e.preventDefault();
      return ["[SyntheticEvent (storybook prevented default)]", ...args];
    }
  ]);

const renderTile = (Tile, mockTile = tile) => (_, { decorateAction }) => (
  <ScrollView>
    <Tile
      onPress={preventDefaultedAction(decorateAction)("onPress")}
      tile={mockTile}
    />
  </ScrollView>
);

const tileStories = [
  {
    name: "Tile A - Bottom image, 35pt headline, no teaser",
    Tile: TileA
  },
  {
    name: "Tile B - No image, 25pt headline, with teaser",
    Tile: TileB
  },
  {
    name: "Tile C - Top image, 22pt headline, no teaser",
    Tile: TileC
  },
  {
    name: "Tile D - Side 3/2 image, 22pt headline, no teaser",
    Tile: TileD
  },
  {
    name: "Tile E - Side 4/5 image, 22pt headline, no teaser",
    Tile: TileE
  },
  {
    name: "Tile F - 35pt Headline, no image, strapline and teaser",
    Tile: TileF
  },
  {
    name: "Tile G - Roundel image, 22pt headline, no teaser",
    Tile: TileG
  },
  {
    name:
      "Tile H - 22pt headline, teaser, byline at bottom all on left, image 2:3 right bottom",
    Tile: TileH
  },
  {
    name: "Tile I - Vertical, top image, centered aligned summary",
    Tile: TileI
  },
  {
    name: "Tile J - Horizontal, image left of article summary with 2:3 ratio",
    Tile: TileJ
  },
  {
    name: "Tile L - No image, 22pt headline, no teaser",
    Tile: TileL
  },
  {
    name:
      "Tile M - No image, 22pt headline, no teaser, comment article, center align",
    Tile: TileM
  },
  {
    name: "Tile N - Square image, 22pt headline, white color, black background",
    Tile: TileN
  },
  {
    name:
      "Tile O - No image, 20pt headline, no teaser, white color, black background",
    Tile: TileO
  },
  {
    name:
      "Tile P - Profile roundel image, 35pt headline, no teaser, central aligned summary",
    Tile: TileP
  },
  {
    name: "Tile Q - Image with padding",
    Tile: TileQ
  },
  {
    name: "Tile R - Bottom image, 45pt headline, no teaser",
    Tile: TileR
  },
  {
    mockTile: dailyRegisterItem,
    name:
      "Tile S - 22pt headline (centered), comment article, byline, left align",
    Tile: TileS
  },
  {
    name: "Tile T - Side 16:9 image, 22pt headline, no teaser",
    Tile: TileT
  },
  {
    name:
      "Tile U - Horizontal, Flex: 1:3, Summary left no teaser, Image 3:2 right",
    Tile: TileU
  },
  {
    name: "Tile V - Top image, 35pt headline, no teaser ",
    Tile: TileV
  },
  {
    name: "Tile W - Horizontal, Flex: 1:3, Summary left, Image 3:2 right",
    Tile: TileW
  },
  {
    name: "Tile X - No Image, 45pt Headline, Strapline, Teaser",
    Tile: TileX
  },
  {
    name: "Tile Y - 35pt Headline, 225 teaser",
    Tile: TileY
  },
  {
    name: "Tile Z - 35pt Headline, no teaser, 4:5 image",
    Tile: TileZ
  },
  {
    name: "Tile AA - Side 16:9 image, 30pt headline, no teaser",
    Tile: TileAA
  },
  {
    name:
      "Tile AB - 30pt headline, teaser, byline at bottom, image 2:3 right at the top",
    Tile: TileAB
  },
  {
    name: "Tile AE - 35pt headline, 125 teaser, no image",
    Tile: TileAE
  }
];

export default {
  children: tileStories.map(({ name, Tile, mockTile }) => ({
    component: renderTile(Tile, mockTile),
    name,
    type: "story"
  })),
  name: "Composed/Edition/Tiles"
};
