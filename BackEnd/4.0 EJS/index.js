import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type;
    let adv;

    if(day > 0 && day < 6){
        type = "a weekday";
        adv = "it's time to work hard";
    }else{
        type = "a weekend";
        adv = "it's time to rest";
    }
    res.render("index.ejs", {
        dateType: type, 
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});