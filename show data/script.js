document.addEventListener("DOMContentLoaded", function () {
    // URL of the Google Sheets API endpoint to fetch data
    const apiUrl = "https://sheets.googleapis.com/v4/spreadsheets/1b2g8g6dYzuIBu7KrzYtey1CzRYi7Dysc6O45Ep9xPtg/values/Sheet1?key=AIzaSyDhDepvPHzF80vcQr52vj6fOO9OzvOQLJA";

    // Reference to the table body
    const tableBody = document.querySelector("#data-table tbody");

    // Fetch data from Google Sheets API
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Assuming the first row in the data contains headers
            const headers = data.values[0];

            // Loop through data rows (excluding the first row which contains headers)
for (let i = 1; i < data.values.length; i++) {
    const rowData = data.values[i];
    const row = document.createElement("tr");

    // Create table cells and populate with data
    for (let j = 0; j < rowData.length; j++) {
        const cellData = rowData[j];
        const cell = document.createElement(i === 1 ? "th" : "td"); // Use th for header row
        cell.textContent = cellData;
        row.appendChild(cell);
    }

    // Add Bootstrap classes to style the table cells
    if (i === 1) {
        row.classList.add("table-primary"); // Style the header row
    } else if (i % 2 === 0) {
        row.classList.add("table-secondary"); // Style even rows
    } else {
        row.classList.add("table-light"); // Style odd rows
    }

    tableBody.appendChild(row);
}

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
