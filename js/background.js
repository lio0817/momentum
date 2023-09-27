const images = ["1.jpg", "2.jpg", "3.jpg"];

const todaysImages = images[Math.floor(Math.random() * images.length)]; 
//이미지들이 랜덤하게 선택되도록 한다.//
const bgImage = document.createElement("img");
//이미지를 html에 생성되도록 한다.//
bgImage.src =`img/${todaysImages}`;

document.body.appendChild(bgImage);