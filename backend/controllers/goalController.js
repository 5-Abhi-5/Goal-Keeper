 const asyncHandler=require('express-async-handler')

//desc GET goals
//route GET /api/goals
//access private

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'hi'})
})

//desc SET goals
//route POST /api/goals
//access private

const setGoal = asyncHandler(async (req,res) => {
    if(!(req.body.text)){
        res.status(400)
        throw new Error('text is required')
    }
    res.status(200).json({message:'hello'})
})

//desc UPDATE goals
//route PUT /api/goals/:id
//access private

const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message:`up ${req.params.id}` })
})

//desc DELETE goals
//route DELETE /api/goals/:id
//access private

const deleteGoal = asyncHandler(async (req,res) => {
     res.status(200).json({message:`del ${req.params.id}` })
})

module.exports = {
    setGoal,
    updateGoal,
    deleteGoal,
    getGoals
}