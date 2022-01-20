import express, { json } from 'express';
import cors from 'cors';
import LolRouter from 'controllers/LolController';
import SummonerRouter from 'controllers/SummonerController';

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/lol', LolRouter);
app.use('/summoner', SummonerRouter);


app.get('/', async (req, res) => {
    res.send('Use localhost:3001/summoner/:summonerNickname, localhost:3001/lol/rank/:summonerId, localhost:3001/lol/matches/:summonerPuuid to get data');
});
