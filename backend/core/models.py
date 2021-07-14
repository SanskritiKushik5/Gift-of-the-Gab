from django.db import models
from accounts.models import Customer

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
    card_id = models.IntegerField(default=0)

    def __str__(self):
        return self.exercise_name

class ExerciseCount(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    count = models.IntegerField()

    # def __str__(self):
    #     return self.customer

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name 

class Weekstreak(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    day_count = models.BooleanField()
    
    # def __str__(self):
    #     return self.date_time

class AudioData(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    input_audio = models.URLField(max_length=500, default="")
    output_audio = models.FileField(upload_to="output/audio", default="")
    card_id = models.IntegerField(default=0)

class OutputAudio(models.Model):
    output = models.FileField(upload_to="outputaud/audio", default="")