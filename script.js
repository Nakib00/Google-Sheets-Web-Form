// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element from the document
    const form = document.querySelector("form");

    // Create a paragraph element to display the response message
    const responseMessage = document.createElement("p");

    // Append the response message paragraph to the form
    form.appendChild(responseMessage);

    // Add a submit event listener to the form
    form.addEventListener("submit", function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Get the URL to which the form data should be submitted
        const url = form.action;

        // Show a loading animation while waiting for the server response
        responseMessage.textContent = "Submitting...";
        responseMessage.style.color = "blue";

        // Send a POST request with the form data to the specified URL
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                // Handle the response from the server
                if (data === "Success") {
                    // If the response is "Success," display a success message in green
                    responseMessage.textContent = "Form submitted successfully!";
                    responseMessage.style.color = "green";
                    form.reset(); // Reset the form fields
                } else {
                    // If the response is not "Success," display an error message in red
                    responseMessage.textContent = "Form submission failed. Please try again.";
                    responseMessage.style.color = "red";
                }
            })
            .catch((error) => {
                // Handle any errors that occur during the fetch request
                responseMessage.textContent = "An error occurred. Please try again later.";
                responseMessage.style.color = "red";
            });
    });
});
