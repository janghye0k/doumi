/**
 * @type {import('jest').Config}
 */
const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['js', 'ts', 'json'],
};

module.exports = config;
