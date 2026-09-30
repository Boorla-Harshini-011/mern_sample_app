let express=require('express');
let mongoose=require('mongoose');
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
let app=express();
//connect with out mongodb hrmangement database
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>console.log("Database connected successfully")
).catch((err)=>console.log(err));

app.use(express.json());

app.use("/api/hr",hrroutes);
//open browser localhost:3000/api/hr/employees
app.use("/api/emp",emproutes);
//open browser localhost:3000/api/emp/viewtasks

// run the server in port 3000
app.listen(3000,()=>{
   console.log("server running on port 3000")
});