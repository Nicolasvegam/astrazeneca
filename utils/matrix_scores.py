import openpyxl
import json

#Variables estáticas / condiciones de borde
loc = 'MATRICES/Matriz KAM.xlsx' #Aquí se va a buscar la matrix ideal del KAM, ya sea local o en una nube ej en S3
niveles = {'Fundamental' : ['C','D','E','F'], 'Regular' : ['G','H','I','J'], 'Profesional': ['K','L','M','N']}
columna_comportamientos = 'B'
output = []
ideal = False


def identificar_nivel(hoja, fila):

    for nivel in niveles:
        columnas = niveles[nivel]
        for columna in columnas:
            if hoja[columna + str(fila)].value == 'X':
                return nivel

def identificar_score(nivel, hoja, fila):

    columnas = niveles[nivel]
    for columna in columnas:
        if hoja[columna + str(fila)].value == 'X':
            return columnas.index(columna)


def iterar_comportamiento(hoja,primer_comportamiento, ultimo_comportamiento, nombre, padre, id, nivel):

    dato = {'id': id,
           'nivel': nivel, #0,
           'nombre': nombre, #next.value,
           'padre': padre, #competencia_principal,
           'comportamientos': [
                {
                    'list': [],
                    'scores': []
                }
            ]
          }

    for fila_comportamiento in range(primer_comportamiento, ultimo_comportamiento + 1):

        celda_comportamiento = hoja[columna_comportamientos + str(fila_comportamiento)]
        #Se agrega el comportamiento
        dato['comportamientos'][0]['list'].append(celda_comportamiento.value)
        #Para cada comportamiento ver el score
        score = identificar_score(nivel, hoja, fila_comportamiento)
        dato['comportamientos'][0]['scores'].append(score)

    return dato

def main(output):

    wb = openpyxl.load_workbook(loc)
    competencias_principales = wb.sheetnames

    for competencia_principal in competencias_principales:

        hoja = wb[competencia_principal]

        posicion_next = 'A11'

        #posicion_next = 'A' + str(ultimo_comportamiento + 4)
        next = hoja[posicion_next]

        while next.value:

            for cell in hoja.merged_cells.ranges:
                if posicion_next in cell:
                    bloque = cell

            primer_comportamiento = bloque.bounds[1]
            ultimo_comportamiento = bloque.bounds[3]


            if not ideal:
                nivel = identificar_nivel(hoja, primer_comportamiento)
                dato = iterar_comportamiento(hoja, primer_comportamiento, ultimo_comportamiento, next.value, competencia_principal, 0, nivel)
                output.append(dato)

            else:
                chunk = []
                for nivel in list(niveles.keys()):
                    dato = iterar_comportamiento(hoja, primer_comportamiento, ultimo_comportamiento, next.value, competencia_principal, 0, nivel)
                    chunk.append(dato)
                output+= chunk

            posicion_next = 'A' + str(ultimo_comportamiento + 4)
            next = hoja[posicion_next]

    return output

out = main(output)

for o in out:
    print(o, '\n')
