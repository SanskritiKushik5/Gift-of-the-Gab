from django.shortcuts import render
from rest_framework.views import APIView
from .models import Card, History
from .serializers import CardSerializer, HistorySerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class CardAPIView(APIView):
    serializer_class = CardSerializer
    # permission_classes = [IsAuthenticated, IsOwner]

    def get_object(self):
        try:
            obj = Card.objects.get()
            self.check_object_permissions(self.request, obj)
            return obj
        except Card.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        serializer = self.serializer_class(self.get_object())
        print(serializer)
        serialized_data = serializer.data
        print(serialized_data)
        return Response(serialized_data, status=status.HTTP_200_OK)

class HistoryAPIView(APIView):
    serializer_class = HistorySerializer
    # permission_classes = [IsAuthenticated, IsOwner]

    def get_object(self):
        try:
            obj = History.objects.get()
            self.check_object_permissions(self.request, obj)
            return obj
        except History.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        serializer = self.serializer_class(self.get_object())
        serialized_data = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)

