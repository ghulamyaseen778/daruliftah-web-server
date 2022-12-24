const FatwaSchema = require("../Modals/Fatwa")
const {GetService,GetSingleService,PostService,UpdateService,DeleteService} = require("../service/FatwaService")

const FatwaControllers = {
    getFatwaController: (req, res) => {
        GetService(req,res)
    },

    getSingleFatwaController: (req, res) => {
        GetSingleService(req,res)
    },

    postFatwaController: (req, res) => {
      PostService(req,res)
    },

    UpdateFatwaController: (req, res) => {
        UpdateService(req,res)
    },
    DeleteFatwaController: (req, res) => {
      DeleteService(req,res)
    }
}

module.exports = {
    FatwaControllers}