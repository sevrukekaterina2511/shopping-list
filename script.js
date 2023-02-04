const input = document.querySelector('#input');
const items = document.querySelector('#items');

input.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        const textForItem = input.value;

        const element = document.createElement('li');
        element.textContent = textForItem;
        element.addEventListener('click', function() {
            element.classList.toggle('done');
        });

        if (textForItem != ' ') {
            items.append(element);
        }
        input.value = ' ';
    }
});



/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */