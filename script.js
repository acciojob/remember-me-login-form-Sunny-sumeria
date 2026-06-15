//your JS code here. If required.

const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const rememberMeCheckbox = document.getElementById('checkbox');
        const existingBtn = document.getElementById('existing');

        // Function to check localStorage and toggle the "Existing User" button
        function checkExistingUser() {
            const storedUser = localStorage.getItem('username');
            const storedPass = localStorage.getItem('password');

            if (storedUser && storedPass) {
                existingBtn.style.display = 'block';
            } else {
                existingBtn.style.display = 'none';
            }
        }

        // --- Event Listeners ---

        // 1. Handle Form Submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload on form submission

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Trigger the alert
            alert(`Logged in as ${username}`);

            // Handle "Remember Me" logic
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            // Update button visibility immediately after submission actions
            checkExistingUser();
        });

        // 2. Handle Existing User Button Click
        existingBtn.addEventListener('click', function() {
            const storedUser = localStorage.getItem('username');
            if (storedUser) {
                alert(`Logged in as ${storedUser}`);
            }
        });

        // 3. Run on Page Load to check state
        window.addEventListener('DOMContentLoaded', checkExistingUser);