const sideAB_HTML = document.getElementById('sideAB')
const sideBC_HTML = document.getElementById('sideBC')
const sideCA_HTML = document.getElementById('sideCA')
const assemble = document.getElementById('assemble')

assemble.addEventListener('click',generalFunction)

function conditionsOfExistenceOfATriangle() {
    const sideAB = Number(sideAB_HTML.value)
    const sideBC = Number(sideBC_HTML.value)
    const sideCA = Number(sideCA_HTML.value)

    if ((sideAB < sideBC + sideCA) && (sideBC < sideAB + sideCA) && (sideCA < sideBC + sideAB)) {
        return true
    } else {
        return false
    }
}

function generalFunction() {
    if (conditionsOfExistenceOfATriangle()) {
        alert()    
    } else {
        alert('Não é possível formar um triângulo com estas medidas')
    }
}