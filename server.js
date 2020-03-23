const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT||4000;


//-----------------------routes
app.get('/',(req,res)=>res.send('<h1>Project Express</h1>'));




//=========start
app.listen(PORT, () => console.log(`Book app listening at http://localhost:${PORT}/`));