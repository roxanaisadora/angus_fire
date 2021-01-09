import UIShopping from './UIShopping.js'
const uiShopping = new UIShopping();

document.addEventListener('DOMContentLoaded', () => {
  uiShopping.render();
})

document.getElementById('purchas-cards')
  .addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
      //console.log(e.target.getAttribute('_id'))
      uiShopping.deletePurchas(e.target.getAttribute('_id'));
    }
    e.preventDefault();
    
  });


 