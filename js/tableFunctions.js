function insertarTabla(data) {

    const fragment = crearFragmento();
    const cabeceras = obtenerCabeceras(data);
    table_crearCabecera(cabeceras, fragment);
    let tbody = table_crearCuerpo(fragment);
    table_insertarDatos(tbody, data);
    table_insertarEnDom(fragment);
    
}

function crearFragmento() {
    return document.createDocumentFragment();
}

function obtenerCabeceras(data) {

    const theaders = [];

    for (const key in data[0]) {
        theaders.push(key);
    }

    return theaders;
}

function table_crearCabecera(tableHeaders, fragment) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    thead.appendChild(tr);

    tableHeaders.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header.toUpperCase();
        tr.appendChild(th);
    })

    fragment.appendChild(thead);
}

function table_crearCuerpo(fragment) {

    const tbody = document.createElement('tbody');
    fragment.appendChild(tbody);
    return tbody;

}

function table_insertarDatos(tbody, elementos) {

    elementos.forEach(elemento => {

        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        
        for (const key in elemento) {
            
            if (Object.hasOwnProperty.call(elemento, key)) {
                
                const td = document.createElement('td');
                let value = elemento[key];
                td.textContent = value;
                tr.appendChild(td);
                
            }

        }
        
    });
}

function table_insertarEnDom(fragment) {
    const table = document.getElementById('tabla-superheroes');
    table.appendChild(fragment);
}

export { insertarTabla };