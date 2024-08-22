module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // src/ 경로로 매핑
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // 이미지 파일 무시
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // CSS 파일 무시
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Babel을 사용하여 파일 변환
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // 테스트 제외 경로
};
