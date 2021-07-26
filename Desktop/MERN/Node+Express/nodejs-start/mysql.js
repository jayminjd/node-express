var mysql=require("mysql")
var con=mysql.createConnection({
  host: "localhost",
  user: "root"  ,
  password: "",
  database: "dt"
})
con.connect(function(err){
    if (err) throw err
    console.log("conntection successful");
    //var sql="CREATE TABLE EMP2(id INT,name VARCHAR(255),age INT(3),city VARCHAR(255))";
    //var sql="ALTER TABLE emp ADD COLUMN salary INT(10)";
   /* var sql="INSERT INTO emp2 (name,city) VALUES ?"
    var VALUES=[
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      
    ];*/
    con.query("SELECT * FROM emp2",function(err,result){
        if (err) throw err
       // console.log("2 record is created: "+result.affectedRows);
        //console.log()
       console.log(result)
    })
})


var mongoclient=require('mongodb').MongoClient
var url="mongodb://localhost:27017"
mongoclient.connect(url,function(err,db){
    if (err) throw err
    var dbo=db.db("mydb")
   /* var obj=[
        { name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
        { name: "Tom Moody", age: "31", address: "CA"},  
        { name: "Zahira Wasim", age: "19", address: "Islamabad"},  
        { name: "Juck Ross", age: "45", address: "London"}  
    ]*/
    dbo.collection("empx1").find({},{projection:{_id:0,name:1,address:1}}).toArray(function(err,res){
        if (err) throw err
       //console.log("Number of records inserted:"+res.insertedCount)
       console.log(res) 
       db.close()
    })

})