var t = 300;
h1Str = "Good Bye";
//console.log("waiting... for " + t +"ms. before changing header.")
//document.querySelector('p').innerHTML="running index.js";

//setTimeout(myGreeting, t);

/* function myGreeting() {
    document.querySelector("h1").innerHTML = h1Str;
    document.querySelector('h1').style.color='red';
    console.log("done.")
} */

// same as above, this is called anonymous function
/* setTimeout(function() {
    //document.querySelector("h1").innerHTML=h1Str;
    document.querySelector('a').style.color='#800080';
    console.log("running...")
    
    console.log("done.")}, t) */

//document.querySelector("a").style.color='red';
//document.querySelectorAll("a")[1].style.color='green';

//const wait = () => new Promise((res) => setTimeout(() => res(), 0));
function timeWaster() {
  let x = 0n;
  for(i=0; i<100000; i++)  {
    console.log("inside for loop");
    x++;
    /* if (x % 10000000n === 0n) {
      await wait();
    } */
  }
  return x;
}
alert(timeWaster());
document.querySelector('a').style.color='#800080';