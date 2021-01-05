const REGEX_PATTERN_FOR_JS_FILE_PATH = /\/(.+\.js)\:/;

/**
 * Regex patterns example
 * Returns the filepath, if found, else 'filepath not found'
 *
 * @param {string} errorString - The error stack string
 * @returns {string} the filepath or 'filepath not found'
 */
function getFilePathFromError(errorString) {
  /** See cheatsheet at https://regexr.com/
   * / (forward slash) starts and ends the whole pattern
   * \ (back slash) denotes section of the pattern, or a token
   * so \/ means it starts with a forward slash
   * braces () groups multiple tokens
   * . matches any character
   * + matches 1 or more of preceding token, in this case the . (any character)
   * \.js denotes followed by the pattern .js
   * \: means followed by a :
   * exec returns an array, the first element is the full string of matched text
   * the next element(s) are the results of the matches
   *
   */
  const matchArray = REGEX_PATTERN_FOR_JS_FILE_PATH.exec(errorString);
  if (matchArray !== null) {
    return matchArray[1];
  }

  return "filepath not found";
}

function getFilePathFromErrorWithMatch(errorString) {
  // Alternative method for matching a string
  const matchArray = errorString.match(REGEX_PATTERN_FOR_JS_FILE_PATH);
  if (matchArray !== null) {
    return matchArray[1];
  }

  return "filepath not found";
}

const errorStack =
  "Error: thrown error at fileName (/Users/jamie/projects/my-project/hello-world.js:2:18) at Object.<anonymous> at Module._compile (node:internal/modules/cjs/loader:1108:14) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10) at Module.load (node:internal/modules/cjs/loader:973:32)";
const filename = getFilePathFromError(errorStack);
console.log(filename);

const filenameUsingRegexMatch = getFilePathFromErrorWithMatch(errorStack);
console.log(filenameUsingRegexMatch);

/**
 * Regex patterns example
 * Returns boolean for whether or not the string is found
 *
 * @param {string} errorString - The error stack string
 * @returns {boolean}
 */
function isFilePathFound(errorString) {
  // pattern.test returns boolean for whether or not the pattern is found in the string argument
  return REGEX_PATTERN_FOR_JS_FILE_PATH.test(errorString);
}

console.log(isFilePathFound(errorStack));
