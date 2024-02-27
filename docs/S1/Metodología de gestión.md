# Informe Técnico: Metodología de Gestión de Configuración

## 1. Introducción

En este informe, se describe la metodología de gestión de configuración seguida por el grupo. Se abordan aspectos como estándares de codificación, políticas de mensajes, estructura de repositorios, estrategia de ramificación, políticas de versiones, definición de "hecho" y gestión de documentos generados durante el proyecto.

## 2. Estándares de codigo

Oracle ha establecido una serie de estándares de código y convenciones de estilo para Java, conocidos como "Java Code Conventions". Estos estándares están diseñados para promover la legibilidad y consistencia en el código Java. Hemos decidido seguir estos estándares. Algunos de los principales puntos incluidos en estas convenciones son:

- **Nombres de variables, métodos y clases**: Utilizar nombres significativos y descriptivos para variables, métodos y clases. Los nombres de variables y metodos deben comenzar con letra minúscula, mientras que los nombres de clases y tipos deben comenzar con mayúscula.

- **Formato del código**: Utilizar sangrías consistentes (generalmente de 4 espacios), y colocar llaves en la misma línea que la declaración (excepto para las declaraciones de control de flujo). Además, se recomienda utilizar un máximo de 80 caracteres por línea.

- **Comentarios**: Incluir comentarios significativos para explicar el propósito del código, especialmente en áreas complejas o difíciles de entender.
 
- **Convenciones de código**: Utilizar convenciones establecidas para el estilo de código, como el uso de constantes en mayúsculas, el uso de paréntesis alrededor de las expresiones en las declaraciones de control de flujo, etc.

- **Declaraciones de importación**: Evitar el uso de importaciones de comodines (wildcards) y en su lugar importar clases específicas.

- **Convenciones de nombres de paquetes**: Utilizar nombres de paquetes en minúsculas y seguir una convención de nomenclatura de paquetes jerárquica inversa, similar al nombre de dominio invertido.

- **Convenciones de comentarios**: Utilizar comentarios JavaDoc para documentar clases, métodos y variables públicas.

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

El proyecto tendrá un único repositorio remoto compartido, el cual se dividirá en varias ramas. Estas son: rama main, rama develop, rama release, rama hotfix.

La rama main es la rama principal del proyecto, donde se subirán todos los cambios después de realizar cada release.

La rama develop es la rama a la que se irán subiendo y mergeando las pull requests durante los sprints.

La rama release será la rama donde se realizará el despliegue y por tanto la rama que contendrá al final de cada sprint todos los cambios realizados durante este.

La rama hotfix será la rama donde se subirán los cambios rápidos que se realicen tras haber encontrado errores posteriores al release.

## 5. Estrategia de ramas (Git Flow)

Seguiremos una estrategia de ramas basada en Git Flow. El proyecto tendrá tres tipos de ramas: en las que se añadan cambios (feature), en la que se prepare el release (release), y en la que se corrijan bugs (fix). Como la mayoría de ramas serán del tipo *feature*, hemos optado por omitir el nombre de esta al principio de la rama, mientras que cuando sea de tipo *release* o *fix* se indicará al principio de esta.


### 5.1. Desarrollo de Ramas feature

Como bien se ha explicado anteriormente, la gran parte de las ramas del proyecto serán de tipo *feature* por lo que el nombre de la rama será: nombre de la issue-numero de la issue. Siendo por ejemplo la rama de la issue 14: cambiar-color-gradientes-14.


### 5.2. Preparación de release

Para las ramas release, se añadirá al comienzo del nombre, la palabra *release*, quedando de la forma: release-version. Por ejemplo, para hacer el release de la versión 1.1, quedaría de la forma: release-1.1

### 5.3. Corrección de bugs (Fix)

Para la corrección de bugs, se añadirá al comienzo la palabra *fix*, quedando de la forma: fix-nombreIssue-numeroIssue. Por ejemplo, si tuviésemos que corregir algún aspecto relacionado con la issue 14, quedaría de la forma: fix-cambiar-color-gradientes-14.

## 6. Políticas de Versiones

La política de versiones adoptada está basada en el Semantic Versioning. Esta cuenta con tres numeros separados por puntos de la forma: X.Y.Z. Donde la X significa el número del Sprint en el que se ha realizado la versión, la Y siginifica las versiones menores, que tienen cambios durante el proceso, y la Z que especifica los patches o cambios menores dentro de cada version menor especificada en Y.

## 7. Definición de "Done"

En nuestro grupo, la definición de "Done" viene dada de la siguiente forma:

Se pasará al tablero *DONE* una issue si, ha sido subida a la rama a la que estaba asignada, ha pasado por el peer review favorablemente y se ha mergeado con la rama main. En caso de que una de las tres no se haya hecho, no se podrá dar por "Done" una issue.

Para pasar por el peer review, la pull request deberá tener al menos un comentario que la acepte.

## 8. Gestión de Documentos en el Repositorio

Todos y cada uno de los documentos del repositorio se subirán a una carpeta *docs* situada en la raíz del proyecto. Dentro de esta carpeta, tendremos subcarpetas para diferenciar los sprints.

Los informes que se hagan, tendrán el nombre del propio informe como nombre del archivo.

Además, haremos un informe de reunión tanto por reunión "extracurricular", como para las stand-up. Los nombres de estas reuniones, vendrán dados por: fecha-tipo-reunión. Siendo por ejemplo una reunión de tipo stand-up del Martes 20 de febrero: 20-02-2024-Daily-Stand-ups-Meeting.

