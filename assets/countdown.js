let countDown = chrono.parseDate(prompt("Enter a countdown duration. (uses natural language parsing)","5 minute"));

document.addEventListener("DOMContentLoaded", function(event) { 
     
let formatString = document.getElementById('timer').innerText;

setInterval(function() {    

      // Make a fuzzy time
      let delta = Math.round((countDown - (new Date())) / 1000);

      let text;
      if (delta < 0) {
            text = "Starting soon";
      } else {
            const second = 1,
                  minute = second * 60,
                  hour = minute * 60;

            const htime = Math.floor(delta / (hour)),
            mtime =  Math.floor((delta % (hour)) / (minute)),
            stime =  Math.floor((delta % minute) / second);
            if (htime > 0) {
            text = htime.toString().padStart(2,'0') + ":" + mtime.toString().padStart(2,'0') + ":" + stime.toString().padStart(2,'0');            
            } else {
                  text = mtime.toString().padStart(2,'0') + ":" + stime.toString().padStart(2,'0');
            }
      }
      document.getElementById("timer").innerText = text;
},1000);
});