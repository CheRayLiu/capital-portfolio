import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getAPIUrl } from '../../constants';
import { toast } from 'react-toastify';

export const useGetCompanies = () =>
  useQuery(
    'getCompanies',
    async () => {
      const res = await fetch(`${getAPIUrl}/api/portfolioCompanies`);
      return await res.json();
    },
    {
      onError: () =>
        toast.error(
          `Something went wrong. Please refresh to try again`,
          {
            icon: 'β',
            hideProgressBar: true,
            closeOnClick: true,
            autoClose: false,
          }
        ),
    }
  );

export const usePostCompany = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'postCompany',
    async (company) => {
      const res = await fetch(`${getAPIUrl}/api/portfolioCompany`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(company),
      });

      return await res.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getCompanies');
        toast.success('Your investment has been added!', {
          icon: 'π',
          hideProgressBar: true,
        });
      },
      onError: () => {
        toast.error(
          "Your action couldn't be completed.\n Itβs a pain, but if you can, try updating again.",
          {
            icon: 'β',
            hideProgressBar: true,
          }
        );
      },
    }
  );
};
