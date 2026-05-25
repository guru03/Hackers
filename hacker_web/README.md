# HackerWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Full Stack CRUD Application

Django + PostgreSQL + Angular

## A full-stack CRUD application built using:

Django
Django REST Framework
PostgreSQL
Angular

## This project contains APIs and frontend modules for:

Blog Management
Contact Us Form
Interview Questions Management

Features
Backend Features
REST API using Django REST Framework
PostgreSQL database integration
CRUD Operations
Modular app structure
CORS enabled for Angular frontend
API versioning support
Admin panel support
Frontend Features
Angular standalone components
Angular services for API integration
Reactive forms
CRUD UI
HTTP Client integration
Reusable architecture

### Backend Setup

1. Clone Repository

git clone <repository-url>
cd project/backend

2. Create Virtual Environment
   python -m venv .venv
   .venv\Scripts\activate

3. Install Dependencies
   pip install -r requirements.txt

4. Install Required Packages
   pip install django
   pip install djangorestframework
   pip install psycopg2-binary
   pip install django-cors-headers

5. PostgreSQL Setup
   Create database in PostgreSQL:

CREATE DATABASE interview_db;

6. Configure Database
   Update settings.py

DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql',
'NAME': 'interview_db',
'USER': 'postgres',
'PASSWORD': 'yourpassword',
'HOST': 'localhost',
'PORT': '5432',
}
}

7. Add Installed Apps

INSTALLED_APPS = [
...
'rest_framework',
'corsheaders',

    'blog',
    'contact',
    'interview',

]

8. Configure CORS
   MIDDLEWARE = [
   'corsheaders.middleware.CorsMiddleware',
   ...
   ]

CORS_ALLOW_ALL_ORIGINS = True

9. Run Migration
   python manage.py makemigrations
   python manage.py migrate

10. Create Superuser
    python manage.py createsuperuser
    python manage.py createsuperuser

11. Run Django Server
    python manage.py runserver

# Backend runs on:

http://127.0.0.1:8000/

### Useful Commands

# Django

```bash
python manage.py runserver
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

### Deployment

## Backend Deployment

Recommended:

Render
Railway

### Deployment

## Frontend Deployment

Recommended:
Vercel
Netlifyy

### Author
Guru Shankar

### License
This project is licensed under the MIT License.
