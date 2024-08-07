import { Router } from 'express';
import eventController from '../controllers/eventControllers';
import { authenticateJWT } from '../middlewares/jwtAuthenticator';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Events
 *     description: API endpoints for managing events
 */

/**
 * @swagger
 * /events:
 *   post:
 *     tags:
 *       - Events
 *     summary: "Create an event"
 *     description: "Creates a new event. User must be authenticated."
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Reunião de equipe"
 *               dayOfWeek:
 *                 type: string
 *                 enum: [Domingo, Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sábado]
 *                 example: "monday"
 *     responses:
 *       201:
 *         description: "Evento cadastrado com sucesso."
 *       500:
 *         description: "Erro ao criar o evento."
 */
router.post('/events', authenticateJWT, eventController.createEvent);

/**
 * @swagger
 * /events:
 *   get:
 *     tags:
 *       - Events
 *     summary: "Get events"
 *     description: "Get a list of all events. User must be authenticated."
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   description:
 *                     type: string
 *                   dayOfWeek:
 *                     type: string
 *                   userId:
 *                     type: string
 *                     format: uuid
 *       500:
 *         description: "Erro ao obter lista de eventos."
 */
router.get('/events', authenticateJWT, eventController.getEvents);

/**
 * @swagger
 * /events:
 *   delete:
 *     tags:
 *       - Events
 *     summary: "Deletes events from a specific Day of Week."
 *     description: "Deletes events from a specific Day of Week. User must be authenticated."
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: dayOfWeek
 *         required: true
 *         schema:
 *           type: string
 *           enum: [Domingo, Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sábado]
 *           example: "monday"
 *     responses:
 *       200:
 *         description: "Eventos do dia deletados com sucesso."
 *       400:
 *         description: "Não existem eventos para esse dia."
 *       500:
 *         description: "Erro ao deletar eventos."
 */
router.delete(
  '/events',
  authenticateJWT,
  eventController.deleteEventByDayOfWeek,
);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     tags:
 *       - Events
 *     summary: "Get an event from a specific id"
 *     description: "Get an event from a specific id. User must be authenticated."
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *           example: "e4a0a15b-6f1a-4f4b-8d3b-b8a4e4f82a23"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 description:
 *                   type: string
 *                 dayOfWeek:
 *                   type: string
 *                 userId:
 *                   type: string
 *                   format: uuid
 *       404:
 *         description: "Evento não encontrado."
 *       500:
 *         description: "Erro ao procurar evento."
 */
router.get('/events/:id', authenticateJWT, eventController.getEventById);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     tags:
 *       - Events
 *     summary: "Delete an event by a specific id"
 *     description: "Delete an event by a specific id. User must be authenticated."
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *           example: "e4a0a15b-6f1a-4f4b-8d3b-b8a4e4f82a23"
 *     responses:
 *       200:
 *         description: "Evento deletado com sucesso."
 *       404:
 *         description: "Evento não encontrado."
 *       500:
 *         description: "Erro ao deletar evento."
 */
router.delete('/events/:id', authenticateJWT, eventController.deleteEventById);

export default router;
