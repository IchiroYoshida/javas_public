// SIR model in JavaScript
// http://epirecip.es/epicookbook/chapters/sir/js
//

// Parameters.

const b=0.1;
const g=0.05;
const I0=0.01;
const step=0.1;
const tmax=200.0;

//
const rk4 = require("ode-rk4");

// Calculations.

function copy(x) {
  return Object.assign({},x)
}

function simulate(f,t0,y0,step,tmax) {
  var integrator = rk4(y0, f, t0, step)
  var t = t0
  var y = y0
  var ta = []
  var ya = []
  ta.push(t0)
  ya.push(copy(y))
  while(true){
    t = t+step
    if(t>tmax) break
    integrator=integrator.step()
    ya.push(copy(integrator.y))
    ta.push(t)
  }
  return {t:ta,y:ya};
}

function sir(dydt, y, t) {
  dydt[0] = -b*y[0]*y[1];
  dydt[1] = b*y[0]*y[1] - g*y[1];
  dydt[2] = g*y[1];
}

var sir_sol = simulate(sir,0,[1.0-I0,I0,0.0],step,tmax);

// Visualisation.

$$.html('<script>require(["https://cdn.plot.ly/plotly-latest.min.js"], function(Plotly) { if (Plotly) window.Plotly = Plotly; })</script>');
var Plot = require('plotly-notebook-js');

var t = sir_sol.t;
var S = sir_sol.y.map((x)=>{return x[0]});
var I = sir_sol.y.map((x)=>{return x[1]});
var R = sir_sol.y.map((x)=>{return x[2]});
var strace = {
    type: "scatter",
    mode: "step",
    name: 'S',
    x: t,
    y: S,
    line: {color: 'blue'}
}
var itrace = {
    type: "scatter",
    mode: "step",
    name: 'I',
    x: t,
    y: I,
    line: {color: 'red'}
}
var rtrace = {
    type: "scatter",
    mode: "step",
    name: 'R',
    x: t,
    y: R,
    line: {color: 'green'}
}
var data = [strace,itrace,rtrace];

var layout = {
    title: 'SIR model',
    xaxis: {
    title: 'Time',
    titlefont: {
      size: 18,
    }
    },
    yaxis: {
    title: 'Number',
    titlefont: {
      size: 18,
    }
    }}

var sir_plot = Plot.createPlot(data, layout);

$$html$$ = sir_plot.render()


