// Draw Ecli Equ lines in the sky.
function drawEcliEqu(ctx, observer, date){
    // Draw equator.
    ctx.font = '15pt bold';
    ctx.fillStyle = 'white'; 
    ctx.globalAlpha = 0.5;
   
    let Xequ = [];
    let Yequ = [];
    for (let deg = 0; deg <360; deg += 3){
        let equPoint = Astronomy.Horizon(date, observer, deg/15, 0, 'normal');
        let az = equPoint.azimuth;
        let alt = equPoint.altitude;
        if (alt >0){
            let dot = drawPolar(az, alt);
            Xequ.push(dot.x);
            Yequ.push(dot.y);
            ctx.save();
            ctx.beginPath();
            ctx.translate(drawRadius, drawRadius);
            ctx.translate(dot.x, dot.y);
            ctx.fillRect(0,0,2,2);
            ctx.closePath();
            ctx.restore();
        }
    }

    // Draw ecliptic.
    epsi = 23.43*Math.PI/180 //deg. ->rad
    ctx.fillStyle = 'yellow';

    let Xecli = [];
    let Yecli = [];
    // Ecliptic -> Equatorial
    for (let deg = 0; deg<360; deg += 3){
        let rad = deg*Math.PI/180;
        // Ecliptic -> Equatorial
        let alpha  = Math.atan(Math.sin(rad)/Math.cos(rad)*Math.cos(epsi));
        if (deg >90 && deg <= 270){
            alpha +=Math.PI;
        } else {
            alpha +=2*Math.PI;
        }
        delta = Math.asin(Math.sin(rad)*Math.sin(epsi));
        alpha *=  180/Math.PI;
        delta *=  180/Math.PI;

        let equPoint = Astronomy.Horizon(date, observer, alpha/15, delta, 'normal');
        az = equPoint.azimuth;
        alt = equPoint.altitude;
        if (alt >0){
            let dot = drawPolar(az, alt);
            Xecli.push(dot.x);
            Yecli.push(dot.y);
            ctx.save();
            ctx.beginPath();
            ctx.translate(drawRadius, drawRadius);
            ctx.translate(dot.x, dot.y);
            ctx.fillRect(0,0,2,2);
            ctx.closePath();
            ctx.restore();
        }         
    }

    // Equator and Ecliptic legend.
    
    let HH = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let MM = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let SS = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    // HourAngleE

    const SOLAR_DAYS_PER_SIDEREAL_DAY = 0.9972695717592592;
    const SECONDS_PER_DAY = 24 * 3600;
    var tAngle = (HH*3600+MM*60+SS)/SECONDS_PER_DAY * SOLAR_DAYS_PER_SIDEREAL_DAY *360;
    var sun = new Astronomy.SunPosition(date);
    var middleSouth = tAngle - observer.longitude - sun.elon;
    //console.log(middleSouth,tAngle);

    let equ = Astronomy.Horizon(date, observer, middleSouth/15, 0, 'normal');
    az = equ.azimuth;
    alt = equ.altitude;
    ctx.save();
    ctx.beginPath();
    let dot = drawPolar(az, alt);
    ctx.translate(drawRadius, drawRadius);
    ctx.translate(dot.x, dot.y);
    ctx.fillStyle = 'white'; 
    ctx.fillText('Equatorial',-50, 0);
    ctx.restore();

    let rad = middleSouth*Math.PI/180;
    // Ecliptic -> Equatorial
    let alpha  = Math.atan(Math.sin(rad)/Math.cos(rad)*Math.cos(epsi));
    if (middleSouth >90 && middleSouth <= 270){
        alpha +=Math.PI;
    } else {
        alpha +=2*Math.PI;
    }
    delta = Math.asin(Math.sin(rad)*Math.sin(epsi));
    alpha *=  180/Math.PI;
    delta *=  180/Math.PI;
    let ecli = Astronomy.Horizon(date, observer, alpha/15, delta, 'normal');
    az = ecli.azimuth;
    alt = ecli.altitude; 
    ctx.save();
    ctx.beginPath();
    let dot2 = drawPolar(az, alt);
    ctx.translate(drawRadius, drawRadius);
    ctx.translate(dot2.x, dot2.y);
    ctx.fillStyle = 'yellow'; 
    ctx.fillText('Equliptic',-50, 0);
    ctx.restore();
}

