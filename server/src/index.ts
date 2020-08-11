import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 1337;

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});
