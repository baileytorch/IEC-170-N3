$(document).ready(function () {
  //new DataTable("#example");
  $("#example").DataTable({
    ajax: {
      url: "https://jsonplaceholder.typicode.com/users",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "username" },
      { data: "email" },
      { data: "website" },
    ],
    language:{
        processing: "Procesando datos",
        search: 'Buscar',
        lengthMenu: "_MENU_ registros por p&aacute;gina",
        infoEmpty: "No se han encontrado registros",
        infoFiltered:   "(Filtrado de un total de _MAX_ registros)",
        zeroRecords:    "No se han encontrado registros",
        paginate: {
            first:      "Primero",
            previous:   "Anterior",
            next:       "Siguiente",
            last:       "Último"
        },
        info: "Mostrando _START_ a _END_ de un total de _TOTAL_ registros",
    }
  });
});
