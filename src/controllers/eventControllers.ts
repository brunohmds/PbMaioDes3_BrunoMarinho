import Event from '../models/event';
import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default class eventController {
  static async createEvent(req: Request, res: Response) {
    const { description, dayOfWeek } = req.body;
    const userId = req.user && (req.user as JwtPayload).userId;

    try {
      const event = new Event({
        description,
        dayOfWeek,
        userId,
      });

      await event.save();
      res.status(201).json({ message: 'Evento cadastrado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar o evento.' });
    }
  }

  static async getEvents(req: Request, res: Response) {
    try {
      const events = await Event.find();
      res.status(200).json({ events });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter lista de eventos. ' });
    }
  }

  static async deleteEventByDayOfWeek(req: Request, res: Response) {
    const { dayOfWeek } = req.body;

    try {
      const eventsByDay = await Event.find({ dayOfWeek });

      if (eventsByDay.length === 0) {
        return res
          .status(400)
          .json({ message: 'Não existem eventos para esse dia.' });
      }

      await Event.deleteMany({ dayOfWeek });
      res.status(200).json({
        message: 'Eventos do dia deletados com sucesso.',
      });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar eventos.' });
    }
  }

  static async getEventById(req: Request, res: Response) {
    const eventId = req.params.id;

    try {
      const eventById = await Event.findById(eventId);

      if (!eventById) {
        return res.status(404).json({ message: 'Evento não encontrado.' });
      }

      res.status(200).json({ event: eventById });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao procurar evento.' });
    }
  }

  static async deleteEventById(req: Request, res: Response) {
    const eventId = req.params.id;

    try {
      const eventById = await Event.findById(eventId);

      if (!eventById) {
        return res.status(404).json({ message: 'Evento não encontrado.' });
      }

      await Event.deleteOne({ _id: eventId });
      res.status(200).json({ message: 'Evento deletado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar evento.' });
    }
  }
}
