import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom'
}

export default config

// module.exports = {
//   preset: 'ts-jest',
//   roots: ['<rootDir>/src'],
//   testMatch: [
//     '**/__tests__/**/*.+(ts|tsx|js)',
//     '**/?(*.)+(spec|test).+(ts|tsx|js)'
//   ],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest'
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
//   testEnvironment: 'jest-environment-jsdom'
// }
