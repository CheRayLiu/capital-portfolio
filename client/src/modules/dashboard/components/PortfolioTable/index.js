import {
  Button,
  Container,
  Loading,
  Table,
  Text,
} from '../../../common/components';

import { PlusIcon } from '../../../common/components';
import { useGetCompanies } from '../../../common/hooks';

export default function PortfolioTable({ css }) {
  const { data, error, isLoading } = useGetCompanies();

  if (error)
    return (
      <div>
        Failed to load your Portfolio. Please refresh to try again
      </div>
    );
  if (isLoading)
    return (
      <Container css={css}>
        <Loading
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </Container>
    );
  return (
    <Container css={css}>
      <Container css={{ d: 'flex', justifyContent: 'space-between' }}>
        <Text h3>Portfolio</Text>
        <Button icon={<PlusIcon />} color="primary">
          Add a Company
        </Button>
      </Container>
      <Table
        lined
        striped
        sticked
        bordered
        headerLined
        shadow={false}
        selectionMode="single"
        color="primary"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
      >
        <Table.Header>
          <Table.Column allowsSorting>
            Portfolio Company ID
          </Table.Column>
          <Table.Column allowsSorting>
            Portfolio Company Name
          </Table.Column>
          <Table.Column allowsSorting>Round Invested</Table.Column>
          <Table.Column allowsSorting>Amount</Table.Column>
          <Table.Column allowsSorting>Valution at Raise</Table.Column>
          <Table.Column allowsSorting>Date of Raise</Table.Column>
          <Table.Column allowsSorting>Equity Percent</Table.Column>
        </Table.Header>
        <Table.Body>
          {data.docs.map((company) => {
            return (
              <Table.Row key={company.companyId}>
                <Table.Cell>{company.companyId}</Table.Cell>
                <Table.Cell>{company.companyName}</Table.Cell>
                <Table.Cell>{company.roundInvested}</Table.Cell>
                <Table.Cell>{company.amount}</Table.Cell>
                <Table.Cell>{company.valuationAtRaise}</Table.Cell>
                <Table.Cell>{company.dateOfRaise}</Table.Cell>
                <Table.Cell>{company.equityPercent}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={5}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </Container>
  );
}
