/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['js','ts','tsx'],
  roots: ['<rootDir>/test'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)', ''],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  }
};