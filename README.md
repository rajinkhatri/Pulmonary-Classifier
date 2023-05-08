# Pulmonary Disease Classification from X-Rays

This is an image classification app built using **TensorFlow**, **Django**, **Django REST Framework** and **React**. The app uses a machine learning model built in TensorFlow and trained on X-Ray images from various sources to classify among Normal, Pneumonia and Tuberculosis class.

![plot](https://raw.githubusercontent.com/rajinkhatri/Pulmonary-Classifier/main/Frontend/src/images/page1.png)

People Involved in this project
- [Pilot Khadka](https://github.com/Pilot-Khadka)
- [Amit Raj Pant](https://github.com/amitpant7)
- [Sujan Lamichhane](https://github.com/nextlevel7)


## Table of Contents 
- [Installation](#installation)
- [Running the application](#run-the-application)


## Installation

### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend classifier
```
```bash
python -m venv venv
```

### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

### 4. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory run:

```bash
npm start
```

### 3. View the application

Go to http://localhost:3000/ to view the application.

## Dataset
The dataset contains a total of 17,275 images, consisting of 10,406 normal images, 5,775 pneumonia images, and 1,094 tuberculosis infected images

Dataset: 
```https://www.kaggle.com/datasets/amitpant7/lungvision```
