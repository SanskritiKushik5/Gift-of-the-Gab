from django.db import models
from accounts.models import Customer

class Card(models.Model):
<<<<<<< HEAD
    exercise_name = models.CharField(max_length=100)
    thumbnail = models.ImageField()
    description = models.TextField()
    instructions = models.TextField()
    audio = models.FileField()
    duration = models.DurationField((""))

    def _str_(self):
=======
    exercise_name = models.CharField(max_length=500)
    thumbnail = models.ImageField(upload_to="card/images", default="")
    description = models.TextField()
    instructions = models.TextField()
    audio = models.FileField(upload_to="card/audio", default="")
    duration = models.DurationField()

    def __str__(self):
>>>>>>> upstream/main
        return self.exercise_name

class History(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
<<<<<<< HEAD
    date_time = models.DateTimeField(auto_now=False, auto_now_add=False)
    exercise_name = models.CharField(max_length=100)
    thumbnail = models.ImageField()
    description = models.TextField()

    def _str_(self):
        return self.date_time


=======
    date_time = models.DateTimeField(auto_now_add=True)
    exercise_name = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to="card/images", default="")
    description = models.TextField()

    def __str__(self):
        return self.date_time
>>>>>>> upstream/main
