let parol = prompt('Sifreni yazin!');
let netice;

netice = 
parol.length < 4 ? 'Parol qisadir!' :
parol.length < 8 ? 'Sade parol' :
parol.length < 14 ? 'Parol murekkebdir' :
'Parol cox etibarlidir!!!';

document.getElementById('parol').innerHTML = netice;
