const STORAGE_KEY = "theme";
const THEME_ATTR = "data-theme";
const QUERY_KEY = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

const imagePaths = {
  light: "assets/jmhFaceRemoveBg.png",
  dark: "assets/jmhFaceRemoveBgDarkMd.png",
};

initTheme();

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    // Storage theme
    setTheme(savedTheme);
    updateImage(getTheme() === 'dark' ? theme.DARK : theme.LIGHT )
  } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
    // system theme
    setTheme(themes.DARK);
    updateImage(theme.DARK)
  } else {
    // Default theme
    setTheme(themes.LIGHT);
    updateImage(theme.LIGHT)
  }

  // Watch for system theme changes
  window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
    const newTheme = e.matches ? themes.DARK : themes.LIGHT;
    setTheme(newTheme);
    updateImage(newTheme);
  });
}

function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
  updateImage(newTheme);
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
}

function updateImage(theme) {
  const imageElement = document.querySelector('img[alt="Dvlp_Jeongminho"]'); // Assuming you have an img element with id "profile-image"
  if (imageElement) {
    const imagePath = theme === themes.DARK ? imagePaths.dark : imagePaths.light;
    imageElement.src = imagePath;
  }
}
