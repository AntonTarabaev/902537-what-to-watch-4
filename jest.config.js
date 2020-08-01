module.exports = {
  setupFiles: ['./jest.setup.js'],
  testURL: 'http://localhost/',
  verbose: true,
  testRegex: '(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.jsx?$": `babel-jest`,
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1'
  },
};
