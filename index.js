let films = [
  './Images/1.png',
  './Images/2.png',
  './Images/3.png',
  './Images/4.png',
  './Images/5.png',
  './Images/6.png',
  './Images/7.png',
  './Images/8.png',
  './Images/9.png',
  './Images/10.png',
  './Images/11.png',
  './Images/12.png',
  
];

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};

document.addEventListener("DOMContentLoaded", function() {
      appendFilms(films);
      window.addEventListener("scroll", moveCamera);
      window.addEventListener("mousemove", moveCameraAngle);
      setSceneHeight();
});

function createFilmItem(film,index) {
  console.log(film);
  return `<div>
  <a class='product-link' href='product.html' value='${index}'><img src='${film}' alt='img' ></a>  
  </div>`;

}

async function appendFilms(films) {
  const filmsEl = document.querySelector(".viewport .scene3D");
  let filmsNodes = [];

 await films.forEach(((film,index) =>{
    createFilmItem(film);
    filmsNodes.push(createFilmItem(film,index));
  })) 

   filmsEl.innerHTML = filmsNodes.join(" ");
}

function moveCamera() {
    document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
  console.log(window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = films.length;
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  document.documentElement.style.setProperty("--viewportHeight", height);
}

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 100) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 100) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}
setTimeout(()=>{
const btn = document.querySelector('.product-link')
btn.onClick = (e) => {
  console.log(e.target)
}
}


,1000)

