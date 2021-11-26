## Задача: 
Сверстать страницу сайта по макету Figma и написать логику для работы фильтра.

## Стэк:
1) React; ✅
2) Next.js; ✅
3) Не использовать библиотеки UI компонентов. ✅

## Задания:
1) Адаптивно сверстать каталог; ✅  

Комментарий к заданию:  
Адаптивно сверстал каталог, начиная с разрешения 320px и выше. В данном проекте использовал по большей части технологию Grid верстки, т.к. хотелось, чтобы каталог был подогнан под строгие рамки, а не растягивался и уменьшался, в зависимости от изменения ширины экрана.

2) Сделать рабочий фильтр (на стороне back-end):  
2.1) Фильтр по цене; ❌  
2.2) Фильтр по бренду. ❌  

Комментарий к заданию:  
Не получилось выполнить 2 задание, т.к. не смог найти верного варианта решения. С back-end у меня пока что еще есть затруднения, поэтому попытался реализовать фильтр через front-end, но и здесь возник момент, который я не успел решить.  

Как минимум, фильтр на цену товара был почти готов, но я не успел найти решение, как правильно передать значение хука на сервер, чтобы произошел перерендеринг страницы. Скорее всего, это можно как-то реализовать через Next.js, просто я с ним познакомился буквально в момент выдачи данной задачи, поэтому какие-то варианта для меня еще не очевидны 😅  

В каталоге используется отображение товара категории "Объективы", т.к. когда я попытался получить "Камеры", результат запроса был успешным, но почему-то товаров в данной категории не было (массив был пустым).  
