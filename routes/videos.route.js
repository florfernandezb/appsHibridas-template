import express from 'express';
import videosController from '../controllers/videos.controller.js';

const route = express.Router()

route.get('/', videosController.viewAll)
route.get('/nuevo', videosController.viewForm)

route.post('/nuevo', videosController.create)

export default route