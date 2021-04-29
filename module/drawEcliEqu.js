// Draw Ecli Equ lines in the sky.
function AveArr(arr){
    const sum = arr.reduce(function (acc, cur){
        return acc + cur;
    });
    return(sum /arr.length);
}

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
    let XequPoint  = AveArr(Xequ);
    let YequPoint  = AveArr(Yequ);
    ctx.save();
    ctx.beginPath();
    ctx.translate(drawRadius, drawRadius);
    ctx.translate(XequPoint, YequPoint)
    ctx.fillText('Equatorial', 0, 0);
    ctx.restore();

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
    let XecliPoint  = AveArr(Xecli);
    let YecliPoint  = AveArr(Yecli);
    ctx.save();
    ctx.beginPath();
    ctx.translate(drawRadius, drawRadius);
    ctx.translate(XecliPoint, YecliPoint)
    ctx.fillText('Ecliptic', 0, 0);
    ctx.restore();
}

