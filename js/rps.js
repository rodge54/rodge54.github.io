new Vue({
    el: '#appRPS', 
    data: {
        playerScore: 0,
        computerScore: 0,
        test: 'Hello',
        status: ['Won', 'Lost', 'Tied'],
        playerStatus: 'Hello',
        compStatus: 'Hello',
        countdownPics: [],
        playerPics: ['images/pRock.jpg','images/pPaper.jpg','images/pScissor.jpg'],
        compPics: ['images/cRock.jpg','images/cPaper.jpg','images/cScissors.jpg'],
        playerPic: null,
        compPic: null,
        selected: null,
        options: ['Rock', 'Paper', 'Scissors']
    },
    methods: {
        updateStatus: function(playerResult, computerResult) {
            this.compStatus = this.status[computerResult];
            this.playerStatus = this.status[playerResult];
        },
        getResults: function(playerChoice, compChoice) {
            // Won = 0 *** Lost = 1 *** Tie = 2
            var won = 0;
            var lost = 1;
            var tie = 2;
            if (playerChoice === compChoice) {
                this.playerStatus = this.status[tie];
                this.compStatus = this.status[tie];
            }
            else if (playerChoice == 0 && compChoice == 1) {
                this.playerStatus = this.status[lost];
                this.compStatus = this.status[won];
                this.computerScore += 1;
            }
            else if (playerChoice == 1 && compChoice == 2) {
                this.playerStatus = this.status[lost];
                this.compStatus = this.status[won];
                this.computerScore += 1;
            }
            else if (playerChoice == 2 && compChoice == 0) {
                this.playerStatus = this.status[lost];
                this.compStatus = this.status[won];
                this.computerScore += 1;
            }
            else {
                this.playerStatus = this.status[won];
                this.compStatus = this.status[lost];
                this.playerScore += 1;
            }
        },

        updateScore: function(whoWon) {
            if (whoWon === "computer") {
                this.computerTitle += 1;
            }
            else {
                this.playerTitle += 1;
            }
        },

        buttonClick: function(playerChoice) {
            var choice = 0;
            if (playerChoice === 'Rock') {
                choice = 0;
            }
            else if (playerChoice === 'Paper') {
                choice = 1;
            } 
            else {
                choice = 2;
            }
            this.playerPic = this.playerPics[choice]; 
            var compChoice = Math.floor((Math.random() * 3));
            this.compPic = this.compPics[compChoice];
            this.getResults(choice, compChoice);
        },

        backToBio: function() {
            window.location.href = 'index.html';
        }
    }
});