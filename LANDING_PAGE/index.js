let menu = document.querySelector(".menuico");
let display = document.querySelector(".display");
let mark = document.querySelector("#mark");
let nav2 = document.querySelector(".nav2");
let span = document.querySelector("span");
menu.addEventListener("click", () => {
  display.style.display = "block";
  nav2.style.display = "none";
  span.style.display = "none";
});
mark.addEventListener("click", () => {
  display.style.display = "none";
  display.style.transform = "translateY(-100%)";
  nav2.style.display = "flex";
  span.style.display = "block";
});



//## this is find a doctor part
let mark1 = document.querySelector("#mark1");
let fad = document.querySelector("#fad");
let display_se = document.querySelector(".display-se");
let fad2 = document.querySelector(".fad2");
fad.addEventListener("click", () => {
  display_se.style.display = "block";
});
mark1.addEventListener("click", () => {
  display_se.style.display = "none";
  display_se.style.transform = "translateY(-100%)";
});
fad2.addEventListener("click", () => {
  display_se.style.display = "block";
  display.style.display = "none";
});

const excelData = [
  {
    name: "Dr Arnab Basak (Apollo Hospital)",
    category: "Obstetrics & Gynecology (17 years exp)",
  },
  {
    name: "Dr Mallinath Mukherjee (Apollo Hospital)",
    category: "Obstetrics & Gynecology (15 years exp)",
  },
  {
    name: "Dr Samir Kumar Ray (CMRI Hospital)",
    category: "Obstetrics & Gynecology (25 years exp)",
  },
  {
    name: "Dr Manjari Chatterjee (CMRI Hospital)",
    category: "Obstetrics & Gynecology (15+ years exp)",
  },
  {
    name: "Dr Biswajyoti Guha (Fortis Hospital)",
    category: "Obstetrics & Gynecology (20 years exp)",
  },
  {
    name: "Dr Dhruba Ray (Fortis Hospital)",
    category: "Obstetrics & Gynecology (22 years exp)",
  },
  {
    name: "Dr Amrita Paul (Peerless Hospital)",
    category: "Cardiology (5 years exp)",
  },
  {
    name: "Dr Kaushik Biswas (Peerless Hospital)",
    category: "Cardiology (15 years exp)",
  },
  {
    name: "Dr Mainak Chatterjee (Peerless Hospital)",
    category: "Cardiology (12 years exp)",
  },
  {
    name: "Dr Tarun Kumar Patra (Kothari Hospital)",
    category: "Cardiology (18 years exp)",
  },
  {
    name: "Dr Pralayesh Chatterjee (Kothari Hospital)",
    category: "Cardiology (22+ years exp)",
  },
  {
    name: "Dr Debottam Bandyopadhyay (AMRI Hospital)",
    category: "Gastroenterology (23 years exp)",
  },
  {
    name: "Dr Tuhin Subhra Mandal (AMRI Hospital)",
    category: "Gastroenterology (8+ years exp)",
  },
  {
    name: "Dr Sudipta Ghosh (Manipal Hospital)",
    category: "Gastroenterology (26 years exp)",
  },
  {
    name: "Dr Tuhin Sanjay Mandal (Manipal Hospital)",
    category: "Gastroenterology (12 years exp)",
  },
  {
    name: "Dr Ajitabh Mishra (Manipal Hospital)",
    category: "Orthopaedic (10+ years exp)",
  },
  {
    name: "Dr Arindam Ganguly (Manipal Hospital)",
    category: "Orthopaedic (21 years exp)",
  },
  {
    name: "Dr Nikhilesh Das (Peerless Hospital)",
    category: "Orthopaedic (15 years exp)",
  },
  {
    name: "Dr Asim Kumar kandar (Apollo Hospital)",
    category: "Opthalmology (13 years exp)",
  },
  {
    name: "Dr Bikas Bhattacharya (Apollo Hospital)",
    category: "Opthalmology (28 years exp)",
  },
  {
    name: "Dr Arnab Karmakar (Kothari Hospital)",
    category: "Orthopaedic (20 years exp)",
  },
];

const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = excelData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
  );

  displayResults(filteredResults);
});

function displayResults(results) {
  resultsDiv.innerHTML = ""; // Clear previous results
  if (results.length === 0) {
    resultsDiv.innerHTML = "No results found.";
    return;
  }

  const ul = document.createElement("ul");
  results.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}   [${item.category}]`;
    ul.appendChild(li);
  });

  resultsDiv.appendChild(ul);
}

//## for searching map and fetching location
document
  .getElementById("locationInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchLocation();
    }
  });

function searchLocation() {
  const location = document.getElementById("locationInput").value;
  if (location) {
    // window.location.href = "https://www.google.com/maps/search/" + encodeURIComponent(location);
    window.open(
      "https://www.google.com/maps/search/" + encodeURIComponent(location),
      "_blank"
    );
  }
}


// ## find website searching
const websitePages = [
  { title: "Homepage", url: "/LANDING_PAGE/loading.html" },
  { title: "About Us", url: "/LANDING_PAGE/about.html" },
  { title: "Help", url: "/LANDING_PAGE/help.html" },
  { title: "Services", url: "/LANDING_PAGE/services.html" },
  { title: "Contact Us", url: "/LANDING_PAGE/contact.html" },
  { title: "Book An Appointment", url: "/LANDING_PAGE/book.html" },
  { title: "Talk To Us", url: "/LANDING_PAGE/chatIdx.html" },
  // Add more pages as needed
];

let currentSearchResults = []; // Store the current matching result
function showResults(query) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = ""; // Clear previous results
  currentSearchResults = []; // Clear previous stored results

  if (query.length === 0) {
    resultsContainer.style.display = "none";
    return;
  }

  const matchingPages = websitePages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  currentSearchResults = matchingPages; // Store the current matches

  if (matchingPages.length > 0) {
    matchingPages.forEach((page, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = page.title;
      listItem.onclick = function () {
        window.location.href = page.url;
      };
      listItem.onkeydown = function (event) {
        if (event.key === "Enter") {
          window.location.href = page.url;
        }
      };
      listItem.tabIndex = index === 0 ? 0 : -1; // Make the first result focusable by default
      resultsContainer.appendChild(listItem);
    });
    resultsContainer.style.display = "block";
  } else {
    resultsContainer.style.display = "none"; // Hide if no matches
  }
}

function handleSearch() {
  const query = document.getElementById("searchBar").value.trim();
  if (query) {
    // If there are search results displayed, navigate to the first one
    if (currentSearchResults.length > 0) {
      window.location.href = currentSearchResults[0].url;
    } else {
      // Optionally handle cases where there are no results but the button is clicked
      alert(`No matching pages found for "${query}"`);
    }
  }
}

document
  .getElementById("searchBar")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

// Close the search results when clicking outside
document.addEventListener("click", function (event) {
  const searchBar = document.getElementById("searchBar");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");
  if (
    event.target !== searchBar &&
    event.target !== searchButton &&
    event.target !== searchResults &&
    !searchResults.contains(event.target)
  ) {
    searchResults.style.display = "none";
  }
});



// ## count visitors
function animateCount(targetValue, duration) {
  const countElement = document.getElementById("increasingNumber");
  let start = 0;
  const increment = Math.ceil(targetValue / (duration / 10)); // Adjust increment speed
  let timer;
  function updateCount() {
    start += increment;
    if (start > targetValue) {
      countElement.textContent = targetValue;
      clearInterval(timer);
    } else {
      countElement.textContent = start;
    }
  }
  timer = setInterval(updateCount, 10);
}
const finalValue = 126;
const animationDuration = 4000;
animateCount(finalValue, animationDuration);



// ## count get benefits
fetch("http://localhost:8080/count")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("count").innerText = data;
  })
  .catch((error) => {
    console.error("Error fetching user count:", error);
    document.getElementById("count").innerText = "Error";
  });
setInterval(() => {
  fetch("http://localhost:8080/count")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("count").innerText = data;
    });
}, 10000);



// ## logout section
document.getElementById("logoutBtn").addEventListener("click", () => {
  fetch("http://localhost:8080/logout", {
    method: "POST",
    credentials: "include"
  })
  .then(res => {
    console.log("Logout response status:", res.status);
    if (res.ok) {
      alert("Logout successful!");
      window.location.href = "/login.html";
    } else {
      res.text().then(text => alert("Logout failed: " + text));
    }
  })
  .catch(err => {
    console.error("Logout request error:", err);
    alert("Logout request failed.");
  });
});


