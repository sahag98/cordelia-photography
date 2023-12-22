import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "u2arln1y",
  dataset: "production",
  title: "Cordelia Photography",
  apiVersion: "2023-12-22",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
