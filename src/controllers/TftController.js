import express from 'express';
import TftRankService from 'services/TftRankService';

const router = express.Router();

router.get('/rank/:summonerId', async (req, res) => {
    const summonerId = req.params.summonerId;

    try {
        const tftData = await TftRankService.fetchData(summonerId);
        return res.send(tftData);
    } catch (error) {
        return res.send(`error: ${error}`);
    };
});

module.exports = router;