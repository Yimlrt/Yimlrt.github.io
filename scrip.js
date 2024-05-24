
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name === "" || email === "" || message === "") {
        document.getElementById('formMessage').innerText = "Por favor, completa todos los campos.";
        document.getElementById('formMessage').style.color = "red";
        return;
    }

    
    document.getElementById('formMessage').innerText = "¡Gracias por tu mensaje, " + name + "! .";
    document.getElementById('formMessage').style.color = "green";

    document.getElementById('contactForm').reset();
});

