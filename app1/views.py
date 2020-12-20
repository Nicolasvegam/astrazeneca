from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Job, Collection
from static.app1.csv.data import Data 
from .fake_data import output
import json
#------------ PROCESO DE OUTPUT ----------------------------------------
def index_navbar():
    data = json.loads(output)
    cargos = [ 'FLSM', 'AMP', 'KAM']
    navbar = {'FLSM':[],'AMP':[],'KAM':[]}
    for cargo in cargos:
        print(cargo)
        principales = list(set([x['padre'] for x in data if (x['role'] == cargo)]))
        print(principales)
        aux = []
        for principal in principales:
            index = {}
            secundarias = list(set([x['nombre'] for x in data if (x['padre'] == principal)]))
            index['nombre']= principal
            index['list']= secundarias
            navbar[cargo].append(index)
        #print(aux)
    return navbar

#Revisar situacion de simbolos / en medio de los nombres 
Capacidades = {
    'FLSM': [{'nombre': 'Gente', 'list': ['DESARROLLO', 'COLABORACIÓN CROSS FUNCIONAL', 'LIDERAZGO', 'MANEJO DEL DESEMPEÑO']}, {'nombre': 'Coaching', 'list': ['COMUNICAR EFECTIVAMENTE', 'FACILITAR EL APRENDIZAJE Y RESULTADOS', 'PROCESO DE COACHING', 'CONSTRUIR CONFIANZA', 'ESTABLECER LAS BASES']}, {'nombre': 'Resultados', 'list': ['PLANES DE NEGOCIO', 'VISIÓN ESTRATÉGICA DEL NEGOCIO', 'ASIGNACIÓN DE RECURSOS', 'MANEJO DEL NEGOCIO', 'IMPULSA EL NEGOCIO', 'VISIÓN DE NEGOCIO', 'PLANEACIÓN']}, {'nombre': 'Conocimiento', 'list': ['ENFERMEDAD, CIENCIA, TERAPIA, PRODUCTO Y COMPETENCIA', 'CONOCIMIENTO DEL CLIENTE', 'CONOCIMIENTO DEL ENTORNO SANITARIO', 'CONOCIMIENTO DEL ENTORNO  CLIENTE', 'COMPLIANCE']}, {'nombre': 'Desarrollo profesional', 'list': ['MENTALIDAD DE CRECIMIENTO E INNOVACIÓN', '\nAUTOMOTIVACIÓN, DESARROLLO PROFESIONAL Y AUTO CONCIENCIA', 'EFICACIA INTERPERSONAL']}],
    'AMP': [{'nombre': 'Venta Focalizada en Paciente FF', 'list': ['DEMUESTRA CONOCIMIENTO PROFUNDO DE LA CUENTA CLIENTE PACIENTE', 'COMUNICACIÓN', 'ESTABLECE LA NECESIDAD INSATISFECHA DEL PACIENTE Y EL CLIENTE', 'CIERRA CON COMPROMISO EN EL PACIENTE ADECUADO', 'ESCUCHA CON INTENSION', 'PERSONALIZA EL MENSAJE Y MANEJA OBJECIONES']}, {'nombre': 'Resultados', 'list': ['PLANES DE NEGOCIO', 'VISIÓN ESTRATÉGICA DEL NEGOCIO', 'ASIGNACIÓN DE RECURSOS', 'MANEJO DEL NEGOCIO', 'IMPULSA EL NEGOCIO', 'VISIÓN DE NEGOCIO', 'PLANEACIÓN']}, {'nombre': 'Conocimiento', 'list': ['ENFERMEDAD, CIENCIA, TERAPIA, PRODUCTO Y COMPETENCIA', 'CONOCIMIENTO DEL CLIENTE', 'CONOCIMIENTO DEL ENTORNO SANITARIO', 'CONOCIMIENTO DEL ENTORNO  CLIENTE', 'COMPLIANCE']}, {'nombre': 'Auto Gerenciamiento', 'list': ['INTELIGENCIA INTERPERSONAL', 'CONCIENCIA  DESARROLLO', 'AUTOMOTIVACIÓN']}, {'nombre': 'Proceso de Ventas Virtual', 'list': ['PRE-VISITA', 'POST-VISITA', 'VISITA']}],
    'KAM': [{'nombre': 'Conocimiento Estratégico', 'list': ['CONOCIMIENTO DE LA EMPRESA', 'CONOCIMIENTO DEL CLIENTE', 'CONOCIMIENTO CIENTÍFICO', 'CONOCIMIENTOS DIGITALES', 'CONOCIMIENTO DEL ENTORNO', 'CONOCIMIENTO DEL PACIENTE']}, {'nombre': 'Liderazgo cross-funcional', 'list': ['LIDERA SIN AUTORIDAD', 'DELEGACIÓN', 'TRABAJA COLABORATIVAMENTE CON OTRAS FUNCIONES', 'COMUNICA OBJETIVOS CLAROS']}, {'nombre': 'Propuesta de Valor para el Clie', 'list': ['CREA PROPUESTA DE VALOR CON EL CLIENTE', 'IDENTIFICA EL PROBLEMA QUE IMPORTA', 'ALCANCE INTERNO Y ATRACCIÓN']}, {'nombre': 'Planificación y Gestión de Cuen', 'list': ['GESTIONA LA IMPLEMENTACIÓN', 'SETEA OBJETIVOS ESTRATEGICOS', 'MAPEA STAKEHOLDERS Y BRAND-LOVERS']}, {'nombre': 'Relación con Cliente', 'list': ['COMUNICACIÓN, INFLUENCIA Y NEGOCIACIÓN', 'COMUNICACIÓN, INFLUENCIA Y NEGOCIACIÓN VIRTUAL', 'DESARROLLO DE STAKEHOLDERS Y INFLUENCERS', 'FACILITAR GRUPOS DE CLIENTES']}]}

def individuos_por_cargo():
    data = json.loads(output)
    FLSM = list(set([x['id'] for x in data if (x['role'] == 'FLSM' and x['id']!= 0)]))
    AMP = list(set([x['id'] for x in data if (x['role'] == 'AMP' and x['id']!= 0)]))
    KAM = list(set([x['id'] for x in data if (x['role'] == 'KAM' and x['id']!= 0)]))
    #print(FLSM, AMP,KAM)
    return {'FLSM': FLSM, 'AMP': AMP, 'KAM':KAM}

individuos = individuos_por_cargo()
#-----------------------------------------------------------
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
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data':output, 'Individuos': individuos}
    return render(request, 'app1/Matriz_Competencia_Principal.html',context)

def Matriz_Competencia_Principal_Individual(request, capacidad,cargo):
     #POST id
    if request.method == "POST":
        id = request.POST['drop1']
        print("ID usuario")
        print(id)
    else:
       id = 0
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades,'Data': output, 'id':id, 'Individuos': individuos }
    return render(request, 'app1/Matriz_Competencia_Principal_Individual.html',context)

def Matriz_Competencia_Secundaria(request, capacidad,cargo):
    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': output, 'Individuos': individuos}
    return render(request, 'app1/Matriz_Competencia_Secundaria.html',context)

def Matriz_Competencia_Secundaria_Individual(request, capacidad,cargo): #POST id
    if request.method == "POST":
        id = request.POST['drop1']
        print("ID usuario")
        print(id)
    else:
       id = 0

    context = {'capacidad':capacidad,'cargo':cargo,'capacidades':Capacidades, 'Data': output, 'id':id, 'Individuos': individuos}
    return render(request, 'app1/Matriz_Competencia_Secundaria_Individual.html',context)

def Matriz_Resumen_Cargo(request, cargo):
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': output, 'Individuos': individuos}
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
    context = {'cargo': cargo, 'capacidades':Capacidades, 'Data': output, 'id':id, 'Individuos': individuos}
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
