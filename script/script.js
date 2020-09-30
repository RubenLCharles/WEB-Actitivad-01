
function toggleEdu() {
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
        exp.style.display = "none";
        edu.style.display = "block";  
}

function toggleExp() {
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
        exp.style.display = "block";
        edu.style.display = "none";  
}


function main(){
    var aEdu = document.getElementById("aEdu");
    var aExp = document.getElementById("aExp");

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

    var skills = new Vue({
        el: '#skills',
        data: {
          items: [
            { mensaje: 'HTML/CSS' },
            { mensaje: 'JavaScript' },
            { mensaje: 'BootStrap'},
            { mensaje: 'C++'},
            { mensaje: 'Switf'},
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
}



