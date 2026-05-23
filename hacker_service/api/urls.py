from django.urls import path, include
from rest_framework import routers
from .views import HackerViewSet
from .blogs.views import BlogViewSet
from .angular.views import AngularViewSet
from .contacts.views import ContactViewSet


router = routers.DefaultRouter()
router.register(r'hackers', HackerViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'angulars', AngularViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]