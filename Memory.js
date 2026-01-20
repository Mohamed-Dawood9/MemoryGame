let mappedIdx = {
    "firstPair": [0, 6],
    "secondPair": [1, 7],
    "thirdPair": [2, 8],
    "fourthPair": [3, 9],
    "fifthPair": [4, 10],
    "sixPair": [5, 11]
}




let imageSources = [
    "Images/1.gif",
    "Images/2.gif",
    "Images/3.gif",
    "Images/4.gif",
    "Images/5.gif",
    "Images/6.gif"
];

let arr = new Array(12);//0..11

let i = 0;
for (let key in mappedIdx) {
    let indices = mappedIdx[key];
    let src = imageSources[i];
    
    for (let j in indices) {
        arr[indices[j]] = src;
    }
    i++;
}

function waitSpecificTime(time) {
   console.log(time+" sec Started");
    let sec = new Date().getSeconds();
    let finsh = sec + time;
    console.log(sec);
    console.log(finsh)
    while (sec != finsh) {
        sec = new Date().getSeconds();
    }

    console.log(time+" sec ended");
}

let flippedSrc = "Images/Moon.gif";
let prev = null;     
let prevImg = null;  
let lock = false;
function changeImg(img) {

    if (lock) return; 

    let index = parseInt(img.className.split("_")[0]) - 1;
    let newSrc = arr[index];

    img.src = newSrc;

    if (!prev) {
        prev = newSrc;
        prevImg = img;
        return;
    }

    lock=true;
  setTimeout(() => {
      if (prev === newSrc) {
        prevImg.src=prev;
        img.src=newSrc; 
    } else { 
        prevImg.src=flippedSrc;
        img.src=flippedSrc;  
         
    }
    prev = null;
    prevImg = null;
    lock = false;
  }, 1000);
}

