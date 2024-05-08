# Acuerdo con el Cliente

![Logo de la ETSII](../../frontend/src/static/images/ogo-ETSII-US-Vertical-Color.png.png)

## Indice

1. OBJECTO DEL CONTRATO
2. DESCRIPCION DE SERVICIOS
3. SERVICIOS OFRECIDOS
4. PLAN DE PRECIOS
5. DURACIÓN Y TERMINACIÓN
6. OTROS TÉRMINOS GENERALES

___


## 1. OBJETO DEL CONTRATO

Este documento detalla el acuerdo con el cliente, describiendo los servicios ofrecidos, su plan de precios, la duración y la terminación de estos y algunos otros téminos generales.

## 2. DESCRIPCION DE SERVICIOS

### 2.1 Servicios de PetClinic

#### 2.1.1 Descripción del servicio

Esta servicio ofrece el poder resgitras tus mascotas, registar tu clinica, regitrarte como veterinario, pedir cita a tu clinica para tu mascota, poder dar en adopción a tu mascota y poder reservar habitaciones para tus mascotas.

#### 2.1.2 Uso del servicio

Para poder acceder a los servicios tinenes que estar loggeado en la página de PetClinic y acceder a ellos a trave de la barra de navegación.

#### 2.1.3 Condición del servicio

Para usar este servicio tienes que estar registrado en la página de PetClinic.

### 2.2 Servicio de Petclinic4ClinicOwner

#### 2.2.1 Servicios ofrecidos

##### 2.2.1.1 Servicio de Resolución de incidencias

###### 2.2.1.1.1 Descripción

Este servicio permite a los propietarios de clínicas solicitar resolución de incidenciass.

###### 2.2.1.1.2 Uso del servicio

Para la resolución de incidencias un propietario de clínica debera hacer una petición indicando la incidencia.

###### 2.2.1.1.3 Codición del servicio

Para utilizar este servicio debe ser propietario de clínica

##### 2.2.1.1 Servicio de Solicitud de usuario

###### 2.2.1.1.1 Descripción

Este servicio permite a los propietarios enviar solicitudes de usuario.

###### 2.2.1.1.2 Uso del servicio

Para el envio de solicitudes de usuario un propietario de clínica debera hacer una petición la solicitud de usuario.

###### 2.2.1.1.3 Condición del servicio

Para utilizar este servicio debe ser propietario de clínica

##### 2.2.1.1 Servicio de Estimación de cambio.

###### 2.2.1.1.1 Descripción

Este servicio permite a los propietarios de clínicas solicitar estimaciones de cambios.

###### 2.2.1.1.2 Uso del servicio

Para la solicitud de estimaciones de cambios un propietario de clínica debera hacer una petición indicando la estimación del cambio.

###### 2.2.1.1.3 Condición del servicio

Para utilizar este servicio debe ser propietario de clínica

## 3. SERVICIOS OFRECIDOS
### 3.1. Métricas

| Indicador | Definición | Frecuencia | Objetivo |
|-----------|-----------|-----------|-----------|
| Time to Own (TTO)  | Tiempo que transcurre desde que se registra la petición del usuario hasta que deja de estar pendiente.  | Por evento  | Según prioridad (en función de urgencia dada por el plan,e impacto)
  |
| Time to Resolve (TTR)  | Tiempo que transcurre desde que la petición deja de estar pendiente hasta que se resuelve  | Por evento  | Según prioridad (en función de urgencia dada por el plan,e impacto)
  |
| Disponibilidad  | (Periodos Totales - Periodos de Downtime) / Periodos Totales  | Por mes  | Según el plan  |

- Periodos totales: ventanas de 10 minutos a lo largo de un mes.
- Periodos de downtime: ventanas de 10 minutos en las que son erróneas más de un 10% de las peticiones de usuario

### 3.2. Mecanismo de monitorización

- TTO: mediante iTop.
- TTR: mediante iTop.
- Disponibilidad: integración en Google Cloud. Si no se cumple el objetivo definitivo, se crea un SLO con alerta automatizada.

### 3.3. Periodos de soporte a los usuarios

- Standard: de lunes a viernes de 9:00 a 22:00.
- Avanzado: todos los días de 9:00 a 22:00.
- Premium: todos los días de 7:00 a 23:59.

### 3.4. Niveles SLA

- Plan gold
Disponibilidad: 97%

| Prioridad | TTO (h) | TTR (h) |
|-----------|-----------|-----------|
| Alta  | 0-4  | 0-7  |
| Media  | 4-13  | 7-27  |
| Baja  | 13-27  | 27-51  |

- Plan platinum
Disponibilidad: 99%

| Prioridad | TTO (h) | TTR (h) |
|-----------|-----------|-----------|
| Alta  | 0-1  | 0-4  |
| Media  | 1-4  | 4-7  |
| Baja  | 4-13  | 7-27  |

#### 3.4.1. Resolución de peticiones de usuario y cambios e incidentes
- PLAN BASIC
No tiene un Acuerdo de Nivel de Servicio (SLA)
- PLAN GOLD
No se les ofrece soporte para la creación de peticiones de usuario ni peticiones de cambio, sin embargo, sí que pueden añadir aquellos incidentes con los que se encuentren. 
- PLAN PLATINUM
Se les ofrece la creación tanto de peticiones de usuario y de cambios como la de incidentes.

#### 3.4.2. Resolución de peticiones de usuario y cambios e incidentes
El servicio PetClinic4CO permite gestionar distintos incidentes y peticiones y que se notifiquen por parte de los usuarios. Se deben seguir los siguientes pasos para resolverlos.
- 1. Investigación y diagnóstico del incidente o petición.
El objetivo de la empresa es solucionar los problemas lo más rápido posible. Para ello es necesario analizarlos y estudiar su raíz para resolverlo de forma más fácil.
Además pueden aparecer varios problemas cuya causa sea la misma.
- 2. Priorización del incidente o petición.
Es necesaria la priorización del incidente, ya que pueden surgir varios problemas en un instante concreto, por lo tanto, se irán resolviendo los problemas según su prioridad.
Esto se muestra en la siguiente tabla.

|  |  | Impacto |  |  |
|-----------|-----------|-----------|-----------|-----------|
|     | Dato 1    | Departamento    | Servicio    | Persona    |
|     | Crítica    | Crítica    | Crítica    | Alta    |
| Urgencia    | Alta    | Crítica   | Alta   | Media   |
|     | Media   | Alta   | Media   | Baja   |
|     | Baja   | Media   | Media   | Baja   |



### 3.5. Compensaciones

- Tiempos de respuesta (TTR) por debajo de lo esperado: En caso de que el tiempo de resolución de incidencias (TTR) exceda el límite acordado, se aplicará una compensación en la siguiente factura de renovación de suscripción al plan. Por cada hora adicional más allá del tiempo establecido, se otorgará un descuento del 5% en la siguiente factura.
- Disponibilidad por debajo de lo esperado: En caso de que el nivel de disponibilidad del servicio sea inferior al esperado, se aplicará una compensación en la siguiente factura de renovación de suscripción al plan. Por cada 1% por debajo del porcentaje de disponibilidad acordado, se otorgará un descuento del 15% en la siguiente factura. 

Los descuentos aplicables se acumularán hasta un 50% de descuento, como máximo, en la siguiente factura.


## 4. PLAN DE PRECIOS

Petclinic ha implementado una serie de planes de precio con el fin de brindar beneficios adicionales a los propietarios de clínicas veterinarias que utilizan la aplicación. Estos planes están diseñados para adaptarse a las diversas necesidades y requisitos de los usuarios. Entre ellos se encuentran el plan Básico, que establece el punto de partida para todos los clientes y ofrece todas las funcionalidades básicas pero con limitaciones considerables en varios parámetros dentro de la clínica, y no incluye SLA (Acuerdo de Nivel de Servicio). El plan Gold, por otro lado, es el primero en ofrecer funcionalidades adicionales, como Pet Hotel o Adopciones. Por último, el plan Platinum es el único que proporciona consultas en línea y ofrece un soporte más amplio para las solicitudes de cambio y de usuario.

Las limitaciones específicas de cada plan se detallan en la siguiente tabla:

| Plan | Número de Mascotas | Hotel de Mascotas |Adopciones | Número de visitas por mes y por mascota | Consultas online            | SLA |Precio mensual
|----------|---------------------|---------------------|-------------------------|-----------------------------|----------------|------------|------------------------
| Básico   | 2 | × | × | 1 | × |×|9,99€
| Oro      | 4 | ✓ | ✓ | 3 | × | ✓ |19,99€
| Platino  | 7 | ✓ | ✓ | 6 | ✓ | ✓ |29,99€

## 5. DURACIÓN Y TERMINACIÓN 

El presente Acuerdo entre el Cliente y Petclinic tiene una duración específica y claramente definida, abarcando hasta el 15 de julio de 2024. Esta disposición se ha establecido con el propósito de asegurar la estabilidad y continuidad en la prestación del servicio ofrecido por PetClinic hasta la fecha mencionada, proporciona un marco claro para ambas partes, permitiendo una gestión eficiente de los recursos y una relación contractual transparente. 

El Acuerdo entre el Cliente y PetClinic tiene una duración específica y claramente definida hasta el 15 de julio de 2024, con el objetivo de mantener la estabilidad y continuidad en la prestación del servicio. Esta disposición establece un marco transparente para ambas partes, facilitando una gestión eficiente de recursos y una relación contractual clara.

La especificación de la duración del contrato ofrece una base sólida para el desarrollo de las interacciones comerciales y operativas entre el Cliente y PetClinic. Al fijar una fecha concreta, se asegura al Cliente que los servicios estarán disponibles hasta ese momento, evitando interrupciones que puedan afectar el uso de la plataforma PetClinic.

Es importante resaltar que el Acuerdo puede ser rescindido antes de su vencimiento si alguna de las partes incumple los términos y condiciones. Las razones de terminación pueden incluir incumplimiento de los términos, violación de la ley o condiciones específicas establecidas en el Acuerdo.

Ambas partes deben estar conscientes de las implicaciones de la terminación del contrato y estar preparadas para actuar adecuadamente si surge la necesidad. La terminación del contrato no solo finaliza la relación entre el Cliente y PetClinic, sino que también puede implicar la resolución de disputas y la liquidación de obligaciones pendientes.

La duración y terminación del contrato son aspectos cruciales de la relación comercial, garantizando continuidad y estabilidad en la prestación del servicio, y proporcionando mecanismos para abordar problemas o incumplimientos durante la relación contractual.

## 6. OTROS TÉRMINOS GENERALES
### 6.1 Uso Aceptable
El cliente se compromete a utilizar los servicios proporcionados de manera ética y legal, sin incurrir en actividades ilegales, dañinas o que violen los derechos de terceros.

### 6.2 Política de Privacidad
Todos los datos personales recopilados y procesados en virtud de este contrato estarán sujetos a nuestra política de privacidad, la cual se puede encontrar en https://petclinic.es/politica-de-privacidad. El cliente acepta los términos de dicha política.

### 6.3 Condiciones de Pago
El cliente se compromete a cumplir con las condiciones de pago especificadas en el plan de precios seleccionado. Los pagos deben realizarse de manera oportuna y en la moneda especificada en la factura.

### 6.4 Propiedad Intelectual
Todos los derechos de propiedad intelectual relacionados con los servicios proporcionados, incluidos, entre otros, los derechos de autor, marcas comerciales y patentes, serán propiedad exclusiva de PetClinic. El cliente no adquiere ningún derecho de propiedad sobre los servicios, excepto los derechos limitados expresamente otorgados en este contrato.

### 6.5 Política de Cambios
Cualquier solicitud de cambios en los servicios debe presentarse por escrito y será evaluada por PetClinic. Nos reservamos el derecho de aceptar o rechazar dichas solicitudes a nuestra discreción.

### 6.6 Ley Aplicable y Jurisdicción
Este contrato se regirá e interpretará de acuerdo con las leyes españolas sin tener en cuenta sus conflictos de principios legales. Cualquier disputa derivada de este contrato estará sujeta a la jurisdicción exclusiva de los tribunales del españolas.

Estos términos generales complementan y forman parte integral del acuerdo con el cliente establecido en este documento.
