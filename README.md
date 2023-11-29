<!-- # R2KApp -->
[![Banner](https://repository-images.githubusercontent.com/725126516/f2a07de4-9a5f-4dc8-a622-7dec4fb00c81)](https://github.com/CarlosAlfaroP/R2KApp)

**R2K: El Derecho a Saber**  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
## Descripción

Este proyecto proporciona una estructura para una aplicación multiplataforma utilizando la tecnología de Kotlin Multiplataforma. 
La estructura consta de un módulo "Common" que alberga la lógica compartida, permitiendo la creación de aplicaciones para Android, Web (WebAssembly) 
y plataformas de escritorio (macOS, Windows, Linux) a partir de un único código base.

Finalmente, la estructura permitirá la creación de una plataforma educativa que podrá ser desplegada para libre uso.

## Tabla de Contenidos
- [Características](#características)
- [Características Técnicas](#características-tecnicas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

El proyecto utiliza Kotlin Multiplataforma para la creación de una aplicación educativa. 
El fin es que proporcione a estudiantes de todas las edades un acceso sencillo, interactivo y enriquecedor 
a contenidos relacionados con formación cívica, promoviendo el aprendizaje y la comprensión de los principios 
democráticos, los derechos humanos, la ciudadanía y el funcionamiento del gobierno en Chile.

En una primera versión se utiliza la estructura base creada en [ProyectoAPP](https://github.com/CarlosAlfaroP/ProyectoAPP), 
añadiendo la navegación básica y un usuario ejemplo para revisión.

## Características Técnicas

- Estructura básica para aplicaciones multiplataforma en Kotlin.
- Módulo "Common" con lógica compartida.
- Soporte para Android, Web y plataformas de escritorio.
- Un único código base para todas las plataformas.
- Clases implementadas de navegación (bottom-side menu)

## Requisitos

- Android Gradle Plugin (AGP) [Versión 8.2.0-alpha12]
- Kotlin [Versión 1.9.10]
- Jetpack Compose [Versión 1.5.10-beta02]
- Activity Compose [Versión 1.8.0]
- Gradle [Versión 8.4]
- IntelliJ IDEA [Versión 2023.2.2 (Community Edition) Build #IC-232.9921.47]
- Oracle OpenJDK [Versión 17.0.6] (Recomendado para compilación)
- Appyx [Versión 2.0.0.alpha-09] 

## Instalación

Para comenzar a trabajar con este proyecto, sigue los siguientes pasos:

1. **Instalar Entorno de Desarrollo**:

   Antes de importar el proyecto en tu entorno de desarrollo, asegúrate de tener un entorno configurado que cumpla con los requisitos y recomendaciones mencionados en la sección de "Requisitos". Esto puede incluir la instalación de IntelliJ IDEA, Gradle y Oracle OpenJDK 17.0.6, entre otros.

2. **Clonar el Repositorio**:

   Utiliza el comando Git para clonar el repositorio en tu máquina local o utiliza la interfaz del framework.

3. **Importar el Proyecto en IntelliJ IDEA**:

   Para importar el proyecto en IntelliJ IDEA, sigue estos pasos:

    - Abre IntelliJ IDEA.

    - Selecciona "File" -> "Open" y busca la carpeta del proyecto.

    - IntelliJ IDEA detectará automáticamente la configuración del proyecto y configurará las rutas de compilación.

Ahora estarás listo para trabajar en el proyecto en tu entorno de desarrollo local.

## Uso

Este proyecto proporciona una estructura lista para la compilación en diversas plataformas. A continuación, se describen los pasos para utilizarlo:

1. **Estructura del Proyecto**:

    - El proyecto consta de varios módulos, incluyendo:
        - `Common`: Contiene la lógica compartida entre las diferentes plataformas.
        - `android`: Módulo específico para Android.
        - `web`: Módulo para Web (WebAssembly).
        - `desktop`: Módulo para aplicaciones de escritorio (macOS, Windows, Linux).
        - `ios` (TODO): Módulo iOS (a implementar).

2. **Compilación**:

   Para compilar el proyecto, asegúrate de cumplir con los requisitos especificados en la sección de "Requisitos". Luego, sigue estos pasos:

    - Abre el proyecto en IntelliJ IDEA (o tu entorno de desarrollo preferido).

    - Configura las rutas de compilación y ejecución para cada módulo correspondiente a la plataforma que deseas compilar.

    - Ejecuta la compilación en tu entorno de desarrollo.

3. **Artefactos para Uso**:

   Después de la compilación, se generarán artefactos específicos para cada plataforma. Estos artefactos se ubicarán en los directorios correspondientes de cada módulo (por ejemplo, `android/build`, `web/build`, `desktop/build`, etc.).

4. **Uso Web**:

    - Si deseas utilizar la versión web de la aplicación, consulta los artefactos generados en el módulo `web/build`. Puedes desplegarlos en tu servidor web o en un entorno compatible con WebAssembly.

5. **Uso Desktop**:

    - Para utilizar la aplicación de escritorio en macOS, Windows o Linux, consulta los artefactos generados en el módulo `desktop/build`. Los artefactos específicos para cada plataforma estarán en los directorios correspondientes.

6. **Uso Android**:

    - Si deseas utilizar la aplicación en dispositivos Android, consulta los artefactos generados en el módulo `android/build`. Puedes instalar la aplicación en un dispositivo Android o emulador.

7. **Módulo iOS (TODO)**:

    - La implementación del módulo iOS está pendiente. Estará disponible en próximas actualizaciones.

Ten en cuenta que estos son pasos generales, y la configuración específica puede variar según tu proyecto y las herramientas que utilices. 

## Contribución

Este proyecto es el resultado del esfuerzo y la colaboración de los siguientes contribuyentes:

- Alumnos de Ingeniería Informática en UNIACC:
   - Carlos Alfaro Palma
   - Susana Saravia Medina
   - Maximiliano Arancibia Cares

Si deseas contribuir a este proyecto, no dudes en ponerte en contacto con los contribuyentes mencionados.

## Licencia

Este proyecto se distribuye bajo una licencia de código abierto y se encuentra en constante desarrollo. Consulta la licencia específica en el archivo "LICENSE" adjunto al proyecto.
