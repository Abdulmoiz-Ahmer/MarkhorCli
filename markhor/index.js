const generator = require("./generators/generator");
const mvcStructure = [
  {
    directory: "api",
    files: [{ name: "api.md", type: "md" }],
  },
  {
    directory: "api/controllers",
    files: [{ name: "controllers.md", type: "md" }],
  },
  { directory: "api/helpers", files: [{ name: "helpers.md", type: "md" }] },
  { directory: "api/models", files: [{ name: "models.md", type: "md" }] },
  { directory: "api/policies", files: [{ name: "policies.md", type: "md" }] },
  { directory: "config", files: [{ name: "config.md", type: "md" }] },
  { directory: "config/env", files: [{ name: "env.md", type: "md" }] },
  {
    directory: "config/locales",
    files: [{ name: "locales.md", type: "md" }],
  },
  {
    directory: "config/",
    files: [
      { name: "routes.js", type: "js", framework: "express", language: "js" },
    ],
  },
  { directory: "assets", files: [{ name: "assets.md", type: "md" }] },
  { directory: "root", files: [{ name: "package.json", type: "json" }] },
  {
    directory: "root",
    files: [
      { name: "app.js", type: "js", framework: "express", language: "js" },
    ],
  },
  {
    directory: "root",
    files: [{ name: ".gitignore", type: "git" }],
  },
];

const threeLayeredStructure = [
  { directory: "api", files: [{ name: "api.md", type: "md" }] },
  {
    directory: "api",
    files: [
      { name: "app.js", type: "js", framework: "express", language: "js" },
    ],
  },
  {
    directory: "api/routes",
    files: [
      { name: "routes.js", type: "js", framework: "express", language: "js" },
    ],
  },
  {
    directory: "api",
    files: [
      {
        name: "validator.js",
        type: "js",
        framework: "express",
        language: "js",
      },
    ],
  },
  {
    directory: "api",
    files: [
      {
        name: "input-serializer.js",
        type: "js",
        framework: "express",
        language: "js",
      },
    ],
  },
  // { directory: "api/assets", files: [{ name: "assets.md", type: "md" }] },

  {
    directory: "service",
    files: [{ name: "service.md", type: "md" }],
  },
  {
    directory: "service",
    files: [
      {
        name: "output-serializer.js",
        type: "js",
        framework: "express",
        language: "js",
      },
    ],
  },
  { directory: "integration", files: [{ name: "integration.md", type: "md" }] },
  { directory: "integration/Dao", files: [] },
  { directory: "root", files: [{ name: "package.json", type: "json" }] },
  {
    directory: "root",
    files: [{ name: ".gitignore", type: "git" }],
  },
];

function createMvcStyle() {
  generator.generate(mvcStructure);
}

function createThreeLayeredArchitecture() {
  generator.generate(threeLayeredStructure, { architecture: "3l" });
}

const variants = {
  createMvcStyle,
  createThreeLayeredArchitecture,
};

module.exports = variants;
