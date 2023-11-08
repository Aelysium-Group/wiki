import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import DynamicTag from '@site/src/components/tags/DynamicTag';
import StaticFamilyTag from '@site/src/components/tags/StaticFamilyTag';
import ScalarFamilyTag from '@site/src/components/tags/ScalarFamilyTag';
import TheLawTag from '@site/src/components/tags/TheLawTag';
import MCLoaderTag from '@site/src/components/tags/MCLoaderTag';

import Menu from '@site/src/components/menu/Menu';
import MenuItem from '@site/src/components/menu/MenuItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  DynamicTag,
  StaticFamilyTag,
  ScalarFamilyTag,
  TheLawTag,
  MCLoaderTag,

  Menu,
  MenuItem
};