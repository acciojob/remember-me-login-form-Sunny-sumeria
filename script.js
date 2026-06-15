const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const rememberMeCheckbox = document.getElementById('checkbox');
        const existingBtn = document.getElementById('existing');

        function checkExistingUser() {
            const storedUser = localStorage.getItem('username');
            const storedPass = localStorage.getItem('password');

            if (storedUser && storedPass) {
                existingBtn.style.display = 'block';
            } else {
                existingBtn.style.display = 'none';
            }
        }

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            alert(`Logged in as ${username}`);

            if (rememberMeCheckbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            checkExistingUser();
        });

        existingBtn.addEventListener('click', function() {
            const storedUser = localStorage.getItem('username');
            if (storedUser) {
                alert(`Logged in as ${storedUser}`);
            }
        });

        window.addEventListener('DOMContentLoaded', checkExistingUser);