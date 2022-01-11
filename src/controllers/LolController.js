import express from 'express';
import LolService from 'services/LolService';

const router = express.Router();

router.get('/:summonerNickname', async (req, res) => {
    const summonerNickname = req.params.summonerNickname;

    try {
        const lolData = await LolService.fetchData(summonerNickname);
        return res.send(lolData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

module.exports = router;