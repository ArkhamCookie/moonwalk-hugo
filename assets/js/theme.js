// Get prefered themes from local storage and window
const localStorageTheme = localStorage.getItem("theme")
const systemThemeSetting = window.matchMedia("(prefers-color-scheme: light)")

// Get theme toggle button
const themeToggleBtn = document.querySelector(".theme-toggle")

console.log(themeToggleBtn)

function calculateSettingAsThemeString(localStorageTheme, systemThemeSetting) {
	if (localStorageTheme !== null) {
		return localStorageTheme
	}

	if (systemThemeSetting.matches) {
		return "light"
	}

	return "dark"
}

let currentTheme = calculateSettingAsThemeString(localStorageTheme, systemThemeSetting)

themeToggleBtn.addEventListener("click", () => {
	let newTheme

	if (currentTheme === "dark") {
		newTheme = "light"
	} else {
		newTheme = "dark"
	}

	document.querySelector("html").setAttribute("data-theme", newTheme)

	localStorage.setItem("theme", newTheme)

	currentTheme = newTheme

	console.log("switched theme to", currentTheme)
})
