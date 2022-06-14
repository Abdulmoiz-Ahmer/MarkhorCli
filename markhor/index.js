const mvcGenerator = require("./generators/mvc-generator");

function createMVC() {
  mvcGenerator.generate([
    { directory: "api", files: [{ name: "api.md", type: "md" }] },
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
      files: [{ name: "routes.js", type: "js" }],
    },
    { directory: "assets", files: [{ name: "assets.md", type: "md" }] },
    { directory: "root", files: [{ name: "package.json", type: "json" }] },
    {
      directory: "root",
      files: [{ name: "app.js", type: "js" }],
    },
    {
      directory: "root",
      files: [{ name: ".gitignore", type: "git" }],
    },
  ]);
}

function createMVP() {}

function createMVVM() {}

function createLayeredArchitecture() {}
createMVC();

const variants = {
  createMVC,
  createMVP,
  createMVVM,
  createLayeredArchitecture,
};

module.exports = variants;
