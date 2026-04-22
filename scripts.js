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
    "/games/boxart/full_5706058AmericaFrontccc.jpg,Call of Duty: Infinite Warfare,PS4,Shooter,Activision,Infinity Ward,7.9,8.48,3.11,0.19,3.83,1.36,2016-11-04,2018-01-14\n" +
    "/games/boxart/full_2507140AmericaFrontccc.jpg,Fallout 4,PS4,Role-Playing,Bethesda Softworks,Bethesda Game Studios,8.6,8.48,2.91,0.27,3.97,1.34,2015-11-10,2018-03-24\n" +
    "/games/boxart/full_862315AmericaFrontccc.jpg,FIFA 16,PS4,Sports,EA Sports,EA Canada,8.5,8.22,1.15,0.07,5.77,1.23,2015-09-22,2018-04-01\n" +
    "/games/boxart/full_4873252AmericaFrontccc.jpg,Star Wars Battlefront (2015),PS4,Shooter,Electronic Arts,EA DICE,7.1,8.03,3.31,0.23,3.19,1.3,2015-11-17,2018-03-24\n" +
    "/games/boxart/full_5731689AmericaFrontccc.jpg,FIFA 13,PS3,Sports,EA Sports,EA Canada,,8.01,1.07,0.13,5.13,1.68,2012-09-25,2018-04-06\n" +
    "/games/boxart/full_7487992AmericaFrontccc.jpg,The Sims 3,PC,Simulation,Electronic Arts,EA Redwood Shores,8.5,7.96,1.01,,6.46,0.5,2009-06-02,\n" +
    "/games/boxart/1340019ccc.jpg,Grand Theft Auto: Liberty City Stories,PSP,Action,Rockstar Games,Rockstar Leeds,8.8,7.72,2.9,0.24,2.83,1.74,2005-10-25,\n" +
    "/games/boxart/full_514368AmericaFrontccc.jpg,Call of Duty: Advanced Warfare,PS4,Shooter,Activision,Sledgehammer Games,8.5,7.53,2.84,0.14,3.34,1.22,2014-11-04,2018-01-04\n" +
    "/games/boxart/full_3557116AmericaFrontccc.jpg,Call of Duty: World at War,X360,Shooter,Activision,Treyarch,8.5,7.5,4.88,,1.91,0.71,2008-11-10,\n" +
    "/games/boxart/full_8414457AmericaFrontccc.jpg,Call of Duty: Black Ops 3,XOne,Shooter,Activision,Treyarch,,7.37,4.63,0.02,2.04,0.68,2015-11-06,2018-01-14\n" +
    "/games/boxart/full_battlefield-3_439AmericaFront.jpg,Battlefield 3,X360,Shooter,Electronic Arts,Dice,8.5,7.35,4.47,0.06,2.12,0.69,2011-10-25,\n" +
    "/games/boxart/full_9032449AmericaFrontccc.png,Battlefield 1,PS4,Shooter,Electronic Arts,EA DICE,9.1,7.26,2.2,0.29,3.65,1.12,2016-10-21,2018-03-24\n" +
    "/games/boxart/full_battlefield-3_278AmericaFront.jpg,Battlefield 3,PS3,Shooter,Electronic Arts,Dice,8.5,7.21,2.86,0.35,2.94,1.07,2011-10-25,\n" +
    "/games/boxart/9040231ccc.jpg,Need for Speed Underground,PS2,Racing,Electronic Arts,EA Black Box,8.6,7.2,3.27,0.08,2.83,1.02,2003-11-17,\n" +
    "/games/boxart/full_868897AmericaFrontccc.jpg,Need for Speed Underground 2,PS2,Racing,Electronic Arts,EA Black Box,8.3,6.9,2.71,0.08,3.02,1.09,2004-11-15,\n" +
    "/games/boxart/full_9463304AmericaFrontccc.jpg,Just Dance 4,Wii,Music,Ubisoft,Ubisoft,,6.89,4.05,,2.21,0.62,2012-10-09,2018-01-31\n" +
    "/games/boxart/7583871ccc.jpg,Medal of Honor: Frontline,PS2,Shooter,Electronic Arts,EA Los Angeles,9,6.83,2.93,0.17,2.75,0.99,2002-05-28,\n" +
    "/games/boxart/full_2350454AmericaFrontccc.jpg,Uncharted 2: Among Thieves,PS3,Action,Sony Computer Entertainment,Naughty Dog,9.5,6.74,3.28,0.21,2.22,1.02,2009-10-13,\n" +
    "/games/boxart/full_75346AmericaFrontccc.jpg,Call of Duty 4: Modern Warfare,PS3,Shooter,Activision,Infinity Ward,9.5,6.72,3.13,0.28,2.27,1.04,2007-11-05,\n" +
    "/games/boxart/full_fifa-soccer-12_475AmericaFront.jpg,FIFA Soccer 12,PS3,Sports,EA Sports,EA Canada,9.2,6.65,0.84,0.11,4.33,1.37,2011-09-27,\n" +
    "/games/boxart/full_6002851AmericaFrontccc.jpeg,FIFA 14,PS3,Sports,EA Sports,EA Canada,,6.61,0.79,0.07,4.77,0.98,2013-09-24,2018-09-15\n" +
    "/games/boxart/full_7375558AmericaFrontccc.jpg,Red Dead Redemption,PS3,Action,Rockstar Games,Rockstar San Diego,9.5,6.57,2.82,0.17,2.58,1,2011-10-11,\n" +
    "/games/boxart/full_2634795AmericaFrontccc.jpg,Red Dead Redemption,X360,Action,Rockstar Games,Rockstar San Diego,9.5,6.5,3.77,0.09,2.03,0.6,2010-05-18,\n" +
    "/games/boxart/full_7776699AmericaFrontccc.jpeg,Assassin's Creed III,PS3,Action-Adventure,Ubisoft,Ubisoft Montreal,8.8,6.5,2.65,0.16,2.61,1.08,2012-10-30,2018-04-12\n" +
    "/games/boxart/full_the-elder-scrolls-v-skyrim_425AmericaFront.jpg,The Elder Scrolls V: Skyrim,PS3,Role-Playing,Bethesda Softworks,Bethesda Game Studios,9,6.49,2.57,0.25,2.68,0.99,2011-11-11,2018-04-01\n" +
    "/games/boxart/full_6776646AmericaFrontccc.jpg,Minecraft,PS4,Misc,Sony Computer Entertainment,Mojang,9.4,6.33,1.89,0.35,3.13,0.96,2014-10-07,2018-09-14\n" +
    "/games/boxart/full_189344AmericaFrontccc.jpg,FIFA 15,PS4,Sports,EA Sports,EA Canada,8.1,6.32,0.83,0.05,4.49,0.94,2014-09-23,2018-03-23\n" +
    "/games/boxart/7411582ccc.jpg,Driver,PS,Action,GT Interactive,Reflections Interactive,8.5,6.27,3.11,0.02,2.8,0.33,1999-06-30,\n" +
    "/games/boxart/full_9289123AmericaFrontccc.jpg,Call of Duty: WWII,XOne,Shooter,Activision,Sledgehammer Games,,6.23,3.75,,1.91,0.57,2017-11-03,2017-12-30\n" +
    "/games/boxart/full_6168598AmericaFrontccc.jpg,Minecraft,PS3,Misc,Sony Computer Entertainment America,Mojang,,6.05,2.21,,2.86,0.99,2014-05-16,2018-08-05\n" +
    "/games/boxart/full_1425733AmericaFrontccc.jpg,Red Dead Redemption 2,XOne,Action-Adventure,Rockstar Games,Rockstar Games,,5.77,3.76,,1.47,0.54,2018-10-26,2018-11-02\n" +
    "/games/boxart/full_6703728AmericaFrontccc.jpg,Destiny,PS4,Shooter,Activision,Bungie,,5.76,2.53,0.16,2.13,0.94,2014-09-09,2018-01-12\n" +
    "/games/boxart/full_tekken-2_616AmericaFront.jpg,Tekken 2,PS,Fighting,Namco,Namco,9.1,5.74,2.26,1.36,1.89,0.23,1996-08-25,\n" +
    "/games/boxart/full_2958031AmericaFrontccc.jpg,LEGO Star Wars: The Complete Saga,Wii,Action,LucasArts,Traveller's Tales,8,5.66,3.57,,1.57,0.52,2007-11-06,\n" +
    "/games/boxart/full_4805635AmericaFrontccc.jpg,Cooking Mama,DS,Simulation,Majesco,Office Create,6.6,5.66,3.09,0.07,1.92,0.58,2006-09-12,\n" +
    "/games/boxart/full_5252150AmericaFrontccc.jpg,Assassin's Creed II,PS3,Action,Ubisoft,Ubisoft Montreal,9,5.57,2.54,0.21,1.95,0.86,2009-11-17,2018-01-03\n" +
    "/games/boxart/full_7562642AmericaFrontccc.jpg,Assassin's Creed,X360,Action,Ubisoft,Ubisoft Montreal,8.2,5.55,3.28,0.07,1.64,0.56,2007-11-13,\n" +
    "/games/boxart/full_batman-arkham-city_591AmericaFront.jpg,Batman: Arkham City,PS3,Action,Warner Bros. Interactive,Rocksteady Studios,9.6,5.54,2.72,0.11,1.89,0.82,2011-10-18,\n" +
    "/games/boxart/full_forza-motorsport-3_9AmericaFront.jpg,Forza Motorsport 3,X360,Racing,Microsoft Game Studios,Turn 10 Studios,9.2,5.5,2.99,0.1,1.9,0.51,2009-10-27,\n" +
    "/games/boxart/full_4070815AmericaFrontccc.jpg,Call of Duty: World at War,PS3,Shooter,Activision,Treyarch,8.4,5.43,2.75,,1.84,0.84,2008-11-10,\n" +
    "/games/boxart/full_6418584AmericaFrontccc.jpg,Minecraft,XOne,Misc,Microsoft Studios,Mojang,,5.43,3.23,,1.71,0.49,2014-11-18,2018-09-14\n" +
    "/games/boxart/9261584ccc.jpg,Crash Bandicoot: The Wrath of Cortex,PS2,Platform,Universal Interactive,Traveller's Tales,6.9,5.42,2.07,0.24,2.29,0.82,2001-10-29,\n" +
    "/games/boxart/full_282357AmericaFrontccc.jpg,Final Fantasy XIII,PS3,Role-Playing,Square Enix,Square Enix,8,5.35,1.75,1.87,1.23,0.51,2010-03-09,\n" +
    "/games/boxart/full_7723506AmericaFrontccc.jpg,Assassin's Creed III,X360,Action-Adventure,Ubisoft,Ubisoft Montreal,,5.31,3.13,0.03,1.71,0.45,2012-10-30,2018-02-07\n" +
    "/games/boxart/full_8353337AmericaFrontccc.jpg,Assassin's Creed II,X360,Action,Ubisoft,Ubisoft Montreal,9.1,5.3,3.14,0.08,1.55,0.52,2009-11-17,\n" +
    "/games/boxart/3330776ccc.jpg,Tomb Raider II,PS,Adventure,Eidos Interactive,Core Design Ltd.,7.6,5.24,2.3,0.2,2.46,0.28,1997-10-31,"

// Store the raw string file as an array seperated by each line
let dataset = vgsales.split("\n")

// Stores the GameObjs
const games_list = []
// Used for determining which data is added and displayed in the table
const table_prop = {
  img:true,
  title:true,
  platform:true,
  genre:true,
  publisher:true,
  developer:true,
  critic_score:true,
  total:true,
  na:true,
  jp:true,
  pal:true,
  other:true,
  release_date:true,
}


//Creates the objects and places them in an array
for (let i = 0; i < 75;++i){
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

  // Header
  for(let i = 0; i < 13; ++i){
    if(table_prop[headers[i]]){
      const th = document.createElement("th");
      th.textContent = headers[i].toUpperCase();
      headerRow.appendChild(th);
    }
  }
  table.appendChild(headerRow);

  // Table Data
  for(let i = 0; i < 10; ++i){
    const row = document.createElement("tr");
    const img = document.createElement("img");
    img.src = games_list[i].img;
    img.width = 200; // Optional sizing
    row.appendChild(img);
    for(let j = 1; j < 13; ++j){
      if(table_prop[headers[j]]){
        const cell = document.createElement("td");
        cell.textContent = games_list[i][headers[j]];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }
  table.classList.add("data-table");
}


filterBy("platform", "PS3")







// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < 3; i++) {
    let title = games_list[i].title;

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = games_list[0].img;
    } else if (i == 1) {
      imageURL = games_list[1].img;
    } else if (i == 2) {
      imageURL = games_list[2].img;
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
