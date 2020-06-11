module.exports = {
  collectCoverageFrom: [
    'src/**/*.(ts|tsx|js|jsx)',
    '!src/**/*.{(types),}.(ts)',
  ],
  testMatch: ['<rootDir>/test/*.spec.*'],
  testEnvironment: 'node',
};