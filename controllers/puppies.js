import { Puppy } from '../models/puppy.js'

const create = async (req, res) => {
  try{
    const puppy = await Puppy.create(req.body)
    res.json(puppy)
  }catch (err){
    res.json(err)
  }
}

const index = async (req, res) =>{
  try{
    const puppies = await Puppy.find({}).sort({createdAt: 'desc'})
    res.json(puppies)
  }catch (err){
    res.json(err)
  }
}

const deletePuppy = async (req, res) => {
  try{
    const puppy = await Puppy.findByIdAndDelete(req.params.id)
    res.json(puppy)
  }catch (err){
    res.json(error)
  }
  
}


export {
  create,
  index,
  deletePuppy as delete
}