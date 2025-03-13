const API_URL = "https://showlog-app.onrender.com/api/v1/shows";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(show => [
        show.showid,
        show.name,
        show.seasons,
        show.genre,
        show.releaseyear,
        show.country,
        show.service,
        gridjs.html(`<button onclick="openEditForm(${show.showid}, '${show.name}', ${show.seasons}, '${show.genre}', ${show.releaseyear}, '${show.country}', '${show.service}')">Edit</button>`)
    ]);

    new gridjs.Grid({
        columns: ["Show ID", "Name", "Seasons", "Genre", "Release Year", "Country", "Service", "Edit"],
        data: formattedData,
        search: true,
        sort: true,
        pagination: {
            enabled: true,
            limit: 10
        },
        resizable: true,
        style: {
            table: {
                "background-color": "rgb(71, 84, 100)",
                "border-collapse": "collapse",
                "color": "rgb(140, 140, 140)"
            },
            th: {
                "background-color": "rgb(71, 84, 100)",
                "text-align": "left",
                "border": "1px solid rgb(55, 66, 80)",
                "color": "rgb(177, 177, 177)"
            },
            td: {
                "padding": "8px",
                "border": "1px solid rgb(55, 66, 80)",
                "background-color": "rgb(71, 84, 100)",
                "color": "rgb(230, 230, 230)"
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fetching data', error));

function openEditForm(showid, name, seasons, genre, releaseyear, country, service) {
    const editFormContainer = document.getElementById("edit-form-container");
    editFormContainer.style.display = "flex";

    editFormContainer.innerHTML = `
        <div id="edit-form">
            <h2>Edit Show</h2>
            <label for="edit-name">Name:</label>
            <input type="text" id="edit-name" value="${name}">
            
            <label for="edit-seasons">Seasons:</label>
            <input type="number" id="edit-seasons" value="${seasons}">
            
            <label for="edit-genre">Genre:</label>
            <input type="text" id="edit-genre" value="${genre}">
            
            <label for="edit-releaseyear">Release Year:</label>
            <input type="number" id="edit-releaseyear" value="${releaseyear}">
            
            <label for="edit-country">Country:</label>
            <input type="text" id="edit-country" value="${country}">
            
            <label for="edit-service">Service:</label>
            <input type="text" id="edit-service" value="${service}">
            
            <div class="edit-form-buttons">
                <button class="save-btn" onclick="updateShow(${showid})">Save</button>
                <button class="cancel-btn" onclick="closeEditForm()">Cancel</button>
            </div>
        </div>
    `;
}

function closeEditForm() {
    document.getElementById("edit-form-container").innerHTML = "";
    document.getElementById("edit-form-container").style.display = "none";
}

function updateShow(showid) {
    const updatedShow = {
        showid,
        name: document.getElementById("edit-name").value,
        seasons: parseInt(document.getElementById("edit-seasons").value),
        genre: document.getElementById("edit-genre").value,
        releaseyear: parseInt(document.getElementById("edit-releaseyear").value),
        country: document.getElementById("edit-country").value,
        service: document.getElementById("edit-service").value
    };

    fetch(`${API_URL}/${showid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedShow)
    })
    .then(response => response.json())
    .then(updatedData => {
        $.toaster({priority: 'success', title: 'Show updated', message: 'Show details edited successfully!'});

        closeEditForm();

        // Delay for 3 seconds
        setTimeout(() => {
            location.reload();
        }, 3000);
    })
    .catch(error => {
        console.error("Error updating show:", error);
        $.toaster({priority: 'danger', title: 'Update failed', message: 'Oops something broke'});
    });
}

$.toaster({ 
    priority: 'success', 
    title: 'Show updated', 
    message: 'Show details updated successfully!' 
});