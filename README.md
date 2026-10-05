# Memory Game  

1. [Task:](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/memory-game/README.md)  
2. [Screenshot:](https://postimg.cc/zb4bRTHD)  
3. [Deployment:](test-memory-game-dev.netlify.app)  
4. Done **04.10.2026** / deadline **06.10.2026**  
5. **Score: 100 / 100**  


## Instruction  
<details>  
  <summary>Local Run</summary>  

# 🧠 Memory Match Game  

A classic memory card game built with vanilla JavaScript using ES modules.  

## 🚀 How to Run Locally  

Since this project utilizes JavaScript modules (`type="module"`), running it on your computer requires a local development server to bypass browser security restrictions.  

### Option 1 (VS Code)  
1. Open the project folder in **VS Code**.  
2. Install the **Live Server** extension (if you haven't already).  
3. Right-click on the `index.html` file and select **"Open with Live Server"**.  

### Option 2 (Via Terminal)  
If you have Node.js installed, simply run the following command inside the project directory:  
```bash
npx serve  
```
*After that, open `http://localhost:3000` in your web browser.*   

</details>  

### Cross Check List  


## 1. Генерация разметки — 15 баллов

<details>
  <summary>(15 / 15)</summary>  
    
 - [x] Интерфейс создан через `document.createElement` или собственные обёртки над ним. В исходном `<body>` есть только `<script>`.   (15 / 15)

</details>  
    
## 2. Начало игры — 10 баллов  

<details>  
  <summary>(10 / 10)</summary>  
    
 - [x] На поле 16 карточек — 8 пар, закрытых одинаковой рубашкой.   (5 / 5)  
    
 - [x] Игра начинается автоматически при загрузке и перезагрузке страницы. Счётчики обнулены, кнопки хедера доступны.   (5 / 5)  

</details>  
    
## 3. Перемешивание — 5 баллов  

<details>  
  <summary>(5 / 5)</summary>  
    
 - [x] Карточки случайно перемешиваются при загрузке страницы и каждой новой игре.   (5 / 5)  

</details>  
    
## 4. Выбор карточек — 15 баллов  

<details>  
  <summary>(15 / 15)</summary>  
    
 - [x] Можно открыть две карточки по очереди; первая ждёт выбора второй.   (5 / 5)  
    
 - [x] Совпавшая пара остаётся открытой, игра продолжается.   (5 / 5)  
    
 - [x] Повторные клики по открытым карточкам и найденным парам игнорируются.   (5 / 5)  

</details>  
    
## 5. Несовпавшие пары — 10 баллов  

<details>  
  <summary>(10 / 10)</summary>    
    
 - [x] Несовпавшая пара закрывается через 700–1500 мс, в том числе при открытой таблице лидеров. (5 / 5)  
    
 - [x] До закрытия пары другие карточки выбрать нельзя. (5 / 5)  

</details>  
    
## 6. Счётчики — 5 баллов  

<details>  
  <summary>(5 / 5)</summary>  
    
 - [x] Ходы и найденные пары подсчитываются по правилам игры. (5 / 5)  

</details>  
    
## 7. Модальные окна — 15 баллов  

<details>  
  <summary>(15 / 15)</summary>  
    
 - [x] После нахождения всех пар открывается модальное окно победы с итоговым числом ходов. (5 / 5)  
    
 - [x] Оба модальных окна открываются и закрываются по общим правилам; общий код переиспользуется. (5 / 5)  
    
 - [x] Просмотр и закрытие модальных окон не сбрасывают поле и счётчики. (5 / 5)  

</details>  
    
## 8. Таблица лидеров — 10 баллов  

<details>  
  <summary>(10 / 10)</summary>  
    
 - [x] Кнопка в хедере открывает модальное окно с корректно оформленным и отсортированным топ-10 или сообщением об отсутствии результатов. (5 / 5)  
    
 - [x] Завершённые игры сохраняются в `localStorage` без дубликатов; результаты доступны после повторного открытия приложения. (5 / 5)  

</details>  
    
## 9. Новая игра — 15 баллов  

<details>  
  <summary>(15 / 15)</summary>
    
 - [x] Обе кнопки «Новая игра» сбрасывают поле и счётчики без перезагрузки страницы; модальное окно победы закрывается. (10 / 10)  
    
 - [x] Перезапуск с открытой несовпавшей парой происходит сразу и отменяет её таймер. (5 / 5)  

</details>  
    
##  10. README — 5 дополнительных баллов  

<details>  
  <summary>(5 / 5)</summary>  
    
 - [x] В ветке `memory-game` есть README с описанием приложения и инструкцией локального запуска. (5 / 5)  

</details>  
    
##  Штрафы  

<details>  
  <summary>(0 / -100)</summary>  

 - [ ] PR отсутствует, недоступен, закрыт, смержен или не соответствует разделу «Требования к Pull Request». Проблемы со ссылкой на депло  оцениваются только следующим пунктом. (0 / -30)  
    
 - [ ] В PR нет ссылки на деплой либо по ней приложение недоступно. Проверяющий запускает работу локально по README и оценивает доступну  функциональность; штраф за деплой сохраняется. Если запуск не удался, укажите ошибку в отзыве. Ошибки игровой логики сами по себе не считаются отсутствием деплоя. (0 / -30)  
    
 - [ ] Коммиты с решением не соответствуют [конвенции RS School](https://rs.school/ru/docs/git-convention). Начальный коммит репозитория   автоматические merge-коммиты не учитываются. (0 / -10)  
    
 - [ ] HTML-элементы интерфейса создаются не через `document.createElement` или в исходном `<body>` есть элементы, кроме `<script>`. Собственны  функции-обёртки над `document.createElement` разрешены. (0 / -100)  
    
 - [ ] Используются присваивания `innerHTML` или `outerHTML` (включая пустую строку), `insertAdjacentHTML`, `document.write`, `document.writeln`  либо разбор HTML-строк через `DOMParser` или `Range.createContextualFragment`. Чтение `innerHTML` и `outerHTML` не штрафуется. (0 / -100)  
    
 - [ ] Используются `alert`, `confirm` или `prompt`. (0 / -100)  
    
 - [ ] Используются сторонние библиотеки или фреймворки для интерфейса, работы с DOM или игровой логики. Самописные реализации разрешены, если и  код доступен в репозитории и соблюдает ограничения задания. Обёртка над сторонним фреймворком не считается самописной реализацией. Инструменты разработки не штрафуются. (0 / -100)  

</details>  

### Total :  (100 / 100)  