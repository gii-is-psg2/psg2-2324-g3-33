# Implementación de iTop para la Organización PSG2-2324-G3-33

![Logo de la ETSII](logo-ETSII-US-Vertical-Color.png)

## Indice

1. Captura de pantalla del portal de iTop.
2. Dificultades que se encontradas al configurar iTop.
3. Funciones que faltan en iTop
4. Contribuciones de cada autor


## 1. Captura de pantalla del portal de iTop.

![Captura del portal de iTop](Portal%20de%20iTop.png)

En este caso podemos ver el portal del propietario de clínica John Doe

### 1.1 Explicación de la barra lateral

### 1.1.1 Home

En la pantalla de Home se puede ver lo que hay en la imagen

### 1.1.2 New request

En esta pantalla se crear las incidencias y las solicitudes de servicio.

![Captura del New requests de iTop](Cap%20new%20requests%20iTop.png)

### 1.1.3 Ongoing requests

En esta pantalla se puede ver el estado de las incidencias y las solicitudes de servicio.4

![Captura del Ongoing requests de iTop](Cap%20Ongoing%20requests%20iTop.png)

### 1.1.4 FAQ

En esta pantalla se puede ver preguntas frecuentes que ya han sido contestadas.

![Captura del FAQ de iTop](Cap%20FAQ%20iTop.png)

### 1.1.5 Closed requests

En esta pantalla se ver las incidencias y las solicitudes de servicio acabadas.

![Captura del Closed requests de iTop](Cap%20Closed%20requests%20iTop.png)


## 2. Dificultades que se encontradas al configurar iTop.

### 2.1 Team

Para empezar con la configuración primero tuvimos que crear un team.

Primero dar al botón de crear como indica la siguente imagen.

![Captura de donde crear un nuevo team](Cap-base-contact.png)

Luego poner que queremos crear un team.

![Captura de selección de team](Cap-crear-team.png)

En la pestaña de member añadir a los integrantes del equipo.

![Captura de selección de miembros](Cap-agregar-miembros.png)

Por último se le da a create para crear el equipo.

![Captura de creado el team](Cap-team-creado.png)

### 2.3 Gestión de servicios

#### 2.3.1 Requisitos sobre los servicios ofrecidos

Se crea el servicio PetClinic4ClinicOwner. Se va a services.

![Captura de como llegar a los servicios](Cap-menu-servicio.png)

Se la da a crear un servicio.

![Captura de crear un servicio](Cap-crear-servicio.png)

Se le añade las subcategorías.

![Captura de como se añade las subcategoría](Cap-añadir-subcategoría.png)

Se le añade los contactos del cliente.

![Captura de como se añade los contactos del cliente](Cap-añadir-customer.png)

Se crea el nuevo servicio.

![Captura de creado del servicio](Cap-creado-servicio.png)

##### 2.3.1.1 Como crear subcategorías de servicios

Para crear subcategoría de servicios nos vamos al siguente apartado.

![Captura de como llegar al service subcategories](Cap-menu-subservicio.png)

Se le da al botón de +. Y creamos las dos subcategorías.

La categoria de Incident.

![Captura de creado de la subcategoría de Incident](Cap-incident-subservicio.png)

La categoria de ServiceRequests.

![Captura de creado de la subcategoría de ServiceRequest](Cap-servicerequests-subservicio.png)

#### 2.3.2 Requisitos sobre el ANS de los servicios ofrecidos

Se crea el Acuerdo a nivel de servicio.

Se elige la opción de SLAs.

![Captura de como crear un SLA](Cap-menu-SLA.png)

Ahora le damos a crear un ANS

![Captura de creado del SLA](Cap-crear-SLA.png)

Según nuestro acuerdo con el cliente, tenemos soporte para planes gold y platinum, así que creamos uno para cada.

Para el al plan gold.

Las propiedades.

![Captura de las propiedades de un SLA](Cap-Creado-SLAgold.png)

Los SLTs.

![Captura de los SLT de un SLA](Cap-añadir-SLTgold.png)

Los contratos con los clientes, en nuestro caso tenemos dos clientes, clinicOwner1 y clinicOwner2.

![Captura de los contratos](Cap-Customer-gold.png)

Para el al plan platinum.

Las propiedades.

![Captura de las propiedades de un SLA](Cap-Creado-SLAplatinum.png)

Los SLTs.

![Captura de los SLT de un SLA](Cap-añadir-SLTplatinum.png)

Los contratos con los clientes, en nuestro caso tenemos dos clientes, clinicOwner1 y clinicOwner2.

![Captura de los contratos](Cap-Customer-platinum.png)

Para poder añadir los SLT, hay que crearlo, se crear de la siguente forma.

Se elige la opción de SLTs.

![Captura de como llegar a los STL](Cap-menu-SLT.png)

Como en nuestro acuerdo con el cliente tenemos definidos dos planes, creamos para cada plan, un TTO y un TTR, los los tipo podrán ser o incident o service requests, el valor  y la prioridad está puesto en el CA. Ahora mostraremos un ejemplo de cada.

Ejemplo de TTO

![Captura de un TTO](Cap-TTO-gold.png)

Ejemplo de TTR

![Captura de un TTR](Cap-TTR-platinum.png)

#### 2.3.3 Requisitos sobre el contrato del servicio ofrecido

Se crea el contrato de consumidor.

Se elige la opción de Customer contracts.

![Captura de como crear un customer contracts](Cap-menu-customer.png)

Se crea una para cada organización, osease clinicOwner1 y clinicOwner2, para cada una se crea una plan para el gold y otro para el platinum.

Ejemplo del clinicOwner1 con el plan gold.

Las propiedades.

![Captura de las propiedades de un customer contracts](Cap-creado-customergold.png)

Le asociamos el servicio correspondiente

![Captura de los servicios de un customer contracts](Cap-service-customergold.png)


Ejemplo del clinicOwner2 con el plan platinum.

Las propiedades.

![Captura de las propiedades de un customer contracts](Cap-creado-customerplatinum.png)

Le asociamos el servicio correspondiente

![Captura de los servicios de un customer contracts](Cap-service-customerplatinum.png)

Creación de un Delibery Model

Se elige la opción Delibery models

![Captura de como llegar al Delibery model](Cap-menu-delibery.png)

Las propiedades.

![Captura de las propiedades del delibery model](Cap-creado-delibery.png)

El consumidor.

![Captura del consumidor del delibery model](Cap-customer-delibery.png)

Los contactos.

![Captura de los contactos del delibery model](Cap-contacts-delibery.png)

## 3. Funciones que faltan en iTop

Faltan funciones en iTop para registrarse correctamente y brindar información para respaldar todas las tareas de este Sprint.
Esto se refiere a lo siguiente:
- Añadir más detalles en la información correspondiente a los Customer Contracts, dando lugar a un acuerdo más claro. Por ejemplo, se podría añadir la fechas de inicio y fin, una descripción...
- Una funcíon de filtrado para visualizar los SLTs y asignarlos así de manera más sencilla a los SLAs.
- Acceso directo a elementos como FAQs y TTOs desde nuestra organización, ya que estos solo tienen directamente asociada nuestra organización como proveedora o la organización externa.
- Permitir la integración de herramientas de análisis avanzado que proporcionen diferentes métricas sobre la gestión de los servicios.
- Informes personalizados de mayor calidad y más fexibles acerca del rendimiento del TTR y el TTO, dando lugar así a un correcto seguimiento y análisis específico de la organización.


## 4. Contribuciones de cada autor

|  | Alberto Escobar Sánchez | Luis Giraldo Santiago | Diego Manzanos Anento | Alejandro Sevillano Barea | Alejandro Vargas Muñiz |
|-----------|-----------|-----------|-----------|-----------|-----------|
| Equipo  | Dato 1.2  | Dato 1.3  | Dato 1.4  | Dato 1.5  | Dato 1.6  |
| Periféticos  | Dato 2.2  | Dato 2.3  | Dato 2.4  | Dato 2.5  | Dato 2.6  |
| Servicios externos  | Dato 3.2  | Dato 3.3  | Dato 3.4  | Dato 3.5  | Dato 3.6  |
| SLT  | Dato 4.2  | Dato 4.3  | Dato 4.4  | Dato 4.5  | Dato 4.6  |
| SLA  | Dato 5.2  | Dato 5.3  | Dato 5.4  | Dato 5.5  | Dato 5.6  |
| FAQs  | Dato 6.2  | Dato 6.3  | Dato 6.4  | Dato 6.5  | Dato 6.6  |
| Problemas  | Dato 7.2  | Dato 7.3  | Dato 7.4  | Dato 7.5  | Dato 7.6  |
| Peticiones de usuario  | Dato 8.2  | Dato 8.3  | Dato 8.4  | Dato 8.5  | Dato 8.6  |
| Contratos de cliente  | Dato 9.2  | Dato 9.3  | Dato 9.4  | Dato 9.5  | Dato 9.6  |
| Configuración App Engine | Dato 10.2 | Dato 10.3 | Dato 10.4 | Dato 10.5 | Dato 10.6 |
| Delivery Model | Dato 11.2 | Dato 11.3 | Dato 11.4 | Dato 11.5 | Dato 11.6 |
| Coverage Window | Dato 12.2 | Dato 12.3 | Dato 12.4 | Dato 12.5 | Dato 12.6 |
| Service | Dato 13.2 | Dato 13.3 | Dato 13.4 | Dato 13.5 | Dato 13.6 |
| Service Subcategories | Dato 14.2 | Dato 14.3 | Dato 14.4 | Dato 14.5 | Dato 14.6 |

Rellenar con ✓ o con ×