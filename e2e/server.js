var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var cors = require("cors");
var http = require('http');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
  };






mongoose.connect('mongodb://localhost/marlabs', { useNewUrlParser: true }, function(err){

if(err)
{

    console.log(err);
}else{

    console.log("connected");   
}

});
var db = mongoose.connection;
db.on('error', function(){
console.log('error in connection');

});
db.on('open', function(){
    console.log('successful connection');
    
    });

    var userSchema = mongoose.Schema({



        username: String,
        password: String
    });



    var createpostSchema = mongoose.Schema({
        username : String,
        title: String,
        description: String,
        comments : String,
        likedby: String,
        id:  mongoose.Schema.Types.ObjectId
        
    });


    var userModel = mongoose.model('usermodel', userSchema, 'userModel');
    var createPost = mongoose.model('createpost', createpostSchema, 'createPost');
    app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors({
//     origin: 'http://localhost:4200'
    
    
//     }));

app.use(cors());


// app.get('/register', function(req, res){


//     userModel.find({}, function(err, data){

//             if(err){
//                     res.send(err);

//             }else if(data){



//                 res.send(data);

//             }
//     });

// });


    app.post("/register", function(req,res){

        //console.log(req.body);
        var username = req.body.username;
        var password = req.body.password;

        var userContent={username:username,password:password};
    

        

            userModel.create(userContent, function(err1, data1){

                if(err1){

                    res.send(err1);
                }
                else if(data1){

                        res.send(data1);


                }
               
           

        });
       
    });


    


app.post('/login', function(req, res){


    var username = req.body.username;
        var password = req.body.password;
        var loginContent={username:username,password:password};

     //  var user = userModel.findOne({username:username,password:password});

      
       // console.log(userModel.username1);

    //    for(var user of users){
    //     if(user.name!=req.body.name){
    //         message="Wrong Name";
    //     }


       var token = jwt.sign({username: username}, 'secret-key-marlabs');

        userModel.findOne(loginContent, function(err, data){

            if(err)
            {
                res.send({

                    isLoggedIn: false,
                    err: 'err'

                });
            }
            else if(data){

                
             
                    //console.log(userModel.collection.userContent.username);
                    res.send({
                        
                        isLoggedIn: true,
                        token: token,
                        
                        data: data
                    });
                    
                    console.log("success");
                }
                
           
            

        });
    });


    app.use(function(req, res, next){

            var token = req.body.authorization || req.query.authorization || req.headers.authorization;
            if(token){

                    jwt.verify(token, 'secret-key-marlabs', function(err, decoded){

                        if(!err){

                            req.decoded = decoded;
                            next();
                        }else{
                                
                                res.send(err);

                        }

                    });

            }else{

                res.send({
                    isLoggedIn : false,
                    err: 'invalid request'

                });
            }

    });

    app.get('/login', function(req, res){

        var username = req.decoded._id;

        userModel.findOne({_id : username}, function(err, data){

                if(data){
                    res.send(data);
                    console.log("login details"+data);

                }
                else{

                    res.send(err);  
                }
        });

    });

        app.post("/home/Createpost", function(req,res){

            //console.log(req.body);
            var title = req.body.title;
           
            var description = req.body.description;
        var username1 = req.decoded.username;
        console.log(req.decoded);
            
                    var createPostcontent={username:  username1, title:title,description:description};
                    createPost.create(createPostcontent, function(err, data1){
                        if(err)
                        {
                                console.log("err123");  
                        }
                        else{
                
                                res.send(data1);
                                console.log("successfullly added posts");
                        }
                    });
        });
         
    

    app.get('/post', function(req,res){

       

                        createPost.find({},function(err,data){
                            console.log(data);  
                
                            
                            if(!err){
                                  
                                  res.send(data);
                    
                            }
                        });

  
 });


 app.get('/dispcomm/:id', function(req,res){

    
//console.log(req.params.postid1);
console.log(req.params.id);
    createPost.findOne({_id :req.params.id
    },function(err,data){
         

        
        if(data){
              
              res.send(data);
              console.log("data"+data); 

        }
        else{

            res.send(err);
        }
    });


});



 app.post('/post', function(req, res){

    var comments = req.body.comments;

 console.log(req.body.postid);
  
    
           
         


    createPost.findOneAndUpdate( { _id : req.body.postid}, 
        { $push: { comments: comments } },
         function(err, data){

            if(!err){

                res.send(data);
                console.log(data);
            }

    });



});




app.post('/likec/:id', function(req,res){

    
    //console.log(req.params.postid1);
    var likedby = req.decoded.username;
    console.log(req.params.id);
    console.log(req.decoded.username);
        createPost.findOneAndUpdate({_id :req.params.id
        }, { $push: { likedby: likedby  } },function(err,data){
             
    
            
            if(err){
                  
                  
                  res.send(err);
    
            }
            else{
    
                res.send(data);
                  console.log("data1"+data); 
            }
        });
    
    
    });


    app.post('/editpost', function(req,res){

       // console.log(req.params.id);
        var title1 = req.body.title;
        var description1 = req.body.description;
        var id1 = req.decoded.username;
        console.log(id1);   

        createPost.findOneAndUpdate({username: id1  
        }, { $set: { title: title1, description : description1} },function(err,data){
             
    
            
            if(err){
                  
                  
                  res.send(err);
    
            }
            else{
    
                res.send(data);
                  console.log("updated post"+data); 
            }
        });
    


    });

    app.post('/deletepost', function(req, res){

        var uname = req.decoded.username;
        //console.log('tdata'+t);
        var t = req.body;

        createPost.findOneAndDelete({username : uname
        }, { $pullAll: { t : t
             } }, function(err, data){

                if(err){

                    res.send(err);
                }else if(data){
                    res.send(data);
            }

      



    });
});


 


            
    
    app.listen(port, () => {
        console.log("Server listening on port " +port);
    });


