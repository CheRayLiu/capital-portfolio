import { Table } from '../../../common/components';
import { useGetCompanies } from '../../../common/hooks/company.hooks';

export default function PortfolioTable() {
  const { data, error, isLoading } = useGetCompanies();

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Table
      bordered
      shadow={false}
      color="secondary"
      aria-label="Example pagination table"
      css={{
        height: 'auto',
        minWidth: '100%',
      }}
      selectionMode="multiple"
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
  );
}
