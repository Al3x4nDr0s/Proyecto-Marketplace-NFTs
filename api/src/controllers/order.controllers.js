const Nft = require ('../models/Nft');

// db.student.find({}).sort({units: -1})

// sort by "field" ascending and "test" descending
// query.sort({ field: 'asc', test: -1 });

// equivalent
// query.sort('field -test');

// these are equivalent
// aggregate.sort({ field: 'asc', test: -1 });
// aggregate.sort('field -test');

// Agrega un nuevo operador $sortByCount a esta canalización agregada. Acepta un nombre de campo de cadena o
// un objeto de canalización.
// Tenga en cuenta que el operador $sortByCount requiere que la nueva raíz comience con '$'. Mongoose antepondrá '$' 
// si el nombre de campo especificado no comienza con '$'.

// aggregate.sortByCount('users');
// aggregate.sortByCount({ $mergeObjects: [ "$employee", "$business" ] })

// const data = [ "Zaragoza", "madrid", "Barcelona" ];
// data.sort ((a, b) =>
//   a.toLowerCase() > b.toLowerCase() ? 1 :
//   a.toLowerCase() < b.toLowerCase() ? -1:
//   0
// );
// console.log (data);

	
// const data    = [ "Zaragoza", "Ávila", "madrid", "Barcelona" ];
// const compare = new Intl.Collator ().compare;
// data.sort (compare);
// console.log (data);

// números: (a, b) => a – b
// cadenas: (a, b) => a.localeCompare(b)