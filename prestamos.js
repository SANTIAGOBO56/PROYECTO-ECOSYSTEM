function showTable(tableId) {
    // Ocultar todas las tablas
    const tables = document.querySelectorAll('.table-content');
    tables.forEach(table => {
        table.classList.remove('active');
    });

    // Quitar clase activa de todos los botones
    const buttons = document.querySelectorAll('.menu-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar la tabla seleccionada
    const selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.classList.add('active');
    }

    // Resaltar el botón seleccionado
    const selectedButton = document.querySelector(`button[onclick="showTable('${tableId}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Mostrar la tabla de "Préstamos" al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showTable('prestamos');
});
