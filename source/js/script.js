"use strict";
(function () {
  let item = document.querySelectorAll('[data-name]');
  let select = document.querySelectorAll('.select');
  let selectHover = document.querySelectorAll('.selectHover');
  let itemWeight = document.querySelectorAll('.item__weight');



  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      let target = '#' + evt.currentTarget.dataset.name;
      let check = document.querySelector(target);

      if (!check.disabled && check.checked) {
				check.checked = '';
      } else if (!check.disabled && !check.checked) {
        check.checked = 'checked';
      }

      console.log(check);
    });

    item[i].addEventListener('mouseenter', function(evt){
      let target = '#' + evt.currentTarget.dataset.name;
      let check = document.querySelector(target);

      if (!check.disabled && check.checked) {
        select[i].style.display = 'block';
        selectHover[i].style.display = 'none';
        // itemWeight[i].style.backgroundColor = '#d91667';

      }
    });

    item[i].addEventListener('mouseleave', function(evt){
      let target = '#' + evt.currentTarget.dataset.name;
      let check = document.querySelector(target);

      if (!check.disabled && check.checked) {
        select[i].style.display = 'none';
        selectHover[i].style.display = 'block';
        // itemWeight[i].style.backgroundColor = '#e62e7a';
      }
    });

  }

})();


// for (let j = 0; j < check.length; i++) {
//   if (check[j].checked) {
//     check[j].removeAttribute('checked');
//   } else {
//     check[j].setAttribute('checked', 'checked');
//   }
// }
