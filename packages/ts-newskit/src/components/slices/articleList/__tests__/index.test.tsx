import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../utils/test-utils';
import { ArticleListItem, ArticleListItemProps } from '../index';
// import {
//   image,
//   color,
//   alt,
//   title,
//   url,
//   articleType,
//   timeToRead
// } from '../fixtures/data.json';

const renderComponent = (props: ArticleListItemProps) =>
  render(<ArticleListItem {...props} />);

const defaultProps = {
  image:
    '//www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3c293bea-c74a-11ed-84e7-e2697ffed9a9.jpg?crop=2721%2C1531%2C216%2C63',
  title: "Harry & Meghan's New Project?",
  alt: 'This is ALT Text',
  url:
    '/article/harry-and-meghan-s-new-project-to-make-boys-less-toxic-nk5n3h70m',
  articleType: 'Review',
  timeToRead: '4 min read',
  color: '#E34605'
};

describe('Render Article List Item', () => {
  it('should render a snapshot', () => {
    const { asFragment } = renderComponent(defaultProps);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the component', () => {
    const { getByText } = renderComponent(defaultProps);
    const getArticleListItem = getByText("Harry & Meghan's New Project?");
    expect(getArticleListItem).toBeInTheDocument();
  });

  it('items should have link with href', () => {
    const { getAllByTestId } = renderComponent(defaultProps);
    const articleListUrl = getAllByTestId('article-ListItem')[0];
    expect(articleListUrl).toHaveAttribute(
      'href',
      '/article/harry-and-meghan-s-new-project-to-make-boys-less-toxic-nk5n3h70m'
    );
  });

  it('items should render ALT text', () => {
    renderComponent(defaultProps);
    const articleListUrl = screen.getByAltText('This is ALT Text');
    expect(articleListUrl).toHaveAttribute('alt', 'This is ALT Text');
  });

  it('items should render TITLE text if ALT is missing', () => {
    renderComponent({
      image:
        '//www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3c293bea-c74a-11ed-84e7-e2697ffed9a9.jpg?crop=2721%2C1531%2C216%2C63',
      title: "Harry & Meghan's New Project?",
      alt: '',
      url:
        '/article/harry-and-meghan-s-new-project-to-make-boys-less-toxic-nk5n3h70m',
      articleType: 'Review',
      timeToRead: '4 min read',
      color: '#E34605'
    });
    const articleListUrl = screen.getByAltText("Harry & Meghan's New Project?");
    expect(articleListUrl).toHaveAttribute(
      'alt',
      "Harry & Meghan's New Project?"
    );
  });

  it('Article Type should fall back to grey if colour prop is missing', () => {
    renderComponent({
      image:
        '//www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3c293bea-c74a-11ed-84e7-e2697ffed9a9.jpg?crop=2721%2C1531%2C216%2C63',
      title: "Harry & Meghan's New Project?",
      alt: '',
      url:
        '/article/harry-and-meghan-s-new-project-to-make-boys-less-toxic-nk5n3h70m',
      articleType: 'Review',
      timeToRead: '4 min read',
      color: ''
    });
    const articleListUrl = screen.getByText('Review');
    expect(articleListUrl).toHaveStyle('color: #666666');
  });
});
