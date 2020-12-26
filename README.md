# Astrazeneca

La siguiente aplicación tiene por objetivo hacer la medición y control de competencias y comportamientos por parte de AstraZeneca en el cono sur
(i.e. Argentina, Chile y Uruguay).

A continuación, se detallan el funcionamiento y explicación de los componentes:

* app1/MATRICES: es la ubicación de la matrices ideales de AstraZeneca, esto es sólo ocupado en un fase de desarrollo de la plataforma,
ya que en un caso de producción estas matrices deben estar disponibles en un servidor. En su interior contiene las matrices de
los tres roles (i.e. AMP, FLSM y KAM) en un formato .xlsx.

* fake_data.py: este es un archivo también de desarrollo. Básicamente, es un seeder para el testeo de la plataforma. Al interior de este script
tenemos las funciones que leen automáticamente las matrices para enviar esa información en forma de puntaje en un formato JSON al back-end

* levels.py: funciones de apoyo para calcular toda la data que aparece en las vista generales.
