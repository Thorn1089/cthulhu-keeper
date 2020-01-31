module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/cypress'],
  testResultsProcessor: 'jest-sonar-reporter'
};