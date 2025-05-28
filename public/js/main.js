const navLinks = document.querySelector(".nav-links");
const projectsWrapper = document.querySelector("#projects-wrapper");
let AllNavLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll("section");

const projectCardsContent = [
  {
    id: 1,
    caption: "Ucapan selamat pagi",
    subcaption:
      "Sebuah project yang kubuat untuk mengucapkan selamat pagi kepada Tsania Fajriani, sosok unreal itu.",
    image: "bg-[url(./img/project-1.png)]",
    link: "#",
  },
  {
    id: 2,
    caption: "Ucapan selamat pagi",
    subcaption:
      "Sebuah project yang kubuat untuk mengucapkan selamat pagi kepada Tsania Fajriani, makhluk sempurna itu.",
    image: "bg-[url(./img/project-2.png)]",
    link: "#",
  },
  {
    id: 3,
    caption: "Hal-hal yang ingin disampaikan",
    subcaption:
      "Sebuah project yang kubuat untuk mengungkapkan hal-hal yang ingin kusampaikan kepada Tsania Fajriani, mahakarya Tuhan yang terbaik.",
    image: "bg-[url(./img/project-3.png)]",
    link: "#",
  },
  {
    id: 4,
    caption: "Permintaan maaf",
    subcaption:
      "Sebuah project yang kubuat untuk meminta maaf kepada Tsania Fajriani, makhluk paling lucu se alam semesta.",
    image: "bg-[url(./img/project-4.png)]",
    link: "#",
  },
  {
    id: 5,
    caption: "Ungkapan rindu",
    subcaption:
      "Sebuah project yang kubuat untuk menyampaikan bahwa aku merindukan sosok menggemaskan itu, Tsania Fajriani. ",
    image: "bg-[url(./img/project-5.png)]",
    link: "#",
  },
  {
    id: 6,
    caption: "Hal-hal yang ingin disampaikan",
    subcaption:
      "Sebuah project yang kubuat untuk mengungkapkan hal-hal yang ingin kusampaikan kepada berkah Tuhan untuk jiwa yang kacau, Tsania Fajriani.",
    image: "bg-[url(./img/project-6.png)]",
    link: "#",
  },
  {
    id: 7,
    caption: "Hal-hal yang ingin disampaikan",
    subcaption:
      "Sebuah project yang kubuat untuk mengungkapkan hal-hal yang ingin kusampaikan Tsania Fajriani, kekasihku selamanya.",
    image: "bg-[url(./img/project-7.png)]",
    link: "#",
  },
  {
    id: 8,
    caption: "Hal-hal yang ingin disampaikan",
    subcaption:
      "Sebuah project yang kubuat untuk mengungkapkan hal-hal yang ingin kusampaikan Tsania Fajriani, keajaiban dunia yang paling ajaib.",
    image: "bg-[url(./img/project-8.png)]",
    link: "#",
  },
  {
    id: 9,
    caption: "Hal-hal yang ingin disampaikan",
    subcaption:
      "Sebuah project yang kubuat untuk mengungkapkan hal-hal yang ingin kusampaikan hadiah terbaik Tuhan untukku, Tsania Fajriani.",
    image: "bg-[url(./img/project-9.png)]",
    link: "#",
  },
];

const projectsWrapperContent = (datas) => {
  let content = ``;
  datas.forEach((data) => {
    content += `<div class="swiper-slide">
                <div
                  class="slide-content flex w-full items-center justify-center"
                >
                  <div
                    class="w-fit max-w-60 h-100 flex flex-col gap-2 bg-slate-50 p-3 rounded-lg shadow-lg"
                  >
                    <div
                      class="${data.image} bg-cover bg-center bg-no-repeat w-full h-full rounded-lg"
                    ></div>
                    <div class=" w-full h-fit">
                      <h5 class="text-xl text-slate-900 font-bold">
                        ${data.caption}
                      </h5>
                      <p>
                        ${data.subcaption}
                      </p>
                      <a
                        href="${data.link}"
                        role="button"
                        class="cursor-pointer bg-slate-700 text-slate-200 py-1 px-2 rounded-lg hover:bg-slate-800 mt-2 inline-block relative focus:outline-2 focus:outline-offset-2 focus:outline-slate-600 active:bg-slate-500"
                        >Kunjungi</a
                      >
                    </div>
                  </div>
                </div>
              </div>`;
  });
  projectsWrapper.innerHTML = content;
};

projectsWrapperContent(projectCardsContent);

const handleToggle = (e) => {
  e.name === "menu" ? (e.name = "close") : (e.name = "menu");
  navLinks.classList.toggle("-translate-y-75");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      AllNavLinks.forEach((navLink) => {
        navLink.classList.remove("link-active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("link-active");
      });
    }
  });
};
