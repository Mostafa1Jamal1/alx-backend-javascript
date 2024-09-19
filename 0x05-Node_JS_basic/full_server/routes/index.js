import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

router.get('/', (res, req) => {
  AppController.getHomepage(res, req);
});

router.get('/students', (res, req) => {
  StudentsController.getAllStudents(res, req);
});

export default router;
