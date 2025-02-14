const clickBtn = document.querySelectorAll(".clickBtn");
const clickBtn2 = document.querySelectorAll(".clickBtn2");
const clickBtn3 = document.querySelectorAll(".clickBtn3");
const clickBtn4 = document.querySelectorAll(".clickBtn4");
const accordion = document.querySelector("#accordion");
const accordion2 = document.getElementById("accordion2");
const accordion3 = document.getElementById("accordion3");
const accordion4 = document.getElementById("accordion4");
const icon = document.querySelector(".icon");
const hidden = document.querySelector(".hidden");

for (let i = 0; i < clickBtn.length; i++) {
	clickBtn[i].addEventListener("click", () => {
		accordion.classList.toggle("hidden");
		clickBtn[0].classList.toggle("hidden");
		clickBtn[1].classList.toggle("hidden");

		accordion2.classList.add("hidden");
		accordion3.classList.add("hidden");
		accordion4.classList.add("hidden");
		clickBtn2[0].classList.add("hidden");
		clickBtn2[1].classList.remove("hidden");
		clickBtn3[0].classList.add("hidden");
		clickBtn3[1].classList.remove("hidden");
		clickBtn4[0].classList.add("hidden");
		clickBtn4[1].classList.remove("hidden");
	});
}

for (let i = 0; i < clickBtn2.length; i++) {
	clickBtn2[i].addEventListener("click", () => {
		accordion2.classList.toggle("hidden");
		clickBtn2[0].classList.toggle("hidden");
		clickBtn2[1].classList.toggle("hidden");

		accordion.classList.add("hidden");
		accordion3.classList.add("hidden");
		accordion4.classList.add("hidden");
		clickBtn[0].classList.add("hidden");
		clickBtn[1].classList.remove("hidden");
		clickBtn3[0].classList.add("hidden");
		clickBtn3[1].classList.remove("hidden");
		clickBtn4[0].classList.add("hidden");
		clickBtn4[1].classList.remove("hidden");
	});
}

for (let i = 0; i < clickBtn3.length; i++) {
	clickBtn3[i].addEventListener("click", () => {
		accordion3.classList.toggle("hidden");
		clickBtn3[0].classList.toggle("hidden");
		clickBtn3[1].classList.toggle("hidden");

		accordion2.classList.add("hidden");
		accordion.classList.add("hidden");
		accordion4.classList.add("hidden");
		clickBtn2[0].classList.add("hidden");
		clickBtn2[1].classList.remove("hidden");
		clickBtn[0].classList.add("hidden");
		clickBtn[1].classList.remove("hidden");
		clickBtn4[0].classList.add("hidden");
		clickBtn4[1].classList.remove("hidden");
	});
}

for (let i = 0; i < clickBtn4.length; i++) {
	clickBtn4[i].addEventListener("click", () => {
		accordion4.classList.toggle("hidden");
		clickBtn4[0].classList.toggle("hidden");
		clickBtn4[1].classList.toggle("hidden");

		accordion2.classList.add("hidden");
		accordion3.classList.add("hidden");
		accordion.classList.add("hidden");
		clickBtn2[0].classList.add("hidden");
		clickBtn2[1].classList.remove("hidden");
		clickBtn3[0].classList.add("hidden");
		clickBtn3[1].classList.remove("hidden");
		clickBtn[0].classList.add("hidden");
		clickBtn[1].classList.remove("hidden");
	});
}
