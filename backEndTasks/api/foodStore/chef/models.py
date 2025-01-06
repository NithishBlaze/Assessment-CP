from django.db import models

class chefDetails(models.Model):
    full_name = models.CharField(max_length=50)
    age = models.IntegerField()
    # image = models.ImageField(null=True , blank=True, upload_to='images/')