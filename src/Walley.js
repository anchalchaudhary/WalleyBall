import React, { Component } from 'react';
import Matter from 'matter-js';
import Ball from './Ball';
import Boundary from './Boundary';
import BarSystem from './BarSystem';

const World = Matter.World;
const Engine = Matter.Engine;
const Renderer = Matter.Render;
const Bodies = Matter.Bodies;
const Runner = Matter.Runner;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Events = Matter.Events;

class Walley extends Component
{
    constructor(props)
    {
        super(props);

        this.world = World;
        this.bodies = Bodies;
        this.engine = Engine.create(
            {
                options:
                    {
                        gravity: { x: 0, y: 0,}
                    }
            });

        this.renderer = Renderer.create(
            {
                element: document.body,
                engine: this.engine,
                options:
                    {
                        hasBounds: true,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        background: 'black',
                        wireframes: false,
                    }
            });

        this.state = {
            play_game: false,
        };

        this.boundary = new Boundary();
        this.barsystem = new BarSystem();
        this.ball = new Ball();
    }

    startGame()
    {
        this.setState({
            play_game: true,
        });

        this.ball.ballbody.force = {x:0.1,y:0.1};

        let basic_elements = [
            this.boundary.leftWall, this.boundary.rightWall, this.boundary.ceiling, this.boundary.ground,
            this.ball.ballbody,
            this.barsystem.left_bar, this.barsystem.right_bar,
            this.barsystem.top_bar, this.barsystem.bottom_bar,
        ];

        this.world.add(this.engine.world, basic_elements);
        Renderer.run(this.renderer);
    }

    componentWillMount()
    {
        if (confirm("You want to start game?"))
        {
            this.setState({play_game: true});
        }
    }

    render()
    {
        Engine.run(this.engine);
        this.startGame();
    }
}

export default Walley;
