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