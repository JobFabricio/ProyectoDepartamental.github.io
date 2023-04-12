
/*La función inserta un nuevo elemento con una clase e ID específicas en ciertos elementos div basados en
  su texto interno y cambia el estilo del cursor de esos elementos div.*/

function insertAnimation(){

    document.querySelectorAll('.box').forEach(div =>{
        
        /* El código verifica si la longitud del texto interno de un elemento div no es igual a cero.
         Si no es cero y el texto interno es igual a lo que tenga escrito, entonces agrega un nuevo
         elemento div con clase "Movimiento de la pieza" e id "De la pieza" dentro del elemento div original. 
         También cambia la estilo de cursor del elemento div original a 'puntero'. */

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wpawn' ){
                div.innerHTML = `${div.innerText}<div class="ElementoMov" id="${div.innerText}" ></div>`
                div.style.cursor = 'pointer'
            }
        }
        if(div.innerText.length !== 0){
            if(div.innerText == 'Bpawn' ){
                div.innerHTML = `${div.innerText}<div class="ElementosMovimientos" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }
        
        if(div.innerText.length !== 0){
            if(div.innerText == 'Bknight' ){
                div.innerHTML = `${div.innerText}<div class="CaballosMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wknight' ){
                div.innerHTML = `${div.innerText}<div class="CaballoMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wrook' ){
                div.innerHTML = `${div.innerText}<div class="TowerMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Brook' ){
                div.innerHTML = `${div.innerText}<div class="TowersMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wbishop' ){
                div.innerHTML = `${div.innerText}<div class="AlfilMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Bbishop' ){
                div.innerHTML = `${div.innerText}<div class="AlfilsMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wking' ){
                div.innerHTML = `${div.innerText}<div class="KingMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Bking' ){
                div.innerHTML = `${div.innerText}<div class="KingsMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Bqueen' ){
                div.innerHTML = `${div.innerText}<div class="QueensMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }

        if(div.innerText.length !== 0){
            if(div.innerText == 'Wqueen' ){
                div.innerHTML = `${div.innerText}<div class="QueenMov" id="${div.innerText}"></div>`
                div.style.cursor = 'pointer'
            }
        }
    })
}
insertAnimation()




/*La función colorea los cuadros en una página web según su posición usando JavaScript.*/

function coloring() {

    /*El código anterior está seleccionando todos los elementos con la clase "caja" e iterando 
    sobre ellos usando un bucle forEach. Para cada elemento, extrae los valores numéricos de su 
    atributo ID, los suma y verifica si la suma es par o impar. Si la suma es par, el color de 
    fondo del elemento se establece en blanco (#fff), y si la suma es impar, el color de fondo 
    del elemento se establece en negro (#000).*/
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = '#fff'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = '#000'
        }

    })
}
coloring()





/*La función cambia el color de fondo de ciertos elementos en función de su contenido de texto y
posición dentro de una cuadrícula.*/

function reddish() {

    /* El código anterior está seleccionando todos los elementos con clase "caja" y verificando si alguno 
    de ellos tiene un color de fondo de "rosa". Si se encuentra un cuadro con color de fondo rosa, el 
    código verifica si cualquier otro cuadro tiene un color de fondo de "verde" y contenido de texto no vacío. 
    Si tal caja es encontrado, el código extrae el primer carácter del contenido de texto de ambos cuadros y 
    compara a ellos. Luego calcula la suma de los números de fila y columna del cuadro verde y verifica si
    es par o impar. Si los primeros caracteres del contenido de texto de ambas casillas son iguales */

    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = '#ffff'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = '#000'
                    }
                }
            })
        }
    })
}

//Es un valor que nos ayudara a hacer los cambios de los turnos de los jugadores
tog = 1

/* El código crea un tablero de ajedrez con piezas y permite a los 
jugadores para hacer movimientos haciendo clic en los cuadrados. El programa destaca los movimientos 
disponibles para cada pieza cuando se hace clic y alterna el turno entre rojo y verde. El programa 
también busca un condición ganadora donde solo queda un rey en el tablero y declara al ganador. */
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        

    /* El código está comprobando si el color de fondo de un elemento HTML (representado por la variable
    "elemento") es verde y si su texto interno está vacío. Si ambas condiciones son verdaderas, se incrementa
    el valor.*/
        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

    /* El código está comprobando si existe un elemento con un color de fondo verde y texto no vacío.
    Si lo hace, recorre todos los elementos con un color de fondo rosa y obtiene la identificación y
    texto del primero que encuentre. Establece el texto del elemento verde en el texto de
    el elemento rosa, borra el texto del elemento rosa y aplica algo de color y
    efectos de animación Finalmente, incrementa el valor de la variable "tog" en 1. */

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertAnimation()
                    tog = tog + 1
                    
                }
            })
        }

        /* El código anterior toma el `id` de un elemento HTML y realiza operaciones en él. */
        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup


        function whosTurn(toggle) {

            // PAWN   
            /* El código verifica si una pieza de ajedrez en un tablero de ajedrez es un peón de cierto color.
            Si es un peón, cambia el color de fondo del cuadrado en el que se encuentra es rosa. 
            Luego verifica si el peón puede moverse adelante uno de los cuadrados y resalta esos 
            cuadrados en verde si están vacíos. También comprueba si el peón puede
            captura la pieza de un oponente en diagonal y resalta esos cuadrados en verde si hay
            una pieza del oponente sobre ellos. */

            if (item.innerText == `${toggle}pawn`) {
                
                item.style.backgroundColor = 'pink'
                
                if (tog % 2 !== 0 && aup < 800) {

                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
                if (tog % 2 == 0 && aup > 100) {

                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'

                    }
                }
            }

            // KING

        /* El código verifica si el texto interno de un elemento HTML coincide con una cadena específica
        (`rey`). Si lo hace, establece el color de fondo de ese elemento en rosa y
        establece el color de fondo de los elementos adyacentes (arriba, abajo, izquierda, derecha y diagonales) 
        para verde. A parte que el rey pueda comer a una pieza. */

            if (item.innerText == `${toggle}king`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'

            }


            // ROOK

        /* El código comprueba si una pieza de ajedrez en el tablero es una torre y resalta todas las
        posibles movimientos de la torre en el tablero. Lo hace comprobando todos los cuadrados en
        la misma fila y columna que la torre y resaltándolas si están vacías o contienen
        pieza de un oponente. La torre en sí también está resaltada en un color diferente que es el rosa. */

            if (item.innerText == `${toggle}rook`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                item.style.backgroundColor = 'pink'
            }



            // BISHOP

            /* El código verifica si una pieza de ajedrez (específicamente un alfil) puede moverse a
            ciertos cuadrados en un tablero de ajedrez y resalta esos cuadrados en verde. También
            destaca el propio alfil en rosa. */
            if (item.innerText == `${toggle}bishop`) {


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }



            // QUEEN

            /* El código verifica si una pieza de ajedrez (reina) puede moverse a ciertas posiciones en
            un tablero de ajedrez y resalta esas posiciones en verde. También destaca la posición
            actual de la reina en rosa. */

            if (item.innerText == `${toggle}queen`) {


                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }

            // KNIGHT

            /* El código verifica si el texto interno de un elemento HTML coincide con una determinada
            cadena ("Caballo"). Si lo hace, establece el color de fondo de ciertos otros elementos HTML 
            en verde y establece el color de fondo del elemento original en rosa.*/
            
            if (item.innerText == `${toggle}knight`) {


                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'

            }
        }
  

        /* El codigo nos ayuda a realizar los cambios de los turnos para que solo se haga un movimiento
        y que el no se juegue mas de un movimiento del mismo colo a la vez*/

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Red's Turn"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Green's Turn"
            whosTurn('B')
        }

        reddish()


        /* El código anterior está comprobando el número de reyes presentes en un juego de tablero de
        ajedrez. Está iterando a través de todos los elementos con la clase "box" y verificando si
        el texto interno del elemento es "Wking" o "Bking". Si encuentra un rey, incrementa la
        variable "numOfKings". Después de verificar todos los elementos, verifica si solo hay un rey
        en el tablero. Si solo hay un rey, muestra un mensaje de alerta que declara al ganador del
        juego según el valor de la variable "tog". Finalmente, recarga la página. */

        numOfKings = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }

        })

        if (numOfKings == 1) {
            setTimeout(() => {
                if (tog % 2 == 0) {
                    alert('Red Wins !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Green Wins !!')
                    location.reload()
                }
            }, 100)
        }



    })

})


/* El código anterior agrega un detector de eventos de clic a todos los elementos con la clase "caja".
Cuando se hace clic en un cuadro y su color de fondo es rosa, guarda la identificación y el texto
interno de ese cuadro. Luego, cuando se hace clic en otro cuadro y su color de fondo es verde y no
tiene texto interno, reemplaza el texto interno del cuadro verde con el texto guardado del cuadro
rosa y borra el texto interno del cuadro rosa. Finalmente, llama a las funciones "colorear" e
"insertarAnimación". */

document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertAnimation()
                        
                    }

                })
            })

        }

    })

})


/* El código anterior agrega un detector de eventos de clic a todos los elementos con la clase "caja".
Cuando se hace clic en un cuadro, incrementa la variable "z" en 1. Si "z" es un número par y el
color de fondo del cuadro no es verde, llama a la función "coloring()" para cambiar el color de
fondo del cuadro a verde. */

z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})