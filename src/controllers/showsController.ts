import { Request, Response } from 'express';
import Show, { IShow } from '../models/mongo/Show';

export const createShow = async (req: Request, res: Response) => {
  try {
    const show: IShow = new Show(req.body);
    await show.save();
    res.status(201).json({ id: show.id });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getShowsByTitle = async (req: Request, res: Response) => {
  try {
    const shows = await Show.find({ title: new RegExp(req.params.title, 'i') });
    res.status(200).json({ shows });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
