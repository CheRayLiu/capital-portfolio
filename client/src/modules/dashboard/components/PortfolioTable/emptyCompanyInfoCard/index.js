import { Card, Container, Text } from '../../../../common/components';

import { EyeIcon } from '../../../../common/components/icons/ArrowUpIcon';

export default function EmptyCompanyInfoCard({ css, company }) {
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
          Select a Company to learn more
        </Text>
        <EyeIcon />
      </Container>
    </Card>
  );
}
