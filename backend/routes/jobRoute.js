import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getadminJobs, getAllJob, getJobById, postJob } from '../controllers/jobController.js';

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated,getAllJob);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getadminjobs").get(isAuthenticated,getadminJobs);

export default router;