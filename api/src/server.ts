import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = parseInt(process.env.PORT || '3333', 10);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));