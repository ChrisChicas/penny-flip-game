// Variables to call specific areas of the html.
let flip = document.querySelector("#Flip");
let clear = document.querySelector("#Clear");
let result = document.querySelector(".Result");
let image = document.querySelector(".penimg");
let heads = document.querySelector("#headstot");
let tails = document.querySelector("#tailstot");
let headsper = document.querySelector("#headsper");
let tailsper = document.querySelector("#tailsper");

// Variables which will hold changing numbers are called from local storage and checked if they existed in local storage, then displayed.
let headstot = parseInt(localStorage.getItem("headstot"));
if(isNaN(headstot) === true) {
    headstot = 0;
};

let tailstot = parseInt(localStorage.getItem("tailstot"));
if(isNaN(tailstot) === true) {
    tailstot = 0;
};

let total = parseInt(localStorage.getItem("total"));
if(isNaN(total) === true) {
    total = 0;
};

heads.textContent = headstot;
tails.textContent = tailstot;

let percenthead = headstot/total;
if(isNaN(percenthead) === true) {
    percenthead = 0;
};

let percenttails = tailstot/total;
if(isNaN(percenttails) === true) {
    percenttails = 0;
};

headsper.textContent = `${Math.round(percenthead * 100)}%`;
tailsper.textContent = `${Math.round(percenttails * 100)}%`;

//Event listener for the Flip button.
flip.addEventListener("click", function(){
    //Random number in between 0 and 2, rounded down
    let random = Math.floor(Math.random() * 2)
    //0 is stand in for "heads". Heads total and image updated and displayed; saved to local storage.
    if(random === 0) {
        result.textContent = "You got Heads!";
        image.setAttribute("src", "./assets/penny-heads.jpg");
        headstot++;
        localStorage.setItem("headstot", headstot);
        heads.textContent = headstot;
    //1 is stand in for "tails". Tails total and image updated and displayed; saved to local storage.
    } else if(random === 1) {
        result.textContent = "You got Tails!";
        image.setAttribute("src", "./assets/penny-tails.jpg");
        tailstot++;
        localStorage.setItem("tailstot", tailstot);
        tails.textContent = tailstot;
    }
    //Total calculated and saved to local storage; Percentages calculated and displayed.
    total = headstot + tailstot;
    localStorage.setItem("total", total);
    percenthead = headstot/total;
    percenttails = tailstot/total;
    headsper.textContent = `${Math.round(percenthead * 100)}%`;
    tailsper.textContent = `${Math.round(percenttails * 100)}%`;
});

//Event listener for the Clear button.
clear.addEventListener("click", function(){
    //Values are reset and saved to local storage, along with the image reverting to default and the default text returning as well.
    result.textContent = "Let's Get Rolling!";
    image.setAttribute("src", "./assets/penny-heads.jpg");
    headstot = 0;
    localStorage.setItem("headstot", headstot);
    tailstot = 0;
    localStorage.setItem("tailstot", tailstot);
    total = 0;
    localStorage.setItem("total", total);
    percenthead = 0;
    percenttails = 0;
    heads.textContent = headstot;
    tails.textContent = tailstot;
    headsper.textContent = `${Math.round(percenthead * 100)}%`;
    tailsper.textContent = `${Math.round(percenttails * 100)}%`;
});