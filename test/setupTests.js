

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { name: 'mocked-query' },
  }),
}));



