
var css=document.querySelector("h3");

var color1=document.querySelector(".color1")
var color2=document.querySelector(".color2")
var mainBody=document.getElementById("mainBody");
function setGradient(){
    mainBody.style.background="linear-gradient(to right," +color1.value + ", "
    + color2.value +")";
    css.textContent=mainBody.style.background;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
// console.log(css);
// console.log(color1);
// console.log(color2); 
// function winBattle(){
//     console.log("me hu main");
// }

// var experiencePoints= winBattle() ? 10 :1;
// console.log(experiencePoints);


// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
   
//   ];
//   foreach function

  //  //let myy =[]
//  let newArray=[]
// // array.forEach(user => console.log(user.username + " !"));
// array.forEach(user => {
//     let {username}=user;
//     username=username + "!";
//     newArray.push(username);
// });
// console.log(newArray);
// //console.log(myy);

// //map function

// let arr=array.map(user=>{
//     let {username}=user;
//     return username + " ?";
// })
// console.log(arr);
// //filter array
// let fillArray=array.filter(user =>{return user.team ==="red"})
// console.log(fillArray);


//score using reduce
// let Total=array.reduce((accu,user)=>  {return accu + user.score},0
// );
// console.log(Total);


// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// turtle = turtle.trim().padEnd(9, '=');
// rabbit=rabbit.padStart(10);

// // it should look like this:
// // '     ||<- Start line'
// // '       🐢'
// // '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);