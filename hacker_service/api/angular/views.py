# api/views.py
import json, os
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.db import transaction
from .models import Angular
from .serializers import AngularSerializer
from rest_framework import viewsets


class AngularViewSet(viewsets.ModelViewSet):
    queryset = Angular.objects.all()
    serializer_class = AngularSerializer

@require_POST
def load_json_to_db(request):
    file_path = os.path.join(settings.BASE_DIR, "data.json")
    with open(file_path) as f:
        records = json.load(f)

    try:
        with transaction.atomic():
            for rec in records:
                # If id exists, update; else create new
                obj, created = Angular.objects.update_or_create(
                    id=rec.get("id"),   # None means insert new
                    defaults={
                        "serial_number": rec.get("serial_number", "01"),
                        "category": rec.get("category", ""),
                        "topic": rec.get("topic", "general"),
                        "content_status": rec.get("content_status", "pending"),
                        "visible": rec.get("visible", True),
                        "question": rec.get("question"),
                        "answer": rec.get("answer"),
                        "answer2": rec.get("answer2"),
                        "image_url": rec.get("image_url"),
                        "image2_url": rec.get("image2_url"),
                        "image3_url": rec.get("image3_url"),
                        "angular_questions": rec.get("angular_questions"),
                    }
                )
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse({"status": "success"})
