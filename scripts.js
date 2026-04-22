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
    "/games/boxart/3330776ccc.jpg,Tomb Raider II,PS,Adventure,Eidos Interactive,Core Design Ltd.,7.6,5.24,2.3,0.2,2.46,0.28,1997-10-31,\n" +
    "/games/boxart/1473680ccc.jpg,Madden NFL 2004,PS2,Sports,EA Sports,EA Tiburon,9.5,5.23,4.26,0.01,0.26,0.71,2003-08-12,\n" +
    "/games/boxart/full_6401955AmericaFrontccc.jpg,Call of Duty: Advanced Warfare,XOne,Shooter,Activision,Sledgehammer Games,8.3,5.22,3.25,0.01,1.49,0.48,2014-11-04,2018-01-01\n" +
    "/games/boxart/255122ccc.jpg,Medal of Honor: Rising Sun,PS2,Shooter,Electronic Arts,EA Los Angeles,5.9,5.13,1.98,0.13,2.23,0.8,2003-11-11,\n" +
    "/games/boxart/full_601699AmericaFrontccc.png,Battlefield 1,XOne,Shooter,Electronic Arts,EA DICE,9.3,5.13,3.37,0.02,1.26,0.48,2016-10-21,2018-03-24\n" +
    "/games/boxart/2419814ccc.jpg,Microsoft Flight Simulator,PC,Simulation,Microsoft,Microsoft,7,5.12,3.22,,1.69,0.2,1996-10-31,\n" +
    "/games/boxart/full_2486879AmericaFrontccc.jpg,Guitar Hero II,PS2,Misc,RedOctane,Harmonix Music Systems,9.2,5.12,3.81,,0.63,0.68,2006-11-07,\n" +
    "/games/boxart/full_6831972AmericaFrontccc.jpg,FIFA 13,X360,Sports,EA Sports,EA Canada,,5.11,1.1,0.03,3.49,0.5,2012-09-25,2018-04-06\n" +
    "/games/boxart/full_557605AmericaFrontccc.jpg,Mario & Sonic at the Olympic Games,DS,Sports,Sega,Sega,7,5.1,1.63,0.44,2.46,0.57,2008-01-22,\n" +
    "/games/boxart/full_fable-iii_9AmericaFront.jpg,Fable III,X360,Role-Playing,Microsoft Game Studios,Lionhead Studios,7.8,5.1,3.59,0.05,1.09,0.37,2010-10-26,\n" +
    "/games/boxart/full_989928AmericaFrontccc.jpg,Resident Evil 5,PS3,Action,Capcom,Capcom,8.6,5.1,1.96,1.08,1.42,0.64,2009-03-13,\n" +
    "/games/boxart/full_fifa-soccer-11_6AmericaFront.jpg,FIFA Soccer 11,PS3,Sports,EA Sports,EA Canada,8.7,5.08,0.61,0.06,3.28,1.12,2010-09-28,\n" +
    "/games/boxart/full_1162504AmericaFrontccc.jpg,Grand Theft Auto: Vice City Stories,PSP,Action,Rockstar Games,Rockstar Leeds,8.4,5.08,1.7,0.16,2.03,1.19,2006-10-31,\n" +
    "/games/boxart/full_1882754JapanFrontccc.jpg,Final Fantasy XV,PS4,Role-Playing,Square Enix,Square Enix,8.1,5.07,1.81,1.05,1.53,0.68,2016-11-29,2018-05-04\n" +
    "/games/boxart/full_4876777AmericaFrontccc.jpg,Fallout 4,XOne,Role-Playing,Bethesda Softworks,Bethesda Game Studios,8.4,5.03,2.94,0.02,1.62,0.45,2015-11-10,2018-03-24\n" +
    "/games/boxart/full_7000850AmericaFrontccc.jpg,Tony Hawk's Pro Skater,PS,Sports,Activision,Neversoft Entertainment,9.6,5.02,3.42,0.02,1.38,0.2,1999-08-31,\n" +
    "/games/boxart/full_6348663AmericaFrontccc.jpg,Warzone 2100,PS,Strategy,Eidos Interactive,Pumpkin Studios,,5.01,2.79,,1.89,0.33,1999-05-31,\n" +
    "/games/boxart/full_5372169AmericaFrontccc.jpg,Guitar Hero III: Legends of Rock,PS2,Misc,RedOctane,BudCat Creations,8.2,4.98,3.49,0.01,0.01,1.48,2007-10-28,\n" +
    "/games/boxart/full_7863698AmericaFrontccc.jpg,Uncharted: Drake's Fortune,PS3,Action,Sony Computer Entertainment,Naughty Dog,8.7,4.97,2.32,0.12,1.73,0.8,2007-11-16,\n" +
    "/games/boxart/full_6847566AmericaFrontccc.jpg,Fallout 3,X360,Role-Playing,Bethesda Softworks,Bethesda Game Studios,9,4.96,3.41,0.09,0.99,0.46,2008-10-28,\n" +
    "/games/boxart/full_727567AmericaFrontccc.jpg,Madden NFL 06,PS2,Sports,EA Sports,EA Tiburon,9.1,4.91,3.98,0.01,0.26,0.66,2005-08-08,\n" +
    "/games/boxart/full_1714505AmericaFrontccc.jpg,Call of Duty: Black Ops IIII,XOne,Shooter,Activision,Treyarch,,4.85,3.27,,1.12,0.46,2018-10-12,2018-11-07\n" +
    "/games/boxart/full_2363378AmericaFrontccc.jpg,Assassin's Creed,PS3,Action,Ubisoft,Ubisoft Montreal,8.2,4.83,1.91,0.09,2.01,0.82,2007-11-13,\n" +
    "/games/boxart/full_2372411AmericaFrontccc.jpg,Crash Bandicoot N. Sane Trilogy,PS4,Platform,Activision,Vicarious Visions,,4.83,1.09,0.07,2.92,0.74,2017-06-30,2018-09-23\n" +
    "/games/boxart/full_8795174AmericaFrontccc.jpg,Call of Duty: Infinite Warfare,XOne,Shooter,Activision,Infinity Ward,,4.79,2.91,,1.44,0.44,2016-11-04,2018-03-24\n" +
    "/games/boxart/full_1178878AmericaFrontccc.jpg,Crash Team Racing,PS,Racing,Sony Computer Entertainment,Naughty Dog,9.2,4.79,2.57,0.44,1.57,0.21,1999-09-30,\n" +
    "/games/boxart/full_5884504AmericaFrontccc.jpg,LEGO Star Wars: The Complete Saga,DS,Action,LucasArts,Traveller's Tales,7.8,4.77,2.83,,1.49,0.45,2007-11-06,\n" +
    "/games/boxart/full_batman-arkham-city_302AmericaFront.jpg,Batman: Arkham City,X360,Action,Warner Bros. Interactive,Rocksteady Studios,9.5,4.75,2.99,0.04,1.28,0.44,2011-10-18,\n" +
    "/games/boxart/full_6536899AmericaFrontccc.jpg,Driver 2,PS,Action,Atari,Reflections Interactive,7,4.73,2.36,0.02,2.1,0.25,2000-11-13,\n" +
    "/games/boxart/7115362ccc.jpg,The Simpsons: Hit & Run,PS2,Racing,VU Games,Radical Entertainment,7.7,4.7,1.73,,2.19,0.79,2003-09-16,\n" +
    "/games/boxart/1600356ccc.jpg,Tony Hawk's Pro Skater 2,PS,Sports,Activision,Neversoft Entertainment,9.3,4.68,3.05,0.02,1.41,0.2,2000-09-20,\n" +
    "/games/boxart/8307809ccc.jpg,The Lord of the Rings: The Two Towers,PS2,Action,Electronic Arts,Stormfront Studios,8.3,4.67,1.94,0.08,1.95,0.7,2002-10-21,\n" +
    "/games/boxart/8585565ccc.jpg,Tomb Raider,PS,Action,Eidos Interactive,Core Design Ltd.,8.9,4.63,2.29,0.13,1.97,0.24,1996-11-14,\n" +
    "/games/boxart/full_forza-motorsport-4_905AmericaFront.jpg,Forza Motorsport 4,X360,Racing,Microsoft Studios,Turn 10 Studio,9.1,4.6,2.08,0.06,1.98,0.49,2011-10-11,\n" +
    "/games/boxart/full_2081446AmericaFrontccc.jpg,Guitar Hero III: Legends of Rock,Wii,Misc,RedOctane,Vicarious Visions,8.6,4.6,3.04,0,1.12,0.44,2007-10-28,\n" +
    "/games/boxart/full_2431298AmericaFrontccc.jpg,FIFA 15,PS3,Sports,EA Sports,EA Canada,6.9,4.56,0.59,0.04,3.25,0.68,2014-09-23,2018-03-23\n" +
    "/games/boxart/full_1173134AmericaFrontccc.jpg,Mario & Sonic at the Olympic Winter Games,Wii,Sports,Sega,Sega,6.8,4.54,1.87,0.22,1.97,0.48,2009-10-13,\n" +
    "/games/boxart/full_8847041AmericaFrontccc.jpg,Overwatch,PS4,Shooter,Blizzard Entertainment,Blizzard Entertainment,8.8,4.54,1.84,0.17,1.8,0.73,2016-05-24,2018-03-24\n" +
    "/games/boxart/full_3667121PALFrontccc.jpg,Guitar Hero III: Legends of Rock,X360,Misc,RedOctane,Neversoft,8.7,4.53,3.19,0.01,0.91,0.42,2007-10-28,\n" +
    "/games/boxart/full_4032018AmericaFrontccc.jpg,Star Wars Battlefront II (2017),PS4,Shooter,Electronic Arts,EA DICE,,4.53,1.7,0.12,1.99,0.73,2017-11-17,2017-12-29\n" +
    "/games/boxart/4564394ccc.jpg,Madden NFL 2005,PS2,Sports,EA Sports,EA Tiburon,9.5,4.53,4.18,0.01,0.26,0.08,2004-08-09,\n" +
    "/games/boxart/full_9484527AmericaFrontccc.jpg,Spider-Man: The Movie,PS2,Action,Activision,Treyarch,8.2,4.48,2.71,0.03,1.51,0.23,2002-04-15,\n" +
    "/games/boxart/9008679ccc.jpg,The Elder Scrolls IV: Oblivion,X360,Role-Playing,Take-Two Interactive,Bethesda Softworks,9.2,4.47,2.89,0.13,1.03,0.41,2009-07-07,\n" +
    "/games/boxart/7125264ccc.jpg,Tony Hawk's Pro Skater 3,PS2,Sports,Activision,Neversoft Entertainment,9.1,4.41,2.66,0.01,1.29,0.46,2001-10-28,\n" +
    "/games/boxart/full_2440699AmericaFrontccc.jpg,Winning Eleven: Pro Evolution Soccer 2007,PS2,Sports,Konami,Konami Computer Entertainment Tokyo,8.8,4.39,0.1,1.05,2.39,0.86,2007-02-06,\n" +
    "/games/boxart/full_8077647AmericaFrontccc.jpg,Tom Clancy's The Division,PS4,Shooter,Ubisoft,Massive Entertainment,,4.37,1.49,0.16,2.04,0.69,2016-03-08,2018-05-04\n" +
    "/games/boxart/full_137103AmericaFrontccc.jpg,Need for Speed: Most Wanted,PS2,Racing,Electronic Arts,EA Canada,8.6,4.37,2.03,0.08,1.79,0.47,2005-11-15,\n" +
    "/games/boxart/full_michael-jackson-the-experience_693AmericaFront.jpg,Michael Jackson: The Experience,Wii,Misc,Ubisoft,Ubisoft Montpellier,5.6,4.37,2.64,0.01,1.33,0.39,2010-11-23,\n" +
    "/games/boxart/full_2998894AmericaFrontccc.jpg,Tom Clancy's Rainbow Six: Siege,PS4,Shooter,Ubisoft,Ubisoft Montreal,,4.36,1.29,0.36,2.06,0.64,2015-12-01,\n" +
    "/games/boxart/full_4034633AmericaFrontccc.jpg,Call of Duty: Advanced Warfare,X360,Shooter,Activision,High Moon Studios,9.1,4.34,2.81,0,1.13,0.41,2014-11-04,2018-01-04\n" +
    "/games/boxart/full_5952592AmericaFrontccc.jpg,Watch Dogs,PS4,Action-Adventure,Ubisoft,Ubisoft Montreal,,4.32,1.4,0.11,2.13,0.68,2014-05-27,2018-03-15\n" +
    "/games/boxart/8536311ccc.jpg,Asteroids,2600,Shooter,Atari,Atari,,4.31,4,,0.26,0.05,1981-01-01,\n" +
    "/games/boxart/full_8831048AmericaFrontccc.jpg,Batman: Arkham Asylum,PS3,Action,Eidos Interactive,Rocksteady Studios,9,4.28,2.26,0.07,1.33,0.63,2009-08-25,\n" +
    "/games/boxart/full_4650769AmericaFrontccc.jpg,Call of Duty: Advanced Warfare,PS3,Shooter,Activision,High Moon Studios,9.1,4.27,1.59,0.2,1.81,0.67,2014-11-04,2018-01-04\n" +
    "/games/boxart/7930398ccc.jpg,Namco Museum,GBA,Misc,Namco,Mass Media,,4.24,3,0.05,1.11,0.07,2001-06-10,\n" +
    "/games/boxart/full_assassins-creed-revelations_212AmericaFront.jpg,Assassin's Creed: Revelations,PS3,Action,Ubisoft,Ubisoft Montreal,8.8,4.23,1.41,0.1,2.03,0.69,2011-11-15,\n" +
    "/games/boxart/full_assassins-creed-revelations_328AmericaFront.jpg,Assassin's Creed: Revelations,X360,Action,Ubisoft,Ubisoft Montreal,7.9,4.22,2.28,0.04,1.47,0.44,2011-11-15,\n" +
    "/games/boxart/6864151ccc.jpg,FIFA Soccer 06,PS2,Sports,EA Sports,EA Canada,8.4,4.21,0.78,0.04,2.55,0.84,2005-10-04,\n" +
    "/games/boxart/full_4144122AmericaFrontccc.jpg,Street Fighter IV,PS3,Fighting,Capcom,Capcom / Dimps Corporation,9.3,4.19,2.04,0.59,1.05,0.52,2009-02-17,\n" +
    "/games/boxart/full_fifa-soccer-12_845AmericaFront.jpg,FIFA Soccer 12,X360,Sports,EA Sports,EA Canada,9.2,4.18,0.85,0.02,2.79,0.52,2011-09-27,\n" +
    "/games/boxart/full_9732403AmericaFrontccc.jpg,Call of Duty: Ghosts,PS4,Shooter,Activision,Infinity Ward,7.5,4.17,1.79,0.05,1.64,0.69,2013-11-15,2018-03-21\n" +
    "/games/boxart/8290971ccc.jpg,Teenage Mutant Ninja Turtles,NES,Platform,Ultra Games,Konami,5.9,4.17,3.38,0.31,0.44,0.04,1989-06-01,\n" +
    "/games/boxart/full_8811836AmericaFrontccc.jpg,Frogger,PS,Action,Hasbro Interactive,Millenium Interactive,,4.16,3.79,,0.27,0.11,1997-09-30,\n" +
    "/games/boxart/full_6590731AmericaFrontccc.jpg,FIFA 14,X360,Sports,EA Sports,EA Canada,,4.15,0.94,0.01,2.92,0.29,2013-09-24,2018-09-15\n" +
    "/games/boxart/full_8451662AmericaFrontccc.jpg,Star Wars Battlefront (2015),XOne,Shooter,Electronic Arts,EA DICE,6.9,4.15,2.49,0.02,1.26,0.38,2015-11-17,2018-03-24\n" +
    "/games/boxart/32121ccc.jpg,Madden NFL 2003,PS2,Sports,EA Sports,EA Tiburon,9.4,4.14,3.36,0.01,0.21,0.56,2002-08-12,\n" +
    "/games/boxart/full_9858108AmericaFrontccc.jpg,Assassin's Creed: Unity,PS4,Action,Ubisoft,Ubisoft Montreal,,4.14,1.25,0.09,2.16,0.65,2014-11-11,2018-05-04\n" +
    "/games/boxart/full_9963001AmericaFrontccc.jpg,Destiny 2,PS4,Shooter,Activision,Bungie,,4.14,1.92,0.1,1.44,0.69,2017-09-06,2018-04-20\n" +
    "/games/boxart/8249133ccc.jpg,FIFA 07 Soccer,PS2,Sports,EA Sports,Team Fusion,8.4,4.11,0.71,0.03,2.48,0.89,2006-10-03,\n" +
    "/games/boxart/full_2497280AmericaFrontccc.jpg,Batman: Arkham Knight,PS4,Action,Warner Bros. Interactive,Rocksteady Studios,8.1,4.11,1.65,0.11,1.68,0.66,2015-06-23,2018-01-04\n" +
    "/games/boxart/full_3447327AmericaFrontccc.jpg,The Sims 4,PC,Simulation,Electronic Arts,Maxis,7,4.1,1.2,,2.6,0.3,2014-09-02,2017-12-29\n" +
    "/games/boxart/full_fallout-new-vegas_2AmericaFront.jpg,Fallout: New Vegas,X360,Role-Playing,Bethesda Softworks,Obsidian Entertainment,8.2,4.08,2.67,0.04,1.03,0.34,2010-10-19,\n" +
    "/games/boxart/full_5471499AmericaFrontccc.jpg,Carnival Games,Wii,Misc,Global Star Software,Cat Daddy Games,4.2,4.06,2.12,0.05,1.47,0.42,2007-08-28,\n" +
    "/games/boxart/full_914135AmericaFrontccc.jpg,Far Cry 4,PS4,Shooter,Ubisoft,Ubisoft Montreal,8.4,4.06,1.18,0.11,2.14,0.63,2014-11-18,2018-01-23\n" +
    "/games/boxart/full_9947060AmericaFrontccc.jpg,Assassin's Creed Origins,PS4,Action,Ubisoft,Ubisoft Montreal,,4.06,1.22,0.11,2.11,0.63,2017-10-27,2018-01-10\n" +
    "/games/boxart/6643842ccc.jpg,World Soccer Winning Eleven 9,PS2,Sports,Konami,Konami Computer Entertainment Tokyo,8.9,4.06,0.12,0.9,2.26,0.77,2006-02-07,"

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
for (let i = 0; i < dataset.length ;++i){
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

  for(let i = 0; i < end; ++i){
    if(isNaN(games_list[i][value])){ // Only applies to critic_score
      end--;
      swap(i,end)
      continue
    }
  }
  if(value == "title" || value == "platform" || value == "genre" || value == "publisher" || value == "developer"){
    for(let i = 0; i < end; ++i){
      let min_index = i;
      for(let j = i + 1; j < end; ++j){
        if(games_list[min_index][value] > games_list[j][value]){
          min_index = j
        }
      }
      swap(i,min_index)
    }
  }
  else{
    for(let i = 0; i < end; ++i){
      let min_index = i;
      for(let j = i + 1; j < end; ++j){
        if(games_list[min_index][value] < games_list[j][value]){
          min_index = j
        }
      }
      swap(i,min_index)
    }
  }

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
  table.innerHTML = ""
  table.border = "1";

  const headers = Object.keys(games_list[0])
  const headerRow = document.createElement("tr")

  // Header
  for(let i = 0; i < 13; ++i){
    if(table_prop[headers[i]]){
      const th = document.createElement("th");
      th.textContent = headers[i].toUpperCase().replace("_", " ");
      headerRow.appendChild(th);
    }
  }
  table.appendChild(headerRow);

  // Table Data
  for(let i = 0; i < 10; ++i){
    const row = document.createElement("tr");
    const img = document.createElement("img");
    img.src = games_list[i].img;
    img.width = 170; // Optional sizing
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





// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(category = "Critic Score") {
  document.querySelector("#featured").textContent = "Top 3 Games By " + category;
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

}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  sortBy();
  renderTable();
  showCards();
});


