import express, { json } from 'express';
import cors from 'cors';
import { doGetRequest } from 'helpers/ApiHelper';
import { BASE_URL } from './helpers/ConfigHelper';
import dashboadRouter from 'controllers/DashboardController';

const app = express();
const port = 3001;

app.use(json());
app.use(cors());
app.use('/tft', dashboadRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', async (req, res) => {
    // let id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel;
    // const summonerResponse = await doGetRequest(`${BASE_URL}/lol/summoner/v4/summoners/by-name/mosc0u`)
    //     .then(({ data }) => ({ id, accountId, puuid, name, profileIconId, revisionDate, summonerLevel } = data))
    //     .catch(e => res.status(e.response.status).json(e.response.data));

    // console.log(profileIconId);

    // let tier, rank, leaguePoints, wins, losses;
    // const tftResponse = await doGetRequest(`${BASE_URL}/tft/league/v1/entries/by-summoner/${id}`)
    //     .then(({ data }) => ({ tier, rank, leaguePoints, wins, losses } = data[0]))
    //     .catch(e => res.status(e.response.status).json(e.response.data));

    // console.log(tftResponse);
    // return res.json({ tier, rank, leaguePoints, wins, losses });
    res.json('Hello World');
});
