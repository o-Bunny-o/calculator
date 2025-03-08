module.exports = {
  testEnvironment: "jest-environment-jsdom", //  jsdom for browser-like testing
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // setup file for custom jest matchers
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel.config.test.js" }],
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // mock css file imports
  },
};
