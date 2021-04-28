// drawConstLines.js 
function drawConstLines(ctx){
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = '#8888FF';
    for(var clin in ConstLines){
        let point1 = constLines[ConstLines[clin]][0];
        let point2 = constLines[ConstLines[clin]][1];
        if (Hipparcos[point1]&&Hipparcos[point2]){
            let ra1 = Hipparcos[point1].Ra/15;
            let dec1 = Hipparcos[point1].Dec;
            let ra2 = Hipparcos[point2].Ra/15;
            let dec2 = Hipparcos[point2].Dec;
            //console.log(clin,point1,':',ra1,dec1,point2,':',ra2,dec2);

            let hor1 = Astronomy.Horizon(date, observer, ra1, dec1,'normal');
            let hor2 = Astronomy.Horizon(date, observer, ra2, dec2,'normal');
            let az1 = hor1.azimuth;
            let alt1 = hor1.altitude;
            let az2 = hor2.azimuth;
            let alt2 = hor2.altitude;
            if(alt1>0 && alt2>0){
                let dot1 = drawPolar(az1, alt1);
                let dot2 = drawPolar(az2, alt2);
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(dot1.x, dot1.y);
                ctx.lineTo(dot2.x, dot2.y);
                ctx.closePath();
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    ctx.globalAlpha = 1.0;
}