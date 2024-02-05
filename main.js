function changeColor(){
    const block1 = document.querySelectorAll(".style1");
    for(let i = 0; i < block1.length; i++){
        block1[i].style.backgroundColor = "#efefef";
    }
    const block2 = document.querySelectorAll(".style2");
    for(let i = 0; i < block2.length; i++){
        block2[i].style.backgroundColor = "#dcdcdc";
    }
}
