from django.contrib import admin
from .models import Card, History, ExerciseCount, Contact

# Register your models here.
admin.site.register(Card)
admin.site.register(History)
admin.site.register(ExerciseCount)
admin.site.register(Contact)
