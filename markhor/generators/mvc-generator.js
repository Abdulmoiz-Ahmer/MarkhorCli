const fileHandling = require("../helpers/file-handling");

function generate(directories, options = { architecture: "mvc" }) {
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
      let path = `app/${entry.directory}/${file.name}`;
      if (entry.directory === "root") {
        path = `app/${file.name}`;
      }
      fileHandling.writeToFile(
        path,
        fileHandling.readFromFile(
          `${options.architecture}/${file.type}/${file.name}`
        )
      );
    });
  });
}

const mvcGenerator = {
  generate,
};

module.exports = mvcGenerator;
