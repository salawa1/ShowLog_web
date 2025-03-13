const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData)

    //Validate that the fields have data results
    if(data.name == "" || data.seasons == "" || data.genre == "" || data.releaseyear == "" || data.country == "" || data.service == "") {
        $.toaster({priority: 'danger', title: 'Error', message : 'Oops something broke'});
    }
    else {
        fetch('https://showlog-app.onrender.com/api/v1/shows/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error))
        $.toaster({priority: 'success', title: 'Show added', message : 'New show logged successfully!'});
    }
});