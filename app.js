console.log("hi");
let add_task_button = document.getElementById("add-daily-button");
let task_selector = document.getElementsByClassName("task-select")[0];
let task_input = document.getElementById("add-daily-input");
let daily_Schedule_flag = 0;

// Daily scheduel ul's

add_task_button.onclick = () => {
  // if the input is empty
  if (task_input.value === "") {
    alert("please fill in the task.");
  } else if (task_selector.value === "Daily Schedule") {
    // flag to make them input a day
    if (daily_Schedule_flag === 0) {
      // don't worry about this
      let day_select = document.createElement("select");
      let monday_option = document.createElement("option");
      let tuesday_option = document.createElement("option");
      let wednesday_option = document.createElement("option");
      let thursday_option = document.createElement("option");
      let friday_option = document.createElement("option");
      let saturday_option = document.createElement("option");
      let sunday_option = document.createElement("option");

      monday_option.innerHTML = "Monday";
      tuesday_option.innerHTML = "Tuesday";
      wednesday_option.innerHTML = "Wednesday";
      thursday_option.innerHTML = "Thursday";
      friday_option.innerHTML = "Friday";
      saturday_option.innerHTML = "Saturday";
      sunday_option.innerHTML = "Sunday";

      day_select.appendChild(monday_option);
      day_select.appendChild(tuesday_option);
      day_select.appendChild(wednesday_option);
      day_select.appendChild(thursday_option);
      day_select.appendChild(friday_option);
      day_select.appendChild(saturday_option);
      day_select.appendChild(sunday_option);

      document.body.appendChild(day_select);

      alert("please enter the day and submit again.");
      daily_Schedule_flag = 1;
      //   inputing the day
    } else {
      let task = document.createElement("li");
      task.innerHTML = day_select.value;
      let day = day_select.value;
      document.body.removeChild(day_select);
      daily_Schedule_flag = 0;
      let day_list = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      day_list.forEach((what_day) => {
        if (what_day === day) {
          let Week_day = document.getElementsByClassName(what_day)[0];
          Week_day.appendChild(task);
        }
      });
    }
  } else if (task_selector.value === "Top 3 Priorities") {
    let top_three_prioites_ul = document.getElementById("priorities-checkbox");
    if (top_three_prioites_ul.childern.length === 3) {
      alert("you already have three priorities");
    } else {
      let prioritie = document.createElement("li");
      prioritie.innerHTML = task_input.value;
      top_three_prioites_ul.appendChild(prioritie);
    }
  } else if (task_selector.value === "To Do") {
  }
};
