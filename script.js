
/* LOGIN */

if (document.getElementById("loginForm")) {

    document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "admin@gmail.com" &&
            password === "12345") {

            sessionStorage.setItem("isLoggedIn", "true");

            window.location.href = "index.html";

        } else {

            document.getElementById("error").innerHTML =
            "Invalid Email or Password";

        }

    });
}


/* HOME PAGE LOGIN CHECK */

if (window.location.pathname.endsWith("home.html")) {

    if (sessionStorage.getItem("isLoggedIn") !== "true") {

        window.location.href = "index.html";

    }

}


/* LOGOUT */

function logout() {

    sessionStorage.removeItem("isLoggedIn");

    window.location.href = "index1.html";

}


/* MOBILE MENU */

function toggleMenu() {

    let navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


/* ORDER NOW */

function orderCake(cake) {

    document.getElementById("cakeName").value = cake;

    document.getElementById("order").scrollIntoView({
        behavior: "smooth"
    });

}


/* ORDER FORM */

if (document.getElementById("orderForm")) {

    document.getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("customerName").value;
        let mobile = document.getElementById("mobile").value;
        let cake = document.getElementById("cakeName").value;
        let quantity = document.getElementById("quantity").value;
        let date = document.getElementById("deliveryDate").value;

        document.getElementById("orderResult").innerHTML =

        "<h3>Order Submitted Successfully!</h3>" +
        "<p>Customer Name: " + name + "</p>" +
        "<p>Mobile: " + mobile + "</p>" +
        "<p>Cake: " + cake + "</p>" +
        "<p>Quantity: " + quantity + "</p>" +
        "<p>Pickup Date: " + date + "</p>" +
        "<p>Please collect your cake from our shop.</p>";

    });

}
