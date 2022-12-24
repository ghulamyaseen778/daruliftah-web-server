const {PostCreateService,PostcheckingService} = require('../service/AdminService')

const AdminControllers = {
    postCreateFatwaController: (req, res) => {
        // res.send("get")
        PostCreateService(req,res)
    },

    postCheckingFatwaController: (req, res) => {
        // res.send("Post")
        PostcheckingService(req,res)
    }
}

module.exports = {AdminControllers}