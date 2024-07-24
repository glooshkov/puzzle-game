// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// --------- Lib ---------------------------------------------------------------

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}



/*
 * shuffle array, https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 * sample:
 * // Used like so
 * var arr = [2, 11, 37, 42];
 * shuffle(arr);
 * console.log(arr);
 */
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



/*
 * generate random string
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
