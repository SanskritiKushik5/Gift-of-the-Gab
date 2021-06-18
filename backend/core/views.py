from django.shortcuts import render
from rest_framework.views import APIView
from .models import Card, History, ExerciseCount, Contact
from .serializers import CardSerializer, HistorySerializer, ExerciseCountSerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from rest_framework.permissions import IsAuthenticated
from core.permissions import IsOwner

class CardAPIView(APIView):
    serializer_class = CardSerializer
    
    def get(self, request, format=None):
        data = Card.objects.all()

        serializer = self.serializer_class(data, many=True)
        serialized_data = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)

class HistoryAPIView(APIView):
    serializer_class = HistorySerializer
    # permission_classes = [IsAuthenticated, IsOwner]
    def post(self, request, format=None):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        data = History.objects.all()
        serializer = self.serializer_class(data, many=True)
        serialized_data = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)

class CardDetailsAPIView(APIView):
    serializer_class = CardSerializer

    def get_object(self, pk):
        try:
            obj = Card.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except Card.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        serializer = self.serializer_class(self.get_object(pk))
        serialized_data = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)

class CountAPIView(APIView):
    serializer_class = ExerciseCountSerializer
    # permission_classes = [IsAuthenticated, IsOwner]

    def get_object(self, pk):
        try:
            obj = ExerciseCount.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return obj
        except History.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        serializer = self.serializer_class(self.get_object(pk))
        serialized_data = serializer.data
        return Response(serialized_data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        customer = self.get_object(pk)
        serializer = self.serializer_class(
            customer, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CountAddAPIView(APIView):
    serializer_class = ExerciseCountSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactAPIView(APIView):
    serializer_class = ContactSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
