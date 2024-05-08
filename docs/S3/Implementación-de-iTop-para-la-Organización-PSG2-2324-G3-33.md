# Implementación de iTop para la Organización PSG2-2324-G3-33

![Logo de la ETSII](../../frontend/src/static/images/ogo-ETSII-US-Vertical-Color.png.png)

## Indice

1. Captura de pantalla del portal de iTop.
2. Dificultades que se encontradas al configurar iTop.
3. Funciones que faltan en iTop
4. Contribuciones de cada autor


## 1. Captura de pantalla del portal de iTop.

![Captura del portal de iTop](../../frontend/src/static/images/Portal%20de%20iTop.png)

En este caso podemos ver el portal del propietario de clínica John Doe

### 1.1 Explicación de la barra lateral

### 1.1.1 Home

En la pantalla de Home se puede ver lo que hay en la imagen

### 1.1.2 New request

En esta pantalla se crear las incidencias y las solicitudes de servicio.

![Captura del New requests de iTop](../../frontend/src/static/images/Cap%20new%20requests%20iTop.png)

### 1.1.3 Ongoing requests

En esta pantalla se puede ver el estado de las incidencias y las solicitudes de servicio.4

![Captura del Ongoing requests de iTop](../../frontend/src/static/images/Cap%20Ongoing%20requests%20iTop.png)

### 1.1.4 FAQ

En esta pantalla se puede ver preguntas frecuentes que ya han sido contestadas.

![Captura del FAQ de iTop](../../frontend/src/static/images/Cap%20FAQ%20iTop.png)

### 1.1.5 Closed requests

En esta pantalla se ver las incidencias y las solicitudes de servicio acabadas.

![Captura del Closed requests de iTop](../../frontend/src/static/images/Cap%20Closed%20requests%20iTop.png)


## 2. Dificultades que se encontradas al configurar iTop.

### 2.1 Team

Para empezar con la configuración primero tuvimos que crear un team.

Primero dar al botón de crear como indica la siguente imagen.

![Captura de donde crear un nuevo team](../../frontend/src/static/images/Cap-base-contact.png)

Luego poner que queremos crear un team.

![Captura de selección de team](../../frontend/src/static/images/Cap-crear-team.png)

En la pestaña de member añadir a los integrantes del equipo.

![Captura de selección de miembros](../../frontend/src/static/images/Cap-agregar-miembros.png)

Por último se le da a create para crear el equipo.

![Captura de creado el team](../../frontend/src/static/images/Cap-team-creado.png)

### 2.3 Gestión de servicios

#### 2.3.1 Requisitos sobre los servicios ofrecidos

Se crea el servicio PetClinic4ClinicOwner. Se va a services.

![Captura de como llegar a los servicios](../../frontend/src/static/images/Cap-menu-servicio.png)

Se la da a crear un servicio.

![Captura de crear un servicio](../../frontend/src/static/images/Cap-crear-servicio.png)

Se le añade las subcategorías.

![Captura de como se añade las subcategoría](../../frontend/src/static/images/Cap-añadir-subcategoría.png)

Se le añade los contactos del cliente.

![Captura de como se añade los contactos del cliente](../../frontend/src/static/images/Cap-añadir-customer.png)

Se crea el nuevo servicio.

![Captura de creado del servicio](../../frontend/src/static/images/Cap-creado-servicio.png)

##### 2.3.1.1 Como crear subcategorías de servicios

Para crear subcategoría de servicios nos vamos al siguente apartado.

![Captura de como llegar al service subcategories](../../frontend/src/static/images/Cap-menu-subservicio.png)

Se le da al botón de +. Y creamos las dos subcategorías.

La categoria de Incident.

![Captura de creado de la subcategoría de Incident](../../frontend/src/static/images/Cap-incident-subservicio.png)

La categoria de ServiceRequests.

![Captura de creado de la subcategoría de ServiceRequest](../../frontend/src/static/images/Cap-servicerequests-subservicio.png)

#### 2.3.2 Requisitos sobre el ANS de los servicios ofrecidos

Se crea el Acuerdo a nivel de servicio.

Se elige la opción de SLAs.

![Captura de como crear un SLA](../../frontend/src/static/images/Cap-menu-SLA.png)

Ahora le damos a crear un ANS

![Captura de creado del SLA](../../frontend/src/static/images/Cap-crear-SLA.png)

Según nuestro acuerdo con el cliente, tenemos soporte para planes gold y platinum, así que creamos uno para cada.

Para el al plan gold.

Las propiedades.

![Captura de las propiedades de un SLA](../../frontend/src/static/images/Cap-Creado-SLAgold.png)

Los SLTs.

![Captura de los SLT de un SLA](../../frontend/src/static/images/Cap-añadir-SLTgold.png)

Los contratos con los clientes, en nuestro caso tenemos dos clientes, clinicOwner1 y clinicOwner2.

![Captura de los contratos](../../frontend/src/static/images/Cap-Customer-gold.png)

Para el al plan platinum.

Las propiedades.

![Captura de las propiedades de un SLA](../../frontend/src/static/images/Cap-Creado-SLAplatinum.png)

Los SLTs.

![Captura de los SLT de un SLA](../../frontend/src/static/images/Cap-añadir-SLTplatinum.png)

Los contratos con los clientes, en nuestro caso tenemos dos clientes, clinicOwner1 y clinicOwner2.

![Captura de los contratos](../../frontend/src/static/images/Cap-Customer-platinum.png)

Para poder añadir los SLT, hay que crearlo, se crear de la siguente forma.

Se elige la opción de SLTs.

![Captura de como llegar a los STL](../../frontend/src/static/images/Cap-menu-SLT.png)

Como en nuestro acuerdo con el cliente tenemos definidos dos planes, creamos para cada plan, un TTO y un TTR, los los tipo podrán ser o incident o service requests, el valor  y la prioridad está puesto en el CA. Ahora mostraremos un ejemplo de cada.

Ejemplo de TTO

![Captura de un TTO](../../frontend/src/static/images/Cap-TTO-gold.png)

Ejemplo de TTR

![Captura de un TTR](../../frontend/src/static/images/Cap-TTR-platinum.png)

#### 2.3.3 Requisitos sobre el contrato del servicio ofrecido

Se crea el contrato de consumidor.

Se elige la opción de Customer contracts.

![Captura de como crear un customer contracts](../../frontend/src/static/images/Cap-menu-customer.png)

Se crea una para cada organización, osease clinicOwner1 y clinicOwner2, para cada una se crea una plan para el gold y otro para el platinum.

Ejemplo del clinicOwner1 con el plan gold.

Las propiedades.

![Captura de las propiedades de un customer contracts](../../frontend/src/static/images/Cap-creado-customergold.png)

Le asociamos el servicio correspondiente

![Captura de los servicios de un customer contracts](../../frontend/src/static/images/Cap-service-customergold.png)


Ejemplo del clinicOwner2 con el plan platinum.

Las propiedades.

![Captura de las propiedades de un customer contracts](../../frontend/src/static/images/Cap-creado-customerplatinum.png)

Le asociamos el servicio correspondiente

![Captura de los servicios de un customer contracts](../../frontend/src/static/images/Cap-service-customerplatinum.png)

Creación de un Delibery Model

Se elige la opción Delibery models

![Captura de como llegar al Delibery model](../../frontend/src/static/images/Cap-menu-delibery.png)

Las propiedades.

![Captura de las propiedades del delibery model](../../frontend/src/static/images/Cap-creado-delibery.png)

El consumidor.

![Captura del consumidor del delibery model](../../frontend/src/static/images/Cap-customer-delibery.png)

Los contactos.

![Captura de los contactos del delibery model](../../frontend/src/static/images/Cap-contacts-delibery.png)

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
| Equipo  | ✓  | ✓ | ✓ | ✓  | ✓  |
| Periféricos  | ✓  | ✓  | ✓  | ✓  | ✓  |
| Servicios externos  | ✓  | ✓  | ✓  | ✓  | ✓  |
| SLT  | ✓  | ✓  | ✓  | ✓  | ✓  |
| SLA  | ×  | ×  | ×  | ✓  | ✓  |
| Incidencias  | ✓  | ✓  | ✓  | ✓  | ✓  |
| Peticiones de usuario  | ✓  | ✓  | ✓  | ✓  | ✓  |
| Contratos de cliente  | ×  | ×  | ✓  | ×  | ×  |
| Configuración App Engine | × | × | × | ✓ | × |
| Delivery Model | × | × | × | × | ✓ |
| Coverage Window | × | × | × | ✓ | × |
| Service | × | × | ✓ | × | × |
| Service Subcategories | ✓ | ✓ | × | × | × |
