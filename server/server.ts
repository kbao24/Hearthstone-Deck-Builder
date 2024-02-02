/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import express, { Request, Response } from 'express';
import fetchCardData from './fetchCardData'; // Adjust the path accordingly

const app = express();
const PORT = 3000;

app.get('/api/cards', async (req: Request, res: Response) => {
  try {
    const cardData = await fetchCardData();
    res.json(cardData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
