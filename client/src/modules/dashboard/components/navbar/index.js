import { IpsumLogo, Navbar, Text } from '../../../common/components';

import { FeedbackIcon } from '../../../common/components';
import { Flex } from '../../../common/components/styles/flex';
import { UserDropdown } from './userDropdown';

export default function NavbarWrapper() {
  return (
    <Navbar
      isBordered
      css={{
        borderBottom: '1px solid $border',
        justifyContent: 'space-between',
        width: '100%',
        '@md': {
          justifyContent: 'space-between',
        },

        '& .nextui-navbar-container': {
          border: 'none',
          maxWidth: '100%',

          gap: '$6',
          '@md': {
            justifyContent: 'space-between',
          },
        },
      }}
    >
      <Navbar.Brand>
        <IpsumLogo height={32} width={194} />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Content hideIn={'md'}>
          <Flex align={'center'} css={{ gap: '$sm' }}>
            <FeedbackIcon />
            <Text span>Feedback?</Text>
          </Flex>
        </Navbar.Content>
        <Navbar.Content>
          <UserDropdown />
        </Navbar.Content>
      </Navbar.Content>
    </Navbar>
  );
}
