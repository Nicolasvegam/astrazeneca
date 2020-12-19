from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('index2/', views.index2, name='index2'),
    path('Navbar/', views.Navbar, name='Navbar'),
    path('Matriz_Competencia_Principal/<cargo>/<capacidad>/', views.Matriz_Competencia_Principal, name='Matriz_Competencia_Principal'),
    path('Matriz_Competencia_Secundaria/<cargo>/<capacidad>/', views.Matriz_Competencia_Secundaria, name='Matriz_Competencia_Secundaria'),
    path('Matriz_Resumen_Cargo/<cargo>/', views.Matriz_Resumen_Cargo, name='Matriz_Resumen_Cargo'),
    path('MercadoExterno/', views.MercadoExterno, name='MercadoExterno'),

    # ex: /polls/5/
    path('<int:collection_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:job_id>/results/', views.results, name='results'),
]
