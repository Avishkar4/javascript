window.onload = () => {
	let button = document.querySelector("#btn");


	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	
	let height = parseInt(document
			.querySelector("#height").value);

	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	
	if (height === "" || isNaN(height)) 
		result.innerHTML = "Please enter valid Height!";

	else if (weight === "" || isNaN(weight)) 
		result.innerHTML = "Please enter valid Weight!";


	else {


		let bmi = (weight / ((height * height) 
							/ 10000)).toFixed(2);

		if (bmi < 15) result.innerHTML =
			`You are Under Weight : <span>${bmi}</span>`;
        else if (bmi >= 15 && bmi < 25) 
			result.innerHTML = 
				`You are normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`You are Over Weight : <span>${bmi}</span>`;
	}
}
