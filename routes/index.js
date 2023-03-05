const express = require('express');
const routes = express.Router();
const {FatwaControllers} = require('../controllers/FatwaControllers')
const {ContactsControllers} = require('../controllers/ContactControllers')
const {CategoryControllers} = require('../controllers/CategoryControllers')
const {AdminControllers} = require('../controllers/AdminControllers');
const { EmailControllers } = require('../controllers/EmailControllers');
const { searchController } = require('../controllers/SearchControllers');
const FatwaRoute =  "/fatwa";
const ContactRoute = "/contact";
const CategoryRoute = "/category";
const dashBoardRoute = "/dashboard";

routes.get('/singlefatwa/:id',FatwaControllers.getSingleFatwaController)
routes.get(FatwaRoute,FatwaControllers.getFatwaController)
routes.post(FatwaRoute,FatwaControllers.postFatwaController)
routes.put(FatwaRoute,FatwaControllers.UpdateFatwaController)
routes.delete(FatwaRoute,FatwaControllers.DeleteFatwaController)
routes.get(ContactRoute,ContactsControllers.getFatwaController)
routes.post(ContactRoute,ContactsControllers.postFatwaController)
routes.put(ContactRoute,ContactsControllers.UpdateFatwaController)
routes.delete(ContactRoute,ContactsControllers.DeleteFatwaController)
routes.get(CategoryRoute,CategoryControllers.getFatwaController)
routes.post(CategoryRoute,CategoryControllers.postFatwaController)
routes.put(CategoryRoute,CategoryControllers.UpdateFatwaController)
routes.delete(CategoryRoute,CategoryControllers.DeleteFatwaController)
routes.get("/email",EmailControllers.postEmailController)
routes.get("/search",searchController.getSearchController)

//admin routes
routes.post('/create',AdminControllers.postCreateFatwaController)
routes.post('/datachecking',AdminControllers.postCheckingFatwaController)


module.exports=routes