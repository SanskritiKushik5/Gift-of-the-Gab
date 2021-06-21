from rest_framework import serializers
from .models import Card, History, ExerciseCount, Contact, Weekstreak

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = "__all__"

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = "__all__"

class ExerciseCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseCount
        fields = "__all__"

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

class WeekstreakSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weekstreak
        fields = "__all__"
