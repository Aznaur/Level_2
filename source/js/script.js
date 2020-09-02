'use strict';
(function () {
  var item = document.querySelectorAll('[data-name]');
  var select = document.querySelectorAll('.select');
  var selectHover = document.querySelectorAll('.selectHover');

  for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var target = '#' + evt.currentTarget.dataset.name;
      var check = document.querySelector(target);

      if (!check.disabled && check.checked) {
        check.checked = '';
      } else if (!check.disabled && !check.checked) {
        check.checked = 'checked';
      }
    });

    item[i].addEventListener('mouseenter', function (evt) {
      var target = '#' + evt.currentTarget.dataset.name;
      var check = document.querySelector(target);

      if (!check.disabled && check.checked) {
        select[i].style.display = 'block';
        selectHover[i].style.display = 'none';
        // itemWeight[i].style.backgroundColor = '#d91667';

      }
    });

    item[i].addEventListener('mouseleave', function (evt) {
      var target = '#' + evt.currentTarget.dataset.name;
      var check = document.querySelector(target);

      if (!check.disabled && check.checked) {
        select[i].style.display = 'none';
        selectHover[i].style.display = 'block';
        // itemWeight[i].style.backgroundColor = '#e62e7a';
      }
    });

  }

})();
