// Get prefered themes from local storage and window
const localStorageTheme = localStorage.getItem("theme")
const systemThemeSetting = window.matchMedia("(prefers-color-scheme: light)")

// Get theme toggle button
const themeToggleBtn = document.querySelector(".theme-toggle")

/**
 * Get current theme setting as a string
 *
 * @param {string | null} localStorageTheme
 * @param {MediaQueryList} systemThemeSetting
 * @returns {string} Current theme
 */
function calculateSettingAsThemeString(localStorageTheme, systemThemeSetting) {
	if (localStorageTheme !== null) {
		return localStorageTheme
	}

	if (systemThemeSetting.matches) {
		return "light"
	}

	return "dark"
}

// Get current theme
let currentTheme = calculateSettingAsThemeString(localStorageTheme, systemThemeSetting)

// Set current theme on load
window.onload = function() {
	document.querySelector("html").setAttribute("data-theme", currentTheme)
}

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
})
