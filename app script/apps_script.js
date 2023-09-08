function doPost(e) {
const spreadsheetUrl =
    "https://docs.google.com/spreadsheets/d/1b2g8g6dYzuIBu7KrzYtey1CzRYi7Dysc6O45Ep9xPtg/edit#gid=0";
const sheetName = "Sheet1";

const spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
const sheet = spreadsheet.getSheetByName(sheetName);

if (!sheet) {
    return ContentService.createTextOutput("Error: Sheet not found");
}

const data = e.parameter;

  // Get the current date and time
const currentDate = new Date();

  // Extract date in YYYY-MM-DD format
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero if needed
  const day = currentDate.getDate().toString().padStart(2, "0"); // Add leading zero if needed

  // Extract hours and minutes in 24-hour format
  const hours = currentDate.getHours().toString().padStart(2, "0"); // Add leading zero if needed
  const minutes = currentDate.getMinutes().toString().padStart(2, "0"); // Add leading zero if needed

  // Create formatted date and time strings
const formattedDate = `${year}-${month}-${day}`;
const formattedTime = `${hours}:${minutes}`;

  // Create a new array with the data including the current date and time
const rowData = [
    data.name,
    data.phone,
    data.email,
    data.comment,
    formattedDate,
    formattedTime,
];

  // Append the row with the data to the Google Sheets
sheet.appendRow(rowData);

return ContentService.createTextOutput("Success");
}
