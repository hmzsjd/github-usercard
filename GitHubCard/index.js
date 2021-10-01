// commit comment



/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
  
*/

import axios from 'axios';

const cardSection = document.querySelector(".cards");
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" , "BrityHemming", "crharding", "zoelud"];


for(let i = 0; i < followersArray.length; i++) {

  axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then(resp => {
    cardSection.appendChild(cardCreator(resp.data));
  }).catch(err => {
    console.error(err);
  });

}





/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator(gitData) {

  const cardDiv = document.createElement("div");
  const userImg = document.createElement("img");
  const infoDiv = document.createElement("div");
  const nameH3 = document.createElement("h3");
  const userP = document.createElement("p");
  const locP = document.createElement("p");
  const profileP = document.createElement("p");
  const gitLink = document.createElement("a");
  const followersP = document.createElement("p");
  const followingP = document.createElement("p");
  const bioP = document.createElement("p");

  cardDiv.classList.add("card");
  infoDiv.classList.add("card-info");
  nameH3.classList.add("name");
  userP.classList.add("username");

  userImg.src = gitData.avatar_url;
  nameH3.textContent = gitData.name;
  userP.textContent = gitData.login;
  locP.textContent = "Location: "+ gitData.location;
  profileP.textContent = "Profile: ";
  gitLink.href = gitData.html_url;
  gitLink.textContent = gitData.html_url;
  
  followersP.textContent = "Followers: " + gitData.followers;
  followingP.textContent = "Following: " + gitData.following;
  bioP.textContent = "Bio: " + gitData.bio;


  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(nameH3);
  infoDiv.appendChild(userP);
  infoDiv.appendChild(locP);
  infoDiv.appendChild(profileP);
  profileP.appendChild(gitLink);
  infoDiv.appendChild(followersP);
  infoDiv.appendChild(followingP);
  infoDiv.appendChild(bioP);

  




  return cardDiv;
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
