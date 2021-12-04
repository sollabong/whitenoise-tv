"use strict";
export {};

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let squareW: number = 14;
let squareH: number = 14;

function draw(): void {
  for (let i: number = 0; i < 2000; i += squareH) {
    for (let j: number = 0; j < 1500; j += squareW) {
      // Change the color in every turn
      let c: number = Math.random() * 255;
      let color: string = `rgb(${c}, ${c}, ${c})`;

      // Draw a square
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(j, i, squareW, squareH);
      ctx.stroke();
    }
  }
}

//"Animation", it runs the draw function in every 100ms
setInterval(draw, 100);
