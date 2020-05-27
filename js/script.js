var cognomi = ['Alberici', 'Gentile', 'Ranocchia', 'Mingardi', 'Rozzi']
var cognomeUtente = '';

while (cognomeUtente.length == 0) {
  cognomeUtente = prompt('Dimmi il tuo cognome');
  if (cognomeUtente.length > 0 ) {
    cognomi.push(cognomeUtente);
    cognomi.sort();
  }
}
alert('Lista ordinata di cognomi' + cognomi )
alert('il mio cognome è in' + (cognomi.indexOf(cognomeUtente) +'° posizione'));
