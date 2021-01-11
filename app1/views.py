from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Job, Collection
from static.app1.csv.data import Data
from .fake_data import output, amp_ideal, kam_ideal, flsm_ideal
from .mercado_externo import data_mercado
import json
#------------ PROCESO DE OUTPUT ----------------------------------------
def index_navbar():
    data = json.loads(output)
    cargos = [ 'FLSM', 'AMP', 'KAM']
    navbar = {'FLSM':[],'AMP':[],'KAM':[]}
    for cargo in cargos:
        principales = list(set([x['padre'] for x in data if (x['role'] == cargo)]))     
        aux = []
        for principal in principales:
            index = {}
            secundarias = list(set([x['nombre'] for x in data if (x['padre'] == principal and x['role'] == cargo)]))
            index['nombre']= principal
            index['list']= secundarias
            navbar[cargo].append(index)
       
    return navbar

#Revisar situacion de simbolos / en medio de los nombres
Capacidades = index_navbar()
def individuos_por_cargo():
    data = json.loads(output)
    FLSM = list(set([x['id'] for x in data if (x['role'] == 'FLSM' and x['id']!= 0)]))
    AMP = list(set([x['id'] for x in data if (x['role'] == 'AMP' and x['id']!= 0)]))
    KAM = list(set([x['id'] for x in data if (x['role'] == 'KAM' and x['id']!= 0)]))
    return {'FLSM': FLSM, 'AMP': AMP, 'KAM':KAM}

individuos = individuos_por_cargo()
#-----------------------------------------------------------
#para pasar
def index(request):
    collections = Collection.objects.all()
    context = {'collections': collections, 'Data': Data, 'Otro': output}
    return render(request, 'app1/index.html', context)

def index2(request):


    from .levels import graph_3, graph_2, graph

    amp_graph_3 = graph_3(amp_ideal, 60)
    kam_graph_3 = graph_3(kam_ideal, 120)
    flsm_graph_3 = graph_3(flsm_ideal, 30)
    amp_graph_3 = json.dumps(amp_graph_3,ensure_ascii=False)
    kam_graph_3 = json.dumps(kam_graph_3,ensure_ascii=False)
    flsm_graph_3 = json.dumps(flsm_graph_3,ensure_ascii=False)

    data_g2 = graph_2(120,60,30)
    resultado = graph(data_g2)

    Fundamental = resultado[0]
    Regular = resultado[1]
    Profesional = resultado[2]

    data_g2 = json.dumps(data_g2,ensure_ascii=False)

    context = {'capacidades':Capacidades,'AMP_3': amp_graph_3, 'KAM_3': kam_graph_3, 'FLSM_3': flsm_graph_3, 'data_g2': data_g2, 'test': 12, 'Fundamental': Fundamental, 'Regular': Regular, 'Profesional': Profesional}
    return render(request, 'app1/Informacion_General.html',context)


def MercadoExterno(request):
    # Agregar Json palabra/frecuencia general
    context = {'capacidades':Capacidades, 'Data': Data, 'Frecuencias': data_mercado}
    return render(request, 'app1/Mercado_Laboral_Externo.html',context)

def Navbar(request):
    context = {'capacidades':Capacidades, 'Data': Data}
    return render(request, 'app1/Navbar.html',context)
def Topbar(request):
    return render(request, 'app1/Topbar.html')

def Matriz_Competencia_Principal(request, capacidad,cargo):
    data = json.loads(output)
    #secundarias = list(set([x['nombre'] for x in data if (x['padre'] == capacidad)]))
    secundarias = [x['list'] for x in Capacidades[cargo] if (x['nombre'] == capacidad)][0]
    individuos_ = [str(x)for x in individuos[cargo] ]

    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data':output, 'Individuos': individuos_,'secundarias':secundarias}
    return render(request, 'app1/Matriz_Competencia_Principal.html',context)

def Matriz_Competencia_Principal_Individual(request, capacidad,cargo):
    individuos_ = [str(x)for x in individuos[cargo] ]
    data = json.loads(output)
    #secundarias = list(set([x['nombre'] for x in data if (x['padre'] == capacidad)]))
    secundarias = [x['list'] for x in Capacidades[cargo] if (x['nombre'] == capacidad)][0]
     #POST id
    if request.method == "POST":
        id = request.POST['drop1']

    else:
       id = 0
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data': output, 'id':id, 'Individuos': individuos_,'secundarias':secundarias }
    return render(request, 'app1/Matriz_Competencia_Principal_Individual.html',context)

def Matriz_Competencia_Principal_Pais(request, capacidad,cargo):
    individuos_ = [str(x)for x in individuos[cargo] ]
    data = json.loads(output)
    #secundarias = list(set([x['nombre'] for x in data if (x['padre'] == capacidad)]))
    secundarias = [x['list'] for x in Capacidades[cargo] if (x['nombre'] == capacidad)][0]
     #POST id
    if request.method == "POST":
        pais = request.POST['drop1']

    else:
       pais = 'Argentina'
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data': output, 'Pais':pais, 'Individuos':individuos_,'secundarias':secundarias }
    return render(request, 'app1/Matriz_Competencia_Principal_Pais.html',context)

def Matriz_Competencia_Secundaria(request, capacidad,cargo):
    data = json.loads(output)
    comportamientos = [x['comportamientos'][0]['list'] for x in data if (x['nombre'] == capacidad and x['id']== 0 and x['nivel']== 'Fundamental')]
    if (not comportamientos):
        comportamientos = [['No se ha encontrado información']]
    individuos_ = [str(x)for x in individuos[cargo] ]
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': output, 'Individuos': individuos_, 'comportamientos':comportamientos[0]}
    return render(request, 'app1/Matriz_Competencia_Secundaria.html',context)

def Matriz_Competencia_Secundaria_Individual(request, capacidad,cargo): #POST id
    individuos_ = [str(x)for x in individuos[cargo] ]
    data = json.loads(output)
    comportamientos = [x['comportamientos'][0]['list'] for x in data if (x['nombre'] == capacidad and x['id']== 0 and x['nivel']== 'Fundamental')]
    if request.method == "POST":
        id = request.POST['drop1']

    else:
       id = 0

    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': output, 'id':id, 'Individuos': individuos_,  'comportamientos':comportamientos[0]}
    return render(request, 'app1/Matriz_Competencia_Secundaria_Individual.html',context)

def Matriz_Competencia_Secundaria_Pais(request, capacidad,cargo): #POST id
    individuos_ = [str(x)for x in individuos[cargo] ]
    data = json.loads(output)
    comportamientos = [x['comportamientos'][0]['list'] for x in data if (x['nombre'] == capacidad and x['id']== 0 and x['nivel']== 'Fundamental')]
    if request.method == "POST":
        pais = request.POST['drop1']

    else:
       pais = 0

    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': output, 'Pais':pais, 'Individuos': individuos_,  'comportamientos':comportamientos[0]}
    return render(request, 'app1/Matriz_Competencia_Secundaria_Pais.html',context)


def Matriz_Resumen_Cargo(request, cargo):
    from .levels import random_graph_radar
    
    individuos_ = [str(x)for x in individuos[cargo] ]
    lista = [x['nombre'] for x in Capacidades[cargo]]
    data_random = random_graph_radar(lista)
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': output, 'Individuos': individuos_, 'list': lista, 'principales': data_random}
    return render(request, 'app1/Matriz_Resumen_Cargo.html', context)

def Matriz_Resumen_Cargo_Individual(request, cargo):

    from .levels import random_graph_radar
    individuos_ = [str(x)for x in individuos[cargo] ]
    lista = [x['nombre'] for x in Capacidades[cargo]]
    data_random = random_graph_radar(lista)
    #POST id
    if request.method == "POST":
        id = request.POST['drop1']

    else:
       id = 0

    #---------------
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': output, 'id':id, 'Individuos': individuos_, 'list': lista, 'principales':data_random}
    return render(request, 'app1/Matriz_Resumen_Cargo_Individual.html', context)

def Matriz_Resumen_Cargo_Pais(request, cargo):
    from .levels import random_graph_radar
    individuos_ = [str(x)for x in individuos[cargo] ]
    lista = [x['nombre'] for x in Capacidades[cargo]]
    data_random = random_graph_radar(lista)
    #POST id
    if request.method == "POST":
        pais = request.POST['drop1']

    else:
       id = 0

    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': output, 'Pais':pais, 'Individuos': individuos_, 'list': lista, 'principales': data_random}
    return render(request, 'app1/Matriz_Resumen_Cargo_Pais.html', context)



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
