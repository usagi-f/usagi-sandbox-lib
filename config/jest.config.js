module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: ['packages/**/*.{ts,tsx}', '!packages/**/*.d.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
  },
};
