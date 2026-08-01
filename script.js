const photos = [
"IMG_3482.jpeg",
"IMG_3671.jpeg",
"IMG_3712.jpeg",
"IMG_1615.png"
];

let index = 0;

const img = document.getElementById("slide");

setInterval(() => {
index++;

if(index >= photos.length){
index = 0;
}

img.src = photos[index];

},4000);
