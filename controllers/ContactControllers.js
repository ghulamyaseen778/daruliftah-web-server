const {GetService,PostService,UpdateService,DeleteService} = require('../service/ContactService')

const ContactsControllers = {
    getFatwaController: (req, res) => {
        // res.send("get")
        GetService(req,res)
    },

    postFatwaController: (req, res) => {
        // res.send("Post")
        PostService(req,res)
    },

    UpdateFatwaController: (req, res) => {
        // res.send("Update")
        UpdateService(req,res)
    },
    DeleteFatwaController: (req, res) => {
        // res.send("Delete")
        DeleteService(req,res)
    }
}

module.exports = {ContactsControllers}