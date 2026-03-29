// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeKey = 'theme-preference';

    // Verificar a preferência salva ou preferência do sistema
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem(themeKey);
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            if (savedTheme === 'dark') {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        } else if (prefersDarkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    };

    // Habilitar dark mode
    const enableDarkMode = () => {
        htmlElement.classList.add('dark-mode');
        themeToggle.checked = true;
        localStorage.setItem(themeKey, 'dark');
        document.title = 'Kalebe Szlachta - Cybersecurity, Data Science & Software Engineer (Dark)';
    };

    // Desabilitar dark mode
    const disableDarkMode = () => {
        htmlElement.classList.remove('dark-mode');
        themeToggle.checked = false;
        localStorage.setItem(themeKey, 'light');
        document.title = 'Kalebe Szlachta - Cybersecurity, Data Science & Software Engineer';
    };

    // Event listener para o toggle
    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Inicializar o tema
    initializeTheme();

    // Responder a mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(themeKey)) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
});
