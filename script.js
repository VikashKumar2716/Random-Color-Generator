let generator=document.querySelector(".activity");

generator.onclick=()=>{
    let h2=document.querySelector(".box h2");
    h2.innerText=getRandomColor();
    document.querySelector(".box2").style.backgroundColor=h2.innerText;
};



function getRandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `RGB(${r},${g},${b})`;
}

let p =document.querySelector("p");
p.addEventListener("click",function(){
    console.log("Paragraph was Clicked!!");
});

let box3=document.querySelector(".box3");
box3.addEventListener("mouseenter",function(){
    console.log("Mouse entered in the Box3");
})

let btns= document.querySelectorAll("button");
btns[1].addEventListener("click",function(){
    console.log(this); 
});

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log(event);
    console.log("key is down");
});
inp.addEventListener("keyup",function(){
    console.log("key is up");
});


let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("Form Submitted");
// }); 

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#form-input").value;
    console.log(user);

    let pass=document.querySelector("#form-pass").value;
    console.log(pass);

    let dob=document.querySelector("#dob").value;
    console.log(dob);
});

form.addEventListener("change",function(){
    console.log("value changed",this.elements[0].value);
})

form.addEventListener("input",function(){
    console.log("value changed",this.elements[0].value);
})


form.addEventListener("mouseout",function(){
    console.log("mouse is out");
})

form.addEventListener("keypress",function(){
    console.log("key is pressed");
})

form.addEventListener("Scroll",function(){
    console.log("Scroll is done");
})


let newbtn=document.createElement("button");
let body=document.querySelector("body");
body.append(newbtn);
newbtn.innerText="Click me to see magic!!";

newbtn.addEventListener("click",function(){
    newbtn.style.backgroundColor="Green";
    newbtn.style.color="white";
});

// newbtn.addEventListener("keyup",function(){
//     newbtn.style.backgroundColor="default";
// });


let ques= document.querySelector("#ques3");
let h2= document.querySelector("h2");

ques.addEventListener("keydown",function(event){
    // console.log(event.keyCode);
    if(event.keyCode>=65 && event.keyCode<=90 || event.keyCode==32){
        h2.append(event.key);
    }
});
