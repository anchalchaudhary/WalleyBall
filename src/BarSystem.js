import Matter from 'matter-js';

const colors = ["Yellow", "Blue", "Red", "Green"];

export default class BarSystem
{

    constructor()
    {

        this.left_bar = Matter.Bodies.rectangle(0., window.innerHeight/2, 50, window.innerHeight/3,
            {
                isStatic:true,
                label: "Left Bar",
            });
        this.top_bar = Matter.Bodies.rectangle(window.innerWidth/2, 0, window.innerWidth/3, 50,
            {
                isStatic:true,
                label: "Top Bar",
            });
        this.bottom_bar = Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth/3, 50,
            {
                isStatic:true,
                label: "Bottom Bar",
            });
        this.right_bar = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight/2, 50, window.innerHeight/3,
            {
                isStatic:true,
                label: "Right Bar",
            });
        this.setColours();
    }

    setColours()
    {
        this.left_bar.render.fillStyle = colors[0];
        this.top_bar.render.fillStyle = colors[1];
        this.right_bar.render.fillStyle = colors[2];
        this.bottom_bar.render.fillStyle = colors[3];
    }

}