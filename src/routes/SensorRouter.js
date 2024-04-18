import { getAll,insert } from "../controller/SensorController.js";

import { Router } from "express";

const router = Router();

router.get('/', getAll);
router.post('/', insert);

export default router;