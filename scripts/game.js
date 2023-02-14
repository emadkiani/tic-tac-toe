function resetGame ()
{
    editedPlayer = 0;
    //activePlayer = winnderId - 1;
    currentRound = 0;
    gameIsOver = false;

    gameOver.style.display = 'none';
    gameOver.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>';

    let num = 0;
    for ( let i = 0; i < 3; i++ )
    {
        for ( let j = 0; j < 3; j++ )
        {
            gameData[ i ][ j ] = 0;
            gameField[ num ].textContent = '';
            gameField[ num ].classList.remove( 'disabled', 'deactivate', 'winner' );
            num++;
        }
    }
}

function startNewGame ()
{
    if ( players[ 0 ].name === '' ) players[ 0 ].name = 'Player 1';
    if ( players[ 1 ].name === '' ) players[ 1 ].name = 'Player 2';

    resetGame();

    activePlayerName.textContent = players[ activePlayer ].name;
    gameArea.style.display = 'block';
}

function switchPlayer ()
{
    if ( activePlayer === 0 )
    {
        activePlayer = 1;
    } else if ( activePlayer === 1 )
    {
        activePlayer = 0;
    } else
    {
        console.log( 'error' );
        return
    }
    activePlayerName.textContent = players[ activePlayer ].name;
}

function selectGameFiled ( event )
{
    if ( event.target.tagName !== 'LI' || gameIsOver === true )
    {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if ( gameData[ selectedRow ][ selectedColumn ] > 0 )
    {
        alert( 'Please select an empty field!' )
        return;
    }

    selectedField.textContent = players[ activePlayer ].symbol;
    selectedField.classList.add( 'disabled' );

    gameData[ selectedRow ][ selectedColumn ] = activePlayer + 1;

    currentRound++;

    const winnerId = checkForGameOver();

    if ( winnerId !== 0 )
    {
        endGame( winnerId );
        return
    }

    switchPlayer();
}

function checkForGameOver ()
{
    for ( let i = 0; i < 3; i++ )
    {
        if (
            gameData[ i ][ 0 ] > 0 &&
            gameData[ i ][ 0 ] === gameData[ i ][ 1 ] &&
            gameData[ i ][ 1 ] === gameData[ i ][ 2 ]
        )
        {
            endGameColor( i, 'row' );
            return gameData[ i ][ 0 ];
        }
    }

    for ( let i = 0; i < 3; i++ )
    {
        if (
            gameData[ 0 ][ i ] > 0 &&
            gameData[ 0 ][ i ] === gameData[ 1 ][ i ] &&
            gameData[ 1 ][ i ] === gameData[ 2 ][ i ]
        )
        {
            endGameColor( i, 'col' );
            return gameData[ 0 ][ i ];
        }
    }

    if (
        gameData[ 0 ][ 0 ] > 0 &&
        gameData[ 0 ][ 0 ] === gameData[ 1 ][ 1 ] &&
        gameData[ 1 ][ 1 ] === gameData[ 2 ][ 2 ]
    )
    {
        endGameColor( 0, 'left-diagnoal' );
        return gameData[ 0 ][ 0 ];
    }

    if (
        gameData[ 0 ][ 2 ] > 0 &&
        gameData[ 0 ][ 2 ] === gameData[ 1 ][ 1 ] &&
        gameData[ 1 ][ 1 ] === gameData[ 2 ][ 0 ]
    )
    {
        endGameColor( 0, 'right-diagnoal' );
        return gameData[ 0 ][ 2 ];
    }

    if ( currentRound === 9 )
    {
        endGameColor( -1, 'none' );
        return -1
    }

    return 0;
}

function endGameColor ( num, pos )
{
    if ( pos === 'row' )
    {
        if ( num === 0 )
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i >= 0 && i <= 2 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        } else if ( num === 1 )
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i >= 3 && i <= 5 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        } else
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i >= 6 && i <= 8 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        }
    } else if ( pos === 'col' )
    {
        if ( num === 0 )
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i === 0 || i === 3 || i === 6 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        } else if ( num === 1 )
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i === 1 || i === 4 || i === 7 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        } else
        {
            for ( let i = 0; i < 9; i++ )
            {
                if ( i === 2 || i === 5 || i === 8 )
                {
                    gameField[ i ].classList.add( 'winner' );
                } else
                {
                    gameField[ i ].classList.add( 'deactivate' );
                }
            }
        }
    } else if ( pos === 'left-diagnoal' )
    {
        console.log( 'here left' );
        for ( let i = 0; i < 9; i++ )
        {
            if ( i === 0 || i === 4 || i === 8 )
            {
                gameField[ i ].classList.add( 'winner' );
            } else
            {
                gameField[ i ].classList.add( 'deactivate' );
            }
        }
    } else if ( pos === 'right-diagnoal' )
    {
        console.log( 'here right' );
        for ( let i = 0; i < 9; i++ )
        {
            if ( i === 2 || i === 4 || i === 6 )
            {
                gameField[ i ].classList.add( 'winner' );
            } else
            {
                gameField[ i ].classList.add( 'deactivate' );
            }
        }
    } else if ( pos === 'none' )
    {
        for ( let i = 0; i < 9; i++ )
        {
            gameField[ i ].classList.add( 'deactivate' );
        }
    } else
    {
        console.log( 'error' );
    }
}

function endGame ( winnderId )
{
    gameIsOver = true;
    gameOver.style.display = 'block';
    if ( winnderId > 0 )
    {
        const winnderName = players[ winnderId - 1 ].name;
        gameOver.firstElementChild.firstElementChild.textContent = winnderName;
    } else
    {
        gameOver.firstElementChild.textContent = 'It\'is a draw!'
    }
}