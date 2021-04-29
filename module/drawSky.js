// drawSky.js
function drawSky(observer, date){
      
    var canvas = document.getElementById('stars');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
    drawBase(ctx,observer, date); //draw Base.
    drawMilkyway(ctx, observer, date); //draw Milkyway 1000 clusters.
    drawStarsInTheSky(ctx, observer, date);  //draw Hipparcos 1000 stars.
    drawPlanets(ctx, observer, date); //draw planets.
    drawEcliEqu(ctx, observer, date); //draw Ecli. Equ. lines.
    drawMoon(ctx, observer, date); //draw Moon.
    drawConstName(ctx, observer, date); //draw constellation names.
    drawConstLines(ctx, observer, date); //draw constellation lines.
    drawLegend(ctx, observer,date);
}