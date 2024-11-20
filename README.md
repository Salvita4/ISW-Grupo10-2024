# ISW-Grupo10-2024
Repositorio dedicado a almacenar y gestionar todos los resultados de aprendizajes durante el desarrollo del cursado de la matería Ingeniería y Calidad de Software.

## Contenido
- [Instalación de repositorio](#Instalación)
- [Criterio de Linea Base](#Criterio/Linea/Base)
- [Items de configuración](#Items/De/Configuracion)
- [Reglas de nombrado](#Reglas/Nombrado/Generales)
- [Integrantes](#Integrantes)
- [Estructura del repositorio](#Estructura/Del/Repositorio)
- [Disclaimers](#Disclaimers)

## Instalación
```bash
git clone https://github.com/Salvita4/ISW-Grupo10-2024.git
cd ISW-Grupo10-2024

*Siempre hacer pull o clonar el repositorio en una nueva carpeta*

------> COMO PULLEAR UNA RAMA:
git pull origin NombreRamaRemota NombreRamaLocal  --Pullea la rama remota en una rama local
git checkout NombreRamaLocal --Me traslado a la rama local recien pulleada

------> CUANDO SE PULLEA UN TP PROGRAMABLE:
- ejecutar en la terminal: npm install  --Instala todas las dependencias.
```

## Criterio/Linea/Base
La línea base inicial del proyecto se define una vez el documento que específica la utilización del repositorio y su estructura se encuentra completo y consensuado por los miembros del equipo, con el objetivo de usarlo como herramienta que dará soporte al desarrollo de la materia.  
La linea base será actualizada cada vez que se tengan los items de configuración necesarios para realizar una entrega de trabajo práctico, no sin antes haber sido debatido por los integrantes del grupo de trabajo. Si se realizan correcciones al trabajo realizado post-entrega, también se modificará la línea base para reflejar los cambios realizados, y para tener la versión más estable y completa de los items de configuración.

## Items/De/Configuracion
| Listado de Items de Configuración    | Regla de Nombrado                                                                           | Ubicación Física                                                                                                                           |
|--------------------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Apuntes de clase                     | AP-&lt;DDMMM&gt;-&lt;Tema&gt;-&lt;NombreMiembro&gt;-&lt;VN&gt;.pdf                          | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Apuntes                                                           |
| Bibliografía                         | Observación 1                                                                               | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Bibliografia/[Tema]                                               |
| Clases Grabadas                      | LinkClasesGrabadas.txt                                                                      | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Bibliografia                                                      |
| Resumenes                            | RES-&lt;DDMMM&gt;-&lt;Tema&gt;-&lt;NombreMiembro&gt;-&lt;VN&gt;.pdf                         | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Resumenes                                                         |
| Cronograma de clases                 | Cronograma.txt                                                                              | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Utils                                                             |
| Cartas Estimaciones                  | PokerPlanningCards.pdf                                                                      | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada/Utils                                                             |
| Aportes de Miembros                  | IndiceAportes.docx                                                                          | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/DocumentosCursada                                                                   |
| Templates                            | TMP-&lt;Tema&gt;-&lt;VN&gt;.docx                                                            | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/Templates                                                                           |
| Lineamientos para investigación      | ISW_Lineamientos para trabajos de investigación 2024 2C.pdf                                 | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosConceptuales/GuiaPracticosConceptuales                                      |
| Material de apoyo para investigación | APOYO-&lt;Tema&gt;-&lt;Fuente&gt;.&lt;extension&gt;                                         | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosConceptuales/TrabajoPracticoConceptual[N]-[Tema]/MaterialDeApoyo            |
| Producciones para investigación      | TPConc-Grupo10-&lt;Tema&gt;-&lt;VN&gt;.&lt;extension&gt;                                          | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosConceptuales/TrabajoPracticoConceptual[N]-[Tema]/Producciones               |
| Guía de ejercicios resueltos         | ISW_Guia de Trabajos Practicos Resueltos.pdf                                                | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosPracticos/GuiasEjercicios                                                   |
| Guía de ejercicios evaluables        | ISW_Enunciados TP evaluables 2024 2doCuat.pdf                                               | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosPracticos/GuiasEjercicios                                                   |
| Elaboración de Trabajos Prácticos    | TP-Grupo10-&lt;TipoTrabajo&gt;-&lt;TemaTrabajo&gt;-&lt;NombreMiembroOpcional&gt;-&lt;VN&gt;.docx    | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main/TrabajosPracticos/TrabajoPractico[N]/DocumentosAEntregar                            | 
| Estructura de Equipo de Trabajo      | EstructuraEquipo.docx                                                                       | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main                                                                                     |
| Glosario                             | Glosario.docx                                                                               | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main                                                                                     |
| Indice de Minutas                    | IndiceMinutas.docx                                                                          | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main                                                                                     |
| Tareas a realizar                    | Tareas.docx                                                                                 | https://github.com/Salvita4/ISW-Grupo10-2024/tree/main                                                                                     |

| Sigla                                      | Significado                                                                                                                       |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| &lt;DDMMM&gt;                              | Fecha en formato día en número y mes indicando tres primeras letras del mes                                                       |
| &lt;Tema&gt;                               | Tema sobre lo que se trata el Item de Configuración en específico                                                                 |
| &lt;NombreMiembro&gt;                      | Nombre de uno de los integrantes del grupo para identificar elaboraciones propias                                                 |
| &lt;VN&gt;                                 | Versión del Item de Configuración, en formato VN siendo N el número de versión                                                    |
| &lt;extension&gt;                          | Nombre de la extensión del archivo que no se especifica                                                                           |
| &lt;TipoTrabajo&gt;                        | Nombre de lo que se desarrolle en el item de configuración Ej. UserStory                                                          |
| &lt;TemaTrabajo&gt;                        | Tema del dominio del trabajo a desarrollar                                                                                        |
| &lt;-NombreMiembroOpcional&gt;             | Nombre de uno de los integrantes del grupo en caso que haya variaciones del mismo trabajo Ej. Ejercicios desarrollados en clase   |
| &lt;N&gt;                                  | Número cardinal de trabajo al que se hace referencia                                                                              |

Observación 1: Para todos los archivos extraídos de la UV, se dejaron sus nombres base.  
Observación 2: Dentro de las URLs se modifican las siglas y en vez de &lt;&gt; se utilizan []


## Reglas/Nombrado/Generales
En reglas generales, siempre se usará PascalCase para nombrar tanto los directorios como ítems de configuración. De manera particular se exigirá la cumplimentación de las siguientes reglas:

### Commits
Los commits seguirán el formato "Prefijo1/Prefijo2/PrefijoN-DescripciónAcción1/DescripciónAcción2/DescripciónAcciónN"
- El prefijo hace referencia a las siguientes posibles acciones que se pueden realizar con respecto a items de configuración
  - Add: Agregar un nuevo item de configuración.
  - Bugfix: Corregir un error descubierto dentro de un item de configuración que contenga código.
  - Fix: Correción de errores de cualquier tipo dentro de un item de configuración.
  - Change: Cambio parcial de un item de configuración ya creado debido a modificaciones de criterio, requerimientos o correcciones.
  - Feature: Agregar una nueva funcionaliad dentro de un item de configuración que contenga código.
  - Remove: Eliminación completa de algún item de configuración si el mismo se encontraba mal planteado.
  - Update: Actualización de un item de configuración ya creado, expandiendo su contenido sin necesariamente haber modificado lo previo
- La descripción hará referencia a los items de configuración afectados y a lo que haya sido realizado correspondientemente con el prefijo utilizado

### Templates
Los templates hacen referencia a las plantillas que diseñaremos a lo largo de la cursada para la entrega de trabajos y documentación del grupo.
Estos seguiran el siguiente formato: "TMP-Recurso-Versión".
- TMP: Template, indica el tipo de archivo.
- Recurso: Archivo o documento al que le sirve como plantilla.
- Versión: Versión del template (V1, V1.1, V2). El criterio de actualización se irá acordando con el equipo a medida que se desarrolle la cursada.

### Archivos
#### Apuntes:
Los apuntes hacen referencia a las notas de clases que vamos a ir subiendo luego del desarrollo de cada una. Estos archivos ser deben subir en formato pdf y deberán seguir el siguiente nombrado: "AP-Fecha-Tema-Autor-V1".
- AP: Indica que el archivo es un apunte.
- Fecha: Indica la fecha de la clase.
- Tema: Indica el tema de la clase o al que hace referencia el apunte.
- Autor: Indica quién lo escribio. Nos ayuda a saber a quién acudir para consultar dudas.
- VN: Indica la versión del apunte, puede sufrir cambios a lo largo del desarrollo de las clases.

#### Prácticos
Los prácticos hacen referencia a la resolución de prácticos que vamos a ir trabajando a lo largo de la cursada. Estos archivos ser deben subir en formato doc y deberán seguir el siguiente nombrado: "TP-TemaPractico-Dominio-Autor-vn".
- TP: Indica que el archivo es un trabajo práctico.
- TemaPractico: Indica el tema que se está ejercitando.
- Dominio: Indica el dominio o tema que se desarrolla en el ejercicio.
- Autor: Indica quién lo desarrolló. Nos ayuda a saber a quién acudir para consultar dudas.
- VN: Indica la versión de la resolución, puede sufrir cambios a lo largo del desarrollo de las clases.


## Integrantes
A continuación se detalla la lista de integrantes del grupo. Los roles que desempeñaran los mismos a lo largo del proyecto y actividades se detallan en un archivo llamado EstructuraEquipo, cuyo fin es demostrar los diferentes roles por los que pasará cada integrante.
| Integrante                     | Legajo |
|--------------------------------|--------|
| Barbera, Juan Salvador         | 86657  |
| Dalfaro, Marco José            | 69858  |
| Dinia, Jorge Hassan            | 87423  |
| Iril, Rocco Maciel             | 90104  |
| Lima, Nicolás                  | 85569  |
| Ramonda, Joaquín Antonio       | 82836  |
| Zabala, Federica Emilia        | 82830  |

## Estructura/Del/Repositorio
```
└── ISW-Grupo10-2024
    ├── DocumentosCursada/                                                 
    |   ├── Apuntes/                                                       
    |   ├── Bibliografia/                                                  
    |   |   ├── Agile/
    |   |   ├── IngenieriaDeSoftware/
    |   |   ├── LeanYKanban/
    |   |   ├── PresentacionesDeClase/
    |   |   ├── SCM/
    |   |   ├── TestingDeSoftware/
    |   |   └── LinkClasesGrabas.txt
    |   |
    |   ├── Resumenes/
    |   ├── Utils/
    |   |   ├── Cronograma.txt
    |   |   └── PokerPlanningCards.pdf
    |   └── IndiceAportes.docx
    |
    ├── Templates/
    |	
    ├── TrabajosConceptuales/
    |   ├── GuiaPraticosConceptuales/
    |   |   
    |   ├── TrabajoPracticoConceptual1-CharlaTED/
    |   |   ├── MaterialDeApoyo/
    |   |   └── Producciones/
    |   └── TrabajoPracticoConceptual1-PosterCientifico/
    |       ├── MaterialDeApoyo/
    |       └── Producciones/
    |
    ├── TrabajosPracticos/
    │   ├── GuiasEjercicios/
    │   |   
    │   ├── TrabajoPractico1/            *Se muestra un ejemplo*
    |   |   └── DocumentosAEntregar/     +---------------------+
    |   |                                |   CADA CARPETA DE   |
    │   ├── TrabajoPractico2/            |   TP TENDRA         |
    │   ├── TrabajoPractico3/            |   SOLO A AQUELLAS   |
    │   ├── TrabajoPractico4/            |   QUE NECESITE      |
    │   ├── TrabajoPractico5/            +---------------------+
    │   ├── TrabajoPractico6/            *Se muestra un ejemplo*
    |   |   ├── DocumentosAEntregar/
    |   |   ├── EstructuraCodigo/
    |   |   └── Modelos/
    |   |
    │   ├── TrabajoPractico7/
    │   ├── TrabajoPractico8/
    │   ├── TrabajoPractico9/
    │   ├── TrabajoPractico10/
    │   ├── TrabajoPractico11/
    │   ├── TrabajoPractico12/
    │   ├── TrabajoPractico13/
    │   └── TrabajoPractico14/
    |
    ├── Glosario.docx
    ├── IndiceMinutas.docx
    ├── README.md 
    └── Tareas.docx 
```

### Descripción de carpetas y archivos:
- DocumentosCursada: Carpeta donde se encuentran distintos archivos con información pertinente al cursado de la materia, incluyendo:
  - Apuntes: Carpeta que contendrá apuntes elaborados por los integrantes del grupo de trabajo en base a las clases dictadas.
  - Bibliografía: Carpeta que contedrá las subcarpetas con el material bibliográfico de la cátedra, separados por temas (Agile, SCM, LeanYKanban, etc). Además contará con un archivo txt donde almacenamos el link a las clases grabadas.
  - Resumenes: Carpeta que contendrá resúmenes elaborados por los integrantes del grupo de trabajo en base a bibliografía y apuntes de clases.
  - Utils: Carpeta con documentos extras útiles, tales como el link al cronograma o las cartas de poker planning
  - IndiceAportes: Documento en el cual se enumerarán distintas fuentes de información aparte a la bibliografía planteada por la cátedra.

- Templates: Carpeta que contendrá templates elaborados para entrega de trabajos y documentación del grupo.

- TrabajosConceptuales: Carpeta que contendrá los trabajos practicos conceptuales realizados durante el cursado de la materia.
  - GuiaPracticosConceptuales: Carpeta que contendrá la guía para la confección de los trabajos prácticos conceptuales.
  - TrabajoPracticoConceptual1-CharlaTED: Carpeta que contendrá el desarrollo del Trabajo práctico coneptual1 - CharlaTED.
    - MaterialDeApoyo: Carpeta que contendrá todo el material que sirva de soporte para la realización del trabajo.
    - Produccioens: Carpeta que contendrá las salidas del desarrollo del trabajo.
  - TrabajoPracticoConceptual1-PosterCientifico: Carpeta que contendrá el desarrollo del Trabajo práctico conceptual1 - PosterCientifico. Su estructura es igual a la mencionada anteriormente 👆.

- TrabajosPracticos: Carpeta que contendrá los trabajos prácticos realizados durante el cursado de la materia. Contendrá tantas carpetas llamadas TrabajoPracticoX como trabajos prácticos sean elaborados, siendo X reemplazado por el número de trabajo práctico correspondiente. Internamente, cada trabajo práctico contendrá (No todos los trabajos tendrán las 3 carpetas, solo tendrán aquellas que necesiten):
  - DocumentosAEntregar: Carpeta que contendrá los documentos que conformen la entrega final del trabajo práctico, explicando lo correspondiente al trabajo que haga referencia.
  - EstructuraCodigo: Carpeta que contendrá el código fuente del trabajo práctico en trabajos donde se deba entregar un código funcional.
  - Modelos: Carpeta que contendrá los distintos modelos elaborados durante el desarrollo de los trabajos prácticos y que conforman la entrega final.
- GuiaEjecicios: Carpeta que contendrá tanto la guía de ejercicios prácticos resueltos, así como la guía de praticos a resolver.

- EstructuraEquipo: Documento que se modificará a lo largo de la cursada dependiendo del rol que desempeñe cada integrante del grupo en cada trabajo, especificando el mismo y sus responsabilidades.
- Glosario: Documento que contendrá explicaciones a términos utilizados a lo largo del desarrollo de la materia y trabajos prácticos.
- IndiceMinutas: Documento que contendrá las distintas reuniones que se llevan a cabo por los integrantes del grupo, incluyendo el tema a tratar, conclusiones a las que se llegaron, fecha de realización y miembros que asisten.
- README: Archivo que contiene explicación sobre el repositorio, su propósito y su función. Contiene la estructura del repositorio, los integrantes de trabajo, las reglas de nombrado de los items de configuración y el criterio de linea base definido por los integrantes del grupo de trabajo.
- Tareas: Documento que contendrá las táreas de clase a desarrollar. Sirve como recordatorio de qué es lo que tenemos para hacer.

## Disclaimers
- Si se encuentran archivos cuyo nombre es igual a "x" o "ResumenX" (vacíos), ignorarles, se usan para cargar efectivamente la carpeta al repositorio.
