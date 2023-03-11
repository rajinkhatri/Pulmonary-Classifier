from django.shortcuts import render
import urllib
import json
import numpy as np
from .apps import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, JSONParser
from PIL import Image

# Create your views here.
#softmax fucnction 

def softmax(vec):
    exponential = np.exp(vec)
    probabilities = exponential / np.sum(exponential)
    return probabilities

class UploadView(APIView):
    # permission_classes = (permissions.AllowAny,)
    parser_classes = (MultiPartParser, JSONParser)

    @staticmethod
    def post(request):
        Image_predict= request.data.get('picture')

        #loading models
        # ResNetModel = ResNetModelConfig.model
        InceptionV3model = InceptionV3modelConfig.model

        # Preprocess the image (this needs to be checked)
        # Image_predict.seek(0)
        image_raw = Image.open(Image_predict)
        image1 = np.array(image_raw.resize((224, 224)))
        if len(image1.shape) == 2: #code checks if the image is grayscale. If it is, the image is converted to color by duplicating the grayscale channel three times to create an RGB image.
            image1 = np.expand_dims(image1, axis=2)
            image1 = np.concatenate([image1, image1, image1], axis=-1)
        elif len(image1.shape) == 3 and image1.shape[2] == 4: #code checks if the image has an alpha channel. If it does, the alpha channel is removed.
            image1 = image1[:, :, :3]

        image1 = np.reshape(image1, (1, 224, 224, 3))

       

        # Get predictions from models
        # resnet_pred = ResNetModel.predict(image1)
        # output = np.argmax(resnet_pred, axis=1)
        # if output == 0:
        #     prediction_resnet = 'Normal Lung'
        # elif output == 1:
        #     prediction_resnet = 'Pneumonia'
        # else:
        #     prediction_resnet = 'Tuberculosis'

        # probability_resnet = round(np.max(softmax(resnet_pred[0]))*100,3)

        inception_pred = InceptionV3model.predict(image1)
        output = np.argmax(inception_pred, axis=1)
        if output == 0:
            prediction_inception = 'Normal Lung'
        elif output == 1:
            prediction_inception = 'Pneumonia'
        else:
            prediction_inception = 'Tuberculosis'

        # probability_inception = round(np.max(softmax(inception_pred[0]))*100,3)

        return Response(
            {
            # 'prediction_resnet': prediction_resnet
            # 'probability_resnet': probability_resnet,
            'prediction_inception': prediction_inception,
            # 'probability_inception': probability_inception
            },
            status=status.HTTP_200_OK)
