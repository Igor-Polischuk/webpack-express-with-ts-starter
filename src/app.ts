import express from 'express';
import { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});


app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});