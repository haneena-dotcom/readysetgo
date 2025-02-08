document.getElementById("tripForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let location = document.getElementById("destination").value;
    let activity = document.getElementById("activities").value;
    let budget = parseInt(document.querySelector('input[name="budget"]:checked')?.value);
    
    if (!location || !budget) {
        alert("Please select all preferences.");
        return;
    }

    // Fetch places from the data (simulating an API call)
    let places = await fetchBudgetPlaces(location, activity, budget);
    
    displayResults(places);
});

// Mock function to simulate fetching places from the data
async function fetchBudgetPlaces(location, activity, budget) {
    const data = {
        "Malappuram": [
            { "name": "teak museum", "activity": "sightseeing", "price": 500 },
            { "name": "Kodikuthi", "activity": "adventure", "price": 200 },
            { "name": "kottakunnu", "activity": "relaxation", "price": 300 }
        ],
        "Ernakulam": [
            { "name": "wonderla", "activity": "adventure", "price": 1500 },
            { "name": "fort kochi", "activity": "relaxation", "price": 1000 },
            { "name": "puthuvype beach", "activity": "sightseeing", "price": 800 },
            { "name": "Jew town", "activity": "cultural experience", "price": 1800 }
        ]
    };

    let places = data[location] || [];
    // Filter based on activity and budget
    return places.filter(place => 
        place.activity === activity && place.price <= budget
    );
}

// Function to display results
function displayResults(places) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Budget-friendly Places</h2>";

    if (places.length === 0) {
        resultsDiv.innerHTML += "<p>Sorry, no matches found within your criteria.</p>";
        return;
    }

    places.forEach(place => {
        resultsDiv.innerHTML += `<p><strong>${place.name}</strong> - ${place.activity} ($${place.price})</p>`;
    });
}
