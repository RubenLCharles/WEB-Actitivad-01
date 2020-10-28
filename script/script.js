
function toggleEdu() {
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
    var about = document.getElementById("aboutme"); 
        exp.style.display = "none";
        edu.style.display = "block";
        about.style.display = "none";
}

function toggleExp() {
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
    var about = document.getElementById("aboutme");
        exp.style.display = "block";
        edu.style.display = "none";  
        about.style.display = "none";
}

function toggleAbout() {
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
    var about = document.getElementById("aboutme");
        exp.style.display = "none";
        edu.style.display = "none";  
        about.style.display = "block";
}


function main(){

    
    var aEdu = document.getElementById("aEdu");
    var aExp = document.getElementById("aExp");
    var aBout = document.getElementById("aBout");

    aEdu.addEventListener(
        "click",
        function() { 
            toggleEdu();
        },
        false
    );

    aExp.addEventListener (
        "click",
        function() { 
            toggleExp();
        },
        false
    );

    aBout.addEventListener (
        "click",
        function(){
            toggleAbout();
        },
        false
    );



    var skills = new Vue({
        el: '#skills',
        data: {
          items: [
            { mensaje: 'HTML/CSS' },
            { mensaje: 'JavaScript' },
            { mensaje: 'BootStrap'},
            { mensaje: 'C++'},
            { mensaje: 'Swift'},
            { mensaje: 'C#'}
          ]
        }
      })

    var tools = new Vue({
        el: "#tools",
        data: {
            items: [
                { mensaje: "GitHub" },
                { mensaje: "Visual Studio" },
                { mensaje: "Adobe Photoshop" },
                { mensaje: "Adobe Illustrator" },
                { mensaje: "SAP"}
            ]
        }
    })

    var languages = new Vue({
        el: "#lang",
        data: {
            items: [
                { mensaje: "Spanish" },
                { mensaje: "English" }
            ]
        }
    })

    var likes = new Vue({
        el: '#likes',
        data: {
          items: [
            { mensaje: 'VideoGames' },
            { mensaje: 'Making Music' },
            { mensaje: 'Producing Videos'},
            { mensaje: 'Twitch Streaming'}
          ]
        }
      })
}



