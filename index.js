"use strict"; 


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
// *** Rendering post ***

// Select main element
const mainEl = document.querySelector(".container");

// Create section element and add it to main El
const createSectionEl = document.createElement("section");
// createSectionEl.classList.add("test-border");
mainEl.append(createSectionEl); 

// Create profile 
const profileSection = document.createElement("div");
profileSection.classList.add("profile");

const imgProfile = document.createElement("img");
imgProfile.classList.add("profile-img");
imgProfile.setAttribute("src", posts[0].avatar);
imgProfile.setAttribute("alt", `Portrait of ${posts[0].avatar}`);

const profileInfo = document.createElement("div");
profileSection.classList.add("profile-info");

// Create porfile name and location element
const profileName = document.createElement();

{/* <p class="profile-name bold-text" id="user-name"> Vincent van Gogh</p>
<p class="profile-location" id="user-location"> Zudert, Netherlands</p> */}








const imgContainerEl = document.getElementById("img-post");
const imgEl = document.createElement("img"); 
imgEl.setAttribute("src", posts[0].post);
imgEl.setAttribute("alt", `Self-portrait of ${posts[0].name}`)
imgContainerEl.append(imgEl);






// for ( let i = 0; i < posts.length; i++) {
//     console.log(i);
// }

// const imgPostEL = document.getElementById("img-post");
// imgPostEL.innerHTML = `<img src="${posts[0].post}">`;










// **** 1/09/2022****
// What I've done: Drew layout of what the oldagram should look like 
//                 Dynamically load image from object to html 
//                 Figured out why image in side div has space in the bottom
//                 https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
// 
// Issue's encountered: Why there was space on the bottom of image inside div "Solved"
// 
// What's left: HTML Structure 
//              then CSS, then JS 
// Links : 
//    Create elements with attributes, https://bobbyhadz.com/blog/javascript-create-element-with-attributes


// **** 2/09/2022****
// What I've done: Add structure & content to header section, 
//                 Add structure, content & styling to profile section below header
// Issue's encountered: not really, did have a small issue with aligning text on top of eachother
//                      Which was solved by setting the text-align to start.
//                      Since that rule was set in the p selector I'll have to check
//                      how it affects other paragraphs 
//  What's left: HTML structure for comment section, CSS style 
//               See if its possible to render out the post via JS
// Links: none



// **** 09/09/2022****
// What I've done: Imported font from google, add utility class to have bold text on certain content 
//                  Completed styling comment section 
//                  Changed background color for accessibility 
// Issue's encountered: None so far 
// What's left: Add hover effects to icons 
//              Refactor html to render out all three posts using Js
//              increase the likes when double clicking the img post. 


// **** 10/09/2022****
// What I've done: Styled the hover effects 
// Issue's encountered: Figuring out how to change the color of icon images w/out having to create new images from figma 
// Soln: https://stackoverflow.com/questions/7415872/change-color-of-png-image-via-css codepen example to convert icon to target hex color 
//       ASSUMING icon is black originally. 
// What's left: Refactor html to render out all three posts using Js
//              increase the likes when double clicking the img post. 


// **** 12/09/2022  **** 
// What I've done: Starting to refactor by create semantic html and elements in JS. 
//                 My plan is to have each post rendered out based on the number of items in each array. 
// Issue's encountered : none, just needed to find pages to learn how to create elements, attribute, etc 
// What's left: ---