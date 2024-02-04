function submit() {
    const emailInput = document.getElementById('emailInput');
    const resultElement = document.getElementById('result');

    // Use a regular expression to check email syntax
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
      resultElement.textContent = 'Email is valid!';
    } else {
      resultElement.textContent = 'Invalid email format. Please enter a valid email.';
    }
}