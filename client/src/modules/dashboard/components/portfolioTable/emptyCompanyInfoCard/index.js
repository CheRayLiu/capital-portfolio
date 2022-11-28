import { Card, Container, Text } from '../../../../common/components';

import { ArrowUpIcon } from '../../../../common/components/icons/ArrowUpIcon';

export default function EmptyCompanyInfoCard({ css }) {
  return (
    <Card css={css}>
      <Container
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <Text color="primary" h4 css={{ paddingRight: '1rem' }}>
          Select a company to learn more
        </Text>
        <ArrowUpIcon />
      </Container>
    </Card>
  );
}
