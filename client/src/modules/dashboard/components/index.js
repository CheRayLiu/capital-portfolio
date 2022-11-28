import { default as Navbar } from './navbar';
import PortfolioTable from './portfolioTable';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <PortfolioTable css={{ marginTop: '$xl', maxWidth: '80%' }} />
    </div>
  );
}
