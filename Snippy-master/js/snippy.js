var count = 0;
var themes = ["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/codepen-embed.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/googlecode.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/gml.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/gradient-dark.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/docco.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/felipec.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/foundation.min.css",
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github-dark-dimmed.min.css",
	
	
	"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/gradient-light.min.css"
]


theme1=()=>{document.getElementById("theme").setAttribute("href", themes[0]); console.log("theme applied!")}
theme2=()=>{document.getElementById("theme").setAttribute("href", themes[1])}
theme3=()=>{document.getElementById("theme").setAttribute("href", themes[2])}
theme4=()=>{document.getElementById("theme").setAttribute("href", themes[3])}
theme5=()=>{document.getElementById("theme").setAttribute("href", themes[4])}


var box = document.getElementById("capture");
var bgColor = document.getElementById("backgroundColor");
bgColor.value = "#ffffff";
box.style.background= bgColor.value;


function recolor(){
	box.style.background= bgColor.value;
}

var imageBox = document.getElementById("image");
var linker = document.getElementById("link");

imageBox.style.display = "none";


// let beautify;

function save(){
	
html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas).setAttribute("id", "canvas");
	 var canvas = document.getElementById("canvas");
		var dataURL = canvas.toDataURL();
console.log(dataURL);
imageBox.src = dataURL;

	linker.setAttribute("href", imageBox.src);
});
console.log("image saved!")
}

document.querySelectorAll('div.code').forEach((el) => {
    hljs.highlightElement(el);
  });

function beautify(){
console.log("colors applied!")
  document.querySelectorAll('div.code').forEach((el) => {
    hljs.highlightElement(el);
  });

  save();
//   document.querySelectorAll('p.code').forEach(el => {
//   // then highlight each
//   hljs.highlightElement(el);
// })

};


var saveBtn = document.getElementById("saveBtn");
var timer = 3;


// saveBtn.onclick = function(){
// 	save();
// 	if(timer > 0){
// 	setTimeout(function(){timer-=1;
// 		saveBtn.innerHTML = timer;
// 	if(timer == 0){
// 		saveBtn.innerHTML = "<a id='link' download='code'>PNG</a>";
// 		}
// },1000);
	
// }

// };
