from django.apps import AppConfig
import os
from django.conf import settings
from tensorflow import keras


class MyappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Myapp'


class ResNetModelConfig(AppConfig):

        MODEL_FILE_PATH = os.path.join(settings.BASE_DIR, 'ml/models', 'resnet.h5')
        model = keras.models.load_model(MODEL_FILE_PATH)


class InceptionV3modelConfig(AppConfig):

        MODEL_FILE_PATH = os.path.join(settings.BASE_DIR, 'ml/models', 'inception_training-82.h5')
        model = keras.models.load_model(MODEL_FILE_PATH)