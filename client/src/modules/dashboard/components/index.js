import PortfolioTable from './PortfolioTable';
import { ContraryLogo, Navbar } from '../../common/components';

export default function Dashboard() {
  return (
    <div>
      <Navbar style={styles.navBar}>
        <Navbar.Brand>
          <ContraryLogo style={styles.logo} />
        </Navbar.Brand>
      </Navbar>
      <PortfolioTable style={styles.table} />
    </div>
  );
}

const styles = {
  logo: {
    position: 'absolute',
    height: 32,
    width: 193,
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
  },
  table: {
    margin: 'auto',
  },
};
