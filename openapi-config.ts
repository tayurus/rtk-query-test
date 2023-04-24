import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:3000/api-json",
  apiFile: "./src/store",
  apiImport: "emptySplitApi",
  outputFile: "./src/petApi.ts",
  exportName: "petApi",
  hooks: true,
};

export default config;
