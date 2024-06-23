var detalheVisible = true; // Variável para controlar o estado visível dos cards

function toggleCards() {
  var detalhe = document.getElementById('detalhe');
  var detalhe2 = document.getElementById('detalhe2');   
  var btn = document.getElementById('btn');
  var btn2 = document.getElementById('btn2')

  // Verifica qual card está visível e alterna
  if (detalheVisible) {
    detalhe.style.display = 'none';
    detalhe2.style.display = 'grid';
    btn.style.display = 'none'
    btn2.style.display = 'grid'
    detalheVisible = false;
    
  } else {
    detalhe.style.display = 'grid';
    detalhe2.style.display = 'none';
    btn.style.display = 'grid';
    btn2.style.display = 'none';
    detalheVisible = true;
  }

  
}
