from django.shortcuts import render

from rest_framework import viewsets
from .models import Hacker
from .serializers import HackerSerializer

class HackerViewSet(viewsets.ModelViewSet):
    queryset = Hacker.objects.all()
    serializer_class = HackerSerializer
