from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('<int:id>/', views.show),
    path('create/',views.create),
    path('playlist/',views.addPlaylist),
    path('users/<int:id>',views.showUser),
]