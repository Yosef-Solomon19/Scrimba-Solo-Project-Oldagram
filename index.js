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
const containerEl = document.getElementById("img-post");
const imgEl = document.createElement("img"); 
imgEl.setAttribute("src", posts[0].post);
imgEl.setAttribute("alt", `Self-portrait of ${posts[0].name}`)
containerEl.append(imgEl);

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