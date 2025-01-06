from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChefViewSet

router = DefaultRouter()
router.register('',ChefViewSet, basename='chef')
app_name = 'chef'

urlpatterns = [
    path('',include(router.urls))
    
]

