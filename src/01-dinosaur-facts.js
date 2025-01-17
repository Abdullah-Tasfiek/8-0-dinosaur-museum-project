/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getTallestDinosaur(dinosaurs) {
  // deafult value of empty object
  let result = {};
  //check if input array exists
  if (!dinosaurs[0]) {
    return result;
  }
  //setting a variable to the first elements dinosaur name
  let name = dinosaurs[0].name;
  //setting a variable to the first elements lengthInMeters value
  let value = dinosaurs[0].lengthInMeters;
  //loop through the array of objects
  for (let dinosaur of dinosaurs) {
    // Compare the values for lengthInMeters for each element to find the largest number
    if (dinosaur.lengthInMeters > value) {
      //update name with the name of the dinosaur with the current largest length
      name = dinosaur.name;
      //update value with the largest value for the current dinosaur lengthInMeters
      value = dinosaur.lengthInMeters;
    }
  }
  //convert meters to feet
  value *= 3.281;
  //creates object with {dinosaurs name: length of this dinosaur in feet}
  result[name] = value;
  //returns the object
  return result;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  // deafult value of an error message
  let result = `A dinosaur with an ID of '${id}' cannot be found.`;
  //loop through our array of objects
  for (let dinosaur of dinosaurs) {
    // if the dinosaurs ID is equal to the input ID, and the length of mya array is 2
    if (dinosaur.dinosaurId === id && dinosaur.mya.length === 2) {
      //string interpolation to update result with the string description for the condition
      result = `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${dinosaur.mya[1]} million years ago.`;
    } 
    // if the dinosaurs ID is equal to the input ID, and the length of myra array is 1
    else if (dinosaur.dinosaurId === id && dinosaur.mya.length === 1) {
      //string interpolation to update result with the description for the condition
      result = `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${dinosaur.mya[0]} million years ago.`;
    }
  }
  return result;
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value.
 * RETURNS ARRAY: dinosaurs who were alive at a given mya. so check when mya is equal to the mya in the array of object. Loop through array of objects @ .mya.
 * compare it with the mya.
 *
 * If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 * If 3rd parameter is provided, it returns the value for that key.
 * else return ID
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less.
 * if the array.length === 1;
 * (mya[0] - 1) can be the input and it'll be fine to return the dinos inforamtion
 * For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key.
 * Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  //deafult value empty array
  let result = [];
  // loop through array
  for (let dinosaur of dinosaurs) {
    //check if the mya is between the numbers in the given array
    if (dinosaur.mya[0] >= mya && dinosaur.mya[1] <= mya) {
      //if the input key doesn't equal undefined
      if (dinosaur[key] !== undefined) {
        //push the value for that key into the result array
        result.push(dinosaur[key]);
      } //else push the value for the dinosaurId
      else {
        result.push(dinosaur.dinosaurId);
      }
    }
    //if mya input equals the mya in the first element OR mya input + 1
    if (dinosaur.mya[0] === mya || dinosaur.mya[0] === mya + 1) {
      //if the input key doesn't equal undefined
      if (dinosaur[key] !== undefined) {
        //push the value for that key into the result array
        result.push(dinosaur[key]);
      } // else push the value for the dinosaurId
      else {
        result.push(dinosaur.dinosaurId);
      }
    }
  }
  //return array
  return result;
}

module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
