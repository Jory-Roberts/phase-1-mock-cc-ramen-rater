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

document.addEventListener("DOMContentLoaded", () => {});

//console.log(ramenPictures);

const getRamenPictures = () => {
  return fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => {
      const ramenMenu = document.querySelector("#ramen-menu");
      data.forEach((ramen) => {
        const image = document.createElement("img");
        image.src = ramen.image;
        image.classList.add("ramen-picture");
        ramenMenu.appendChild(image);
      });

      console.log(ramenMenu);
    });
};

getRamenPictures();
