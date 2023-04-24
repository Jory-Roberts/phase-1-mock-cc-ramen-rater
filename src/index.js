// write your code here
/*
Deliverables:
1. See all ramen images in the div with id ramen-menu
2. Display each ramen image using img tag inside #ramen-menu div
3. Click on an image from #ramen-menu div and see all the info that is displayed
inside the #ramen-detail div and where it says insert-comment-here and insert-rating-here
4. Create a new ramen after submitting the new ramen form. New ramen should be added to the 
#ramen-menu div. New ramen does not need to persist i.e. disappear after page refresh is OK
*/

document.addEventListener("DOMContentLoaded", () => {
  const getRamenPictures = () => {
    return fetch("http://localhost:3000/ramens")
      .then((res) => res.json())
      .then((ramensData) => {
        renderRamen(ramensData);
      });
  };

  function renderRamen(ramens) {
    updateRamen(ramens[0]);
    ramens.forEach(appendRamenImage);
  }

  function appendRamenImage(ramen) {
    const ramenMenu = document.querySelector("#ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.details = ramen.details;
    img.classList.add("ramen-picture");
    img.addEventListener("click", () => updateRamen(ramen));
    ramenMenu.append(img);
    updateRamen(ramen);
  }

  function updateRamen(ramen) {
    const name = document.querySelector(".name");
    name.innerText = ramen.name;
    const image = document.querySelector(".detail-image");
    image.src = ramen.image;
    const restaurant = document.querySelector(".restaurant");
    restaurant.innerText = ramen.restaurant;
    const rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;
    const comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;
  }
  const ramenForm = document.querySelector("#new-ramen");
  ramenForm.addEventListener("submit", createNewRamen);

  function createNewRamen(e) {
    e.preventDefault();
    const name = document.querySelector("#new-name").value;
    const restaurant = document.querySelector("#new-restaurant").value;
    const image = document.querySelector("#new-image").value;
    const rating = document.querySelector("#new-rating").value;
    const comment = document.querySelector("#new-comment").value;

    const ramen = { name, restaurant, image, rating, comment };

    appendRamenImage(ramen);
  }
  getRamenPictures();
});
