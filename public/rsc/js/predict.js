// Import the numeric.js library

document.addEventListener("DOMContentLoaded", function () {
  const numeric = require("numericjs");
	let previousX = 0;
	let previousY = 0;
	let previousTime = Date.now();

	// Initialize the state of the Kalman filter
	let x = [0, 0, 0, 0]; // state: [position_x, velocity_x, position_y, velocity_y]
	let P = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	]; // covariance matrix
	let A = [
		[1, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 1],
	]; // state transition matrix
	let Q = [
		[0.01, 0, 0, 0],
		[0, 0.01, 0, 0],
		[0, 0, 0.01, 0],
		[0, 0, 0, 0.01],
	]; // process noise covariance
	let H = [
		[1, 0, 0, 0],
		[0, 0, 1, 0],
	]; // measurement matrix
	let R = [
		[0.01, 0],
		[0, 0.01],
	]; // measurement noise covariance

	document.addEventListener("mousemove", event => {
		const indicator = document.getElementById("eAlgTest");
		// Get the current mouse position and time
		let currentX = event.clientX;
		let currentY = event.clientY;
		let currentTime = Date.now();

		// Calculate the change in mouse position and time
		let deltaX = currentX - previousX;
		let deltaY = currentY - previousY;
		let deltaT = (currentTime - previousTime) / 1000;

		// Update previous mouse position and time
		previousX = currentX;
		previousY = currentY;
		previousTime = currentTime;

		// Use the Kalman filter to estimate the mouse's position and velocity
		let dx = deltaX / deltaT;
		let dy = deltaY / deltaT;
		x = numeric.dot(A, x);
		P = numeric.add(
			numeric.dot(numeric.dot(A, P), numeric.transpose(A)),
			Q
		);
		let y = [currentX, currentY];
		let S = numeric.add(
			numeric.dot(numeric.dot(H, P), numeric.transpose(H)),
			R
		);
		let K = numeric.dot(
			numeric.dot(P, numeric.transpose(H)),
			numeric.inv(S)
		);
		x = numeric.add(x, numeric.dot(K, numeric.sub(y, numeric.dot(H, x))));
		P = numeric.dot(numeric.sub(numeric.identity(4), numeric.dot(K, H)), P);

		// Use the estimated position and velocity to predict where the mouse will move to next
		let predictedX = x[0] + dx * deltaT;
		let predictedY = x[2] + dy * deltaT;
		indicator.style.top = predictedY + "px";
		indicator.style.left = predictedX + "px";
		console.log(`Predicted mouse position: (${predictedX}, ${predictedY})`);
	});
});
