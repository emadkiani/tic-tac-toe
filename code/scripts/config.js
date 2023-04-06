//Open player config
function openPlayerConfig ( event )
{
    editedPlayer = +event.target.dataset.playerid;
    configOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

//Close player config
function closePlayerConfig ()
{
    configOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formControl.classList.remove( 'error' );
    errorsOutput.textContent = '';
    playerNameInput.value = '';
}

//Save player config
function savePlayerConfig ( event )
{
    event.preventDefault();
    const formData = new FormData( event.target );
    const enteredPlayername = formData.get( 'playername' ).trim();

    if ( !enteredPlayername )
    {
        formControl.classList.add( 'error' );
        errorsOutput.textContent = 'Please enter a valid name!';
        return;
    }

    const playerName = document.getElementById( `player-${ editedPlayer }-name` );
    playerName.textContent = enteredPlayername;
    players[ editedPlayer - 1 ].name = enteredPlayername;

    closePlayerConfig();
}
