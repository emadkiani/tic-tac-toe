let editedPlayer = 0;

const players = [
    {
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: 'O'
    },
];

const configOverlay = document.getElementById( 'config-overlay' );
const backdrop = document.getElementById( 'backdrop' );
const form = document.getElementById( 'config-form' );
const errorsOutput = document.getElementById( 'config-errors' );

const editBtnPlayer1 = document.getElementById( 'edit-btn-player-1' );
const editBtnPlayer2 = document.getElementById( 'edit-btn-player-2' );
const cancelConfigBtn = document.getElementById( 'cancel-config-btn' );

editBtnPlayer1.addEventListener( 'click', openPlayerConfig );
editBtnPlayer2.addEventListener( 'click', openPlayerConfig );
cancelConfigBtn.addEventListener( 'click', closePlayerConfig );
backdrop.addEventListener( 'click', closePlayerConfig );
form.addEventListener( 'submit', savePlayerConfig );