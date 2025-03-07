module.exports = {
  testEnvironment: "jest-environment-jsdom", //  jsdom for browser-like testing
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // setup file for custom jest matchers
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // transform js and jsx files using babel
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // mock css file imports
  },
};
