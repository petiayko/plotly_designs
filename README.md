# Различные варианты оформления графиков в Plotly

Изображения (гистограмма, линейный график вместе и на странице аналитики):<br>

- Текущий вариант:<br>
  ![curr_tog.png](pictures/curr_tog.png)
  ![curr_hist.png](pictures/curr_hist.png)
  ![curr_line.png](pictures/curr_line.png)
- Первый вариант:<br>
  - Зеленый (салатовый) цвет (**больше пойдет что-то темное**)
  - Черный текст
  - Другой шрифт
  - Заливка под графиком плотности распределения вероятности
  - Обводка столбцов гистограммы
  - Сетка на гистограмме
  - Рамка графика
  ![first_tog.png](pictures/first_tog.png)
  ![first_hist.png](pictures/first_hist.png)
  ![first_line.png](pictures/first_line.png)
- Второй вариант:<br>
  - Серый цвет
  - Заливка под графиком плотности распределения вероятности
  - Маркеры на графике плотности распределения вероятности
  - Черный текст
  - Другой шрифт
  ![second_tog.png](pictures/second_tog.png)
  ![second_hist.png](pictures/second_hist.png)
  ![second_line.png](pictures/second_line.png)
  <br>
- **ОБСУДИТЬ:**<br>
  - Только точки на графике плотности распределения вероятности
  - Заливка под графиков плотности распределения вероятности
  - Другой шрифт
  - Обводка столбцов гистограммы
  - Сетка на гистограмме
  - Рамка графика
  ![first_im_tog.png](pictures/first_im_tog.png)
  ![first_im_hist.png](pictures/first_im_hist.png)
  ![first_im_line.png](pictures/first_im_line.png)
  На большом числе бинов (до 500 и больше 500):<br>
  ![first_im_hist_bins_less.png](pictures/first_im_hist_bins_less.png)
  ![first_im_hist_bins_more.png](pictures/first_im_hist_bins_more.png)
- Первый вариант правок:
  - Размер маркеров с 8 до 5
  - Черные маркеры
  - Черная линия
  - Шрифт старый (согласованный с окружающими элементами)
  - Заливка светлее
  - Граница графика слева
  ![first_bsd_tog.png](pictures/first_bsd_tog.png)
  ![first_bsd_hist.png](pictures/first_bsd_hist.png)
  ![first_bsd_line.png](pictures/first_bsd_line.png)
  На большом числе бинов (до 500 и больше 500):<br>
  ![first_bsd_hist_bins_less.png](pictures/first_bsd_hist_bins_less.png)
  ![first_bsd_hist_bins_more.png](pictures/first_bsd_hist_bins_more.png)
- Второй вариант правок:
  - Размер маркеров с 8 до 5
  - Серые маркеры
  - Серая линия
  - Шрифт старый (согласованный с окружающими элементами)
  - Заливка светлее
  - Граница графика слева
  ![second_bsd_tog.png](pictures/second_bsd_tog.png)
  ![second_bsd_hist.png](pictures/second_bsd_hist.png)
  ![second_bsd_line.png](pictures/second_bsd_line.png)
  На большом числе бинов (до 500 и больше 500):<br>
  ![second_bsd_hist_bins_less.png](pictures/second_bsd_hist_bins_less.png)
  ![second_bsd_hist_bins_more.png](pictures/second_bsd_hist_bins_more.png)

Что, я считаю, стоит оставить:
- Обводка столбцов, потому что это позволяет избежать сливание столбцов, когда их высота равна
- Заливка на плотности распределения вероятности, потому что это делает график стилистически более похожим на
  гистограмму

Полезные ссылки:

- [Шрифты](https://www.w3.org/Style/Examples/007/fonts.ru.html)