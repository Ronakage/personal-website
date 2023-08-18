if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.remove('dark');
    document.getElementById("btn").innerHTML="Light Mode";
} else {
    document.documentElement.classList.add('dark');
    document.getElementById("btn").innerHTML="Dark Mode";
}

var darkModeButton = document.querySelector(".mode");

function themeSwitch() {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        document.getElementById("btn").innerHTML="Dark Mode";
    }
    else{
        document.documentElement.classList.add('dark');
        document.getElementById("btn").innerHTML="Light Mode";
    }
}

darkModeButton?.addEventListener("click", () => {
    themeSwitch();
});
