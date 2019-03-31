const chai = require('chai');
const expect = chai.expect;
const chaiAsPromsied = require('chai-as-promised');
chai.use(chaiAsPromsied).should();

const TopFive = require('../models/top-five');

describe('top five model', () => {
    it('should be able to retrieve all top five', async () => {
        const topFiveSongs = await TopFive.getAll();
        expect(topFiveSongs).to.be.an.instanceOf(Array);
    });
    it('should be able to retrieve a song by id', async () => {
        const aSong = await TopFive.getById(1);
        console.log(aSong.song);
        expect(aSong.song).to.equal('Leader of the Pack');
    });
    it('should be able to retrieve a band by id', async () => {
        const performer = await TopFive.getById(3);
        console.log(performer.artist);
        expect(performer.artist).to.equal('Ray Paterson')
    })
});