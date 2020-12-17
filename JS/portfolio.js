let today = new Date();
let hourNow = today.getHours();
let greeting;

if(hourNow > 17) {
    greeting = '<div class="words"><div class="greet">Good Evening, I\'m Christopher Lynch</div> <br /> <div class="an">I\'m a Front-End Developer</div></div>';
} else if(hourNow > 11) {
    greeting = '<div class="words"><div class="greet">Good Afternoon, I\'m Christopher Lynch</div> <br /> <div class="an">I\'m a Front-End Developer</div></div>';
} else if(hourNow >= 0) {
    greeting = '<div class="words"><div class="greet">Good Morning, I\'m Christopher Lynch</div> <br /> <div class="an">I\'m a Front-End Developer</div></div>';
} else {
    greeting = '<div class="words"><div class="greet">Hello, I\'m Christopher Lynch</div> <br /> <div class="an">I\'m a Front-End Developer</div></div>';
}

document.write ('<h3>' + greeting + '</h3>'); 