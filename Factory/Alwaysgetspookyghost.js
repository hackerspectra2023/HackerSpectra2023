// Blooket-Hacks  -  @ 2022 CrazyH & cph101

if (console_msg("Always Get Spooky Ghost")) {
 setInterval(function() {
try {
   var obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.choices[0];
   obj.name = "Spooky Ghost";
   obj.time = [
     1, 1 , 1 , 1 , 1];
   obj.cash = [100000000000000000e100000000, 100000000000000000e100000000, 100000000000000000e100000000, 100000000000000000e100000000, 100000000000000000e100000000];
   obj.price = [0,0,0,0
   ]
   obj.class = "👻";
   obj.rarity = "Impossible";
   obj.level = 4;
   obj.bonus = 1.65
} catch(error) {
    // #nooneasked console
}
 });
 document.head.innerHTML += `<style> .styles__factoryBar___dHE0M-camelCase {
background-color: rgb(102, 245, 145) !important;
} </style>`;
}

// Console Message Code
function console_msg(file, state) {
   if (!state) {
       if (window.location.href.indexOf("blooket.com") > -1 && window.location.host !== "www.blooket.com" && window.location.host !== "id.blooket.com") {
           console_msg(file, true);
           return true;
       } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
           console_msg(file, "Please run this hack on the dashboard or in a game");
           return;
       } else {
           console_msg(file, "Please run this hack on blooket");
           return;
       }
   } else {
       console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
       var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c📁 Loaded: '+file+'.js\n', style );
       console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
       var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
       var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
       console.info('%c⭐️ Please star our Github repo', style );
       if (state === true) {
           var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c✅ Hack Successfully Enabled', style );
       } else {
           var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
           console.info('%c❌ Failed To Enable Hack', style );
       }
       console.groupEnd(); // Close Console Group
       if (state != true) alert(state);
}};
