function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vmSGK9hFtL":
        Script1();
        break;
      case "5amC4O5DHjX":
        Script2();
        break;
      case "5yhTgKUWlhB":
        Script3();
        break;
      case "60d7CLhqltu":
        Script4();
        break;
      case "5voYwrkliQy":
        Script5();
        break;
      case "6OKVqHvDbHd":
        Script6();
        break;
      case "6F5reu2JJAN":
        Script7();
        break;
      case "6CVD4FtO0eJ":
        Script8();
        break;
      case "6dmOmt0bKdn":
        Script9();
        break;
      case "6iOy4CirDre":
        Script10();
        break;
      case "5tCegk53FYq":
        Script11();
        break;
      case "5oxElbhg3Mu":
        Script12();
        break;
      case "6IrBrevkk52":
        Script13();
        break;
      case "6N1yEGJiSBE":
        Script14();
        break;
      case "6CD8jP0kwUR":
        Script15();
        break;
      case "6fjKVcBf44H":
        Script16();
        break;
      case "6XoNmPwgorp":
        Script17();
        break;
      case "5WSW0CFKM7D":
        Script18();
        break;
      case "6Tek9gUz8eq":
        Script19();
        break;
      case "6LK8cnFGp4H":
        Script20();
        break;
      case "5irqgg8IceS":
        Script21();
        break;
      case "6lViCSIZIe7":
        Script22();
        break;
      case "5dKFtW5CcHu":
        Script23();
        break;
      case "6rghVDduE8B":
        Script24();
        break;
      case "6Cl4SHm9Z1w":
        Script25();
        break;
      case "5g24hiPgRCB":
        Script26();
        break;
      case "61b8LxKiPq3":
        Script27();
        break;
      case "5iiJrexxuvM":
        Script28();
        break;
      case "6O9PG19jaQF":
        Script29();
        break;
      case "6QE0hSDxBfJ":
        Script30();
        break;
      case "5rVWjB9EzsM":
        Script31();
        break;
      case "6UQOEXdsBhV":
        Script32();
        break;
      case "5v6xzMrP1U9":
        Script33();
        break;
      case "6AhJVhwScxC":
        Script34();
        break;
      case "6l27x6Gi9wS":
        Script35();
        break;
      case "6EDy9UFbHXS":
        Script36();
        break;
      case "6gpqqiCJUXq":
        Script37();
        break;
      case "63MJe2jDKGA":
        Script38();
        break;
      case "5gNsnohucGd":
        Script39();
        break;
      case "5rbc3gKBQl6":
        Script40();
        break;
      case "5kpLnDfSIFJ":
        Script41();
        break;
      case "6Cmcs1Ao6nw":
        Script42();
        break;
      case "5tf9F9rT7OI":
        Script43();
        break;
      case "6Aw8N8xkiZ8":
        Script44();
        break;
      case "5xkZbN6bs60":
        Script45();
        break;
      case "67O9jYi8w4M":
        Script46();
        break;
  }
}

function Script1()
{
  // Name of the certificate html file
var certFilename = 'start-button.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script2()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script3()
{
  var input_state = 0.5;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script4()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script5()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script6()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script7()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script8()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script9()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script10()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script11()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script12()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script13()
{
  var object = document.querySelectorAll("[data-acc-text='keya']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script14()
{
  var object = document.querySelectorAll("[data-acc-text='keyc']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script15()
{
  var object = document.querySelectorAll("[data-acc-text='keye']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script16()
{
  var object = document.querySelectorAll("[data-acc-text='keyo']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script17()
{
  var object = document.querySelectorAll("[data-acc-text='keyw']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script18()
{
  var object = document.querySelectorAll("[data-acc-text='check']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script19()
{
  var object = document.querySelectorAll("[data-acc-text='clear']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script20()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script21()
{
  var input_state = 1.5;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script22()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script23()
{
  var object = document.querySelectorAll("[data-acc-text='keyt']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script24()
{
  var object = document.querySelectorAll("[data-acc-text='keyc']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script25()
{
  var object = document.querySelectorAll("[data-acc-text='keya']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script26()
{
  var object = document.querySelectorAll("[data-acc-text='keyo']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script27()
{
  var object = document.querySelectorAll("[data-acc-text='keyg']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script28()
{
  var object = document.querySelectorAll("[data-acc-text='check']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script29()
{
  var object = document.querySelectorAll("[data-acc-text='clear']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script30()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script31()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script32()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script33()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script34()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script35()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script36()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script37()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script38()
{
  var object = document.querySelectorAll("[data-acc-text='go']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script39()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script40()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script41()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script42()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script43()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script44()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script45()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script46()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

