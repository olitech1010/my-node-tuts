import express from 'express'

const signup = async (req, res) => {
    res.status(200).json({message: 'signup successfully'})
}


export {signup}