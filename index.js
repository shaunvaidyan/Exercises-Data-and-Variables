// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedmph = 17500 //mph
let distanceMarskm = 225000000 //km
let distanceMoonkm = 384400 //km
const milesPerkilometer = 0.621 //conversion





// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedmph)
console.log(typeof distanceMarskm)
console.log(typeof distanceMoonkm)
console.log(typeof milesPerkilometer)



// Code your solution to exercises 3 and 4 here:
let distanceMarsMiles = (distanceMarskm * milesPerkilometer)
let hoursToMars = (distanceMarsMiles / shuttleSpeedmph)
let daysToMars = (hoursToMars / 24)
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")





// Code your solution to exercise 5 here:
let distanceMoonMiles = (distanceMoonkm * milesPerkilometer)
let hoursToMoon = (distanceMoonMiles / shuttleSpeedmph)
let daysToMoon = (hoursToMoon / 24)

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")