from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    title_tag = models.CharField(max_length=50)
    image = models.ImageField(null=True , blank=True, upload_to='images/')
    author = models.ForeignKey(User, on_delete = models.CASCADE)
    content = models.TextField()
    
    def __str__(self) :
        return self.title + ' | ' + str(self.author) 
    
    def get_absolute_url(self):
        # return reverse("post-detail", args=str(self.id))
        return reverse("home", args='' )
    
    
    

