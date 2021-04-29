//
const drawRadius2 = 1024;
let drawRadius = parseInt(drawRadius2/2);
const drawClip = 500;

const PI = Math.PI;

// Location Fukuoka
const latitude = 33.594;
const longitude = 130.387;
const elevation = 20.0;
let observer = new Astronomy.Observer(latitude, longitude, elevation);

date = new Date();
astroToday = new Astronomy.MakeTime(date);

let Year  =  date.getFullYear();
let Month = date.getMonth() +1;
let Day = date.getDate();
let Date1 = Year+'/'+Month+'/'+Day;

let HH = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
let MM = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let SS = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
let Date2 = HH+':'+MM+':'+SS;
console.log('Date=',Date1,Date2);

// BodyList of Solar system.
const BodyList = [
    'Mercury', 'Venus', 'Mars',
    'Jupiter', 'Saturn'
];   

// Position of the Sun.
let sun = Astronomy.Equator('Sun', date, observer, true, true);
let Sun_hor = Astronomy.Horizon(date, observer, sun.ra, sun.dec, 'normal');
let Sun_az =Sun_hor.azimuth;
let Sun_alt=Sun_hor.altitude;
console.log('Sun',Sun_az,Sun_alt);

// Position of the Moon.
let moon = Astronomy.Equator('Moon', date, observer, true, true);
let Moon_hor = Astronomy.Horizon(date, observer, moon.ra, moon.dec, 'normal');
let Moon_az =Moon_hor.azimuth;
let Moon_alt=Moon_hor.altitude;
console.log('Moon',Moon_az,Moon_alt);

// Milkyway 1000 clusters.
var Milkyway = Object.keys(Clusters);

// Hipparcos brightest 1000 stars.
var Stars = Object.keys(Hipparcos);

// The brightest 20 stars.
var Bright20Names = Object.keys(starName);

// Constellations.
var ConstName = Object.keys(Constellations);

// Constellation lines.
var ConstLines = Object.keys(constLines);
