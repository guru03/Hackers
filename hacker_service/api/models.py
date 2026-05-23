from django.db import models

class Hacker(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    skills = models.TextField()
    experience = models.IntegerField()

    def __str__(self):
        return self.name
