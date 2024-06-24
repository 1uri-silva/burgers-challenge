import type { Config } from 'jest';

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	moduleDirectories: ['node_modules', '<rootDir>/'],
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
	testMatch: ["**/?(*.)+(test|spec).ts?(x)"],
	transform: {
		"^.+\\.(js|ts)$": "ts-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	},
};

export default config;