document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const CONTACT_EMAIL = 'TicTocindia443+contact@gmail.com';

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!validateForm(data)) {
            return;
        }

        // Submit form to email
        submitForm(data);
    });

    function validateForm(data) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Name validation
        if (data.name.length < 2) {
            alert('Please enter your full name');
            return false;
        }

        // Message validation
        if (data.message.length < 10) {
            alert('Please enter a detailed message');
            return false;
        }

        return true;
    }

    function submitForm(data) {
        // Create mailto link with form data
        const subject = `Contact Form: ${data.category}`;
        const body = `Name: ${data.name}\nEmail: ${data.email}\nCategory: ${data.category}\n\nMessage:\n${data.message}`;
        const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message and reset form
        setTimeout(() => {
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        }, 500);
    }
});
