from django.contrib import admin
from .models import AudioData, Card, History, ExerciseCount, Contact, Weekstreak, OutputAudio

# Register your models here.
admin.site.register(Card)
admin.site.register(History)
admin.site.register(ExerciseCount)
admin.site.register(Contact)
admin.site.register(Weekstreak)
admin.site.register(AudioData)
admin.site.register(OutputAudio)