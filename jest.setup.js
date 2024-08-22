import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { useSearchParams as actualUseSearchParams } from 'next/navigation';

// 모킹된 라우터 설정
jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  })),
  useSearchParams: jest.fn()
}));

beforeEach(() => {
  const params = new URLSearchParams(window.location.search);
  jest.mocked(require('next/navigation').useSearchParams).mockReturnValue(params);
});
