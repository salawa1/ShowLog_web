const API_URL = "https://showlog-app.onrender.com/api/v1/shows";

fetch(API_URL)
.then(response => response.json())
.then(data => {
    const formattedData = data.map(shows => [
        shows.showid,
        shows.name,
        shows.seasons,
        shows.genre,
        shows.releaseyear,
        shows.country,
        shows.service
    ]);

    new gridjs.Grid({
        columns: ["Show ID", "Name", "Seasons", "Genre", "Release Year", "Country", "Service"],
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
                "color": "rgb(140, 140, 140)" /* Sets default text color */
            },
            th: {
                "background-color": "rgb(71, 84, 100)", /* Header background */
                "text-align": "left",
                "border": "1px solid rgb(55, 66, 80)", /* Grid line color */
                "color": "rgb(177, 177, 177)" /* Text color */
            },
            td: {
                "padding": "8px",
                "border": "1px solid rgb(55, 66, 80)", /* Grid line color */
                "background-color": "rgb(71, 84, 100)", /* Keep same background */
                "color": "rgb(230, 230, 230)" /* Text color */
            }
        }
    }).render(document.getElementById("grid-container"));
})
.catch(error => console.error('Error fetching data', error))