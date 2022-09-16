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


for(let i = 0; i < posts.length; i++) {
    createSectionEl.innerHTML += `<section>
                                <div class="profile">
                                    <img src="${posts[i].avatar}" alt="Picture of ${posts[i].name}" class="profile-img" >
                                    <div class="profile-info">
                                        <p class="profile-name bold-text" id="user-name">${posts[i].name}</p>
                                        <p class="profile-location" id="user-location"> ${posts[i].location}</p>
                                    </div>
                                </div>
                                <div class="img-container" id="img-post" >
                                    <img class="post" src="${posts[i].post}" alt="Self-portrait painting of ${posts[i].name}" id="post-${i}"> 
                                </div>
                                <div class="comment-section">
                                    <div class="icon-section">
                                        <img class="comment-icons" src ="images/icon-heart.png">
                                        <img class="comment-icons" src ="images/icon-comment.png">
                                        <img class="comment-icons" src ="images/icon-dm.png">
                                    </div>
                                    <p class="like-section bold-text" id="like-count${[i]}">${posts[i].likes} likes</p>
                                    <p class="comment"><span class="bold-text" id="user-name">${posts[i].username}</span>${posts[i].comment}</p>
                                </div>
                            </section> `;
    mainEl.append(createSectionEl); 
}

// Create variables 
function createIdForEvntListeners() {
    let clickPostArr = [];
    for(let i = 0; i < posts.length; i++) {
        clickPostArr.push(document.getElementById("post-"+[i]));        
    }
    return clickPostArr;
}
let check = createIdForEvntListeners();
console.log(check[0]);
// // let check = createIdForEvntListeners(); 
// // console.log(check[0]);

// console.log(createIdForEvntListeners());

// const likeCountEl = document.getElementById("")


// Create event listeners to listen for dbl clicks on each img post via id. Which is selected from the created variables matching the 
// id post number generated from the for loop.
// Increase the like count when double clicking the posts.
// function createEventListeners() {
    
//     const clickPosts = createIdForEvntListeners();
//     clickPosts.forEach(post => {
//         post.addEventListener('dblclick', function() {

//         })
//     })

// }








// let count = 0;
// const imgContainerEl = document.getElementById("img-post");
// const likeIconEl = document.querySelector(".like-icon");
// const likeEl = document.querySelector(".like");

// imgContainerEl.addEventListener("dblclick", function() {
//     count++;
//     likeIconEl.classList.add("like");
//     setTimout (() => {
//         likeIconEl.classList.remove("like");
//     }, 1200);

// });





// createSectionEl.innerHTML = `<section>
//                                  <div class="profile">
//                                      <img src=${posts[0].avatar} class="profile-img" >
//                                      <div class="profile-info">
//                                          <p class="profile-name bold-text" id="user-name"> Vincent van Gogh</p>
//                                          <p class="profile-location" id="user-location"> Zudert, Netherlands</p>
//                                      </div>
//                                  </div>
//                                  <div class="img-container" id="img-post" >
//                                          <img src="images/post-vangogh.jpg"> 
//                                  </div>
//                                  <div class="comment-section">
//                                      <div class="icon-section">
//                                          <img class="comment-icons" src ="images/icon-heart.png">
//                                          <img class="comment-icons" src ="images/icon-comment.png">
//                                          <img class="comment-icons" src ="images/icon-dm.png">
//                                      </div>
//                                      <p class="like-section bold-text">21 likes</p>
//                                      <p class="comment"><span class="bold-text" id="user-name">vincey123</span>just took a few mushrooms lol</p>
//                                  </div>
//                              </section>`



// // Create profile 
// const profileSectionEl = document.createElement("div");
// profileSectionEl.classList.add("profile");

// // Create img element
// const imgProfileEl = document.createElement("img");
// imgProfileEl.classList.add("profile-img");
// imgProfileEl.setAttribute("src", posts[0].avatar);
// imgProfileEl.setAttribute("alt", `Portrait of ${posts[0].avatar}`);

// // Create div for profile info
// const profileInfoEl = document.createElement("div");
// profileSectionEl.classList.add("profile-info");

// // Create porfile name and location element
// const profileNameEl = document.createElement("p");
// profileNameEl.setAttribute("id", "user-name");
// profileNameEl.classList.add("profile-name");
// profileNameEl.classList.add("bold-text");
// profileNameEl.textContent = `${posts[0].name}`;

// const profileLocationEl = document.createElement("p");
// profileLocationEl.setAttribute("id", "user-location");
// profileLocationEl.classList.add("profile-location");
// profileLocationEl.textContent = `${posts[0].location}`;

// // add profileNameEl & profileLocationEl to profileInfoEl, then add imgProfileEl & profileInfoEl to 
// // profileSectionEl then add that to that to create section.
// profileInfoEl.append(profileNameEl, profileLocationEl);
// profileSectionEl.append(imgProfileEl, profileInfoEl);
// createSectionEl.append(profileSectionEl);

// // create div with class for img post and create img tag
// const imgContainerEl = document.createElement("div")
// imgContainerEl.classList.add("img-container");
// imgContainerEl.setAttribute("id", "img-post");
// const imgEl = document.createElement("img");
// imgEl.setAttribute("src", posts[0].post);
// imgEl.setAttribute("alt", `Self-portrait of ${posts[0].name}`)
// imgContainerEl.append(imgEl);
// // Add imgContainer div to section
// createSectionEl.append(imgContainerEl);

// // create 2 divs: 1st child div containing the comment icons
// //                parent div containing 2 p tags w/ a span and child div
// const cmntSectionEl = document.createElement("div");
// cmntSectionEl.classList.add("comment-section");
// const iconSectionEl = document.createElement("div");
// iconSectionEl.classList.add("icon-section");

// // Create img tags for comment icons
// // Create img elements
// const iconHeartEl = document.createElement("img");
// iconHeartEl.classList.add("comment-icons")
// iconHeartEl.setAttribute("src", "images/icon-heart.png")
// iconHeartEl.setAttribute("alt", `Heart icon`);

// const iconCmntEl = document.createElement("img");
// iconCmntEl.classList.add("comment-icons")
// iconCmntEl.setAttribute("src", "images/icon-comment.png")
// iconCmntEl.setAttribute("alt", `Comment icon`);

// const iconDmEl = document.createElement("img");
// iconDmEl.classList.add("comment-icons")
// iconDmEl.setAttribute("src", "images/icon-dm.png")
// iconDmEl.setAttribute("alt", `Direct Message icon`);

// // Add the images to icon section div
// iconSectionEl.append(iconHeartEl, iconCmntEl, iconDmEl);

// // Create 2 p tags with the 2nd p container span 
// const likeSectionEl = document.createElement("p");
// likeSectionEl.classList.add("like-section");
// likeSectionEl.classList.add("bold-text");
// likeSectionEl.textContent = `${posts[0].likes} likes`;

// const cmntEl = document.createElement("p"); 
// cmntEl.classList.add("comment");
// const userNameEl = document.createElement("span");
// userNameEl.classList.add("bold-text")
// userNameEl.setAttribute("id", "user-name")
// userNameEl.textContent = `${posts[0].username}`;
// cmntEl.append(userNameEl);

// cmntSectionEl.append(iconSectionEl, likeSectionEl, cmntEl);
// createSectionEl.append(cmntSectionEl);










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
// What's left: Refactor html to render out all three posts using Js
//              increase the likes when double clicking the img post.

// **** 12/09/2022  **** 
// What I've done: Starting to refactor by create semantic html and elements in JS. 
//                 My plan is to have each post rendered out based on the number of items in each array. 
// Issue's encountered : none, just needed to find pages to learn how to create elements, attribute, etc 
// What's left: Refactor html to render out all three posts using Js
//              increase the likes when double clicking the img post.

// **** 14/09/2022  **** 
// What I've done: So I managed to recreate everything from html to js
//                 My plan is to have each post rendered out based on the number of items in each array. 
// Issue's encountered : none,
// What's left: Refactor html to render out all three posts using Js then use for loop to 
//              dynamically create the posts for each item in array.
//              increase the likes when double clicking the img post.



// **** 16/09/2022  **** 
// What I've done: I managed to recreate everything from html to js by 
//                 creating a for loop containing the html code created inside the section element.
//                 effectively creating three posts.
// Issue's encountered : Since each post is created dynamically how do I add an event listener for each posts
//                       so that when the img is double clicked it'll increase the likes?
// What's left: Add an object stored inside of an array ? that contains the id of each img and each likes
//              Then add event listeners for each image from the array
// Link: https://www.educative.io/answers/how-to-add-an-eventlistener-to-multiple-elements-in-javascript