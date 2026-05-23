from django.db import models

class Angular(models.Model):
    category = models.CharField(max_length=50)
    topic = models.CharField(max_length=100)
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question[:50]
