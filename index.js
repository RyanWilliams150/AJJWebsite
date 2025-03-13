
function contact(event) {
    event.preventDefault(); 
    const success = document.querySelector('.forum__overlay--success');

    emailjs.sendForm(
        "service_s0u0ixd", 
        "template_akgnvnh", 
        event.target, 
        "_Nn3UvlPYgmuHIwSg" 

    ).then(() => {
        success.style.display = "block"; 
        event.target.reset(); 

    }).catch(() => {
        alert("The email service is temporarily unavailable. Please try again later.");
    });
}