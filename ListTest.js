import SimpleList from './SimpleList.js';

const list = new SimpleList();

list.add(10);
list.add(100);
list.add(1000);

console.log('Lista impresa:');
list.print();

console.log('¿Está el 10 en la lista?', list.exist(10));
console.log('¿Está el 200 en la lista?', list.exist(200));

console.log('Eliminando el 100...');
list.remove(100);
console.log('Lista actualizada:')
list.print();

console.log('¿Está vacía la lista?', list.isEmpty());

list.remove(10);
list.remove(1000);
console.log('Eliminando toda la lista....')
list.print();

console.log('¿Ahora está vacía la lista?', list.isEmpty());
