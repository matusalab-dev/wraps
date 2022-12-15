const accordion = document.getElementsByClassName("FAQ__wrapper__details");
const content = document.getElementsByClassName("FAQ__wrapper__description");

// console.log(accordion);
// console.log(content);

let i;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log(accordion[i] + " clicked");
  });
}

// gallery section

// const collection = [
//   {
//     all: [
//       "./img/img-1.jpg",
//       "./img/img-2.jpg",
//       "./img/img-3.jpg",
//       "./img/img-4.jpg",
//       "./img/img-6.jpg",
//       "./img/img-7.jpg",
//       "./img/img-8.jpg",
//       "./img/img-9.jpg",
//       "./img/img-10.jpg",
//     ],
//   },
//   {
//     bags: [
//       "./img/img-1.jpg",
//       "./img/img-5.jpg",
//       "./img/img-6.jpg",
//       "./img/img-9.jpg",
//       "./img/img-10.jpg",
//       "./img/img-11.jpg",
//       "./img/img-12.jpg",
//       "./img/img-13.jpg",
//       "./img/img-14.jpg",
//       "./img/img-15.jpg",
//       "./img/img-16.jpg",
//       "./img/img-17.jpg",
//       "./img/img-18.jpg",
//       "./img/img-19.jpg",
//     ],
//   },
//   {
//     dolls: ["./img/img-3.jpg", "./img/img-4.jpg"],
//   },
//   {
//     headBands: ["./img/img-2.jpg", "./img/img-7.jpg", "./img/img-8.jpg"],
//   },
// ];

// // const comfort = document.getElementById("comfort");

// function HTMLMarkUp(imgUrl) {
//   // console.log(collection);
//   // console.log(comfort);
//   const gallery = `
//    <a
//           href="./product-page.html"
//           class=" collection__image-1"
//         >
//           <img src="${imgUrl}" alt="wraps bag product" class="collection__image" />
//         </a>
//         <a
//           href="./product-page.html"
//           class=" collection__image-2"
//         >
//           <img src="${imgUrl}" alt="wraps bag product" class="collection__image" />
//         </a>
//         <a
//           href="./product-page.html"
//           class=" collection__image-3"
//         >
//           <img src="${imgUrl}" alt="wraps bag product"  class="collection__image"/>
//         </a>
//         <a
//           href="./product-page.html"
//           class=" collection__image-4"
//         >
//           <img src="${imgUrl}" alt="wraps bag product" class="collection__image" />
//         </a>
//   `;

//   return comfort.insertAdjacentHTML("beforeend", gallery);
// }

// collection.forEach((el, index, array) => {
//   // HTMLMarkUp();

//   const includeAll = array[index].all;
//   const bagsArray = array[index].bags;
//   const dollsArray = array[index].dolls;
//   const headBandsArray = array[index].headBands;

//   // console.log(array[index].dolls);
//   console.log(includeAll);

//   // includeAll.forEach((el) => {
//   //   // HTMLMarkUp(el);
//   //   console.log(el);
//   // });

//   for (let i = 0; i < includeAll.length; i++) {
//     console.log(includeAll[i]);
//     // HTMLMarkUp(includeAll[i]);
//   }
// });

// using data-attribute

const comfort = document.getElementById("comfort").children;
const indicators = document.querySelector(".indicator").children;

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", (e) => {
    console.log(
      `--clicked-filter-btn: ${indicators[i].getAttribute("data-filter")}---`
    );
  for (let x = 0; x < indicators.length; x++) {
      indicators[x].classList.remove("active-label");
    }
    indicators[i].classList.add("active-label");

    const displayedItems = indicators[i].getAttribute("data-filter");
    // console.log(displayedItems);
    for (let m = 0; m < comfort.length; m++) {
      const comfortImage = comfort[m];
      // .firstChild.nextSibling;
      // console.log(comfortImage);
      const category = comfortImage.getAttribute("data-category");
      comfortImage.style.display = "none";

      if (category === displayedItems || displayedItems === "all") {
        const hairBands = document.querySelectorAll(
          '[data-category="hairbands"]'
        );
        // console.log(hairBands);
        const bags = document.querySelectorAll('[data-category="bags"]');
        // console.log(bags);
        const dolls = document.querySelectorAll('[data-category="dolls"]');
        console.log(dolls[0]);

        // console.log(category);
        if (category === "dolls") {
          dolls[1].style.gridColumn = "3/span 2";
          dolls[1].style.gridRow = "1/3";
          dolls[0].style.gridColumn = "1/span 2";
          dolls[0].style.gridRow = "1/3";
        }

        comfortImage.style.display = "block";
        // console.log(comfortImage);

        // console.log(`category: ${category}: ${comfortImage}`);
      }
    }

  });
}
// console.log(indicators[0]);
// console.log(indicators[1]);
// console.log(indicators[2]);
// console.log(indicators[3]);

 
function globalEventHandler(category) {
 category.addEventListener("click", (e) => {
   console.log(
     `--clicked-filter-btn: ${category.getAttribute("data-filter")}---`
   );
for (let x = 0; x < indicators.length; x++) {
  category.classList.remove("active-label");
}
category.classList.add("active-label");
// category.classList.remove("active-label");

const displayedItems = category.getAttribute("data-filter");
console.log(displayedItems);
   
 });
}

globalEventHandler(indicators[0]);
globalEventHandler(indicators[1]);
globalEventHandler(indicators[2]);
globalEventHandler(indicators[3]);



//    for (let x = 0; x < indicators.length; x++) {
//       indicators[x].classList.remove("active-label");
//     }
//     indicators[i].classList.add("active-label");

//     const displayedItems = indicators[i].getAttribute("data-filter");
//     // console.log(displayedItems);
//     for (let m = 0; m < comfort.length; m++) {
//       const comfortImage = comfort[m];
//       // .firstChild.nextSibling;
//       // console.log(comfortImage);
//       const category = comfortImage.getAttribute("data-category");
//       comfortImage.style.display = "none";

//       if (category === displayedItems || displayedItems === "all") {
//         const hairBands = document.querySelectorAll(
//           '[data-category="hairbands"]'
//         );
//         // console.log(hairBands);
//         const bags = document.querySelectorAll('[data-category="bags"]');
//         // console.log(bags);
//         const dolls = document.querySelectorAll('[data-category="dolls"]');
//         console.log(dolls[0]);

//         // console.log(category);
//         if (category === "dolls") {
//           dolls[1].style.gridColumn = "3/span 3";
//           dolls[1].style.gridRow = "1/4";
//         }

//         comfortImage.style.display = "block";
//         // console.log(comfortImage);

//         // console.log(`category: ${category}: ${comfortImage}`);
//       }
//     }
// }



