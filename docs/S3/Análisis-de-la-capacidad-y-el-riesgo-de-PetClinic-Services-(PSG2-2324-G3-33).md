# 1. TCO
El TCO(Total Cost of Ownership) considera todos los costes asociados con la propiedad, operación y mantenimiento de un producto, sistema, servicio o
activo durante todo su ciclo de vida. Incluye los costes directos e indirectos incurridos durante todo el período de propiedad. Para estimar este coste se ha tenido en cuenta lo siguiente.
En primer lugar se tienen en cuenta los gastos en capital, es decir, aquellos asociados con la adquisición, el mantenimiento o la mejora de activos fijos.
A cotinuación se muestra en un esquema los recursos que ha necesitado la organización para llevar a cabo la aplicación.


| CapEx |  |  |
|-----------|-----------|-----------|
| Costes de desarrollo    | Horas dedicadas al proyecto (124 h) * coste por hora de desarrollador(14,6 €) * coste de contingencia (1,2 €)   | 2172,48 €    |
| Costes de instalación    | Horas de instalación (3 h) * coste por hora de desarrollador(14,6 €) * coste de contingencia (1,2 €)     | 52,56 €    |
| Costes de equipo    | Coste medio de equipo de 800 € * 5 miembros del equipo    | 4000 €    |
| Licencias de software    | Licencia Enterprise para empresas de Windows (439) durante dos años (24 meses)  | 878 €    |
| Total    |     | 7103.04 €   |

Posteriormente, se han considerado los costes de operación, es decir, aquellos gastos como suscripciones de software, servicios en la nube, facturas de servicios públicos, salarios y otros costos directamente relacionados con el mantenimiento diario.
El tiempo de disponibilidad del servicio es de 24 meses. Se muestra de la siguiente forma.

| OpEx |  |  |
|-----------|-----------|-----------|
| App Engine    | Uso del plan B4 de AppEngine * por 8 horas al mes que está funcionando * número de instancias estimadas (50) * tiempo que el proyecto está disponible (24 meses)   | 57600 €    |
| Github    | 2 años de uso de todo el equipo (5 miembros)   | 80 €    |
| Clockify    | 2 años de uso de clockify    | 478,80 €    |
| APIs    | 2 años de uso de APIs (gratis)    | 0 €    |
| Mantenimiento    | Mantenimiento total al año = Horas mantenimiento al mes esperadas (40 h) * salario al mes de desarrollador (14,6 €) * gasto de contingencia (1,2 €)    | 700,8 €   |
| Sonarcloud    | 250k lineas de codigo al año (1200 €) * 2 años   | 2400 €   |
| iTop y atención al cliente    | iTop durante dos años y equipo para la atención al cliente   | 1700 €   |
| Total    |    | 62959,6 €   |

El coste de App Engine se representa de la siguiente forma:

| Clase de instancia | Coste por hora | Límite memoria | Límite CPU |
|-----------|-----------|-----------|-----------|
| B1    | 0,05    | 256    | 0,6    |
| B2    | 0,1    | 512    | 1,2    |
| B4    | 0,2    | 1024    | 2,4    |
| B4_1G    | 0,3    | 2048    | 2,4   |
| B8    | 0,4    | 2048    | 4,8    |

También se tienen en consideración los costes relacionados con el personal de la empresa que
va a estar disponible durante el periodo en el que el servicio Petclinic4CO va a estar disponible.
Cabe mencionar que para el cálculo se ha tenido en cuenta que el salario de los desarrolladores
puede oscilar entre 0.5 y 3%, de ahí las columnas inferior y superior:

A continuación se tienen en cuenta los costes correspondientes al personal de la empresa, que va a estar disponible durante el periodo en el que el servicio va a estar disponible.
Como el salario anual puede variar entre el 0,5 y el 3%, tenemos las dos columnas mínimo y máximo.

| Costes de personal |  | Mínimo | Máximo |
|-----------|-----------|-----------|-----------|
| Atención al cliente    | Promedio de horas de atención al cliente al mes (30 h) * salario de atención al cliente por horas (11 €) * tiempo que la aplicación está disponible (24 meses) * coste de contingencia (1,2 €)    | 9504 €   | 9504 €    |
| Resolución de incidencias    | Promedio del tiempo de resolución de incidencias al mes (40 h) * sueldo del desarrollador por horas (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas)    | 14035,2 €    | 17088 €    |
| Costes de formación    | Promedio de tiempo total de formación al año (60 h) * sueldo de desarrollador por horas (14,62 €/17,8 €) * coste de contingencia (1,2 €)    | 1052,64 €    | 1281,6 €    |
| Total    |    | 24591,84 €   | 27873.6 €   |

Asimismo, se tienen en cuenta aquellos gastos de reemplazo de aquellos Software o mejoras
del servicio respecto a las peticiones e incidencias que ocurran. Cabe mencionar que para el
cálculo se ha tenido en cuenta que el salario de los desarrolladores puede oscilar entre 0.5 y
3%, de ahí las columnas inferior y superior:


Posteriormente, se tienen en cuenta los gastos de mejora de servicios o de reemplazo de Software correspondientes a las peticiones e incidencias.
En el cálculo del coste se ha tenido en cuenta que el salario de los desarrolladores puede variar entre 0.5 y 3%.

| Costes de reemplazo o mejora |  | Mínimo | Máximo |
|-----------|-----------|-----------|-----------|
| Costes de implementación de cambio    | Promedio de horas de implementación de cambios al mes (20 horas) * sueldo de un desarrollador por horas (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas) * costes de contigencia (1,2 €)   | 8421,12 €    | 10252,8 €    |
| Costes de actualización de Software    | Promedio de horas de actualización del software al mes (2 horas) * sueldo de un desarrollador por horas (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas) * costes de contingencia (1,2 €)   | 842,112    | 1025,28 €    |
| Costes de reemplazo de componentes    | Promedio de horas de reemplazo de componentes al mes (2 horas) * sueldo de un desarrollador al mes (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas) * costes de contingencia (1,2 € )   | 842,112 €    | 1025,28 €    |
| Total    |    | 10105,344 €   | 12303,36 €   |

Ahora, se consideran los gastos relacionados con los distintos riesgos que puedan suceder al software, a los equipos o a cualquier elemento necesario para el correcto funcionamiento de la aplicación. Todo esto se refiere a la inactividad de la aplicación.
El salario de los desarrolladores puede variar entre el 0.5 y el 3%.

| Costes de inactividad |  | Mínimo | Máximo |
|-----------|-----------|-----------|-----------|
| Pérdida de capital    | Pérdida de capital al mes (40 €) * tiempo que la aplicación está disponible (24 meses)    | 960 €    | 960 €    | Dato 4    |
| Costes de recuperación    | Tiempo de recuperación al año (2 horas) * sueldo de un desarrollador por hora (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas)   | 701,76 €   | 854,4 €    | Dato 8    |
| Costes de reparación   | Tiempo de reparación al año (20 horas) * sueldo de un desarrollador por hora (14,62 €/17,8 €) * tiempo de vida de la aplicación (24 horas)    | 7017,6 €   | 8544 €   | Dato 12   |
| Total    |   | 8679,36 €   | 10358,4 €   | Dato 16   |

En último lugar, se tienen en cuenta los costes de desmantelamiento.
El salario de los desarrolladores puede variar entre el 0.5 y el 3%.

| Costes de desmantelamiento |  | Mínimo | Máximo |
|-----------|-----------|-----------|-----------|
| Costes de cambio de servicio de despliegue    | Tiempo de cambio de despliegue por año (5 horas) * sueldo de desarrollador por hora (14,62 €/17,8 €)    | 73,1 €     | 89 €    | Dato 4    |
| Costes de cambio de base de datos    | Tiempo de cambio de la BBDD por año (5 horas) * sueldo de desarrollador por horas (14,62 €/17,8 €)    | 73,1 €    | 89 €    | Dato 8    |
| Costes de desintegración con API    | Tiempo de desintegración de la API por año (5 horas) * sueldo de desarrollador por horas (14,62 €/17,8 €)    | 73,1 €   | 89 €   | Dato 12   |
| Total    |    | 219,3 €   | 267 €   | Dato 16   |

Cabe destacar que todos estos cálculos se han relizado teniendo en cuenta que se cuenta con capacidad suficiente para ofrecer el servicio a 10.000, 5.000 y 3.000 usuarios Básico, Gold y Platinum, respectivamente y que el promedio mensual de incidentes es 120, el de solicitudes 100 y RFC 2.

A partir de todo lo calculado anteriormente, puede concluirse que el TCO es 113658,484€ en el caso de salario estimado por debajo y 120865€ en caso de salario estimado por encima.