import { Router } from 'express';
import eventController from '../controllers/eventControllers';
import { authenticateJWT } from '../middlewares/jwtAuthenticator';

const router = Router();

router.post('/events', authenticateJWT, eventController.createEvent);
router.get('/events', authenticateJWT, eventController.getEvents);
router.delete(
  '/events',
  authenticateJWT,
  eventController.deleteEventByDayOfWeek,
);
router.get('/events/:id', authenticateJWT, eventController.getEventById);
router.delete('/events/:id', authenticateJWT, eventController.deleteEventById);

export default router;
