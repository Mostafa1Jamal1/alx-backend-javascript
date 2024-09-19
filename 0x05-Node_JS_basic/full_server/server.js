import router from './routes/index.js';
import express from 'express';

const app = express();
app.use(router);
app.listen(1245);

export default app;
