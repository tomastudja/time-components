import {
  Block,
  Divider,
  Hidden,
  useBreakpointKey,
  Visible,
  BreakpointKeys
} from 'newskit';
import React, { useState, useEffect } from 'react';
import { CommentCardProps } from '../../components/slices/comment-card';
import {
  LeadArticle,
  LeadArticleProps
} from '../../components/slices/lead-article';
import {
  SliceHeader,
  SliceHeaderProps
} from '../../components/slices/slice-header';
import { ArticleProps } from '../../components/slices/article';
import { LeadStoryDivider, StackItem, BlockItem } from '../shared-styles';

import { CommentStack } from './comment-stack';
import { ArticleStack } from './article-stack';
import { CustomStackLayout } from '../shared';
import {
  FullWidthBlock,
  FullWidthHidden
} from '../../components/slices/shared-styles';

export interface ContentBucket1Props {
  section: SliceHeaderProps;
  leadArticle: LeadArticleProps;
  comments: CommentCardProps[];
  articles: ArticleProps[];
}

export const ContentBucket1 = ({
  section,
  leadArticle,
  comments,
  articles
}: ContentBucket1Props) => {
  const [currentBreakpoint, setBreakpoint] = useState<BreakpointKeys>('xs');
  const breakpointKey = useBreakpointKey();
  useEffect(
    () => {
      setBreakpoint(breakpointKey);
    },
    [breakpointKey]
  );
  const isMobile = ['xs', 'sm'].includes(currentBreakpoint);

  const modifiedLeadArticle = {
    ...leadArticle,
    imageTop: isMobile,
    hasTopBorder: !isMobile
  };

  return (
    <CustomStackLayout>
      <FullWidthBlock>
        <BlockItem
          $width={{
            xs: '100%',
            md: '720px',
            lg: '976px',
            xl: '1276px'
          }}
        >
          <SliceHeader {...section} />
        </BlockItem>
      </FullWidthBlock>
      <StackItem
        $width={{
          xs: '100%',
          md: '720px',
          lg: '760px',
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
            {...modifiedLeadArticle}
            contentWidth={currentBreakpoint === 'xl' ? '312px' : '283px'}
          />
        </Block>
        <Block>
          <Hidden md>
            <CommentStack comments={comments} />
          </Hidden>
        </Block>
      </StackItem>
      <StackItem
        $width={{
          xs: '100%',
          md: '720px',
          lg: '185px',
          xl: '402px'
        }}
      >
        <FullWidthHidden lg xl>
          <FullWidthBlock>
            <Divider
              overrides={{
                marginBlock: 'space040',
                stylePreset: 'dashedDivider'
              }}
            />
          </FullWidthBlock>
        </FullWidthHidden>
        <BlockItem>
          <ArticleStack articles={articles} breakpoint={currentBreakpoint} />
        </BlockItem>
      </StackItem>
      <Visible md>
        <BlockItem
          $width={{
            xs: '100%',
            md: '720px',
            lg: '976px',
            xl: '1276px'
          }}
        >
          <CommentStack comments={comments} />
        </BlockItem>
      </Visible>
    </CustomStackLayout>
  );
};
