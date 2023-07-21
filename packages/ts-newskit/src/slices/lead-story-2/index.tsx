import {
  Block,
  Divider,
  Stack,
  useBreakpointKey,
  Visible,
  BreakpointKeys
} from 'newskit';
import React, { useState, useEffect } from 'react';
import {
  LeadArticle,
  LeadArticleProps
} from '../../components/slices/lead-article';
import { ArticleProps } from '../../components/slices/article';
import { LeadStoryDivider, StackItem, BlockItem } from '../shared-styles';
import { ArticleStack } from './article-stacks';
import { FullWidthBlock } from '../../components/slices/shared-styles';
import { ArticleStackLeadStory, ComposedArticleStack } from '../shared';

export interface LeadStory2Props {
  leadArticle: LeadArticleProps;
  articles: ArticleProps[];
  verticalArticles: LeadArticleProps[];
  horizontalArticles: LeadArticleProps[];
}

export const LeadStory2 = ({
  leadArticle,
  articles,
  verticalArticles,
  horizontalArticles
}: LeadStory2Props) => {
  const [currentBreakpoint, setBreakpoint] = useState<BreakpointKeys>('xs');
  const breakpointKey = useBreakpointKey();
  useEffect(
    () => {
      setBreakpoint(breakpointKey);
    },
    [breakpointKey]
  );

  const modifedArticles =
    currentBreakpoint === 'xl'
      ? articles.map(article => ({
          ...article,
          imageRight: true
        }))
      : articles;

  const screenXsAndSm =
    currentBreakpoint === 'xs' || currentBreakpoint === 'sm';

  const modifiedLeadArticle = {
    ...leadArticle,
    imageTop: !!screenXsAndSm,
    hasTopBorder: false,
    textBlockMarginBlockStart: 'space050',
    headlineTypographyPreset:
      currentBreakpoint === 'xs'
        ? 'editorialHeadline040'
        : currentBreakpoint === 'sm'
          ? 'editorialHeadline050'
          : 'editorialHeadline060'
  };

  return (
    <Stack
      flow="horizontal-top"
      stackDistribution="center"
      wrap="wrap"
      marginInline={{
        xs: 'space045',
        md: 'space000'
      }}
    >
      <StackItem
        $width={{
          xs: '100%',
          md: '720px',
          lg: '757px',
          xl: '840px'
        }}
        marginInlineEnd={{
          lg: 'space060'
        }}
      >
        <Block>
          <Visible lg xl>
            <LeadStoryDivider
              overrides={{ stylePreset: 'lightDivider' }}
              vertical
              position="right"
            />
          </Visible>
          <LeadArticle
            contentWidth={currentBreakpoint === 'xl' ? '274px' : '246px'}
            {...modifiedLeadArticle}
          />
          {screenXsAndSm ? (
            <FullWidthBlock>
              <Divider
                overrides={{
                  stylePreset: 'dashedDivider',
                  marginBlockStart: 'space040',
                  marginBlockEnd: 'space040'
                }}
              />
            </FullWidthBlock>
          ) : (
            <Divider
              overrides={{
                stylePreset: 'dashedDivider',
                marginBlock: 'space040'
              }}
            />
          )}
          <ArticleStack
            verticalArticles={verticalArticles}
            breakpoint={currentBreakpoint}
            horizontalArticles={horizontalArticles}
            horizontalArticleContentWidth={
              currentBreakpoint === 'xl' ? '258px' : '230px'
            }
          />
        </Block>
      </StackItem>
      {screenXsAndSm ? (
        <BlockItem marginBlockStart="space040">
          <ComposedArticleStack
            articles={modifedArticles}
            breakpoint={currentBreakpoint}
          />
        </BlockItem>
      ) : (
        <ArticleStackLeadStory
          mdWidth="722px"
          modifedArticles={modifedArticles}
          breakpoint={currentBreakpoint}
        />
      )}
    </Stack>
  );
};
