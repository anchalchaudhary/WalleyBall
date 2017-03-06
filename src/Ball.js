import Matter from 'matter-js';

const colours = ["Blue", "Yellow", "Green", "Red"];

export default class Ball
{
    constructor()
    {
        this.ballbody = Matter.Bodies.circle(window.innerWidth / 2, window.innerHeight / 2, 30, {inertia: Infinity,});
        this.ballbody.render.fillStyle = colours[Math.floor(Math.random() * (4 - 0) + 0)];
        this.ballbody.restitution = 1;
        this.ballbody.friction = 0;
        this.ballbody.frictionAir = 0;
    }

    changeColour(colour)
    {
        this.ballbody.render.fillStyle = colour;
    }

}