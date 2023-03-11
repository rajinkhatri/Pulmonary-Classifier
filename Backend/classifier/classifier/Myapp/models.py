from django.db import models

# Create your models here.
class Image(models.Model):
    picture = models.ImageField(upload_to='images/')
    