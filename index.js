let display = true;

const printSentence = (id, sentence, speed = 10, callback) => {
  let index = 0;
  let element = document.getElementById(id);
  
  let timer = setInterval(function() {
    const char = sentence[index];
    
    if (char === '<') {
      index = sentence.indexOf('>', index);  // skip to greater-than
    }
    
    element.innerHTML = sentence.slice(0, index);
    
    if (++index === sentence.length) {
      clearInterval(timer);
      callback();
    }
  }, speed);

} // printSentence


printSentence(
  'console',
  `<pre>
   <span id="user">kavinarasu</span>:<span id="tilde">~</span><span id="dollar">$</span> cd kavinarasu/About <br>
   <span id="user">kavinarasu</span>:<span id="tilde">~</span><span id="dollar">$</span> cat kavinarasu.txt<br/>

   Greetings, I am Kavin Arasu.
 
   I am pursuing my masters in Advanced Computer Science at University of Leicester.

   I am currently looking for a Machine Learning Engineer role in the UK. You can find my resume here : <a href="https://docs.google.com/document/d/1jiXQDHhwlsimLcdx-Ub1hFvKFEzok_0C/edit?usp=sharing&ouid=102898354755315898172&rtpof=true&sd=true" target="_blank">Resume</a>.

   You can also take a look at my <a href="https://github.com/MocktaiLEngineer" target="_blank">Projects</a>.

   You can reach out to me on <a href="https://www.linkedin.com/in/iamkavin/" target="_blank">LinkedIn</a> or you can contact me at my <a href="mailto:kavinarasu22@gmail.com" target="_blank">Email</a>.

   Cheers! <br>

   <span id="user">kavinarasu</span>:<span id="tilde">~</span><span id="dollar">$</span><span id="userInput"></span>
   </pre>`,
  10,
  userInput
);


function userInput(){
	let blinkingCursor = setInterval(() => { 
	document.getElementById("userInput").innerHTML = display ? "|" : '';
	display = !display; 
	}, 700);

	// window.addEventListener("keydown",event => {
	// 	clearInterval(blinkingCursor);
	// 	if (document.getElementById("userInput").innerHTML === "|")
	// 		document.getElementById("userInput").innerHTML = "";
	// }) 
}

// window.addEventListener("keydown", event => {
// 		if ((event.keyCode > 64 && event.keyCode < 91 ) || (event.keyCode > 96 && event.keyCode < 123))
// 			document.getElementById("userInput").textContent += `${event.key}`;

// 		if (event.keyCode = 13)
// 		{
// 			var validUserInputs = ["help"]
// 			var input = document.getElementById("userInput").textContent;

// 			if validUserInputs.includes(input)
// 			{
				
// 			}
// 		}

// })

