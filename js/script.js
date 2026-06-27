// =============================
// SEARCH FUNCTION
// =============================

function searchBike() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const search = input.value.toLowerCase().trim();

    for (const id in bikes) {

        const bike = bikes[id];

        if (
            bike.name.toLowerCase().includes(search) ||
            bike.brand.toLowerCase().includes(search)
        ) {

            window.location.href = `bike.html?id=${id}`;
            return;

        }

    }

    alert("Motorcycle not found!");

}



// =============================
// BIKE DETAILS
// =============================

const params = new URLSearchParams(window.location.search);

const bikeId = params.get("id");

if (bikeId && typeof bikes !== "undefined") {

    const bike = bikes[bikeId];

    if (bike) {

        document.getElementById("bikeName").textContent = bike.name;
        document.getElementById("bikeBrand").textContent = bike.brand;
        document.getElementById("bikeEngine").textContent = bike.engine;
        document.getElementById("bikePower").textContent = bike.power;
        document.getElementById("bikeTorque").textContent = bike.torque;
        document.getElementById("bikeMileage").textContent = bike.mileage;
        document.getElementById("bikeImage").src = bike.image;

        const container = document.getElementById("exhaustContainer");

        container.innerHTML = "";

        bike.exhausts.forEach(exhaust => {

            container.innerHTML += `

                <div class="exhaust-card">

                    <h3>${exhaust.name}</h3>

                    <span class="status">${exhaust.status}</span>

                </div>

            `;

        });

    }

}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            searchBike();

        }

    });

}

// ===============================
// LIVE SEARCH
// ===============================

const input = document.getElementById("searchInput");

if(input){

    input.addEventListener("keyup", function(){

        const value = this.value.toLowerCase().trim();

        const suggestions = document.getElementById("suggestions");

        suggestions.innerHTML = "";

        if(value === ""){

            suggestions.style.display = "none";

            return;

        }

        let found = false;

        for(const id in bikes){

            const bike = bikes[id];

            if(bike.name.toLowerCase().includes(value)){

                found = true;

                suggestions.innerHTML += `
                    <div class="suggestion-item"
                    onclick="window.location='bike.html?id=${id}'">

                        ${bike.name}

                    </div>
                `;

            }

        }

        suggestions.style.display = found ? "block" : "none";

    });

}

// ===============================
// MOTORCYCLE PAGE SEARCH
// ===============================

function searchMotorcycle() {

    const input = document.getElementById("searchMotorcycle");

    if (!input) return;

    const value = input.value.toLowerCase().trim();

    for (const id in bikes) {

        if (
            bikes[id].name.toLowerCase().includes(value) ||
            bikes[id].brand.toLowerCase().includes(value)
        ) {

            window.location.href = `bike.html?id=${id}`;
            return;

        }

    }

    alert("Motorcycle not found!");

}

const motorcycleInput = document.getElementById("searchMotorcycle");

if (motorcycleInput) {

    motorcycleInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase().trim();

        const suggestions = document.getElementById("motorcycleSuggestions");

        suggestions.innerHTML = "";

        if (value === "") {

            suggestions.style.display = "none";
            return;

        }

        let found = false;

        for (const id in bikes) {

            const bike = bikes[id];

            if (
                bike.name.toLowerCase().includes(value) ||
                bike.brand.toLowerCase().includes(value)
            ) {

                found = true;

                suggestions.innerHTML += `

                    <div class="suggestion-item"
                        onclick="window.location='bike.html?id=${id}'">

                        <strong>${bike.name}</strong><br>
                        <small>${bike.brand}</small>

                    </div>

                `;

            }

        }

        suggestions.style.display = found ? "block" : "none";

    });

    motorcycleInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            searchMotorcycle();

        }

    });

}