document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const servicesSection = document.getElementById('services');
            const services = data.services;
            services.forEach(service => {
                const serviceDiv = document.createElement('div');
                serviceDiv.classList.add('service');
                serviceDiv.innerHTML = `
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `;
                servicesSection.appendChild(serviceDiv);
            });

            const contactInfo = document.createElement('div');
            contactInfo.innerHTML = `
                <h2>Contact Us</h2>
                <p>Email: ${data.contact.email}</p>
                <p>Phone: ${data.contact.phone}</p>
            `;
            document.getElementById('contact').appendChild(contactInfo);
        })
        .catch(error => console.error('Error fetching data:', error));

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.text())
        .then(data => {
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block';
            contactForm.reset();
        })
        .catch(error => console.error('Error submitting form:', error));
    });

    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });

// Function to open the modal contact form
function openContactForm() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

// Function to close the modal contact form
function closeContactForm() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
