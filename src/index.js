import express, { json } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.get('/summoner/:summonerName', async(req, res) => {
    const { summonerName } = req.params;

    const summonerIdResponse = await axios
        .get(`${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${summonerName}`,
        { headers: { 'X-Riot-Token': process.env.LOL_KEY} })
        .catch(e => {
            return res.status(e.response.status).json(e.response.data);
        });

    const { id, profileIconId, summonerLevel } = summonerIdResponse.data;


    const responseRanked = await axios
        .get(`${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}`,
        { headers: { 'X-Riot-Token': process.env.LOL_KEY} })
        .catch(e => {
        return res.status(e.response.status).json(e.response.data);
        });

    const { tier, rank, wins, losses, queueTpe } = responseRanked[0].data ? 
        responseRanked[0].data : responseRanked[1];

    return res.json ({
        summonerLevel,
        tier,
        rank,
        wins,
        losses,
        quereType,
        iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
        winRate: ((wins / (wins + losses)) * 100).toFixed(1)
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));