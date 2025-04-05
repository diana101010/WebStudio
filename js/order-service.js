document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      // Client-side validation
      const name = document.getElementById('user-name').value.trim();
      const email = document.getElementById('user_email').value.trim();
      const privacyCheckbox = document.getElementById('user-privacy');
      
      if (!name) {
        alert('Please enter your name');
        e.preventDefault();
        return;
      }
      
      if (!email) {
        alert('Please enter your email address');
        e.preventDefault();
        return;
      }
      
      if (!privacyCheckbox.checked) {
        alert('Please accept the privacy policy');
        e.preventDefault();
        return;
      }
      
      // Optional: Add loading indicator
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      // FormSubmit will handle the rest
    });
  }
});