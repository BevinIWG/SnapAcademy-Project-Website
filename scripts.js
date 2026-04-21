/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// First 30 entries of my dataset
let vgsales = "/games/boxart/full_6510540AmericaFrontccc.jpg,Grand Theft Auto V,PS3,Action,Rockstar Games,Rockstar North,9.4,20.32,6.37,0.99,9.85,3.12,2013-09-17,\n" +
    "/games/boxart/full_5563178AmericaFrontccc.jpg,Grand Theft Auto V,PS4,Action,Rockstar Games,Rockstar North,9.7,19.39,6.06,0.6,9.71,3.02,2014-11-18,2018-01-03\n" +
    "/games/boxart/827563ccc.jpg,Grand Theft Auto: Vice City,PS2,Action,Rockstar Games,Rockstar North,9.6,16.15,8.41,0.47,5.49,1.78,2002-10-28,\n" +
    "/games/boxart/full_9218923AmericaFrontccc.jpg,Grand Theft Auto V,X360,Action,Rockstar Games,Rockstar North,,15.86,9.06,0.06,5.33,1.42,2013-09-17,\n" +
    "/games/boxart/full_4990510AmericaFrontccc.jpg,Call of Duty: Black Ops 3,PS4,Shooter,Activision,Treyarch,8.1,15.09,6.18,0.41,6.05,2.44,2015-11-06,2018-01-14\n" +
    "/games/boxart/full_call-of-duty-modern-warfare-3_517AmericaFront.jpg,Call of Duty: Modern Warfare 3,X360,Shooter,Activision,Infinity Ward,8.7,14.82,9.07,0.13,4.29,1.33,2011-11-08,\n" +
    "/games/boxart/full_call-of-duty-black-ops_5AmericaFront.jpg,Call of Duty: Black Ops,X360,Shooter,Activision,Treyarch,8.8,14.74,9.76,0.11,3.73,1.14,2010-11-09,\n" +
    "/games/boxart/full_4653215AmericaFrontccc.jpg,Red Dead Redemption 2,PS4,Action-Adventure,Rockstar Games,Rockstar Games,9.8,13.94,5.26,0.21,6.21,2.26,2018-10-26,2018-11-02\n" +
    "/games/boxart/full_1977964AmericaFrontccc.jpg,Call of Duty: Black Ops II,X360,Shooter,Activision,Treyarch,8.4,13.86,8.27,0.07,4.32,1.2,2012-11-13,2018-04-07\n" +
    "/games/boxart/full_4649679AmericaFrontccc.png,Call of Duty: Black Ops II,PS3,Shooter,Activision,Treyarch,8,13.8,4.99,0.65,5.88,2.28,2012-11-13,2018-04-07\n" +
    "/games/boxart/full_809251AmericaFrontccc.jpg,Call of Duty: Modern Warfare 2,X360,Shooter,Activision,Infinity Ward,9.5,13.53,8.54,0.08,3.63,1.28,2009-11-10,\n" +
    "/games/boxart/full_4380292AmericaFrontccc.jpg,Call of Duty: WWII,PS4,Shooter,Activision,Sledgehammer Games,8.1,13.4,4.67,0.4,6.21,2.12,2017-11-03,2017-12-31\n" +
    "/games/boxart/full_call-of-duty-modern-warfare-3_278AmericaFront.jpg,Call of Duty: Modern Warfare 3,PS3,Shooter,Activision,Infinity Ward,8.8,13.35,5.54,0.49,5.78,1.54,2011-11-08,\n" +
    "/games/boxart/3570928ccc.jpg,Grand Theft Auto III,PS2,Action,Rockstar Games,DMA Design,9.5,13.1,6.99,0.3,4.51,1.3,2001-10-23,\n" +
    "/games/boxart/full_call-of-duty-black-ops_3AmericaFront.jpg,Call of Duty: Black Ops,PS3,Shooter,Activision,Treyarch,8.7,12.67,6.01,0.48,4.4,1.78,2010-11-09,\n" +
    "/games/boxart/full_5257064AmericaFrontccc.jpg,FIFA 18,PS4,Sports,EA Sports,EA Vancouver,8.3,11.8,1.27,0.15,8.64,1.73,2017-09-29,2018-04-02\n" +
    "/games/boxart/full_1182151AmericaFrontccc.jpg,Grand Theft Auto IV,X360,Action,Rockstar Games,Rockstar North,10,11.09,6.8,0.14,3.11,1.04,2008-04-29,\n" +
    "/games/boxart/full_7661370AmericaFrontccc.jpg,FIFA 17,PS4,Sports,Electronic Arts,EA Canada,8.9,10.94,1.26,0.12,7.95,1.61,2016-09-27,2018-03-28\n" +
    "/games/boxart/full_call-of-duty-modern-warfare-2_1AmericaFront.jpg,Call of Duty: Modern Warfare 2,PS3,Shooter,Activision,Infinity Ward,9.5,10.61,4.99,0.38,3.66,1.59,2009-11-10,\n" +
    "/games/boxart/full_1729769AmericaFrontccc.jpg,Grand Theft Auto IV,PS3,Action,Rockstar Games,Rockstar North,10,10.57,4.79,0.44,3.73,1.62,2008-04-29,\n" +
    "/games/boxart/full_8522439AmericaFrontccc.jpg,Call of Duty: Ghosts,X360,Shooter,Activision,Infinity Ward,6.9,10.41,6.76,0.04,2.64,0.98,2013-11-05,2018-03-21\n" +
    "/games/boxart/full_3698558AmericaFrontccc.jpg,Call of Duty: Ghosts,PS3,Shooter,Activision,Infinity Ward,7.5,10.13,4.11,0.39,4.01,1.62,2013-11-05,2018-03-21\n" +
    "/games/boxart/full_halo-reach_6AmericaFront.jpg,Halo: Reach,X360,Shooter,Microsoft Game Studios,Bungie,9.3,9.97,7.08,0.08,2.01,0.8,2010-09-14,2018-10-11\n" +
    "/games/boxart/full_2236292AmericaFrontccc.png,Halo 4,X360,Shooter,Microsoft Studios,343 Industries,,9.96,6.72,0.04,2.36,0.83,2012-11-06,\n" +
    "/games/boxart/full_4481633AmericaFrontccc.jpg,Call of Duty 4: Modern Warfare,X360,Shooter,Activision,Infinity Ward,9.6,9.41,5.98,0.13,2.39,0.91,2007-11-05,\n" +
    "/games/boxart/full_6532460AmericaFrontccc.jpg,Call of Duty: Black Ops IIII,PS4,Shooter,Activision,Treyarch,,9.32,4.05,0.5,3.28,1.49,2018-10-12,2018-11-07\n" +
    "/games/boxart/full_5970958AmericaFrontccc.jpg,FIFA 19,PS4,Sports,Electronic Arts,EA Sports,,9.15,0.84,0.1,6.87,1.34,2018-09-28,2018-09-12\n" +
    "/games/boxart/full_the-elder-scrolls-v-skyrim_554AmericaFront.jpg,The Elder Scrolls V: Skyrim,X360,Role-Playing,Bethesda Softworks,Bethesda Game Studios,9.3,8.88,5.1,0.1,2.83,0.85,2011-11-11,2018-04-01\n" +
    "/games/boxart/full_8047513AmericaFrontccc.jpg,Grand Theft Auto V,XOne,Action,Rockstar Games,Rockstar North,9,8.72,4.7,0.01,3.25,0.76,2014-11-18,2018-04-11\n" +
    "/games/boxart/full_5706058AmericaFrontccc.jpg,Call of Duty: Infinite Warfare,PS4,Shooter,Activision,Infinity Ward,7.9,8.48,3.11,0.19,3.83,1.36,2016-11-04,2018-01-14"

// Store the raw string file as an array seperated by each line
let dataset = vgsales.split("\n")

// Stores the GameObjs
const games_list = []
//Creates the objects and places them in an array
for (let i = 0; i < 30;++i){
  let row = dataset[i].split(",")
  games_list[i] = new GameObj(row[0],row[1],row[2],row[3],row[4],row[5],parseFloat(row[6]),
      parseFloat(row[7]),parseFloat(row[8]),parseFloat(row[9]),parseFloat(row[10]),parseFloat(row[11]),row[12]);
}


//Ignoring last update data
function GameObj(img = "NaN",title = "NaN",platform = "NaN",genre = "NaN",publisher = "NaN",
                 developer = "NaN",critic_score = 0,total_sale = 0, na_sale = 0,jp_sale = 0,
                 pal_sale = 0,other_sale = 0,release_date = "NaN")
{
  this.img = "https://www.vgchartz.com" + img;
  this.title = title;
  this.platform = platform;
  this.genre = genre;
  this.publisher = publisher;
  this.developer = developer;
  this.critic_score = critic_score;
  this.total = total_sale;
  this.na = na_sale;
  this.jp = jp_sale;
  this.pal = pal_sale;
  this.other = other_sale;
  this.release_date = release_date;
}


// Sorts the number properties of the GameObjs in descending order
function sortBy(value = "critic_score", end = games_list.length){
  function swap(first,second){
    const temp = games_list[first]
    games_list[first] = games_list[second]
    games_list[second] = temp
  }

  //Test before sorting

  // console.table(games_list)
  //
  //
  // console.log("\n")

  for(let i = 0; i < end; ++i){
    if(isNaN(games_list[i][value])){ // Only applies to critic_score
      end--;
      swap(i,end)
      continue
    }
  }

  for(let i = 0; i < end; ++i){
    let min_index = i;
    for(let j = i + 1; j < end; ++j){
       if(games_list[min_index][value] < games_list[j][value]){
         min_index = j
       }
    }
    swap(i,min_index)
  }

  // console.table(games_list)
}

// Only works with string properties of GameObj
function filterBy(property = "platform", name = "PS3"){
  let end = games_list.length;
  let count = 0;
  function swap(first,second){
    if(first != second){
      const temp = games_list[first]
      games_list[first] = games_list[second]
      games_list[second] = temp
    }
  }

  for(let i = 0; i < end; ++i){
    if(games_list[i][property] == name){
      swap(i,count)
      count++;
      continue
    }
  }
  sortBy("total",count)

  return count
}

// Displaying the table
function renderTable(){
  const table = document.getElementById("myTable");
  table.border = "1";

  const headers = Object.keys(games_list[0])
  const headerRow = document.createElement("tr")

  headers.forEach(text =>{
    const th = document.createElement("th");
    th.textContext = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow)

  games_list.forEach(item => {
    const row = document.createElement("tr");
    Object.values(item).forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

}


filterBy("platform", "PS3")



const WII_SPORTS_URL =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (Video Game titles)
let titles = [
  "Wii Sports",
  "Curb Your Enthusiasm",
  "East Los High",
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = WII_SPORTS_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  showCards();
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
