var mongoclient=require('mongodb').MongoClient
var url="mongodb://localhost:27017/"

mongoclient.connect(url,function(err,db){
    if (err) throw err
   var dbo=db.db("mydb")
    var srt={name: /^A/}
    dbo.collection("empx1").deleteMany(srt,function(err,obj){
        if (err) throw err
        console.log(obj.result.n+"this ones got deleted");
       // console.log()

        db.close()
    })
})