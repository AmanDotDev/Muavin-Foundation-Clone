function homeImageAnim() {
  var myElement = document.querySelector(".home"),
    imgList = [
      "https://images.unsplash.com/photo-1614113036347-9f60df80730a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661746503127-004c48f57496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHMlMjBtdXNsaW18ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1613794713137-a78aba4be84a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fHww",
    ];
  function changeImage(myElement, imgList) {
    setInterval(function () {
      randomImage = Math.floor(Math.random() * imgList.length);
      myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
    }, 2000);
  }
  changeImage(myElement, imgList);
}
homeImageAnim();

let ImagesArr = [
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/quality-education-img.jpg",
    h1: "Quality Education",
    p: "To improve standards of education in Government Schools and provide quality primary/ secondary education for all school-age children, especially in rural areas of Pakistan.",
  },
  {
    image: "https://mf.org.pk/wp-content/uploads/2024/02/Better-Lives-img.jpg",
    h1: "Better Lives",
    p: "To involve the community in sharing the responsibility of improving its living standard.",
  },
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/Vocational-Training-img.jpg",
    h1: "Vocational Training",
    p: "To promote technical education for creation of skilled youth through demand-driven Vocational Training in the rural areas through innovative curriculum and teaching methodologies.",
  },
  {
    image: "https://mf.org.pk/wp-content/uploads/2024/02/Volunteering-img.jpg",
    h1: "Volunteering",
    p: "To encourage and promote volunteering at all levels and for all sorts of activities.",
  },
  {
    image: "https://mf.org.pk/wp-content/uploads/2024/02/Empowerment-img.jpg",
    h1: "Empowerment",
    p: "To empower our society especially girls and women through education and income generating skills and providing microfinancing facilities where applicable..",
  },
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/INFRASTRUCTURE-development-img.jpg",
    h1: "Community Involvement",
    p: "To promote awareness among all communities of their rights and responsibilities; to encourage community participation in all educational endeavors and humanitarian responses.",
  },
];

function cards() {
  let clutter = "";
  ImagesArr.forEach(function (obj) {
    clutter += `<div class="obj-rects">
                    <div class="img-cont"><img src="${obj.image}" alt=""></div>
                    <h1>${obj.h1}</h1>
                    <p>${obj.p}</p>
                </div>`;
  });

  document.querySelector(".obj-cnts-container").innerHTML = clutter;
}
cards();

gsap.to(".movingiImgs", {
  x: -2000,
  duration: 50,
  ease: "linear",
  repeat: -1,
});

let blueSectImgs = [
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/INFRASTRUCTURE-development-img.jpg",
    h2: "Education support",
  },
  {
    image: "https://mf.org.pk/wp-content/uploads/2024/02/teachers-traning.jpg",
    h2: "Professional Development Teachers",
  },
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/INFRASTRUCTURE-development-img.jpg",
    h2: "	Infrastructure Enhancement",
  },
  {
    image:
      "https://mf.org.pk/wp-content/uploads/2024/02/Infrastructure-Enhancement-img.jpg",
    h2: "Infrastructure Enhancement",
  },
];

function ShowBlueSectImgs() {
  let clutter = "";
  blueSectImgs.forEach(function (obj) {
    clutter += `<div class="bsCards">
                    <div class="bsCards-img"><img src="${obj.image}" alt=""></div>
                    <h2>
                    ${obj.h2}</h2>
                </div>`;
  });
  document.querySelector(".right-blue").innerHTML = clutter;
}

ShowBlueSectImgs();



  let aboutDopdown = document.querySelector(".dropdown");
  let aboutUs = document.querySelector("#about-us"); 
  let home = document.querySelector(".home"); 
  
  aboutUs.addEventListener("mousemove", () => {
    aboutDopdown.style.display = "block";
  });
  home.addEventListener("mouseenter", () => {
    aboutDopdown.style.display = "none";
  });


