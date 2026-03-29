// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const THEME_KEY = 'theme-preference';

    // Validar se o elemento existe
    if (!themeToggle) {
        console.error('Theme toggle element not found');
        return;
    }

    // Aplicar tema baseado em preferência salva ou sistema
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark') {
            setTheme('dark');
        } else if (savedTheme === 'light') {
            setTheme('light');
        } else if (prefersDarkMode) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    // Aplicar tema e atualizar UI
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            themeToggle.checked = true;
            localStorage.setItem(THEME_KEY, 'dark');
        } else {
            htmlElement.classList.remove('dark-mode');
            themeToggle.checked = false;
            localStorage.setItem(THEME_KEY, 'light');
        }
    };

    // Event listener para mudanças no toggle
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked ? 'dark' : 'light');
    });

    // Inicializar tema na carga
    initializeTheme();

    // Responder a mudanças na preferência do sistema (se não há preferência salva)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
});
