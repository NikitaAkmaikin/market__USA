const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function(element) { /* отслеживали событие клик */
  element.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget; /* отслеживали на ком конкретно происходит событие */
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active'); /* забираем у всех класс active */
  });
  
  tabTarget.classList.add('tabs__btn-item--active'); /* добавляем класс active */

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active') /* забираем у всех класс active */
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
