// Form validation for the suggestion form on the About Us page
document.addEventListener('DOMContentLoaded', function() {
    const suggestionForm = document.getElementById('suggestionForm');
    const successMessage = document.getElementById('success-message');
    
    // Hide success message initially
    successMessage.style.display = 'none';
    
    // Hide all error messages initially
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.style.display = 'none';
    });
    
    suggestionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.style.display = 'none';
        });
        
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate category
        const categoryInput = document.getElementById('category');
        if (!categoryInput.value) {
            document.getElementById('category-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate suggestion text
        const suggestionInput = document.getElementById('suggestion');
        if (!suggestionInput.value.trim()) {
            document.getElementById('suggestion-error').style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, show success message and reset form
        if (isValid) {
            // Here you would typically send the form data to your backend
            // For demonstration, we'll just show the success message
            successMessage.style.display = 'block';
            suggestionForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
});