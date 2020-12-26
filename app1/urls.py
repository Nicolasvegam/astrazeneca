from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    path('index2/', views.index2, name='index2'),
    path('chile/', views.index2, name='chile'),
    path('uruguay/', views.index2, name='uruguay'),
    path('argentina/', views.index2, name='argentina'),
    path('Navbar/', views.Navbar, name='Navbar'),
    path('Matriz_Competencia_Principal/<cargo>/<capacidad>/', views.Matriz_Competencia_Principal, name='Matriz_Competencia_Principal'),
    path('Matriz_Competencia_Principal_Individual/<cargo>/<capacidad>/', views.Matriz_Competencia_Principal_Individual, name='Matriz_Competencia_Principal_Individual'),
    path('Matriz_Competencia_Secundaria/<cargo>/<capacidad>/', views.Matriz_Competencia_Secundaria, name='Matriz_Competencia_Secundaria'),
    path('Matriz_Competencia_Secundaria_Individual/<cargo>/<capacidad>/', views.Matriz_Competencia_Secundaria_Individual, name='Matriz_Competencia_Secundaria_Individual'),
    path('Matriz_Resumen_Cargo/<cargo>/', views.Matriz_Resumen_Cargo, name='Matriz_Resumen_Cargo'),
    path('Matriz_Resumen_Cargo_Individual/<cargo>/', views.Matriz_Resumen_Cargo_Individual, name='Matriz_Resumen_Cargo_Individual'),
    path('MercadoExterno/', views.MercadoExterno, name='MercadoExterno'),

    # ex: /polls/5/
    path('<int:collection_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:job_id>/results/', views.results, name='results'),
]
