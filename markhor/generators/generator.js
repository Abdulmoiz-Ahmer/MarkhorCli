const fileHandling = require("../helpers/file-handling");

function generate(directories, options = { architecture: "mv" }) {
  if (directories.length === 0) {
    return;
  }

  directories.forEach(function (entry) {
    if (entry.directory !== "root") {
      fileHandling.createDirectory(`app/${entry.directory}`);
    }

    if (entry?.files === undefined || entry?.files === 0) {
      return;
    }

    entry.files.forEach(function (file) {
      let destinationPath = `app/${entry.directory}/${file.name}`;
      let sourcePath = `${options.architecture}/${file.type}`;

      if (entry.directory === "root") {
        destinationPath = `app/${file.name}`;
      }

      if (file.framework !== undefined) {
        sourcePath += `/${file.framework}`;
      }

      sourcePath += `/${file.name}`;

      fileHandling.writeToFile(
        destinationPath,
        fileHandling.readFromFile(sourcePath)
      );
    });
  });
}

const generator = {
  generate,
};

module.exports = generator;
