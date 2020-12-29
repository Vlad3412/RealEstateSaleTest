/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
// фільтр для мобльних пристоїв
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
// Клік по кнопкі для показу/скривання фільтра і зміна іконки
sidebarToggleBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};
// показати ще три карточки
const btnShowMoreCards = document.querySelector('.btn-more')
const hiddenCards = document.querySelectorAll('.card-link--hidden')
// Клікаєм по кнопкі і показ 3-х скритих карточок
btnShowMoreCards.addEventListener('click', function(){
    hiddenCards.forEach(function(card){
        card.classList.remove('card-link--hidden');
    })
})
// показати/скрити контент в середині віджитів
const widgets = document.querySelectorAll('.widget');
// Знаходим всі віджети на сторінкі
widgets.forEach(function(widget){
    // "Слухаєм" клік в середині віджета
    widget.addEventListener('click', function(e){
        // Якщо клік по заголовку тоді скриваємо/показуємо тіло віджета 
        if (e.target.classList.contains('widget__title')){
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});

// location-05(Любая)
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');
//Вибір кнопки "Любая" і вимкнення других чекбоксів
checkBoxAny.addEventListener('change', function(){
    if(checkBoxAny.checked){
        topLocationCheckboxes.forEach(function(item){
            item.checked = false;
        });
    }
})
// Вимкнення кнопки "любая", при виборі інших параметрів
topLocationCheckboxes.forEach(function(item){
    item.addEventListener('change', function(){
        if (checkBoxAny.checked){
        checkBoxAny.checked = false;
        }
    })
})

// Показати ще 3 доп опції з чек боксом в фільтрі
const showMoreOptions  = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes  = document.querySelectorAll('.checkbox--hidden');//колекція елементів
showMoreOptions.onclick = function(e){
    e.preventDefolfault();
// Якщо блоки були скриті - показуємо
    if(showMoreOptions.dataset.options == 'hidden'){
        hiddenCheckBoxes.forEach(function(item){
            item.style.display = 'block';
         });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options = 'visible';
    }
    // Якщо блоки були видимі - скриваємо
    else if(showMoreOptions.dataset.options == 'visible'){
        hiddenCheckBoxes.forEach(function(item){
            item.style.display = 'none';
         });
        showMoreOptions.innerText = "Показать ещё";
        showMoreOptions.dataset.options = 'hidden';
    }
}