from rest_framework import serializers
from .models import Card,History

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = "_all_"

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = "_all_"
        