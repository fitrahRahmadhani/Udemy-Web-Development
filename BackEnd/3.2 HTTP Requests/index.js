import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h3>Aku sedang belajar Express.js kawan :)</h3>");
});

app.get("/contact", (req, res) =>{
    res.send("<p>081111111111</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
