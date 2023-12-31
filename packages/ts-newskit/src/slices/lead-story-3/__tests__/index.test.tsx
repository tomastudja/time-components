import React from 'react';
import { useBreakpointKey } from 'newskit';

import { render } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { LeadStory3 } from '../index';
import data from '../../fixtures/lead-story3.json';

jest.mock('newskit', () => ({
  ...jest.requireActual('newskit'),
  useBreakpointKey: jest.fn().mockReturnValue('xl')
}));

const mockClickHandler = jest.fn();

const defaultProps = {
  ...data,
  clickHandler: mockClickHandler
};

const renderComponent = () => render(<LeadStory3 {...defaultProps} />);

describe('Render Lead Story 3 Slice', () => {
  test('Slice matches snapshot', () => {
    (useBreakpointKey as any).mockReturnValue('xl');

    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "lg"', () => {
    (useBreakpointKey as any).mockReturnValue('lg');

    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "md"', () => {
    (useBreakpointKey as any).mockReturnValue('md');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "xs"', () => {
    (useBreakpointKey as any).mockReturnValue('xs');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "sm"', () => {
    (useBreakpointKey as any).mockReturnValue('sm');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('Slice matches snapshot for `null` breakpoint value', () => {
    (useBreakpointKey as any).mockReturnValue(null);
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
