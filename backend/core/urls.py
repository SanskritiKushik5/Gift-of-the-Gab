from django.urls import path
<<<<<<< HEAD
from .views import CardAPIView, HistoryAPIView
from django.conf.urls.static import static
from django.conf import settings

=======
from .views import CardAPIView, HistoryAPIView, CardDetailsAPIView
>>>>>>> upstream/main

urlpatterns = [
    path("api/card/", CardAPIView.as_view(), name="card_view"),
    path("api/history/", HistoryAPIView.as_view(), name="history_view"),
<<<<<<< HEAD
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
=======
    path("api/card/<int:pk>/", CardDetailsAPIView.as_view(), name="card_details_view"),
]
>>>>>>> upstream/main
