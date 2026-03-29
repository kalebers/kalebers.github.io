// Dark Mode Toggle Functionality
(function() {
    'use strict';
    
    const THEME_KEY = 'theme-preference';
    const DARK_CLASS = 'dark-mode';
    
    // Garantir que o script roda após o DOM estar completamente carregado
    function initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        
        // Falha silenciosa se elemento não existir
        if (!themeToggle) {
            console.error('Theme toggle element not found');
            return;
        }

        // Verificar localStorage e preferência do sistema
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let shouldBeDark = false;
        
        if (savedTheme) {
            shouldBeDark = savedTheme === 'dark';
        } else if (prefersDark) {
            shouldBeDark = true;
        }
        
        // Aplicar tema inicial
        if (shouldBeDark) {
            setDarkMode(htmlElement, themeToggle, true);
        } else {
            setLightMode(htmlElement, themeToggle, true);
        }

        // Event listener para mudanças
        themeToggle.addEventListener('change', function(e) {
            if (e.target.checked) {
                setDarkMode(htmlElement, themeToggle);
            } else {
                setLightMode(htmlElement, themeToggle);
            }
        });

        // Detectar mudanças na preferência do sistema (se não há preferência salva)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem(THEME_KEY)) {
                if (e.matches) {
                    setDarkMode(htmlElement, themeToggle, true);
                } else {
                    setLightMode(htmlElement, themeToggle, true);
                }
            }
        });
    }

    function setDarkMode(htmlElement, themeToggle, isInitial = false) {
        htmlElement.classList.add(DARK_CLASS);
        themeToggle.checked = true;
        localStorage.setItem(THEME_KEY, 'dark');
        console.log('Dark mode enabled');
    }

    function setLightMode(htmlElement, themeToggle, isInitial = false) {
        htmlElement.classList.remove(DARK_CLASS);
        themeToggle.checked = false;
        localStorage.setItem(THEME_KEY, 'light');
        console.log('Light mode enabled');
    }

    // Garantir execução após DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
=======
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
