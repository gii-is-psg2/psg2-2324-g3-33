# Informe Técnico: Metodología de Gestión de Configuración

## 1. Introducción

En este informe, se describe la metodología de gestión de configuración seguida por el grupo. Se abordan aspectos como estándares de codificación, políticas de mensajes, estructura de repositorios, estrategia de ramificación, políticas de versiones, definición de "hecho" y gestión de documentos generados durante el proyecto.

## 2. Estándares de codigo

Durante el proceso de código, seguiremos el siguiente estándar decidido grupalmente en clase.
- **Código imprescindible**: Se añadirá el código imprescindible para el progreso de la issue. No se añadirá nada que no corresponda con lo descrito dentro de los elementos del product backlog.

## 3. Política de Commits

La política de commits es la siguiente: 
- Si el cambio de código es para añadir una nueva característica, al principio del commit se pondrá **feat**
- Si es por arreglo, se pondrá **fix**
- Si es por adición de documentos, se pondrá **docs**

Además, posteriormente se pondrá el mismo título que la rama (sin los "-" entre palabras), seguido del número de la issue a la que corresponde.

Posteriormente, se añadirá una breve descripción de los cambios añadidos / errores arreglados, terminando con la referencia a la issue con el formato: **Refs #numIssue**

Siguiendo esta política, un ejemplo para un cambio de código de la issue 14 que refiere al cambio de los gradientes, quedaría de la forma: **feat: Cambiar color gradientes #14 	Cambiar el color de las tarjetas con 3 colores distintos de marrón. 	Refs #14**

## 4. Estructura de Repositorios y ramas

Se va a seguir la siguiente estrategia:

El proyecto tendrá un único repositorio compartido, el cual se dividirá en varias ramas. Cada issue supondrá la creación de una rama y la estrategia de estas se explica en el siguiente punto.

## 5. Estrategia de ramas (Git Flow)

Seguiremos una estrategia de ramas basada en Git Flow. El proyecto tendrá tres tipos de ramas: en las que se añadan cambios (feature), en la que se prepare el release (release), y en la que se corrijan bugs (fix). Como la mayoría de ramas serán del tipo *feature*, hemos optado por omitir el nombre de esta al principio de la rama, mientras que cuando sea de tipo *release* o *fix* se indicará al principio de esta.

Para dar por terminada una rama o issue, haremos el peer review. Esto significa que, cuando la persona asignada avise de que sus cambios han sido subidos, otros dos integrantes del grupo deberán revisarla y poner un comentario en la misma issue dando su opinión. Si ambas opiniones son favorables, se dará por terminada la issue.

### 5.1. Desarrollo de Ramas feature

Como bien se ha explicado anteriormente, la gran parte de las ramas del proyecto serán de tipo *feature* por lo que el nombre de la rama será: nombre de la issue-numero de la issue. Siendo por ejemplo la rama de la issue 14: cambiar-color-gradientes-14.


### 5.2. Preparación de release

Para las ramas release, se añadirá al comienzo del nombre, la palabra *release*, quedando de la forma: release-version. Por ejemplo, para hacer el release de la versión 1.1, quedaría de la forma: release-1.1

### 5.3. Corrección de bugs (Fix)

Para la corrección de bugs, se añadirá al comienzo la palabra *fix*, quedando de la forma: fix-nombreIssue-numeroIssue. Por ejemplo, si tuviésemos que corregir algún aspecto relacionado con la issue 14, quedaría de la forma: fix-cambiar-color-gradientes-14.

## 6. Políticas de Versiones

La política de versiones adoptada está basada en versión por sprint. Siendo la version 1.0 la correspondiente al Sprint 1, la 2.0 para el sprint 2 y así sucesivamente.

## 7. Definición de "Done"

En nuestro grupo, la definición de "Done" viene dada de la siguiente forma:

Se pasará al tablero *DONE* una issue si, ha sido subida a la rama a la que estaba asignada, ha pasado por el peer review favorablemente y se ha mergeado con la rama main. En caso de que una de las tres no se haya hecho, no se podrá dar por "Done" una issue.

## 8. Gestión de Documentos en el Repositorio

Todos y cada uno de los documentos del repositorio se subirán a una carpeta *docs* situada en la raíz del proyecto. Dentro de esta carpeta, tendremos subcarpetas para diferenciar los sprints.

Además, haremos un informe de reunión tanto por reunión "extracurricular", como para las stand-up. Los nombres de estas reuniones, vendrán dados por: tipo-reunión-fecha. Siendo por ejemplo una reunión de tipo stand-up del Martes 20 de febrero: stand-up-20/02 

