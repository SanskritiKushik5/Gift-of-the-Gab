from django.db import models
from accounts.models import Customer
from datetime import datetime

class Card(models.Model):
    exercise_name = models.CharField(max_length=500)
    thumbnail = models.ImageField(upload_to="card/images", default="")
    description = models.TextField()
    instructions = models.TextField()
    audio = models.FileField(upload_to="card/audio", default="")
    duration = models.DurationField()

    def __str__(self):
        return self.exercise_name

class History(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True)
    exercise_name = models.CharField(max_length=100)
    thumbnail = models.URLField(max_length=500, default="")
    description = models.TextField()

    def __str__(self):
        return self.exercise_name

class ExerciseCount(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    count = models.IntegerField(default=0)

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name

class custom_booleanfield(models.BooleanField):
    def reset_day(self,obj):
        val=self.value_from_object(obj)
        if (datetime.now() - pastDate).days > 1:
            val=False

class Streaks(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    day_count=custom_booleanfield()
    def __str__(self):
        return self.date_time

