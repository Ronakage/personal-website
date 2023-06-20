if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

var darkModeButton = document.querySelector(".mode");
var darkModeButtonText = document.querySelector(".modetext");

function themeSwitch(darkModeButtonText: any) {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        darkModeButtonText.value = "Light Mode";
        console.log('light mode 😅');
    }
    else{
        document.documentElement.classList.add('dark');
        darkModeButtonText.value = "Dark Mode";
        console.log('dark mode 😈');
    }
}

darkModeButton?.addEventListener("click", (darkModeButtonText) => {
    themeSwitch(darkModeButtonText);
});
