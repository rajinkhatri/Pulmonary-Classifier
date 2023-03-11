from django.urls import path
from .views import UploadView

urlpatterns = [
    path('api/classify-image', UploadView.as_view(), name='classify_image'),
]
