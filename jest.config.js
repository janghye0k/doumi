/**
 * @type {import('jest').Config}
 */
const config = {
  verbose: true,
  testEnvironment: 'node',
  moduleDirectories: ['src', 'node_modules'],
  coverageDirectory: 'coverage',
};

export default config;
