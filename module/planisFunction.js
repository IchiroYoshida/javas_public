//planisFunction.js
//Planisphere: Azimuthal equidistant projection
function drawPolar(az, alt){
    let Az = az * (PI/180);
    let Alt = alt * (PI/180);

    let r = PI/2 - Alt;
    let x =  -r * Math.sin(Az);
    let y =  -r * Math.cos(Az);
    let XX = 2*x/PI*drawRadius;
    let YY = 2*y/PI*drawRadius;
    return{x:XX, y:YY};
}

//360VR Equirectangular projection
function Equirect(az, alt){
    let Az = az  + 180;
    let Alt = alt +90;

    let XX = 2*Az/PI*drawRadius;
    let YY = 2*Alt/PI*drawRadius;
    return{x:XX, y:YY};
}