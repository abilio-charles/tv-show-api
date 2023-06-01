import express from 'express';
import showsRouter from './routes/shows';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', showsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
