module.exports = function convertStringToArray(string) {
    return string.split(",").map((item) => item.trim());
}