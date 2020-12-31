/**
 * Regex patterns example
 * Returns the filepath, if found, else 'filepath not found'
 *
 * @param {string} errorString - The error stack string
 * @return {string} the filepath or 'filepath not found'
 */

function getFilePathFromError(errorString) {
  const matchArray = /\/(.+\.js)\:/.exec(errorString);
  if (matchArray !== null) {
    return matchArray[1];
  }

  return "filepath not found";
}

const errorStack =
  "Error: thrown error at fileName (/Users/jamie/projects/my-project/hello-world.js:2:18) at Object.<anonymous> at Module._compile (node:internal/modules/cjs/loader:1108:14) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10) at Module.load (node:internal/modules/cjs/loader:973:32)";
const filename = getFilePathFromError(errorStack);
console.log(filename);
