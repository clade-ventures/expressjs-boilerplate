import 'module-alias/register';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`Listening to port http://localhost:${port}/`);
});
