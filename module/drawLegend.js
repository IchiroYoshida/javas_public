// drawLegend.js
function drawLegend(ctx, observer, date){
    let Year  =  date.getFullYear();
    let Month = date.getMonth() +1;
    let Day = date.getDate();
    let Date1 = Year+'/'+Month+'/'+Day;
    let HH = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let MM = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let SS = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let Date2 = HH+':'+MM+':'+SS;
 
    ctx.font = '20pt bold';
    ctx.fillStyle = 'white';

    ctx.save();
    ctx.beginPath();
    ctx.fillText('Lat. =  '+observer.latitude,20,50);
    ctx.fillText('Lon.='+observer.longitude,20,80);
    ctx.fillText(Date1,800,50);
    ctx.fillText(Date2,850,80);
    ctx.closePath();
    ctx.restore();
}

   