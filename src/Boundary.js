import Matter from 'matter-js';

const Bodies = Matter.Bodies;

export default class Boundary
{
    constructor()
    {
        this.ceiling = Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 0.1, {
            isStatic: true,
            density: 1.0,
            label: "Boundary",
        });
        this.ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 0.1, {
            isStatic: true,
            density: 1.0,
            label: "Boundary",
        });
        this.leftWall = Bodies.rectangle(0, window.innerHeight / 2, 0.1, window.innerHeight, {
            isStatic: true,
            density: 1.0,
            label: "Boundary",
        });
        this.rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 0.1, window.innerHeight, {
            isStatic: true,
            density: 1.0,
            label: "Boundary",
        });
    }
}