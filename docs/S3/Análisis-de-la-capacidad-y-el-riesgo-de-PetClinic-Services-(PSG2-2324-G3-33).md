# Análisis-de-la-capacidad-y-el-riesgo-de-PetClinic-Services-(PSG2-2324-G3-33)
![Logo de la ETSII](../../frontend/src/static/images/ogo-ETSII-US-Vertical-Color.png.png)

## Índice

1. Introducción
2. TCO
3. Capacidad
4. Análisis de riesgo de operación y mantenimiento

### 1. Introducción

El informe se estructurará de la siguiente manera:
Inicialmente, se realiza una estimación razonada y plenamente explicada del TCO del servicio incluido en la CA, incluyendo, entre otros aspectos, el OpEx y el CapEx, considerando que el servicio.

### 2. TCO
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

### 3. Capacidad

Los cálculos realizados a continuación se han hecho teniendo en cuenta que nuestra aplicación usará el plan B4 de AppEngine. Basamos nuestros cálculos y estimaciones únicamente en los precios por instancia por hora, ignorando los precios asociados a la carga de memoria (en parte por ser comparativamente negligibles para nuestra aplicación, en parte por simplificar los calculos).

También hay que tener en cuenta que se consumirán dos APIs. Por un lado WeatherAPI que tiene un límite de 50 peticiones por hora y por otro lado Clinic Location API la cual no tiene restricciones. 

**¿Cuál es el número máximo de solicitudes por minuto que admitirá? Suponiendo una única suscripción a un plan y sin exceso.**

Empleamos instancias de tipo B4 en App Engine, que utilizan escalado básico, tal que sólo se generan instancias cuando son necesarias para satisfacer el tráfico. Es dificil estimar el número de instancias que serán necesarias para suplir las peticiones generadas, al generarse automáticamente según la memoria utilizada y la latencia por petición. Carecemos de la información necesaria para hacer una estimación realista.
Hemos estimado que 50 instancias operando 8 horas al día es una cote superior razonable.

Por defecto, cada instancia puede procesar 80 peticiones de forma simultánea.

De los logs de App Engine hemos encontrado que la latencia media por petición tiene una cota superior (percentil 90) de 0.2176 segundos.
Luego una cota superior de las solicitudes por minuto sería:
$frac{60}{0.2176}$ = 275.74 (peticiones / min)
  $80 (peticiones / instancia) · 50 (instancias) · 275.74 = 1102 (peticiones concurrentes / min)$

**¿Cuál es el costo mínimo para atender 2 solicitudes en menos de un minuto?**
Suponiendo que una instancia sería suficiente para suplir sin problemas 2 peticiones por minuto, asumiendo que opera 8 horas al día:
$0.2(€/instancia·h) · 1 (instancia) · 8(h/dia) = 1.6(€/día)$
  $ 1.6 (€/día) / 24 (h/día) = 0.07 (€/h) $

**¿Cuál es el tiempo mínimo para atender 200 solicitudes?**
Sabiendo que en el despliegue actual es suficiente una instancia, y sabiendo que la cota superior actual de latencia por petición es de 0.2176 segundos, podemos atender 200 solicitudes en un periodo de 43.52 segundos.

### 4. Análisis de riesgo de operación y mantenimiento
Siguiendo los parámetros dados para el análisis de riesgo de operación y mantenimiento, se tiene que:

● Al ser gratis el servicio de ambas APIs implementadas, sólo se tendrá en cuenta como el precio de API externo el coste de App Engine. Como se ha indicado en nuestro análisis
del TCO, este coste para los 24 meses es de 57.600€, lo que hace un total de 2.400€ cada mes. Teniendo en cuenta que cada 6 meses este precio puede aumentar de un 2 a
un 10%:

❖ En caso de un aumento máximo (cada 6 meses aumenta un 10%) se
tendría que:
3
∑ 1.1^i * 2400 * 6
i=0

Con esto, se tendría que por App Engine debemos estimar un coste máximo de aumento de 66.830,4€

❖ En caso de un aumento mínimo (cada 6 meses aumenta un 2%) se
tendría que:
3
Σ 1. 02𝑖 * 2400 * 6
𝑖=0

Con esto, se tendría que por App Engine debemos estimar un coste mínimo de aumento de 59.351,16€

● En cuanto al precio de los servicios de habilitación y mejora, estos pueden tener una variación del 2% al 10%. Observando el análisis del TCO, se toma como precio el coste de implementación de cambio, el cual oscila entre 8.421,12€ y 10.252,8€ a lo largo de los 24 meses.

❖ En caso de tener un aumento máximo (máximo precio y un aumento de este del 10%) se tendría que: 10.252,8€ * 1,1
Con esto, se tendría que presuponer que los servicios de habilitación y mejora pueden suponer un coste de 11.278,08€

❖ En caso de tener un aumento mínimo (mínimo precio y un aumento de este del 2%) se tendría que: 8.421,12€ * 1,02
Con esto, se tendría que presuponer que los servicios de habilitación y mejora pueden suponer un coste de 8.589,54€

● Teniendo ambas cifras ya calculadas, bastaría con realizar una suma de estas para observar que deberíamos estimar un coste de aumento máximo de 78.108,48€, o un coste de aumento mínimo de 67.940,7€
