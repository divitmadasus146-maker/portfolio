// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Optional Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
