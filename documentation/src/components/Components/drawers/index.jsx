import React from 'react';
import ExamplesPage from 'components/ExamplesPage';

import README from './README.md';

import SimpleDrawer from './SimpleDrawer';
import SimpleDrawerRaw from '!!raw-loader!./SimpleDrawer.jsx';
import DrawerWithContent from './DrawerWithContent';
import DrawerWithContentRaw from './DrawerWithContent/code';

const examples = [{
  title: 'Simple Example',
  description: `
The \`Drawer\` can be docked to the left or right of the screen. The size of the drawer depends on
whether it has been docked on the left or right of the screen and the device type or screen size.

#### Docked Left
- On mobile devices, the width of the drawer will be \`calc(100vw - 56px)\` and a max width of \`320px\`.
- On tablets and desktop screens, the width will be equal to the \`$md-drawer-tablet-width\` and \`$md-drawer-desktop-width\`
but no more than \`400px\`.

#### Docked Right
- On mobile devices, the width of the drawer will be the entire viewport.
- On tablets and desktops, the width of the drawer will be the size of its content.
`,
  code: SimpleDrawerRaw,
  children: <SimpleDrawer />,
}, {
  title: 'Drawer with Content',
  description: `
The \`Drawer\` has some additional support built in for displaying navigation items, but it can also be
used to render any content. This example will show how you can make a temporary right drawer to display
more information about images.
  `,
  code: DrawerWithContentRaw,
  children: <DrawerWithContent />,
}];

const Drawers = () => <ExamplesPage description={README} examples={examples} />;
export default Drawers;
