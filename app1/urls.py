from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('index2/', views.index2, name='index2'),
    path('Navbar/', views.Navbar, name='Navbar'),
    path('MatrizIdeal/<capacidad>/', views.MatrizIdeal, name='MatrizIdeal'),
    path('MatrizComparada/', views.MatrizComparada, name='MatrizComparada'),
    path('MercadoExterno/', views.MercadoExterno, name='MercadoExterno'),

    # ex: /polls/5/
    path('<int:collection_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:job_id>/results/', views.results, name='results'),
]
