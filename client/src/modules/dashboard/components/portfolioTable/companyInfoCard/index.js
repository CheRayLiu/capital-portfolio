import {
  Card,
  Col,
  Grid,
  Row,
  Text,
  User,
} from '../../../../common/components';

export default function CompanyInfoCard({ company }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  return (
    <Card css={{ padding: '3rem 0' }}>
      <Row gap={3}>
        <Col span={8}>
          <img
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width="100px"
            height="100px"
          />
          <Text h3>{company.companyName}</Text>
          <Text h5>
            About
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Pharetra magna ac placerat vestibulum.
            </Text>
          </Text>
        </Col>
        <Col>
          <Grid.Container gap={1} justify="center">
            <Grid xs>
              <Col>
                <Text h4>Founder</Text>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Lorem ipsum"
                  squared
                />
              </Col>
            </Grid>
            <Grid xs>
              <Col>
                <Text h4>Round Invested</Text>
                <Text>{company.roundInvested}</Text>
              </Col>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={1} justify="center">
            <Grid xs>
              <Col>
                <Text h4>Invesment Amount</Text>
                <Text>{formatter.format(company.amount)}</Text>
              </Col>
            </Grid>
            <Grid xs>
              <Col>
                <Text h4>Valution at Raise</Text>
                <Text>
                  {formatter.format(company.valuationAtRaise)}
                </Text>
              </Col>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={1} justify="center">
            <Grid xs>
              <Col>
                <Text h4>Equity %</Text>
                <Text>{company.equityPercent}%</Text>
              </Col>
            </Grid>
            <Grid xs>
              <Col>
                <Text h4>Partner</Text>
                <User
                  src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
                  name="Ipsum Lorem"
                  squared
                />
              </Col>
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Card>
  );
}
