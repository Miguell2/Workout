// Workout options based on body part
const LEGS_WORKOUTS = ['Barbell Squats', 'Lunges', 'Romanian Deadlifts'];
const CHEST_WORKOUTS = ['Bench Press', 'Push-ups', 'Dumbbell Flyes'];
const BACK_WORKOUTS = ['Deadlifts', 'Rows', 'Pull-ups'];
const ARMS_WORKOUTS = ['Bicep Curls', 'Tricep Extensions', 'Hammer Curls'];
const SHOULDERS_WORKOUTS = ['Overhead Press', 'Lateral Raises', 'Face Pulls'];


function generateWorkout(gender, height, weight, bodypart) {
  // Calculate BMI
  const heightInMeters = parseFloat(height.split("'")[0]) * 0.3048 + parseFloat(height.split("'")[1]) * 0.0254;
  const weightInKg = parseFloat(weight) * 0.453592;
  const bmi = weightInKg / (heightInMeters * heightInMeters);

  // Select a workout based on body part
  let workouts;
  if (bodypart === 'Legs') {
    workouts = LEGS_WORKOUTS;
  } else if (bodypart === 'Chest') {
    workouts = CHEST_WORKOUTS;
  } else if (bodypart === 'Back') {
    workouts = BACK_WORKOUTS;
  } else if (bodypart === 'Arms') {
    workouts = ARMS_WORKOUTS;
  } else {
    workouts = SHOULDERS_WORKOUTS;
  }

  // Select a workout based on user's BMI
  let workout;
  if (bmi < 18.5) {
    workout = workouts[0];
  } else if (bmi >= 18.5 && bmi < 25) {
    workout = workouts[1];
  } else if (bmi >= 25 && bmi < 30) {
    workout = workouts[2];
  } else {
    workout = workouts[3];
  }

  return `Based on your gender (${gender}), height (${height}), weight (${weight}), and body part (${bodypart}), your recommended workout is ${workout}.`;
}

function submitHandler(event) {
    event.preventDefault(); // prevent the form from submitting
  
    // get the user inputs
    const gender = document.querySelector('#gender').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const bodypart = document.querySelector('#bodypart').value;
  
    // Calculate BMI
    const heightInMeters = parseFloat(height.split("'")[0]) * 0.3048 + parseFloat(height.split("'")[1]) * 0.0254;
    const weightInKg = parseFloat(weight) * 0.453592;
    const bmi = weightInKg / (heightInMeters * heightInMeters);
  
    // Select a workout based on body part
    let workouts;
    if (bodypart === 'legs') {
      workouts = LEGS_WORKOUTS;
    } else if (bodypart === 'chest') {
      workouts = CHEST_WORKOUTS;
    } else if (bodypart === 'back') {
      workouts = BACK_WORKOUTS;
    } else if (bodypart === 'arms') {
      workouts = ARMS_WORKOUTS;
    } else {
      workouts = SHOULDERS_WORKOUTS;
    }
  
    // Select a workout based on user's BMI
    let workout;
    if (bmi < 18.5) {
      workout = workouts[0];
    } else if (bmi >= 18.5 && bmi < 25) {
      workout = workouts[1];
    } else if (bmi >= 25 && bmi < 30) {
      workout = workouts[2];
    } else {
      workout = workouts[3];
    }
  
    // display the workout on the page
    const workoutDisplay = document.querySelector('#workout-display');
    workoutDisplay.textContent = `Based on your gender (${gender}), height (${height}), weight (${weight}), and body part (${bodypart}), your recommended workout is ${workout}.`;
    workoutDisplay.classList.remove('hidden');
  }
  

// Add submit event listener to the form
const form = document.querySelector('#workout-form');
form.addEventListener('submit', submitHandler);
