from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AngularViewSet, QuestionViewSet

router = DefaultRouter()
router.register(r'angulars', AngularViewSet)

urlpatterns = router.urls
