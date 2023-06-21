if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

var darkModeButton = document.querySelector(".mode");

function themeSwitch() {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        document.getElementById("btn").innerHTML="Dark Mode";
        console.log('light mode 😅');
    }
    else{
        document.documentElement.classList.add('dark');
        document.getElementById("btn").innerHTML="Light Mode";
        console.log('dark mode 😈');
    }
}

darkModeButton?.addEventListener("click", () => {
    themeSwitch();
});
