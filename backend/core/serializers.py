from rest_framework import serializers
<<<<<<< HEAD
from .models import Card,History
=======
from .models import Card, History
>>>>>>> upstream/main

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
<<<<<<< HEAD
        fields = "_all_"
=======
        fields = "__all__"
>>>>>>> upstream/main

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
<<<<<<< HEAD
        fields = "_all_"
        
=======
        fields = "__all__"
>>>>>>> upstream/main
