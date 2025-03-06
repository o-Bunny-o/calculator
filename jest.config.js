module.exports = {
    testEnvironment: 'jsdom', // 4 browser-like testing
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // CSS imports
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  