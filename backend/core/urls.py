from django.urls import path

from .views import CardAPIView, HistoryAPIView, CardDetailsAPIView, CountAPIView, CountAddAPIView, ContactAPIView, HistoryDetailsAPIView, WeekStreakAPIView, AudioDataAPIView, WeekStreakDetailsAPIView, OutputAudioAPIView

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("api/card/", CardAPIView.as_view(), name="card_view"),
    path("api/history/", HistoryAPIView.as_view(), name="history_view"),
    path("api/card/<int:pk>/", CardDetailsAPIView.as_view(), name="card_details_view"),
    path("api/history/<int:customer>/", HistoryDetailsAPIView.as_view(), name="History_details_view"),
    path("api/weekstreak/", WeekStreakAPIView.as_view(), name="week_streak_view"),
    path("api/weekstreak/<int:customer>/", WeekStreakDetailsAPIView.as_view(), name="Weekstreak_details_view"),
    path("api/count/<int:id>/", CountAPIView.as_view(), name="count"),
    path("api/count_add/", CountAddAPIView.as_view(), name="count"),
    path("api/contact/", ContactAPIView.as_view(), name="contact"),
    path("api/audiodata/", AudioDataAPIView.as_view(), name="audio_data"),
    path("api/outputaudio/", OutputAudioAPIView.as_view(), name="output_audio"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

