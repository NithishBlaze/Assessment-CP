from django.db import models
from chef.models import chefDetails
# Create your models here.
class dishDetails(models.Model):
    dish_name = models.CharField(max_length=50)
    rating = models.IntegerField()
    chef = models.ForeignKey(chefDetails,on_delete = models.CASCADE)
