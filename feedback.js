document.addEventListener('DOMContentLoaded', function() { 
    const resetButton = document.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const errorMessages = document.querySelectorAll('.error');
            errorMessages.forEach(msg => {
                msg.textContent = '';
            });
            
            const formMessage = document.getElementById('form-submission-message');
            if (formMessage) {
                formMessage.style.display = 'none';
            }
            
            ratingValue.value = 0;
            updateStars(0);
            updateRatingText(0);
        });
    }
});

function validateFeedbackForm() {
    console.log("Validation function called"); 
    let isValid = true;
    
    const name = document.getElementById('name').value;
    if (!name || name.trim().length < 3) {
        document.getElementById('errorName').textContent = 'Please enter your full name (at least 3 characters)';
        isValid = false;
    } else {
        document.getElementById('errorName').textContent = '';
    }
    
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('errorEmail').textContent = 'Email tidak boleh kosong';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('errorEmail').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('errorEmail').textContent = '';
    }
    
    const phone = document.getElementById('phone').value;
    if (phone && !validatePhone(phone)) {
        document.getElementById('errorPhone').textContent = 'Please enter a valid phone number (numbers only)';
        isValid = false;
    } else {
        document.getElementById('errorPhone').textContent = '';
    }
    
    const visitDate = document.getElementById('visit-date').value;
    if (!visitDate) {
        document.getElementById('errorVisitDate').textContent = 'Tanggal tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('errorVisitDate').textContent = '';
    }
    
    const cinema = document.getElementById('cinema').value;
    if (!cinema) {
        document.getElementById('errorCinema').textContent = 'Please select a cinema location';
        isValid = false;
    } else {
        document.getElementById('errorCinema').textContent = '';
    }
    
    const ratingValue = document.getElementById('rating-value').value;
    if (ratingValue == 0) {
        document.getElementById('errorRating').textContent = 'Please rate your experience';
        isValid = false;
    } else {
        document.getElementById('errorRating').textContent = '';
    }
    
    const feedbackMessage = document.getElementById('feedback-message').value;
    if (!feedbackMessage || feedbackMessage.trim().length < 10) {
        document.getElementById('errorFeedbackMessage').textContent = 'Please provide more details about your experience (at least 10 characters)';
        isValid = false;
    } else {
        document.getElementById('errorFeedbackMessage').textContent = '';
    }
    
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('errorTerms').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    } else {
        document.getElementById('errorTerms').textContent = '';
    }
    
    console.log("Form valid:", isValid); 

    if (isValid) {
        const formMessage = document.getElementById('form-submission-message');
        formMessage.className = 'submission-message success';
        formMessage.textContent = 'Thank you for your feedback! We value your opinion and will use it to improve our services.';
        formMessage.style.display = 'block';
        document.getElementById('feedback-form').reset();
        document.getElementById('rating-value').value = 0;
        
        const stars = document.querySelectorAll('.rating i');
        stars.forEach(star => {
            star.className = 'far fa-star';
        });
        
        document.querySelector('.rating-text').textContent = 'Click to rate';
        
        formMessage.scrollIntoView({ behavior: 'smooth' });
    }
    
    return false; 
}

function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

function validatePhone(phone) {
    for (let i = 0; i < phone.length; i++) {
        if (isNaN(parseInt(phone[i]))) {
            return false;
        }
    }
    return true;
}