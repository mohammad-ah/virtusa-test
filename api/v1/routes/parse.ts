import { ParseController } from '../controllers/ParseController';
import { Router } from 'express'
const parserRouter: Router = Router();

// POST: .../parse and pass the praseData method of ParseController instance
parserRouter.post('/parse', (req, res) => ParseController.getInstance().praseData(req, res));

export { parserRouter }
