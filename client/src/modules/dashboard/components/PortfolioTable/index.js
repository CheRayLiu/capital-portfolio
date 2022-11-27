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

  const onSubmitCloseModal = () => {
    setIsInputModalVisible(false);
  };

  const addCompanyClickHandler = () => {
    setIsInputModalVisible(true);
  };

  const onModalCloseHandler = () => {
    setIsInputModalVisible(false);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  if (error || isLoading)
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
          onPress={addCompanyClickHandler}
          color="primary"
        >
          Add a Company
        </Button>
      </Container>
      <CompanyInputModal
        visible={isInputModalVisible}
        onSubmitCloseModal={onSubmitCloseModal}
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
            let date = new Date(company.dateOfRaise);
            return (
              <Table.Row key={company.companyId}>
                <Table.Cell>{company.companyId}</Table.Cell>
                <Table.Cell>{company.companyName}</Table.Cell>
                <Table.Cell>{company.roundInvested}</Table.Cell>
                <Table.Cell>
                  {formatter.format(company.amount)}
                </Table.Cell>
                <Table.Cell>
                  {formatter.format(company.valuationAtRaise)}
                </Table.Cell>
                <Table.Cell>{`${
                  date.getMonth() + 1
                }/${date.getDate()}/${date.getFullYear()}`}</Table.Cell>
                <Table.Cell>{company.equityPercent + '%'}</Table.Cell>
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
