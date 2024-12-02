module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "text",
        "lcov"
    ],
    testMatch: [
        "**/__tests__/**/*.test.js",
        "**/?(*.)+(spec|test).js",
    ],
}