let __STARS = [
  {
    name: "star",
    active: false,
  },
  {
    name: "star",
    active: false,
  },
  {
    name: "star",
    active: false,
  },
  {
    name: "star",
    active: false,
  },
];

const rateFace = (index) => {
  const getFace = document.querySelector("#face");
  console.log(index);

  if (index === 0) {
    getFace.className = "bx bx-angry rate-face";
  }

  if (index === 1) {
    getFace.className = "fa-solid fa-face-smile-beam rate-face";
  }

  if(index === 2){
    getFace.className ="fa-solid fa-face-grin-stars rate-face";
  }

  if(index === 3){
    getFace.className ="fa-solid fa-face-grin-squint-tears rate-face active-face";
  }

  
};

const stars_container = document.querySelector(".stars_container");

const rate = (activeIndex) => {
  const mappedStar = __STARS.map((el, index) => {
    if (index === activeIndex || index < activeIndex) {
      return {
        ...el,
        active: true,
      };
    } else {
      return {
        ...el,
        active: false,
      };
    }
  });

  stars_container.replaceChildren();
  __STARS = mappedStar;
  generateStars();
  rateFace(activeIndex);
};

const generateStars = () => {
  __STARS.forEach((el, index) => {
    const star = document.createElement("i");
    star.addEventListener("click", () => {
      rate(index);
    });

    if (el.active) {
      star.innerHTML = `
        <i class="fa-solid fa-star active star"></i>
        `;
    } else {
      star.innerHTML = `
        <i class="bx bx-star star"   ></i>
        `;
    }
    stars_container.appendChild(star);
  });
};
generateStars();
