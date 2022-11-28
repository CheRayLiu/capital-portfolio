import {
  Button,
  Container,
  Loading,
  Spacer,
  Table,
  Text,
} from '../../../common/components';

import CompanyInfoCard from './companyInfoCard';
import CompanyInputModal from './companyInputModal';
import EmptyCompanyInfoCard from './emptyCompanyInfoCard';
import { PlusIcon } from '../../../common/components';
import { useGetCompanies } from '../../../common/hooks';
import { useState } from 'react';

export default function PortfolioTable({ css }) {
  const { data, error, isLoading } = useGetCompanies();
  const [isInputModalVisible, setIsInputModalVisible] =
    useState(false);

  const [isCompInfoVisible, setIsCompInfoVisible] = useState(false);
  const [curCompanyId, setCurCompanyId] = useState(null);

  const onSubmitCloseModal = () => {
    setIsInputModalVisible(false);
  };

  const addCompanyClickHandler = () => {
    setIsInputModalVisible(true);
  };

  const onModalCloseHandler = () => {
    setIsInputModalVisible(false);
  };

  const onSelectionChangeHandler = (selection) => {
    if (selection.size === 0) {
      setIsCompInfoVisible(false);
    } else {
      setIsCompInfoVisible(true);
      setCurCompanyId(Array.from(selection)[0]);
    }
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
          onClick={addCompanyClickHandler}
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
        headerLined
        shadow
        selectionMode="single"
        color="primary"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
        onSelectionChange={onSelectionChangeHandler}
      >
        <Table.Header>
          <Table.Column>Portfolio Company ID</Table.Column>
          <Table.Column>Portfolio Company Name</Table.Column>
          <Table.Column>Round Invested</Table.Column>
          <Table.Column>Amount</Table.Column>
          <Table.Column>Valuation at Raise</Table.Column>
          <Table.Column>Date of Raise</Table.Column>
          <Table.Column>Equity Percent</Table.Column>
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
          boundaries={2}
        />
      </Table>
      <Spacer y={2} />
      {isCompInfoVisible ? (
        <CompanyInfoCard
          company={data.docs.find(
            (company) => company.companyId === +curCompanyId
          )}
        />
      ) : (
        <EmptyCompanyInfoCard css={{ minHeight: '288px' }} />
      )}
    </Container>
  );
}
