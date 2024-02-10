import { useRouter as useRouterActual } from 'next/router';

export const useRouter = jest.fn();

export default function useRouterMock() {
  useRouter.mockImplementation(() => ({
    ...useRouterActual(),
    query: { name: '' },
  }));
}


