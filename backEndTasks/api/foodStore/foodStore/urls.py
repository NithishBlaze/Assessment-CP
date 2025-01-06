from django.urls import path,re_path,include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.contrib import admin


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Yokoso Watshinawo Soul Society !",
      terms_of_service="http://127.0.0.1:8000/",
      contact=openapi.Contact(email="nithish@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
#    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   path('admin/', admin.site.urls),
   path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('api/chef/', include('chef.urls')),
   path('api/dish/', include('dish.urls'))
]