function menu(){
    let menu = document.getElementsByClassName('mainnav-collapse');
    let open = document.querySelector(".mainnav-collapse");
    let style1 = getComputedStyle(open);
    let i = 0, n = menu.length;
    for(i = 0; i < n; i++){
        let element = menu[i];
        console.log("open",menu);
        if(style1.display == "none" ){
            console.log("ok")
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        
    }
}