from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DishViewSet

router = DefaultRouter()
router.register('',DishViewSet, basename='dish')
app_name = 'dish'

urlpatterns = [
    path('',include(router.urls))
    
]

