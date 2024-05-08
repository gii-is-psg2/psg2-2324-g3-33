# Monitorización del Acuerdo de cliente de PetClinic Services (PSG2-2324-G3-33)

![Logo de la ETSII](../../frontend/src/static/images/ogo-ETSII-US-Vertical-Color.png.png)

## Índice

1. Introducción
2. Cumplimiento de los SLT
3. Incidencias
4. Conclusiones


### 1. Introducción

El informe se estructurará de la siguiente manera:
Inicialmente, se evaluará el nivel de cumplimiento de los SLT, basándose en las diversas solicitudes de los usuarios que hayan surgido durante cada implementación.
Posteriormente, como complemento a lo anterior, se detallará el tiempo transcurrido desde la creación de cada incidencia en iTop hasta su resolución, utilizando capturas de pantalla para respaldar la descripción de dichas tareas.

### 2. Cumplimiento de los SLT

Con la introducción de los nuevos servicios en el sistema PetClinic4CO, la empresa estableció un Acuerdo de Nivel de Servicio (SLA) con el cliente. Este acuerdo detalla los términos y condiciones que el equipo de software debe cumplir; de lo contrario, se aplicarían medidas de compensación. Se distingue entre el tiempo que transcurre desde que se registra una solicitud de usuario hasta que se completa (TTO) y el tiempo que pasa desde que una solicitud de usuario se completa hasta que se marca como resuelta (TTR).

#### Usuarios con plan Basic:
Para aquellos usuarios que hayan adquirido el plan de precio Basic, no se les proporcionará un Acuerdo de Nivel de Servicio (SLA), lo que significa que no recibirán soporte para la presentación de solicitudes de usuario, solicitudes de cambio ni para la resolución de incidentes que puedan surgir.


#### Usuarios con plan Gold:

Respecto a los usuarios que tenían contratados el plan de precio Gold, en el acuerdo de servicios se recoge que tampoco se les ofrece soporte para la creación de
peticiones de usuario ni peticiones de cambio, sin embargo, sí que pueden añadir aquellos incidentes con los que se encuentren.

Para este plan de precio la estimación de tiempo era la siguiente: 

| Prioridad | TTO (h) | TTR (h) |
|-----------|-----------|-----------|
| Alta  | 4  | 7  |
| Media  | 13  | 27  |
| Baja  | 27  | 51  |

#### Usuarios con plan Platinum:

Respecto a los usuarios que tenían contratados el plan de precio Platinum, en el acuerdo de servicios se recoge que tienen acceso a la creación tanto de peticiones de usuario y de cambios como la de incidentes.

Para este plan de precio la estimación de tiempo era la siguiente:

| Prioridad | TTO (h) | TTR (h) |
|-----------|-----------|-----------|
| Alta  | 1  | 4  |
| Media  | 4  | 7  |
| Baja  | 13  | 27  |


-----------------------------------------


### 3. Incidencias

![Incidencia I-000705](../../frontend/src/static/images/I-000705.JPG)

Esta incidencia I-000705 fue generada por un usuario con el plan Gold el 05-05-2024 a las 12:29:25 y fue resuelta el 07-05-2024 a las 17:29:01

Su prioridad era baja, por tanto, la incidencia debía ser resuelta, como muy tarde, a las 51 horas y se resolvió en 52 horas.

Por lo tanto no se consiguió cumplir con los plazos de tiempo, debiéndole una compensacion a dicho usuario que sería de un descuento del 5% en la siguiente factura al sobrepasarse una hora del límite.

![Incidencia I-000730](../../frontend/src/static/images/I-000730.jpg)

Esta incidencia I-000730 fue generada por un usuario con el plan Gold el 05-05-2024 a las 21:13:08 y fue resuelta el 07-05-2024 a las 18:16:12

Su prioridad era alta, por tanto, la incidencia debía ser resuelta, como muy tarde, a las 7 horas y se resolvió en 45 horas.

Por lo tanto no se consiguió cumplir con los plazos de tiempo, debiéndole una compensacion a dicho usuario que sería de un descuento del 190% en la siguiente factura al sobrepasarse 38 horas del límite. Por tanto, el siguiente pago le saldría completamente gratuito.

![Incidencia I-000689](../../frontend/src/static/images/I-000689.png)

Esta incidencia I-000689 fue generada por un usuario con el plan Gold el 04-05-2024 a las 18:42:57 y fue resuelta el 07-05-2024 a las 21:08:28

Su prioridad era medium, por tanto, la incidencia debía ser resuelta, como muy tarde, a las 27 horas y se resolvió en 3 horas.

Por lo tanto se consiguió cumplir con los plazos de tiempo.

![Incidencia I-000709](../../frontend/src/static/images/I-000709.jpg)

Esta incidencia I-000709 fue generada por un usuario con el plan Gold el 05-05-2024 a las 13:23:36 y fue resuelta el 07-05-2024 a las 18:27:26

Su prioridad era low, por tanto, la incidencia debía ser resuelta, como muy tarde, a las 51 horas y se resolvió en 53 horas, por lo que al siguiente pago se le aplicaría un 10% de descuento.

![Incidencia I-000706](../../frontend/src/static/images/I-000706.png)

Esta incidencia I-000705 fue generada por un usuario con el plan Gold el 05-05-2024 a las 12:36:32 y fue resuelta el 07-05-2024 a las 11:20:22

Su prioridad era crítica, por tanto, la incidencia debía ser resuelta, como muy tarde, a las 7 horas y se resolvió en 46 horas.

Por lo tanto no se consiguió cumplir con los plazos de tiempo, debiéndole una compensacion a dicho usuario que sería de un descuento del 195% en la siguientes facturas al sobrepasarse 39 horas del límite.

### 4. Conclusiones
El plan Gold es el más recomendado para los clientes que requieran funcionalidades adicionales y deseen contar con un SLA para garantizar la calidad del servicio.
El plan Platinum ofrece una experiencia premium con consultas en línea y soporte ampliado, siendo ideal para clientes que necesiten un nivel más alto de atención y servicio.
Este informe se actualizará periódicamente para reflejar los cambios en el tiempo de resolución de problemas y el cumplimiento del SLT.
