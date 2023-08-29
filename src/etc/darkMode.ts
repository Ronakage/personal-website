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
