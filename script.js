document.getElementById("Button").addEventListener("click", colorChange)

let color;
function colorChange()
{
    if(color == true)
    {
        document.body.style.backgroundColor = "grey";
        color = false;
    }
    else
    {
        document.body.style.backgroundColor = "black";
        color = true;
    }
}