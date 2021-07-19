from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = [
            "username",
            "email",
            "first_name",
            "last_name",
            "date_of_birth",
        ]

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=True, write_only=True)
    password2 = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = Customer
        fields = [
            "username",
            "email",
            "first_name",
            "last_name",
            "date_of_birth",
            "password",
            "password2",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "password2": {"write_only": True},
        }

    def create(self, validated_data):
        username = validated_data.get("username")
        email = validated_data.get("email")
        first_name = validated_data.get("first_name")
        last_name = validated_data.get("last_name")
        date_of_birth = validated_data.get("date_of_birth")
        password = validated_data.get("password")
        password2 = validated_data.get("password2")
        if password == password2:
            user = Customer(
                username=username,
                email=email,
                first_name=first_name,
                last_name=last_name,
                date_of_birth=date_of_birth,
            )
            user.set_password(password)
            user.save()
            return user
        else:
            raise serializers.ValidationError({"error": "Both passwords do not match!"})

