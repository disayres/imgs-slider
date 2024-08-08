let $ = document;

const prevButtonElement = $.querySelector(".prev");
const nextButtonElement = $.querySelector(".next");
const mainImageElem = $.querySelector(".img-slider");

const imagesArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imagesArrayIndex = 0;

nextButtonElement.addEventListener("click", () => {
  imagesArrayIndex++;
  if (imagesArrayIndex > imagesArray.length - 1) {
    imagesArrayIndex = 0;
    mainImageElem.src = imagesArray[imagesArrayIndex];
  } else {
    mainImageElem.src = imagesArray[imagesArrayIndex];
  }
});

prevButtonElement.addEventListener("click", () => {
  imagesArrayIndex--;
  if (imagesArrayIndex < 0) {
    imagesArrayIndex = imagesArray.length - 1;
    mainImageElem.src = imagesArray[imagesArrayIndex];
  } else {
    mainImageElem.src = imagesArray[imagesArrayIndex];
  }
});
