//Initial Variables
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    },
];

const gameData = [
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
];

//Get Elements
const configOverlay = document.getElementById( 'config-overlay' );
const errorsOutput = document.getElementById( 'config-errors' );
const gameArea = document.getElementById( 'active-game' );
const activePlayerName = document.getElementById( 'active-player-name' );
const gameOver = document.getElementById( 'game-over' );
const formControl = document.getElementById( 'formcontrol' );
const playerNameInput = document.getElementById( 'player-name' );
const gameOverMessage = document.getElementById( 'game-over-message' );
const gameField = document.querySelectorAll( '#game-board li' );

//Get Elements part 2
const form = document.getElementById( 'config-form' );
const backdrop = document.getElementById( 'backdrop' );
const editBtnPlayer1 = document.getElementById( 'edit-btn-player-1' );
const editBtnPlayer2 = document.getElementById( 'edit-btn-player-2' );
const cancelConfigBtn = document.getElementById( 'cancel-config-btn' );
const startBtn = document.getElementById( 'start-btn' );
const gameBoard = document.getElementById( 'game-board' );

//Event Listeners
form.addEventListener( 'submit', savePlayerConfig );
backdrop.addEventListener( 'click', closePlayerConfig );
editBtnPlayer1.addEventListener( 'click', openPlayerConfig );
editBtnPlayer2.addEventListener( 'click', openPlayerConfig );
cancelConfigBtn.addEventListener( 'click', closePlayerConfig );
startBtn.addEventListener( 'click', startNewGame );
gameBoard.addEventListener( 'click', selectGameFiled );
