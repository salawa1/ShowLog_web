# ShowLog_app

## 📌 Overview

Welcome to **ShowLog!** This website is a TV show logging platform heavily inspired by Letterboxd, featuring user reviews, diary entries, and editing features.

## 🔶 Table of Contents

- Installation and Setup
- Usage Instructions
- API Integration
- Contributing Guidelines
- Live Demo

## 🔷 Installation and Setup

### Prerequisites
Make to have the following installed:
- [Node.js](https://nodejs.org/) and npm

### How to set up the front-end locally

1. Clone the repository
   ```sh
   git clone https://github.com/salawa1/showlog_app.git
   ```
2. Navigate to the project folder
   ```sh
   cd showlog_app
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   node server.js
   ```
5. Open the application in your browser
   ```sh
   http://localhost:port#
   ```

## 🔷 Usage Instructions

Users can interact with ShowLog by
- Logging their favorite TV shows.
  
  <img width="1800" alt="image" src="https://github.com/user-attachments/assets/dbe133d8-50e8-4474-b885-d640b33c4c45" />

  
- Viewing all logged shows.

  <img width="1800" alt="image" src="https://github.com/user-attachments/assets/001ab9dc-b672-4670-a0e9-f35d4b833e23" />

  
- Rating shows on a 5-star scale.


  
  
- Editing and deleting logs.

<img width="1800" alt="image" src="https://github.com/user-attachments/assets/fd23eaa8-54dd-4e3a-a869-14cd69b0a381" />



## 🔷 API Integration

Example of front-end interacting with back-end API (POST method):

```json
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
```

## 🔷 Contributing Guidelines

How to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### Coding Standards
- Follow consistent names, fonts, styles, color palattes, etc.
- Use clear commit messages.

## 🔗 Live Demo

[Visit ShowLog](https://showlog.netlify.app)
