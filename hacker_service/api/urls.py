from django.urls import path, include
from rest_framework import routers
from .views import HackerViewSet

router = routers.DefaultRouter()
router.register(r'hackers', HackerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]