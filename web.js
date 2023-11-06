document.addEventListener("DOMContentLoaded", function() {
    // Sample menu items
    const menuItems = [
        "Pizza",
        "Burger",
        "Pasta",
        "Salad",
        "Desserts"
    ];

    // Display menu items
    const menuList = document.getElementById("menu-list");
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.textContent = item;
        menuList.appendChild(menuItem);
    });

    // Form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = contactForm.elements[0].value;
        const email = contactForm.elements[1].value;
        const message = contactForm.elements[2].value;
        // Handle form data (you can send it to a server using AJAX or other techniques)
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        // Reset the form
        contactForm.reset();
    });
});
