const API_KEY = "3696c394-752b-4ce8-92d2-857ffb646b8d";

const showsContainer = document.querySelector(".shows-container");

//Create Header

const showsTitle = document.createElement("h1");
showsTitle.classList.add("shows-container__title");
showsTitle.textContent = "Shows";
showsContainer.appendChild(showsTitle);

async function showsMobile() {
  const showsData = new BandSiteApi(API_KEY);
  const retrieveData = await showsData.getShows();
  console.log(retrieveData);
  retrieveData.forEach((show) => {
    //Create div for each show block

    const showsEl = document.createElement("div");
    showsEl.classList.add("shows-container__list");

    //Create Date

    const dateLabel = document.createElement("p");
    dateLabel.classList.add("shows-container__list--label");
    dateLabel.textContent = "DATE";

    const dateDetails = document.createElement("p");
    dateDetails.classList.add("shows-container__list--date");

    const rawTimestamp = parseInt(show.date);
    const dateObject = new Date(rawTimestamp);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    dateDetails.textContent = formattedDate;

    //Create Venue

    const venueLabel = document.createElement("p");
    venueLabel.classList.add("shows-container__list--label");
    venueLabel.textContent = "VENUE";

    const venueDetails = document.createElement("p");
    venueDetails.classList.add("shows-container__list--venue");
    venueDetails.textContent = show.place;

    //Create Location

    const locationLabel = document.createElement("p");
    locationLabel.classList.add("shows-container__list--label");
    locationLabel.textContent = "LOCATION";

    const locationDetails = document.createElement("p");
    locationDetails.classList.add("shows-container__list--location");
    locationDetails.textContent = show.location;

    //Create Button

    const buyticketButton = document.createElement("button");
    buyticketButton.classList.add("shows-container__list--button");
    buyticketButton.textContent = "BUY TICKETS";

    //Append elements to showsContainer and showsEl

    showsEl.appendChild(dateLabel);
    showsEl.appendChild(dateDetails);
    showsEl.appendChild(venueLabel);
    showsEl.appendChild(venueDetails);
    showsEl.appendChild(locationLabel);
    showsEl.appendChild(locationDetails);
    showsEl.appendChild(buyticketButton);

    showsContainer.appendChild(showsEl);
  });
}

showsMobile();

// Tablet and Desktop table container

const table = document.createElement("table");
table.classList.add("shows-table");

const tableHeader = document.createElement("thead");
tableHeader.classList.add("shows-table__head");

const tableHeaderRow = document.createElement("tr");
tableHeaderRow.classList.add("shows-table__head--row");

const showsHeader = ["DATE", "VENUE", "LOCATION", ""];

showsHeader.forEach((headerContent) => {
  const labelHeader = document.createElement("th");
  labelHeader.classList.add("shows-table__head--label");

  labelHeader.textContent = headerContent;
  tableHeaderRow.appendChild(labelHeader);
});

tableHeader.appendChild(tableHeaderRow);

const tableBody = document.createElement("tbody");
tableBody.classList.add("shows-table__body");

async function showsTabletandDesktop() {
  const showsData = new BandSiteApi(API_KEY);
  const retrieveData = await showsData.getShows();
  console.log(retrieveData);
  retrieveData.forEach((show) => {
    const row = document.createElement("tr");
    row.classList.add("shows-table__body--row");
    const dateCell = document.createElement("td");
    dateCell.classList.add("shows-table__body--date");

    const rawTimestamp = parseInt(show.date);
    const dateObject = new Date(rawTimestamp);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    dateCell.textContent = formattedDate;
    row.appendChild(dateCell);

    const venueCell = document.createElement("td");
    venueCell.classList.add("shows-table__body--venue");
    venueCell.textContent = show.place;
    row.appendChild(venueCell);

    const locationCell = document.createElement("td");
    locationCell.classList.add("shows-table__body--location");
    locationCell.textContent = show.location;
    row.appendChild(locationCell);

    const buttonCell = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    button.classList.add("shows-table__body--button");
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);

    tableBody.appendChild(row);
  });

  showsContainer.appendChild(table);

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
}

showsTabletandDesktop();

// Creating constant border for the navbar bio page

const navLinks = document.querySelectorAll(".navbar__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  });
});
