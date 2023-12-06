const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  } else if (
    Object.getOwnPropertyNames(date).length !== 0 ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    throw new Error("Invalid date!");
  } else {
    const month = date.getMonth();
    if (month < 2 || month === 11) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else {
      return "autumn";
    }
  }
}

// function getSeason(date) {
//   if (!date) return "Unable to determine the time of year!";
//   if (!(date instanceof Date) || isNaN(date)) throw new Error("Invalid date!");

//   const month = date.getMonth();
//   if (month === 11 || month <= 1) return "winter";
//   if (month <= 4) return "spring";
//   if (month <= 7) return "summer";
//   if (month <= 10) return "autumn";

//   return "Invalid date!";
// }

module.exports = {
  getSeason,
};
// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: "Date",
// };
// let time = getSeason(new Date(1994, 8, 26, 3, 0, 11, 500));
// console.log(time);

// time = getSeason(new Date(2150, 7, 21, 18, 36, 41, 841));
// console.log(time);

// (time = getSeason("foo")), console.log("time: ", time);
// (time = getSeason({ John: "Smith" })), console.log("time: ", time);

// (time = getSeason(20192701)), console.log("time: ", time);
// const time = new Date();
// console.log("time.toString(): ", Object.toString(new Date()));

// Object.getOwnPropertyNames(new Date());
// console.log(
//   "Object.getOwnPropertyNames(): ",
//   Object.getOwnPropertyNames(new Date())
// );
// (time = getSeason(() => new Date())), console.log("time: ", time);

// time = new Date();
// console.log("time: ", time);
// console.log(
//   "Object.prototype.toString.call(new Date()): ",
//   Object.prototype.toString.call(time)
// );

// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: "Date",
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
// console.log('getSeason(fakeDate): ', getSeason(fakeDate));
