import Joi from 'joi';
import Song from './song.model'

export default{
    async create(req,res){
       // console.log(req.body)
        try{
       // return res.json({msg:'TODO: SONG CREATE'});
        const schema=Joi.object().keys({
            title:Joi.string().required(),
            url:Joi.string().required(),
            rating:Joi.number().integer().min(0).max(5).optional(),
        });
        // const {value,error}=Joi.validate(req.body,schema);
        // const {value,error}=Joi.valid(req.body,schema);
        const validation=schema.validate(req.body);
        if(validation.error){
            return res.status(400).json(validation.error)
        }
       const song= await Song.create(validation.value)
       return res.json(song);
       // return res.json(validation.value)
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err);
    }
} ,

async findAll(req,res){
    try{
        const {page,perPage}=req.query;
        const options={
            page:parseInt(page,10)||1,
            limit:parseInt(perPage,10)||10,
        };
        const songs=await Song.paginate({},options)
        return res.json(songs)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
},

async findOne(req,res){
    try{
        const {id}=req.params;
        const song=await Song.findById(id)
        if(!song){
            return res.status(404).json({err:'could not find a song'})
        }
        return res.json(song)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err); 
    }
},

async delete(req,res){
    try{
        const {id}=req.params;
        const song=await Song.findOneAndRemove({_id:id})
        if(!song){
            return res.status(404).json({err:'could not find a song'})
        }
        return res.json(song)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err); 
    }
},

async update(req,res){
    try{

        const {id}=req.params
            const schema=Joi.object().keys({
            title:Joi.string().optional(),
            url:Joi.string().optional(),
            rating:Joi.number().integer().min(0).max(5).optional(),
        });
        const validation=schema.validate(req.body);
        if(validation.error){
            return res.status(400).json(validation.error)
        }

        const song=await Song.findOneAndUpdate({_id:id},validation.value,{new:true})
        if(!song){
            return res.status(404).json({err:'could not find a song'})
        }
        return res.json(song)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err); 
    }
}


}