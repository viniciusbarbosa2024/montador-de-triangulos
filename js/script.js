const sideAB_HTML = document.getElementById('sideAB')
const sideBC_HTML = document.getElementById('sideBC')
const sideCA_HTML = document.getElementById('sideCA')
const assemble = document.getElementById('assemble')

assemble.addEventListener('click',generalFunction)

function conditionsOfExistenceOfATriangle(sideAB,sideBC,sideCA) {
    if ((sideAB < sideBC + sideCA) && (sideBC < sideAB + sideCA) && (sideCA < sideBC + sideAB)) {
        return true
    } else {
        return false
    }
}

function generalFunction() {
    const sideAB = Number(sideAB_HTML.value)
    const sideBC = Number(sideBC_HTML.value)
    const sideCA = Number(sideCA_HTML.value)
    
    if (conditionsOfExistenceOfATriangle(sideAB,sideBC,sideCA)) {
        //Por lei dos cossenos

        const cosineAngleA = (sideCA**2+sideAB**2 - sideBC**2) /(2*sideCA*sideAB) 

        const cosineAngleB = (sideBC**2+sideAB**2 - sideCA**2) /(2*sideBC*sideAB) 

        const cosineAngleC = (sideBC**2+sideCA**2 - sideAB**2) /(2*sideBC*sideCA) 
        
        
    } else {
        alert('Não é possível formar um triângulo com estas medidas')
    }
}