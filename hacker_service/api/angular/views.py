from rest_framework import viewsets
from .models import Angular
from .serializers import AngularSerializer

class AngularViewSet(viewsets.ModelViewSet):
    queryset = Angular.objects.all()
    serializer_class = AngularSerializer
