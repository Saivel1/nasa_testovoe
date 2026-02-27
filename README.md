# NASA — Django Slider Project

Лендинг «Космическое агентство» на Django 5.2 с фотослайдером, управляемым через админку.

## Стек
- **Python** 3.12 / **Django** 5.2
- **MySQL** 8+
- **Bootstrap** 5 — вёрстка
- **Slick Slider** (Slider Syncing) — слайдер
- **GLightbox** — полноэкранный просмотр по клику
- **django-filer** — управление изображениями
- **django-admin-sortable2** — drag & drop порядок слайдов

---

## Быстрый старт

### 1. Клонировать репозиторий
```bash
git clone <URL_РЕПОЗИТОРИЯ>
cd django_slider_project
```

### 2. Создать виртуальное окружение
```bash
python3.12 -m venv venv
source venv/bin/activate        # Linux / macOS
venv\Scripts\activate           # Windows
```

### 3. Установить зависимости
```bash
pip install -r req.pip
```

> **PyMySQL — чистый Python, системные библиотеки не нужны.** Устанавливается через pip без дополнительных зависимостей.

### 4. Создать базу данных MySQL
```sql
CREATE DATABASE slider_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'slider_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON slider_db.* TO 'slider_user'@'localhost';
FLUSH PRIVILEGES;
```

### 5. Настроить подключение к БД
Отредактировать `config/settings.py`, раздел `DATABASES`, или задать переменные окружения:
```bash
export DB_NAME=slider_db
export DB_USER=slider_user
export DB_PASSWORD=your_password
export DB_HOST=127.0.0.1
export DB_PORT=3306
```

### 6. Применить миграции
```bash
python manage.py migrate
```

### 7. Создать суперпользователя
```bash
python manage.py createsuperuser
```

### 8. Запустить сервер
```bash
python manage.py runserver
```

Открыть: [http://127.0.0.1:8000](http://127.0.0.1:8000)  
Админка: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

---

## Работа с админкой

1. Зайти в **Слайдер → Слайды**
2. Добавить слайды: загрузить фото через **django-filer**, заполнить название
3. Менять порядок перетаскиванием строк (**drag & drop**)
4. Сохранить — слайды появятся на сайте

---

## Публикация в Git

### Создать репозиторий на GitHub/GitLab и залить код

```bash
# 1. Инициализировать git в папке проекта
git init

# 2. Добавить все файлы
git add .

# 3. Первый коммит
git commit -m "Initial commit: NASA Django slider project"

# 4. Привязать удалённый репозиторий
#    Создай пустой репозиторий на github.com, затем:
git remote add origin https://github.com/ВАШ_АККАУНТ/ИМЯ_РЕПОЗИТОРИЯ.git

# 5. Отправить на GitHub
git push -u origin main
```

### Последующие коммиты
```bash
git add .
git commit -m "Описание изменений"
git push
```

### Рекомендуемая структура коммитов
```
feat: добавить слайдер с синхронизацией миниатюр
fix: исправить отображение на мобильных
style: обновить цвета под макет
docs: добавить README
```

---

## Структура проекта
```
django_slider_project/
├── config/
│   ├── settings.py       ← настройки Django + MySQL
│   ├── urls.py
│   └── wsgi.py
├── slider/
│   ├── migrations/
│   ├── templates/slider/
│   │   └── index.html    ← главная страница
│   ├── admin.py          ← превью картинок + drag&drop
│   ├── apps.py
│   ├── models.py         ← SliderItem с FilerImageField
│   ├── urls.py
│   └── views.py
├── static/
│   ├── css/main.css      ← стили (NASA dark theme)
│   ├── js/main.js        ← Slick + GLightbox
│   └── img/nasa-logo.svg
├── templates/
│   └── base.html         ← базовый шаблон с navbar
├── req.pip               ← зависимости
├── manage.py
├── .gitignore
└── README.md
```
