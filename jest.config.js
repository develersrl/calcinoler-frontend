module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ["<rootDir>/src/__tests__/utils/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
