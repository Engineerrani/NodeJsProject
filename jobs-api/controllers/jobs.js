const Job = require('../models/job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

//CRUD Oerations

const getAllJobs = async (req, res) => {
const jobs = await Job.find({createdBy:req.user.userId})
res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}
const getJob = async (req, res) => {
const {user: {userId},params:{jobId}} = req

const job = await Job.findOne({
    _id:jobId, createdBy:userId
})
if(!job){
    throw new NotFoundError(`No job with id ${jobId}`)
}
rs.status(StatusCodes.OK).json({ job })
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}
const updateJob = async (req, res) => {
const {
    body: {copmany, posiion},
    user: {userId},
    params:{jobId}}
    = req
    if(company === '' || position === '') {
        throw new BadRequestError('Company and Position fields cannot be empty')
    }
    const job = await Job.findByIdAndUpdate({_id:jobId, createdBy:userId}, req.body, {new:true,
    runValidators}
    )
    if(!job){
        throw new NotFoundError(`No job eith id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job })
}


const deleteJob = async (req, res) => {
        const {
            user: {userId},
            params:{jobId}} 
            = req
            const job = await Job.findByIdAndRemove({
                _id:jobId,
                createdBy:userId
            })
            if(!job){
                throw new NotFoundError(`No job eith id ${jobId}`)
            }
            res.status(StatusCodes.OK).send()
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
   
}