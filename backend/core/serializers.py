from rest_framework import serializers
from .models import Card, History, ExerciseCount, Contact, Weekstreak, AudioData, OutputAudio

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

class AudioDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioData
        fields = "__all__"

class OutputAudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutputAudio
        fields = "__all__"