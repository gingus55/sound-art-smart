let dragged; // Keeps track of what's being dragged - we'll use this later!

function onDragStart(event) {
  let target = event.target;
  if (target && target.nodeName === "IMG") {
    // If target is an image
    dragged = target;
    event.dataTransfer.setData("text", target.id);
    event.dataTransfer.dropEffect = "move";
    // Make it half transparent when it's being dragged
    event.target.style.opacity = 0.3;
  }
}

function onDragEnd(event) {
  if (event.target && event.target.nodeName === "IMG") {
    // Reset the transparency
    event.target.style.opacity = ""; // Reset opacity when dragging ends
    dragged = null;
  }
}

// Adding event listeners
const vehicles = document.querySelector(".vehicles");
vehicles.addEventListener("dragstart", onDragStart);
vehicles.addEventListener("dragend", onDragEnd);

function onDragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}

function onDragLeave(event) {
  event.target.style.background = "";
}

function onDragEnter(event) {
  const target = event.target;
  if (target) {
    event.preventDefault();
    // Set the dropEffect to move
    event.dataTransfer.dropEffect = "move";
    target.style.background = "#1f904e";
  }
}

function onDrop(event) {
  const target = event.target;
  if (target) {
    target.style.backgroundColor = "";
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    dragged.parentNode.removeChild(dragged);
    dragged.style.opacity = "";
    target.appendChild(dragged);
  }
}

const dropZone = document.querySelector(".drop-zone");
dropZone.addEventListener("drop", onDrop);
dropZone.addEventListener("dragenter", onDragEnter);
dropZone.addEventListener("dragleave", onDragLeave);
dropZone.addEventListener("dragover", onDragOver);

window["moment-range"].extendMoment(moment);

// The array of weekdays
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const parkingRules = {
  ambulance: {
    // The ambulance can only park on weekdays...
    days: weekdays,
    // ...from 9pm to 3am (the next day)
    times: createRange(
      moment().set("hour", 21),
      moment().add(1, "day").set("hour", 3)
    ),
  },
  "fire truck": {
    // The fire truck can obnly park on Saturdays and Sundays, but all day
    days: ["Saturday", "Sunday"],
  },
  car: {
    // The car can only park on weekdays...
    days: weekdays,
    // ...from 3am - 3pm (the same day)
    times: createRange(moment().set("hour", 3), moment().set("hour", 15)),
  },
  bicycle: {
    // The car can only park on weekdays...
    days: weekdays,
    // ...from 3pm - 9pm (the same day)
    times: createRange(moment().set("hour", 15), moment().set("hour", 21)),
  },
};

function createRange(start, end) {
  if (start && end) {
    return moment.range(start, end);
  }
}

function onDragEnter(event) {
  const target = event.target;
  if (dragged && target) {
    const vehicleType = dragged.alt; // e.g bicycle, ambulance
    if (canPark(vehicleType)) {
      event.preventDefault();
      // Set the dropEffect to move
      event.dataTransfer.dropEffect = "move";
      /* Change color to green to show it can be dropped /*
      target.style.background = '#1f904e';    
     }
    else {
      /* Change color to red to show it can't be dropped. Notice we
       * don't call event.preventDefault() here so the browser won't
       * allow a drop by default
       */
      target.style.backgroundColor = "#d51c00";
    }
  }
}

function onDrop(event) {
  const target = event.target;
  if (target) {
    const data = event.dataTransfer.getData("text");
    const dragged = document.getElementById(data);
    const vehicleType = dragged.alt;
    target.style.backgroundColor = "";
    if (canPark(vehicleType)) {
      event.preventDefault();
      // Get the ID of the target and add the moved element to the target's DOM
      dragged.style.opacity = "";
      target.appendChild(dragged);
    }
  }
}

function getDay() {
  return moment().format("dddd"); // format as 'monday' not 1
}

function getHours() {
  return moment().hour();
}

function canPark(vehicle) {
  /* Check the time and the type of vehicle being dragged
   * to see if it can park at this time
   */
  if (vehicle && parkingRules[vehicle]) {
    const rules = parkingRules[vehicle];
    const validDays = rules.days;
    const validTimes = rules.times;
    const curDay = getDay();
    if (validDays) {
      /* If the current day is included on the parking days for the vehicle
       * And if the current time is within the range
       */
      return (
        validDays.includes(curDay) &&
        (validTimes ? validTimes.contains(moment()) : true)
      );
      /* Moment.range has a contains function that checks
       * to see if your range contains a moment. 
         https://github.com/rotaready/moment-range#contains
        */
    }
  }
  return false;
}
