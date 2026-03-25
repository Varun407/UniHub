document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Simulate login
                localStorage.setItem('isLoggedIn', 'true');
                
                // Redirect to home page
                window.location.href = 'index.html';
            }
        });
    }
});
