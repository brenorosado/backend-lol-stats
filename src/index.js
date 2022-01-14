import express, { json } from 'express';
import cors from 'cors';
import TftRouter from 'controllers/TftController';
import LolRouter from 'controllers/LolController';
import SummonerRouter from 'controllers/SummonerController';

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/tft', TftRouter);
app.use('/lol', LolRouter);
app.use('/summoner', SummonerRouter);


app.get('/', async (req, res) => {
    res.send('Use localhost:3001/tft/summonerNickname or localhost:3001/lol/summonerNickname to get data');
});
