var moment = require('moment');

console.log(moment().format());
//unix timestamp are a signle number and they represent the number of seconds

var now = moment();

console.log('current timestamp', now.unix());

//timestamp of 2nd august 2016 at 10:13 am
var timestamp = 1470129207;
//take the timestamp and display it in a moment
var currentMoment = moment.unix(timestamp);
//format can format the way time is displayed
//MM short months, D day, YY short Year, H hours mm Minutes A AM/PM
console.log('currentMoment:', currentMoment.format('MMM D, YY @ H:mm A'));
//full month day, full year and hour:minutes am/pm
console.log('currentMoment:', currentMoment.format('Do MMMM YYYY @ HH:mm a'));
