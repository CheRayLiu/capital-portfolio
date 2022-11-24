import { useQuery } from 'react-query';

export const useGetCompanies = () =>
  useQuery('getCompanies', async () => {
    const res = await fetch(
      'http://localhost:8080/api/portfolioCompanies'
    );
    return await res.json();
  });
