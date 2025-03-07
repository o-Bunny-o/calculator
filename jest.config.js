module.exports = {
  testEnvironment: 'jest-environment-jsdom', // for browser-like testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // custom jest setup
};
