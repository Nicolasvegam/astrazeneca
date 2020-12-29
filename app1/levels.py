import random
import json

def graph_3(ideal, n):
    competencias_principales = []

    for competencias_secundaria in ideal:
        if competencias_secundaria['padre'] not in competencias_principales:
            competencias_principales.append(competencias_secundaria['padre'])

    out = []

    for competencia_principal in competencias_principales:
        Fundamental = random.randint(0, n)
        Regular = random.randint(0, n - Fundamental)
        Profesional = n - Fundamental - Regular
        out.append([competencia_principal, Fundamental, Regular, Profesional])

    return out


def graph_2(n_kam, n_amp, n_flsm):

    Fundamental_kam = random.randint(0, n_kam)
    Regular_kam = random.randint(0, n_kam - Fundamental_kam)
    Profesional_kam = n_kam - Fundamental_kam - Regular_kam

    Fundamental_amp = random.randint(0, n_amp)
    Regular_amp = random.randint(0, n_amp - Fundamental_amp)
    Profesional_amp = n_amp - Fundamental_amp - Regular_amp

    Fundamental_flsm = random.randint(0, n_flsm)
    Regular_flsm = random.randint(0, n_flsm - Fundamental_flsm)
    Profesional_flsm = n_flsm - Fundamental_flsm - Regular_flsm

    out = [['AMP', Fundamental_amp, Regular_amp, Profesional_amp],
            ['KAM', Fundamental_kam, Regular_kam, Profesional_kam],
            ['FLSM', Fundamental_flsm, Regular_flsm, Profesional_flsm]]

    return out

def graph(lista):

    Fundamental = 0
    Regular = 0
    Profesional = 0
    Suma = 0

    for cargo in lista:
        Fundamental += cargo[1]
        Regular += cargo[2]
        Profesional += cargo[3]
        Suma += cargo[1] + cargo[2] + cargo[3]

    return round(Fundamental*100/Suma), round(Regular*100/Suma), round(Profesional*100/Suma)
def random_graph_radar(competencias):
    n = len(competencias)
    puntajes = [ random.randint(0,100) for x in range(n)]
    fundamental = [ random.randint(0,30) for x in range(n)]
    regular = [ random.randint(30,50) for x in range(n)]
    profesional = [ random.randint(60,95) for x in range(n)]
    output = json.dumps([
        {
        'competencias':competencias,
        'real':puntajes,
        'fundamental': fundamental,
        'regular': regular,
        'profesional':profesional
        }
        ],ensure_ascii=False)
    return output
    