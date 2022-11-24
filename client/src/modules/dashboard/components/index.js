import { default as Navbar } from './navbar';
import PortfolioTable from './portfolioTable';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <PortfolioTable css={{mt: "$sm"}} />
    </div>
  );
}
