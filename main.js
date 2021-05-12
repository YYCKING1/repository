var mouseEvent ="empty";
var last_position_of_x, last_postion_of_y;
  
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListner("mousefown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("wotl");
    mouseEvent = "mousedown";
}

canvas.addEventListner("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListner("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListner("mousemove", my_mousemove);
function my_mousemove(e)
{
    Current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    Current_position_of_mouse_y = e.clientY - canvas.offsetTop;


    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wotl;

        console.log("Last po0stition of x and y coordnates = ")
        console.log("x = " + last_postion_of_x + "y = " + last_postion_of_y)
        ctx.moveTo(last_position_of_x, last_postion_of_y);

        console.log("current position of x and y coordnates = ");
        console.log("x = " + last_postion_of_x + "y = " + last_postion_of_y);
        ctx.lineTo(Current_position_of_mouse_x, Current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = Current_position_of_mouse_x;
    last_postion_of_y = Current_position_of_mouse_y;
}
