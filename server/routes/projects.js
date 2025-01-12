const express=require('express');
const router=express.Router();
const Projects=require('../models/projects');
////////////////////////////////////////

router.post('/add',async(req,res)=>{
    let data=req.body;
    let newProjects=new Projects(data)
  
    
    newProjects.save()
    .then((saved)=>{
       console.log(saved);
       res.status(200).send(saved);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})

//get all projects
router.get('/all',(req,res)=>{
    Projects.find({}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})
router.get('/get/:id',(req,res)=>{
    id=req.params.id;
    Projects.findOne({_id:id}).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
})

router.put('/update/:id',async(req,res)=>{
    id=req.params.id;
    let data=req.body;

   
    Projects.findByIdAndUpdate({_id:id},data)
    .then((project)=>{
        res.status(200).send(project);

    }).catch((err)=>{
        console.log(err);
    });

})

router.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.status(400).send({
            message:" content is required!"
        });
    }
    Projects.deleteOne({_id:id}).then((data)=>{
        if (!data){
            res.status(404).send({message:" Projects not Found!"});
        }
        res.status(200).send({message: "Projects Succufully deleted"});
    })
})

module.exports=router;