import {
  Button,
  Container,
  Loading,
  Table,
  Text,
} from '../../../common/components';

import CompanyInputModal from './companyInputModal';
import { PlusIcon } from '../../../common/components';
import { useGetCompanies } from '../../../common/hooks';
import { useState } from 'react';

export default function PortfolioTable({ css }) {
  const { data, error, isLoading } = useGetCompanies();
  const [isInputModalVisible, setIsInputModalVisible] =
    useState(false);

  const onInputSubmit = () => {
    console.log('submitted');
    setIsInputModalVisible(false);
  };

  const onAddCompanyClickHandler = () => {
    setIsInputModalVisible(true);
  };

  const onModalCloseHandler = () => {
    setIsInputModalVisible(false);
  };

  if (error)
    return (
      <Container css={css}>
        <Text>
          Failed to load your Portfolio. Please refresh to try again
        </Text>
      </Container>
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
      <Container
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItem: 'center',
        }}
      >
        <Text h2>Our Portfolio</Text>
        <Button
          flat
          icon={<PlusIcon />}
          onClick={onAddCompanyClickHandler}
          color="primary"
        >
          Add a Company
        </Button>
      </Container>
      <CompanyInputModal
        visible={isInputModalVisible}
        onSubmit={onInputSubmit}
        onClose={onModalCloseHandler}
      />
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
