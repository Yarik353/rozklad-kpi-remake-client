# Rozklad KPI Remake (client part)

## Курсова робота з курсу "Інженерія ПЗ"

Тема роботи: "Написання API та клієнтської частини для розкладу КПІ використовуючи технології: Node.js, Rest API, Vue.js, MongoDB"

### Проектування інтерфейсу
**Опис структури проекту**

![project_structure](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/project_structure.png)

`node_modules`: бібліотека залежностей проекту.

папка `src`: місце, де ми в основному працюємо, додавання і модифікація компонентів - все це працює в цій папці, що буде докладно описано нижче.

`.gitignore`: вказано файл, ігнорований git, всі операції git на нього не впливають.

`favicon.ico`: маленька іконка поряд з заголовком вкладки браузера.

`index.html`: файл домашньої сторінки, коли проект запущений, компоненти, які ми згенерували в папці *src*, будуть автоматично вставлені в цей файл.

`package-lock.json`: файл, який автоматично генерується при зміні *node_modules* або *package.json*. Основна функція цього файлу - визначити залежності від встановленого в даний момент пакета, щоб такі ж залежності були згенеровані при подальшому перевстановленні, ігноруючи оновлення, які сталися під час розробки проекту.

`package.json`: вказані залежні бібліотеки, які будуть використовуватися в середовищі розробки і генерації проекту.

`README.md`: еквівалентно файлу заміток, в якому пояснюються деякі моменти, що потребують уваги в процесі розробки проекту.

**Структура папки `src`**

`components`: знаходяться основні компоненти.

`App.vue`: компонент введення, компоненти на сторінках будуть вставлені в цей компонент, і цей компонент буде вставлений в файл *index.html* для формування односторінкового додатку.

`main.js`: вступний файл js, його функція - представляти глобальні бібліотеки, загальні стилі і методи, а також задавати маршрути.

**Структура папки `components`**

`InputSection`: компонент, що описує поле вводу, та кнопку підтвердження (слугує для відображення таких полів вводу: назва группи для розкладу занянть та розкладу сесії, а також ПІБ викладача для розкладу занять викладачів).

`MenuSection`: компонент, що описує меню для перемикання між сторінками для вводу розкладу занять, сесії та розкладу для викладачів.

`Table`: компонент, що описує таблицю для відображення розкладу занять, сесії та розкладу для викладачів.

**Сторінка пошуку розкладу занять груп**
![search_group_schedule_page](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/search_group_schedule_page.png)
**Сторінка пошуку розкладу викладачів**
![search_teacher_schedule_page](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/search_teacher_schedule_page.png)
**Сторінка пошуку розкладу сесій**
![search_exam_schedule_page](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/search_exam_schedule_page.png)
**Фільтер пошуку**
![search_filter](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/search_filter.png)
**Сторінка розкладу занять групи**
![group_schedule_page](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/images/group_schedule_page.png)

*Підготував Мусійчук Ярослав*

# Учасники та контактна інформація
|**Name**|**Gmail**|**Telegram**|
|-------------------|-------------------------------|-----------|
|*Мусійчук Ярослав*|yaredmus@ukr.net|https://t.me/yared_mus|
|*Чопик Назар*|nazar.chopyk@gmail.com|https://t.me/naz_olegovich|


## Інше
[Серверна частина](https://github.com/naz-olegovich/rozklad-kpi-remake-server)

[Звітність](https://github.com/naz-olegovich/rozklad-kpi-remake-server/blob/main/doc/coursework.md)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
