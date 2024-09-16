import SimpleList from './SimpleList.js';

const list = new SimpleList();

list.add(10);
list.add(20);
list.add(30);

console.log('Contenido de la lista:');
list.print();

console.log('¿Existe el 20 en la lista?', list.exist(20));
console.log('¿Existe el 40 en la lista?', list.exist(40));

console.log('Eliminando el 20...');
list.remove(20);
list.print();

console.log('¿Está vacía la lista?', list.isEmpty());

list.remove(10);
list.remove(30);
list.print();

console.log('¿Está vacía la lista ahora?', list.isEmpty());
