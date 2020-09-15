'use strict';
(function () {
  let item = document.querySelectorAll('[data-name]');
  let select1 = document.querySelectorAll('.select1');
  let select2 = document.querySelectorAll('.select2');

  for (let i = 0; i < item.length; i++) {
    (function(i) {
      item[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        let target = '#' + evt.currentTarget.dataset.name;
        let check = document.querySelector(target);

        if (!check.disabled && check.checked) {
          check.checked = '';
        } else if (!check.disabled && !check.checked) {
          check.checked = 'checked';
        }
      });

      item[i].addEventListener('mouseenter', function (evt) {
        let target = '#' + evt.currentTarget.dataset.name;
        let check = document.querySelector(target);

        if (!check.disabled && check.checked) {
          select1[i].classList.toggle('item__content-toggle');
          select2[i].classList.toggle('item__content-toggle');
          // itemWeight[i].style.backgroundColor = '#d91667';

        }
      });

      item[i].addEventListener('mouseleave', function (evt) {
        let target = '#' + evt.currentTarget.dataset.name;
        let check = document.querySelector(target);


        if (!check.disabled && check.checked) {
          select1[i].classList.toggle('item__content-toggle');
          select2[i].classList.toggle('item__content-toggle');
          // itemWeight[i].style.backgroundColor = '#e62e7a';
        }
      });

    })(i);
  }
})()
