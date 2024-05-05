# Análisis del código fuente y métricas asociadas

## Panel de SonarQube

SonarQube analiza el código fuente mediante 7 ejes/dimensiones de calidad:
- Bugs: se tratan de errores potenciales en el código.
- Vulnerabilities: indica si el código presenta vulnerabilidades.
- Hotspots Reviewed: indican el porcentaje de fragmentos de código, que señalan un posible riesgo de seguridad, que se han revisado.
- Code Smells: son características en el código fuente que posiblemente indiquen un problema más prdofundo.
- Coverage: ayuda a identificar que partes del programa han sido ejecutadas por un conjunto de casos de prueba, asegurando que las partes más críticas sean probadas.
- Duplications: indica el porcentaje de código duplicado.
- Lines: número de líneas que componen el código fuente.

### Panel de SonarQube del primer lanzamiento

![Panel de SonarQube 1](../../frontend/src/static/images/captura%20del%20panel%20sonarqube.png)

Podemos distinguir entre el backend y el frontend:
#### Backend -> PSG2-2324-G3-33 Petclinic 
- Bugs: 3 errores potenciales en el código.
- Vulnerabilities: 0 vulnerabilidades.
- Hotspots Reviewed: se han revisado 0 fragmentos de código que señalen un posible riesgo de seguridad.
- Code Smells: se han detectado 227 code smells.
- Coverage: con los test se ha cubierto un 77.7% del código.
- Duplications: el porcentaje de código duplicado es del 0.0%.
- Lines: aproximadamente 4100 líneas en lenguaje Java y XML.

#### Frontend -> PSG2-2324-G3-33-frontend
- Bugs: 4 errores potenciales en el código.
- Vulnerabilities: 0 vulnerabilidades.
- Hotspots Reviewed: se han revisado 0 fragmentos de código que señalen un posible riesgo de seguridad.
- Code Smells: se han detectado 149 code smells.
- Coverage: con los test se ha cubierto un 0.0% del código, ya que no se han realizado pruebas de frontend.
- Duplications: el porcentaje de código duplicado es del 16.9%.
- Lines: aproximadamente 11000 líneas en lenguaje JavaScript, CSS y HTML.

### Panel de SonarQube del segundo lanzamiento

![Panel de SonarQube 2](../../frontend/src/static/images/captura%20del%20panel%20de%20sonarqube%202.png)

Podemos distinguir entre el backend y el frontend:
#### Backend -> PSG2-2324-G3-33 Petclinic 
- Bugs: 3 errores potenciales en el código.
- Vulnerabilities: 0 vulnerabilidades.
- Hotspots Reviewed: se han revisado 0 fragmentos de código que señalen un posible riesgo de seguridad.
- Code Smells: se han detectado 253 code smells.
- Coverage: con los test se ha cubierto un 76.0% del código.
- Duplications: el porcentaje de código duplicado es del 0.0%.
- Lines: aproximadamente 4500 líneas en lenguaje Java y XML.

#### Frontend -> PSG2-2324-G3-33-frontend
- Bugs: 4 errores potenciales en el código.
- Vulnerabilities: 0 vulnerabilidades.
- Hotspots Reviewed: se han revisado 0 fragmentos de código que señalen un posible riesgo de seguridad.
- Code Smells: se han detectado 189 code smells.
- Coverage: con los test se ha cubierto un 0.0% del código, ya que no se han realizado pruebas de frontend.
- Duplications: el porcentaje de código duplicado es del 16.4%.
- Lines: aproximadamente 11000 líneas en lenguaje JavaScript, CSS y HTML.

---

### Bugs del Frontend

![BUG](../../frontend/src/static/images/bug1.JPG)

**Nombre:** 
Remove this conditional structure or edit its code           blocks so that they're not all the same.

**Descripción:** 
Todas las ramas en una estructura condicional no deberían tener exactamente la misma implementación.


**Causas:** 
Las condiciones if y else devuelven lo mismo.

**Evaluación:**
Aunque técnicamente no es un error que causará una falla inmediata en el programa, puede ser considerado un problema de calidad de código y puede tener implicaciones en la legibilidad, mantenibilidad y escalabilidad del código.

**Soluciones:** 
-Sería lanzar un nuevo error después del else.
-La mejor opción sería esta: Simplificar el código quitando la estructura if-else y simplemente devolver response.json() directamente después de la llamada a fetch().
                      
---          

 ![BUG](../../frontend/src/static/images/bug2.JPG)

**Nombre:** 
Unexpected missing generic font family

**Descripción:** 
Si ninguno de los nombres de fuentes definidos en una fuente o declaración de familia de fuentes está disponible en el navegador del usuario, el navegador mostrará el texto usando su fuente predeterminada.


**Causas:** 
No tener ninguno de los nombres de fuentes definidos.

**Evaluación:**
Este problema no es grave, pero es una buena práctica en diseño web seguir las recomendaciones para garantizar una mejor consistencia y accesibilidad.

**Soluciones:** 
Se recomienda definir siempre una familia de fuentes genérica para cada declaración de fuente o familia de fuentes para obtener una situación menos degradada que confiar en la fuente predeterminada del navegador.

---

![BUG](../../frontend/src/static/images/bug3.JPG)

**Nombre:**
Unexpected duplicate "position"

**Descripción:**
La palabra position está duplicada.

**Causas:** 
El atributo position está duplicado.

**Evaluación:**
Esto puede no ser un error grave, pero puede causar comportamientos inesperados en la apariencia o el diseño de los elementos afectados.
Cuando se duplica una propiedad CSS en una regla, la segunda instancia generalmente anula la primera. Por lo tanto, si la primera instancia de position: absolute; tiene efecto en un elemento y la segunda instancia cambia su valor, esto puede alterar el diseño esperado del elemento.

**Soluciones:**
Para corregir este problema, simplemente elimina una de las instancias duplicadas para mantener el estilo coherente y evitar posibles confusiones en la interpretación del código CSS.

--- 

![BUG](../../frontend/src/static/images/bug4.JPG)

**Nombre:**
Unexpected duplicate "height"

**Descripción:**
La palabra height está duplicada.

**Causas:** 
El atributo height está duplicado.

**Evaluación:**
Esto puede no ser un error grave, pero puede causar comportamientos inesperados en la apariencia o el diseño de los elementos afectados.
Cuando se duplica una propiedad CSS en una regla, la segunda instancia generalmente anula la primera. Por lo tanto, si la primera instancia de position: absolute; tiene efecto en un elemento y la segunda instancia cambia su valor, esto puede alterar el diseño esperado del elemento.

**Soluciones:**
Para corregir este problema, simplemente elimina una de las instancias duplicadas para mantener el estilo coherente y evitar posibles confusiones en la interpretación del código CSS.

---

### Bugs del Backend

![BUG](../../frontend/src/static/images/bug5.JPG)

![BUG](../../frontend/src/static/images/bug6.JPG)

**Nombre:**
Call "Optional#isPresent()" before accessing the value.
(Agrupo dos bugs aquí, el de ClinicService y el de ClinicOwnerService)

**Descripción:**
El mensaje de error sugiere llamar Optional#isPresent() antes de acceder al valor dentro de un Optional. Este error puede causar una excepción NoSuchElementException si el Optional está vacío.

**Causas:** 
La causa del problema es que se está accediendo directamente al valor de un Optional sin verificar si el Optional devuelto por findById contiene un valor.

**Evaluación:**
El impacto de este bug es que el código puede lanzar una excepción NoSuchElementException si el Optional está vacío. Esto puede causar una interrupción en la ejecución del programa y potencialmente dejar el estado del sistema en un estado inconsistente.

**Soluciones:**
La solución es verificar si el Optional está presente antes de acceder a su valor. Esto se puede hacer llamando a Optional#isPresent() o utilizando métodos como Optional#orElse() o Optional#orElseThrow() para proporcionar un valor predeterminado o lanzar una excepción si el Optional está vacío.

---

![BUG](../../frontend/src/static/images/bug7.JPG)

**Nombre:**
Refactor the code so this stream pipeline is used.

**Descripción:**
El mensaje de error sugiere refactorizar el código para usar un pipeline de stream en lugar de iterar sobre la lista manualmente. Esto puede mejorar la legibilidad y el rendimiento del código.

**Causas:** 
El problema radica en que el código actual itera manualmente sobre la lista de habitaciones del hotel de mascotas para filtrar las habitaciones pertenecientes a un propietario de clínica específico. Esto puede ser menos eficiente y menos legible que usar un pipeline de stream de Java 8.

**Evaluación:**
El impacto de este bug es principalmente en la legibilidad y el mantenimiento del código. Iterar manualmente sobre la lista puede ser propenso a errores y menos eficiente que usar funcionalidades proporcionadas por Java 8, como los pipelines de stream.

**Soluciones:**
La solución es refactorizar el método getPetHotelRoomsByClinicOwnerUserId para utilizar un pipeline de stream en lugar de iterar manualmente sobre la lista. Esto puede mejorar la legibilidad del código y potencialmente mejorar su rendimiento.

---

### Code Smells del Frontend

**Nombre:**
Remove this unused import ...

**Descripción:**
Este code smell sugiere eliminar importaciones que no se están usando, ya qué son prescindibles en el archivo js.

**Causas:** 
Puede deberse a una importación que se usó en algún momento, pero que al cambiar o eliminar código ha quedado en desuso.

**Evaluación:**
Este code smell no interfiere en la funcionalidad del sistema.

**Soluciones:**
Eliminar la importación.

---

**Nombre:**
x is already declared in the upper scope

**Descripción:**
Este code smell hace referencia a que estamos definiendo un parametro de por ejemplo un catch usando el nombre de una variable existente.

**Causas:** 
Olvidarse de que se usó un nombre de variable.

**Evaluación:**
Este code smell interfiere en la legibilidad del código.

**Soluciones:**
Cambiar el nombre por alguno que no se esté usando.

---

**Nombre:**
Refactor this function to reduce its Cognitive Complexity from x to the 15 allowed.

**Descripción:**
Este code smell dice que una función tiene una complejidad alta, o sea, que tiene demasiadas difurcaciones condicionales.

**Causas:** 
Escribir un codigo sencillo pero no legible.

**Evaluación:**
Este code smell interfiere en la legibilidad del código.

**Soluciones:**
Refactorizar la función para que sea más legible.

---

**Nombre:**
Remove this useless assignment to variable.

**Descripción:**
Este code smell hace referencia a que la variable no se está utilizando en ningún momento de la ejecución.

**Causas:** 
Definir variables pensando en el futuro y no acabar usándolas.

**Evaluación:**
Este code smell no interfiere en la funcionalizad del sistema, pero tampoco en la legibilidad.

**Soluciones:**
Eliminar la variable.

---

**Nombre:**
'xxx' import is duplicated.

**Descripción:**
Este code smell hace referencia a que hay dos importaciones identicas.

**Causas:** 
Importar diferentes elementos de un mismo archivo.

**Evaluación:**
Este code smell no interfiere en la funcionalizad del sistema, pero tampoco en la legibilidad.

**Soluciones:**
Eliminar una de las importaciones o comprimir las importaciones en una sola.

---

### Code Smells del Backend

**Nombre:**
Remove this unused import ...

**Descripción:**
Este code smell sugiere eliminar importaciones que no se están usando, ya qué son prescindibles en el archivo js.

**Causas:** 
Puede deberse a una importación que se usó en algún momento, pero que al cambiar o eliminar código ha quedado en desuso.

**Evaluación:**
Este code smell no interfiere en la funcionalidad del sistema.

**Soluciones:**
Eliminar la importación.

---

**Nombre:**
Define a constant instead of duplicating this literal "xxx" n times.

**Descripción:**
Este code smell hace referencia a que estamos declarando un mismo valor n veces.

**Causas:** 
No definir una constante con el valor referenciado.

**Evaluación:**
Este code smell no afecta a la funcionalidad del sistema.

**Soluciones:**
Crear una constante y utilizarla cuando sea necesario.

---

**Nombre:**
Remove the declaration of thrown exception 'java.net.URISyntaxException', as it cannot be thrown from method's body

**Descripción:**
Este code smell hace referencia a que estamos declarando que una funcion puede lanzar una excepción.

**Causas:** 
Cambiar el código para que no lance una excepción, pero no eliminarlo en la declaración del método o función.

**Evaluación:**
Este code smell no afecta a la funcionalidad del sistema, pero si afecta en la legibilidad del código.

**Soluciones:**
Eliminar la declaracion de la excepción.

---

**Nombre:**
This block of commented-out lines of code should be removed.

**Descripción:**
Este code smell hace referencia a que estamos dejando código comentado en alguna clase o archivo.

**Causas:** 
Cambiar el código comentando el antiguo para no borrarlo en caso de querer retroceder.

**Evaluación:**
Este code smell no afecta a la funcionalidad del sistema, pero si afecta en la legibilidad del código.

**Soluciones:**
Eliminar el código comentado.

---

**Nombre:**
Make this "xxx" field final

**Descripción:**
Este code smell hace referencia a que se espera que una variable sea final en java, osea, una constante

**Causas:** 
Definir una variable sin final

**Evaluación:**
Este code smell puede afectar a la funcionalidad del sistema, pero no en la legibilidad del código.

**Soluciones:**
Poner la variable como final.

## Conclusiones

A la vista de las métricas obtenidas, se concluye que hay demasiados code smells para la importancia que tienen, ya que algunos que se consideran bugs y no afectan a la funcionalidad del programa.
