const workout = document.querySelector('.workout');
const workoutInfo = document.querySelector('.workout__info');
const workoutHeading = document.querySelector('.workout__heading');
const workoutImage = document.querySelector('.workout__image');

const moveWorkoutImage = () => {
    if(window.innerWidth <= 840) {
        if(workout.querySelector('.workout__image')) {
            workout.querySelector('.workout__image').remove();
        }
        workoutHeading.after(workoutImage);
    } else {
        if(workoutInfo.querySelector('.workout__images')) {
            workoutInfo.querySelector('.workout__images').remove();
        }
        workout.append(workoutImage);
    }
}

window.addEventListener('resize', moveWorkoutImage);

moveWorkoutImage();