"use strict";
export {};

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let squareW: number = 14;
let squareH: number = 14;

function draw(): void {
  for (let i: number = 0; i < 2000; i += squareH) {
    for (let j: number = 0; j < 1500; j += squareW) {
      let c: number = Math.random() * 255;
      let color: string = `rgb(${c}, ${c}, ${c})`;

      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(j, i, squareW, squareH);
      ctx.stroke();
    }
  }
}

setInterval(draw, 100);
