const {validationResult} = require('express-validator')


exports.getPosts = (req,res,next)=>{

  const errors = validationResult(req);

  if(!errors.isEmpty()){

    return res.status(422).json({
      message: 'validation failed, entered data is incorrext',
      errors: errors.array()
    })

  }

    res.status(200).json({
      posts: [
        {
          _id:'3',  
          title: "First Post",
          content: "This is the First Post!",
          imageUrl: "images/nature.jpg",
          creator:{
              name:'Ishan'
          },createdAt: new Date()
        },
      ],
    });




exports.createPost = (req, res, next)=>{

        const title = req.body.title;
        const content = req.body.content;

        res.statue(201).json({
          message: "Post Created Successfully",
          post: {
            id: new Date().toISOString(),
            title: title,
            content: content,
          },
        });
    }

}