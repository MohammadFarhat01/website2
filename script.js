const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (!response.ok) {
            throw new Error('Error submitting form');
        }

        const data = await response.text();
        confirmationMessage.style.display = 'block';
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error.message);
        confirmationMessage.innerText = 'Error submitting form. Please try again later.';
        confirmationMessage.style.color = 'red';
        confirmationMessage.style.display = 'block';
    }
});
