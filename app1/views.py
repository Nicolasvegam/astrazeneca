from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Job, Collection
from static.app1.csv.data import Data , Capacidades

def index(request):
    collections = Collection.objects.all()
    context = {'collections': collections}
    return render(request, 'app1/index.html', context)

def index2(request):
    context = {'capacidades':Capacidades}
    return render(request, 'app1/index 2.html',context)

def MercadoExterno(request):
    context = {'capacidades':Capacidades}
    return render(request, 'app1/MercadoExterno.html',context)

def Navbar(request):
    context = {'capacidades':Capacidades}
    return render(request, 'app1/Navbar.html',context)
def Topbar(request):
    return render(request, 'app1/Topbar.html')

def MatrizIdeal(request, capacidad):
    context = {'capacidad':capacidad,'capacidades':Capacidades}
    return render(request, 'app1/MatrizIdeal.html',context)

def MatrizComparada(request):
    my_var = 'ejemplo estado'
    context = {'my_var': my_var, 'capacidades':Capacidades}
    return render(request, 'app1/MatrizComparada.html', context)

    
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
