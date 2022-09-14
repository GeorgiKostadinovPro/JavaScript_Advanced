function solve(steps, footprintLength, speed){
    let distanceInMeters = steps * footprintLength;
    let speedInMetersPerHour = speed * 1000;

    let timeInSeconds = distanceInMeters / speedInMetersPerHour * 3600;

    let restingTimeInSeconds = Math.floor(distanceInMeters / 500) * 60;

    let totalTimeInSeconds = timeInSeconds + restingTimeInSeconds;

    let hours = Math.floor(Math.ceil(totalTimeInSeconds) / 3600).toString();
    let minutes = Math.floor(totalTimeInSeconds / 60).toString();
    let seconds = Math.ceil(totalTimeInSeconds % 60).toString();

    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

solve(4000, 0.60, 5);