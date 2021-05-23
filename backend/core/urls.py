from django.urls import path
from .views import CardAPIView, HistoryAPIView
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path("api/card/", CardAPIView.as_view(), name="card_view"),
    path("api/history/", HistoryAPIView.as_view(), name="history_view"),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)