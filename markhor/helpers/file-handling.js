const fs = require("fs");

function createDirectory(directory) {
  if (fs.existsSync(directory)) {
    return;
  }

  fs.mkdirSync(directory, {
    recursive: true,
  });
}

function removeDirectory(directory) {}

function createFile(filename) {}

function removeFile(filename) {}

function writeToFile(file, content) {
  if (!file || !content) {
    return;
  }

  fs.writeFileSync(file, content);
}

function readFromFile(file) {
  if (!file) {
    return;
  }

  const content = fs.readFileSync(`../data/${file}`);
  return content.toString();
}

const fileHandling = {
  createDirectory,
  removeDirectory,
  createFile,
  removeFile,
  writeToFile,
  readFromFile,
};

module.exports = fileHandling;
