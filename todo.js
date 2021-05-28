 
    
    //ta vad användaren har skrivit in: title,subject,time, och description
    let btn = document.querySelector("#btn"); 
    let text = document.querySelector("#input");
    btn.addEventListener("mouseenter", submit);

    console.log(text.value);
    
function submit(event) {
    const spara=text.value;
    var para = document.createElement("p");
var node = document.createTextNode(spara);
para.appendChild(node);

var element = document.getElementById("test");
element.appendChild(para);
}


