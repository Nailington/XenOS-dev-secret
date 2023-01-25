const setupText = document.getElementById("SetupText");
const Wrap = document.getElementById("SetupWrapper");
const pwButtonWrap = document.getElementById("passWordButtonChoice");
const pwInput = document.getElementById("passWordInput");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const keyBindMenu = document.getElementById("keybinds");
const finalButton = document.getElementById("doneButtonFinal");
const setupStatus = localStorage.getItem("setup_status");
function set(a, b) {
	localStorage.getItem(a, b);
}
function step1() {
	setupText.innerHTML = "Please wait while we initialize your profile";
	set("profile_name", "Profile1");
	set("active_profile", "Profile1");
	set("profile_password", "_*_xenos_*_nopassword_*_");
}
function step2() {
	setupText.innerHTML =
		"Thanks for waiting. Would you like to choose a password?";
	setupText.style.animation = "none";
	pwButtonWrap.style.display = "block";
}
function pwOption(status) {
	if (status === "yes") {
		noButton.style.display = "none";
		yesButton.style.display = "none";
		pwInput.style.display = "block";
		// submitButton.style.display = 'block'
	} else {
		noButton.style.display = "none";
		yesButton.style.display = "none";
	}
}
function step3() {
	setupText.innerHTML = "Great!";
	setupText.style = "";
}
async function step4() {
	setupText.innerHTML = "Let's introduce you to some important keybinds!";
	setupText.style.animation = "none";
	setTimeout(() => {
		keyBindMenu.style = `display: flex;animation: 0s ease 0s 1 normal none running none;align-items: center;justify-content: center; align-content: center; flex-wrap: nowrap;flex-direction: column;`;
	}, 1000);
	finalButton.onclick = function () {
		keyBindMenu.style = "";
		finalButton.style.display = "none";
		setupText.innerHTML = "Perfect. Welcome to XenOS!";
		setTimeout(() => {
			Wrap.style.opacity = "0";
		}, 1000);
		setTimeout(() => {
			Wrap.style.display = "none";
			localStorage.setItem("setup_status", "done");
		}, 1000);
	};
}

if (setupStatus == null) {
	Wrap.style = "";
	// needs to setup lol
	setTimeout(() => {
		step1();
	}, 6700);
	setTimeout(() => {
		step2();
		yesButton.onclick = function () {
			pwOption("yes");
		};
		noButton.onclick = function () {
			pwOption("no");
			step3();
			setTimeout(() => {
				step4();
			}, 4900);
		};
	}, 15500);
} else if (setupStatus == "done") {
	console.log("already setup");
} else {
	console.log("idk");
}
