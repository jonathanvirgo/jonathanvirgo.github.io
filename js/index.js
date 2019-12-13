function menu(){
    var element = document.getElementById("nav_right");
    if (element.classList) { 
        element.classList.toggle("block");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("block");
    
        if (i >= 0) 
        classes.splice(i, 1);
        else 
        classes.push("block");
        element.className = classes.join(" "); 
    }
}