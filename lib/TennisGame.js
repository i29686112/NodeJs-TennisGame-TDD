export class TennisGame {

    playerAScore;
    playerBScore;

    scoreMap={
        0:"love",
        1:"fifteen",
        2:"thirty",
        3:"forty",
    };
    playerAName;
    playerBName;
    constructor(playerAName,playerBName) {
        this.playerAName=playerAName;
        this.playerBName=playerBName;
        this.resetScore();
    }

    getScore() {

        if(this.playerAScore === this.playerBScore){

            return (this.playerAScore>=3)?'deuce':this.scoreMap[this.playerAScore]+" all";
        }

        if(this.checkIsEndPoint()){

            let statusSuffix=(Math.abs(this.playerAScore - this.playerBScore)>1)?" win":" adv";
            let winnerName=(this.playerAScore > this.playerBScore)?this.playerAName:this.playerBName;

            return winnerName+statusSuffix;

        }

        return this.scoreMap[this.playerAScore]+' '+this.scoreMap[this.playerBScore];





    }


    checkIsEndPoint() {
        return this.playerAScore >3 || this.playerBScore >3;
    }

    setPlayerAScore(score) {
        for(let i=1; i<= score; i++){
            this.playerAScore++;

        }

    }

    resetScore() {

        this.playerAScore=0;
        this.playerBScore=0;

    }

    setPlayerBScore(score) {
        for(let i=1; i<= score; i++){
            this.playerBScore++;
        }
    }
}