from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AngularViewSet, update_angular

router = DefaultRouter()
router.register(r'angulars', AngularViewSet)

urlpatterns = [
    path('update-angular/', update_angular, name='update_angular')
]