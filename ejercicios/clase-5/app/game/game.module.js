'use strict';

angular
    .module('XEnLinea.juego', [])
    .controller('GameController', GameController);

/* @ngInject */
function GameController() {
    var vm = this;
    vm.title = 'GameController';

    vm.rows = [];
    vm.clickOnCell = clickOnCell;

    crearTableVacía(10);

    //////

    function crearTableVacía(cantidad) {

        // Vacía la tabla sin modificar la
        // referencia al array original
        vm.rows.length = 0;

        for (var i = 0; i < cantidad; i++) {
            var row = {
                cells: []
            };
            for (var j = 0; j < cantidad; j++) {
                row.cells.push({
                    value: null
                });
            }
            vm.rows.push(row);
        }
    }

    function clickOnCell(tr, td) {
        console.log('clickOnCell', tr, td);
        var added = addChipOnColumn(td, 'me', vm.rows);
        if (added) {
            if (didIWin('me', 3, vm.rows)) {
                alert('User ' + 'me' + ' won!!!');
            } else {
                addRandomChip('PC', vm.rows);

                if (didIWin('PC', 3, vm.rows)) {
                    alert('User ' + 'PC' + ' won!!!');
                }
            }
        }
    }

    function addChipOnColumn(column, value, rows) {
        for (var i = rows.length - 1; i >= 0; i--) {
            if (!rows[i].cells[column].value) {
                rows[i].cells[column].value = value;
                console.log('addChipOnColumn', i, column, value);
                return true;
            }
        }
        console.log('addChipOnColumn', value, false);
        return false;
    }

    function addRandomChip(userName, rows) {
        console.log('addRandomChip', userName);
        var td = parseInt(Math.random() * 10, 10);
        while (!addChipOnColumn(td, userName, rows)) {
            td = parseInt(Math.random() * 10, 10);
        }
    }

    function didIWin(userName, count, rows) {
        for (var i = rows.length - 1; i >= 0; i--) {
            var consecutiveCount = 0;
            for (var j = rows[i].cells.length - 1; j >= 0; j--) {
                if (rows[i].cells[j].value === userName) {
                    consecutiveCount++;
                } else {
                    consecutiveCount = 0;
                }
                if (consecutiveCount >= count) {
                    return true;
                }
            }
        }
        return false;
    }

}
