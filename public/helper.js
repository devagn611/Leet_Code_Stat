
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
};
// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode");
darkModeToggle.addEventListener("change", function () {
  document.documentElement.classList.toggle("dark");
});

// Show loading animation
function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}

function preview() {
  showLoading();
  const previewContainer = document.querySelector("#preview-container");
  previewContainer.innerHTML = ""; // Clear previous content

  const username =
    document.querySelector("#username").value.trim() || "devagn_maniya";
  const theme = document.querySelector("#theme").value;
  const font = document.querySelector("#font").value;
  const extension = document.querySelector("#extension").value;
  const site = document.querySelector("#site").value;

  fetch(
    `/api/cardgen?username=${username}&theme=${theme}&font=${font}&extension=${extension}&site=${site}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      previewContainer.innerHTML = data; // This will insert the embed tag

      // Create a new embed element to track when it's loaded
      const embed = previewContainer.querySelector("embed");
      if (embed) {
        embed.onload = hideLoading;
        embed.onerror = () => {
          hideLoading();
          previewContainer.innerHTML =
            "Error loading the card. Please try again.";
        };
      } else {
        hideLoading();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      hideLoading();
      previewContainer.innerHTML =
        "Error loading the card. Please try again.";
    });
}

function go() {
  fetchCardData("/api/cardgenDetail").then((data) => {
    prompt("Embed HTML:", data.embedHtml);
  });
}

function md() {
  fetchCardData("/api/cardgenDetail").then((data) => {
    prompt("Markdown Code:", data.markdown);
  });
}

function fetchCardData(endpoint) {
  const username =
    document.querySelector("#username").value.trim() || "devagn_maniya";
  const theme = document.querySelector("#theme").value;
  const font = document.querySelector("#font").value;
  const extension = document.querySelector("#extension").value;
  const site = document.querySelector("#site").value;

  return fetch(
    `${endpoint}?username=${username}&theme=${theme}&font=${font}&extension=${extension}&site=${site}`
  ).then((response) => response.json());
}

// Add event listeners to your buttons
document
  .querySelector("#submit-button")
  .addEventListener("click", preview);
document.querySelector("#go-button").addEventListener("click", go);
document.querySelector("#markdown-button").addEventListener("click", md);
