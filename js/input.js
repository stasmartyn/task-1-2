const Input=document.getElementById('input');
const ShowNumbers=document.getElementById('showNumbers');
const phoneInput=document.getElementById('phoneInput');
Input.addEventListener("change",Show)
    function Show(e){
    ShowNumbers.innerHTML=String( new Intl.NumberFormat('ru', { minimumFractionDigits: 2, style: 'decimal' }).format(e.target.value).replace(',', '.'))

}



// const input = document.body.querySelector('.telmask');

phoneInput.addEventListener('keypress', (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  })

  phoneInput.addEventListener('focus', () => {
    if (phoneInput.value.length === 0) {
      phoneInput.value = '+380';
      phoneInput.selectionStart = phoneInput.value.length;
    }
  })

  phoneInput.addEventListener('click', (evt) => {
    if (phoneInput.selectionStart < 4) {
      phoneInput.selectionStart = phoneInput.value.length;
    }
    if (evt.key === 'Backspace' && phoneInput.value.length <= 4) {
      evt.preventDefault();
    }
  })

  phoneInput.addEventListener('blur', () => {
    if (phoneInput.value === '+380') {
      phoneInput.value = '';
    }
  })

  phoneInput.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace' && phoneInput.value.length <= 4) {
      evt.preventDefault();
    }
  })