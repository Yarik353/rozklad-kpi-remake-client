<!-- Generated by documentation.js. Update this documentation by updating the source code. -->
# App.vue
### Table of Contents

*   [menuButtonClick][1]
    *   [Parameters][2]

## menuButtonClick

Функція для відображення потрібного поля вводу

### Parameters

*   `buttonNumber`  номер кнопки із розділу меню

[1]: #menubuttonclick

[2]: #parameters

# InputSection.vue

### Table of Contents

*   [filteredGroups][3]
*   [insertGroupName][4]
    *   [Parameters][5]
*   [checkSearch][6]

## filteredGroups

Функція фільтрує назви груп

Returns **[array][7]** відфільтрований список груп

## insertGroupName

Функція вставляє назву групи, вибрану із пошукового фільтру, у поле для вводу

### Parameters

*   `name`  обрана назва групи із пошукового фільтра

## checkSearch

Функція переверіє коли показувати пошуковий філтр

Returns **[boolean][8]** якщо поле для вводу або відфільтрований список пусті - повертається false

[3]: #filteredgroups

[4]: #insertgroupname

[5]: #parameters

[6]: #checksearch

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

# Table.vue

### Table of Contents

*   [filteredLessons][9]
    *   [Parameters][10]

## filteredLessons

Функція формує зручний масив із розкладом групи для зручного впорядкового заповнення таблиці

### Parameters

*   `time`  час початку пари
*   `week`  тиждень (перший або другий)

[9]: #filteredlessons

[10]: #parameters
