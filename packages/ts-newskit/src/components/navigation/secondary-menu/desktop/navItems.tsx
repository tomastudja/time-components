import React from 'react';
import { SecondaryMenuOptions, SecondaryMenuItem } from '../types';
import { StyledMenuItemsDesktop } from '../styles';

export const NavItems: React.FC<{
  options: SecondaryMenuOptions;
  data: SecondaryMenuItem[];
  hasMenuItem: number;
}> = ({ options, data, hasMenuItem }) => {
  const { handleSelect, isSelected } = options;

  return (
    <>
      {data.slice(0, hasMenuItem).map(({ title, slug, url }) => (
        <StyledMenuItemsDesktop
          overrides={{
            paddingInline: 'space040',
            stylePreset: 'menuItemDesktop',
            typographyPreset: 'newPreset040'
          }}
          href={url}
          key={url}
          onClick={() => handleSelect(slug)}
          selected={isSelected === title}
        >
          {title}
        </StyledMenuItemsDesktop>
      ))}
    </>
  );
};
