const tablePacientes = document.getElementById('tablaBody'); //Apuntar a tabla html

let pacientes = [
    {   
        id: 1,
        nombre: "Julio Perez",
        telefono: 55428978,
        horario: '14:14',
        dia: 'Lunes'
    },

    {   
        id: 2,
        nombre: "Andres Garcia",
        telefono: 56897841,
        horario: '04:45',
        dia: 'Sabado'
    }
];

function mostrarPacientes(){
    tablePacientes.innerHTML = ""; //Agrega un elemento html.
    
    pacientes.forEach(function insertar(paciente){
        const row = `
            <tr>
                <td>${paciente.nombre}</td>
                <td>${paciente.telefono}</td>
                <td>${paciente.horario}</td>
                <td>${paciente.dia}</td>
            </tr>
            `
            tablePacientes.innerHTML += row;
    });

}

function guardarPaciente(){
    alert("Paciente Guardado");
    mostrarPacientes();
}

