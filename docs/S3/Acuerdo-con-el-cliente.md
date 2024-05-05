# Acuerdo con el Cliente



## 1. OBJETO DEL CONTRATO

Este documento detalla el acuerdo con el cliente, describiendo los servicios ofrecidos, su plan de precios, la duración y la terminación de estos y algunos otros téminos generales.

## 2. DEFINICIONES Y ACRÓNIMOS

### 2.1 Servicio de adoción

#### 2.1.1 Descripción del servicio

Esta servicio ofrece a los dueños de mascotas la oportunidad de dar en adopción a sus mascotas.

#### 2.1.2 Uso del servicio

Para poner a tu mascota en adopción tienes que crear una petición de adopción, a la cual otro dueño de mascota
podrá solicitar quedarse con ella haciendo una breve descripción del porque la quiere.

En ultima estancia el dueño de la mascota tendrá que dar el visto bueno a la adopción.

#### 2.1.2 Codición del servicio

Para usar este servicio tienes que ser dueño de mascota.

### 2.2 Servicio de Reserva de habitaciones

#### 2.2.1 Descripción

Este servicio ofrece la oportunidad de reservar habitaciones de hotel para las mascotas.

#### 2.2.2 Uso del servicio

Para poder reservar una habitación el dueño la la clínica pondrá un anuncio donde especifica el tamaño y la compatibilidad de la mascota que podrá alojarse en ella.

Después un dueño de mascota podrá reserva la habitación especificando los días que ser quedará las mascota en la habitación.

#### 2.1.2 Codición del servicio

Para usar este servicio tienes que ser dueño de mascota y la mascota debe poder alojarse en la habiación.

### 2.3 Servicio de Petclinic4ClinicOwner

#### 2.3.1 Servicios ofrecidos

##### 2.3.1.1 Servicio de Resolución de incidencias

###### 2.3.1.1.1 Descripción

Este servicio permite a los propietarios de clínicas solicitar resolución de incidenciass.

###### 2.3.1.1.2 Uso del servicio

Para la resolución de incidencias un propietario de clínica debera hacer una petición indicando la incidencia.

###### 2.3.1.1.3 Codición del servicio

Para utilizar este servicio debe ser propietario de clínica

##### 2.3.1.1 Servicio de Solicitud de usuario

###### 2.3.1.1.1 Descripción

Este servicio permite a los propietarios enviar solicitudes de usuario.

###### 2.3.1.1.2 Uso del servicio

Para el envio de solicitudes de usuario un propietario de clínica debera hacer una petición la solicitud de usuario.

###### 2.3.1.1.3 Codición del servicio

Para utilizar este servicio debe ser propietario de clínica

##### 2.3.1.1 Servicio de Estimación de cambio.

###### 2.3.1.1.1 Descripción

Este servicio permite a los propietarios de clínicas solicitar estimaciones de cambios.

###### 2.3.1.1.2 Uso del servicio

Para la solicitud de estimaciones de cambios un propietario de clínica debera hacer una petición indicando la estimación del cambio.

###### 2.3.1.1.3 Codición del servicio

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
| Alta  | 4  | 7  |
| Media  | 13  | 27  |
| Baja  | 27  | 51  |

- Plan platinum
Disponibilidad: 99%

| Prioridad | TTO (h) | TTR (h) |
|-----------|-----------|-----------|
| Alta  | 1  | 4  |
| Media  | 4  | 7  |
| Baja  | 13  | 27  |

#### 3.4.1. Resolución de peticiones de usuario y cambios e incidentes

### 3.5. Compensaciones

- TTO con prioridad por debajo de la esperada: Se compensará con un 15% de descuento en la siguiente factura, por cada nivel de prioridad inferior al esperado.
- TTR con prioridad por debajo de la esperada: Se compensará con un 15% de descuento en la siguiente factura, por cada nivel de prioridad inferior al esperado.
- Disponibilidad por debajo de la esperada: Se compensará con un 15% de descuento en la siguiente factura, por cada 1% por debajo del porcentaje de disponibilidad esperado.

Los descuentos aplicables se acumularán hasta un 50% de descuento, como máximo, en la siguiente factura.


## 4. PLAN DE PRECIOS

Petclinic ha implementado una serie de planes de precio con el fin de brindar beneficios adicionales a los propietarios de clínicas veterinarias que utilizan la aplicación. Estos planes están diseñados para adaptarse a las diversas necesidades y requisitos de los usuarios. Entre ellos se encuentran el plan Básico, que establece el punto de partida para todos los clientes y ofrece todas las funcionalidades básicas pero con limitaciones considerables en varios parámetros dentro de la clínica, y no incluye SLA (Acuerdo de Nivel de Servicio). El plan Gold, por otro lado, es el primero en ofrecer funcionalidades adicionales, como Pet Hotel o Adopciones. Por último, el plan Platinum es el único que proporciona consultas en línea y ofrece un soporte más amplio para las solicitudes de cambio y de usuario.

Las limitaciones específicas de cada plan se detallan en la siguiente tabla:

| Plan | Número de Mascotas | Hotel de Mascotas |Adopciones | Número de visitas por mes y por mascota | Consultas online            | SLA |Precio mensual
|----------|---------------------|---------------------|-------------------------|-----------------------------|----------------|------------|------------------------
| Básico   | 2 | × | × | 1 | × |×|9,99€
| Oro      | 4 | ✓ | ✓ | 3 | × | ✓ |19,99€
| Platino  | 7 | ✓ | ✓ | 7 | ✓ | ✓ |29,99€

## 5. DURACIÓN Y TERMINACIÓN 

El presente Acuerdo entre el Cliente y Petclinic tiene una duración específica y claramente definida, abarcando hasta el 15 de julio de 2024. Esta disposición se ha establecido con el propósito de asegurar la estabilidad y continuidad en la prestación del servicio ofrecido por PetClinic hasta la fecha mencionada, proporciona un marco claro para ambas partes, permitiendo una gestión eficiente de los recursos y una relación contractual transparente. 

El Acuerdo entre el Cliente y PetClinic tiene una duración específica y claramente definida hasta el 15 de julio de 2024, con el objetivo de mantener la estabilidad y continuidad en la prestación del servicio. Esta disposición establece un marco transparente para ambas partes, facilitando una gestión eficiente de recursos y una relación contractual clara.

La especificación de la duración del contrato ofrece una base sólida para el desarrollo de las interacciones comerciales y operativas entre el Cliente y PetClinic. Al fijar una fecha concreta, se asegura al Cliente que los servicios estarán disponibles hasta ese momento, evitando interrupciones que puedan afectar el uso de la plataforma PetClinic.

Es importante resaltar que el Acuerdo puede ser rescindido antes de su vencimiento si alguna de las partes incumple los términos y condiciones. Las razones de terminación pueden incluir incumplimiento de los términos, violación de la ley o condiciones específicas establecidas en el Acuerdo.

Ambas partes deben estar conscientes de las implicaciones de la terminación del contrato y estar preparadas para actuar adecuadamente si surge la necesidad. La terminación del contrato no solo finaliza la relación entre el Cliente y PetClinic, sino que también puede implicar la resolución de disputas y la liquidación de obligaciones pendientes.

La duración y terminación del contrato son aspectos cruciales de la relación comercial, garantizando continuidad y estabilidad en la prestación del servicio, y proporcionando mecanismos para abordar problemas o incumplimientos durante la relación contractual.

## 6. OTROS TÉRMINOS GENERALES
