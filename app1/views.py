from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Job, Collection
from static.app1.csv.data import Data , Capacidades
from .fake_data import output

#para pasar
def index(request):
    collections = Collection.objects.all()
    context = {'collections': collections, 'Data': Data, 'Otro': output}
    return render(request, 'app1/index.html', context)

def index2(request):
    #print(output)
    #A partir de Data se deberia calcular el [] con Competencia principal/Score por cargo que se muestra en la vista
    context = {'capacidades':Capacidades,'Data': Data, 'Otro': output}
    return render(request, 'app1/Informacion_General.html',context)

def MercadoExterno(request):
    # Agregar Json palabra/frecuencia general
    context = {'capacidades':Capacidades, 'Data': Data}
    return render(request, 'app1/Mercado_Laboral_Externo.html',context)

def Navbar(request):
    context = {'capacidades':Capacidades, 'Data': Data}
    return render(request, 'app1/Navbar.html',context)
def Topbar(request):
    return render(request, 'app1/Topbar.html')

def Matriz_Competencia_Principal(request, capacidad,cargo):
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data': Data, 'Otro': output}
    return render(request, 'app1/Matriz_Competencia_Principal.html',context)

def Matriz_Competencia_Principal_Individual(request, capacidad,cargo):
     #POST id
    if request.method == "POST":
        id = request.POST['drop1']
        print("ID usuario")
        print(id)
    else:
       id = 0
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data': Data, 'id':id}
    return render(request, 'app1/Matriz_Competencia_Principal_Individual.html',context)

def Matriz_Competencia_Secundaria(request, capacidad,cargo):
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': Data}
    return render(request, 'app1/Matriz_Competencia_Secundaria.html',context)

def Matriz_Competencia_Secundaria_Individual(request, capacidad,cargo): #POST id
    if request.method == "POST":
        id = request.POST['drop1']
        print("ID usuario")
        print(id)
    else:
       id = 0

    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': Data, 'id':id}
    return render(request, 'app1/Matriz_Competencia_Secundaria_Individual.html',context)

def Matriz_Resumen_Cargo(request, cargo):
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': Data}
    return render(request, 'app1/Matriz_Resumen_Cargo.html', context)

def Matriz_Resumen_Cargo_Individual(request, cargo):
    #POST id
    if request.method == "POST":
        id = request.POST['drop1']
        print("ID usuario")
        print(id)
    else:
       id = 0

    #---------------
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': Data, 'id':id}
    return render(request, 'app1/Matriz_Resumen_Cargo_Individual.html', context)


def detail(request, collection_id):

    #try:
    #    collection = Collection.objects.get(pk=collection_id)

    #except Collection.DoesNotExist:
    #    raise Http404("Collection does not exist")

    collection = get_object_or_404(Collection, pk=collection_id)

    return render(request, 'app1/detail.html', {'collection': collection})

def results(request, job_id):
    response = "You're looking at the results of Job %s."
    return HttpResponse(response % job_id)
