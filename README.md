# Weather Sounds

Приложение для воспроизведения звуков природы с красивым визуальным оформлением.

## Функциональность

- Воспроизведение звуков дождя, лета и зимы
- Красивые фоновые изображения для каждого звука
- Контроль громкости
- Адаптивный дизайн
- Случайный фон при загрузке страницы

## Технологии

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack

## Настройка проекта

### Установка зависимостей

```bash
npm install --save-dev @eslint/js css-loader css-minimizer-webpack-plugin eslint eslint-webpack-plugin globals html-webpack-plugin mini-css-extract-plugin postcss postcss-loader postcss-preset-env sass sass-loader style-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server webpack-merge
```

### Конфигурация Webpack

Проект использует три конфигурационных файла webpack:

1. `webpack.config.common.js` - общие настройки:

   - Обработка CSS и SCSS файлов
   - Обработка изображений и шрифтов
   - Настройка HTML шаблона
   - Настройка выходных файлов

2. `webpack.config.dev.js` - настройки для разработки:

   - Hot reload
   - Source maps
   - ESLint
   - Dev server на порту 3000

3. `webpack.config.prod.js` - настройки для production:
   - Минификация CSS и JavaScript
   - Оптимизация изображений
   - Source maps для production

## Структура проекта

```
nature-sound/
├── src/
│   ├── assets/
│   │   ├── sounds/
│   │   ├── icons/
│   │   └── images/
│   ├── fonts/
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── webpack.config.common.js
├── webpack.config.dev.js
├── webpack.config.prod.js
└── package.json
```

## Лицензия

ISC
