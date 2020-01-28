// add.test.js
import {TennisGame} from '../lib/TennisGame.js';
import chai from 'chai';

let expect = chai.expect;


describe('#Tennis game test', function() {

    let tennisGame = new TennisGame("Andy","Ben");

    beforeEach(function() {
        // ...some logic before each test is run
        tennisGame.resetScore();
    })

    it('love all', function() {

        expect(tennisGame.getScore()).to.be.equal("love all");

    });

    it('fifteen all', function() {

        tennisGame.setPlayerAScore(1);
        tennisGame.setPlayerBScore(1);

        expect(tennisGame.getScore()).to.be.equal("fifteen all");

    });

    it('thirty all', function() {

        tennisGame.setPlayerAScore(2);
        tennisGame.setPlayerBScore(2);

        expect(tennisGame.getScore()).to.be.equal("thirty all");

    });

    it('deuce', function() {

        tennisGame.setPlayerAScore(3);
        tennisGame.setPlayerBScore(3);

        expect(tennisGame.getScore()).to.be.equal("deuce");

    });

    it('fifteen love', function() {

        tennisGame.setPlayerAScore(1);

        expect(tennisGame.getScore()).to.be.equal("fifteen love");

    });

    it('thirty love', function() {

        tennisGame.setPlayerAScore(2);

        expect(tennisGame.getScore()).to.be.equal("thirty love");

    });

    it('forty love', function() {

        tennisGame.setPlayerAScore(3);

        expect(tennisGame.getScore()).to.be.equal("forty love");

    });



    it('love fifteen', function() {

        tennisGame.setPlayerBScore(1);

        expect(tennisGame.getScore()).to.be.equal("love fifteen");

    });

    it('love thirty', function() {

        tennisGame.setPlayerBScore(2);

        expect(tennisGame.getScore()).to.be.equal("love thirty");

    });

    it('love forty', function() {

        tennisGame.setPlayerBScore(3);

        expect(tennisGame.getScore()).to.be.equal("love forty");

    });

    it('Andy adv', function() {

        tennisGame.setPlayerAScore(4);
        tennisGame.setPlayerBScore(3);

        expect(tennisGame.getScore()).to.be.equal("Andy adv");

    });

    it('Ben adv', function() {

        tennisGame.setPlayerAScore(3);
        tennisGame.setPlayerBScore(4);

        expect(tennisGame.getScore()).to.be.equal("Ben adv");

    });

    it('Andy win', function() {

        tennisGame.setPlayerAScore(5);
        tennisGame.setPlayerBScore(3);

        expect(tennisGame.getScore()).to.be.equal("Andy win");

    });

});