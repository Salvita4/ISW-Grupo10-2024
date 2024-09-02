# ISW-Grupo10-2024
Repositorio dedicado a almacenar y gestionar todos los resultados de aprendizajes durante el desarrollo del cursado de la matería Ingeniería y Calidad de Software.

## Contenido
- [Instalación de repositorio](#Instalación)
- [Criterio de Linea Base](#CriterioLineaBase)
- [Reglas de nombrado](#ReglasNombrado)
- [Integrantes](#Integrantes)
- [Estructura del repositorio](#EstructuraDelRepositorio)

## Instalación
```bash
git clone https://github.com/Salvita4/ISW-GrupoX-2024.git
cd ISW-Grupo10-2024
```

## CriterioLineaBase
La línea base inicial del proyecto se define una vez el documento que específica la utilización del repositorio y su estructura se encuentra completo y consensuado por los miembros del equipo, con el objetivo de usarlo como herramienta que dará soporte al desarrollo de la materia.
La linea base será actualizada cada vez que se tengan los items de configuración necesarios para realizar una entrega de trabajo práctico, no sin antes haber sido debatido por los integrantes del grupo de trabajo. Si se realizan correcciones al trabajo realizado post-entrega, también se modificará la línea base para reflejar los cambios realizados, y para tener la versión más estable y completa de los items de configuración.

## ReglasNombrado
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

### Archivos - Apuntes:
Los apuntes hacen referencia a las notas de clases que vamos a ir subiendo luego del desarrollo de cada una. Estos archivos ser deben subir en formate pdf y deberán seguir el siguiente formato: "AP-Fecha-Tema-Autor-V1".
- AP: Indica que el archivo es un apunte.
- Fecha: Indica la fecha de la clase.
- Tema: Indica el tema de la clase o al que hace referencia el apunte.
- Autor: Indica quién lo escribio. Nos ayuda a saber a quién acudir para consultar dudas.
- VN: Indica la versión del apunte, puede sufrir cambios a lo largo del desarrollo de las clases.

## Integrantes
A continuación se detalla la lista de integrantes del grupo. Los roles que desempeñaran los mismos a lo largo del proyecto y actividades se detallan en un archivo llamado EstructuraEquipo, cuyo fin es demostrar los diferentes roles por los que pasará cada integrante.
| Integrante                     | Legajo |
|--------------------------------|--------|
| Barbera, Juan Salvador         | 86657  |
| Dinia, Jorge Hassan            | 87423  |
| Iril, Rocco Maciel             | 90104  |
| Lima, Nicolás                  | 85569  |
| Ramonda, Joaquín Antonio       | 82836  |
| Zabala, Federica Emilia        | 82830  |

## EstructuraDelRepositorio
![EstructuraDelRepositorio](https://github.com/user-attachments/assets/02dc71b9-9f90-48ce-b66c-52123f910277)

Descripción de carpetas y archivos:
- DocumentosCursada: Carpeta donde se encuentran distintos archivos con información pertinente al cursado de la materia, incluyendo:
  - Apuntes: Carpeta que contendrá apuntes elaborados por los integrantes del grupo de trabajo en base a las clases dictadas.
  - Resumenes: Carpeta que contendrá resúmenes elaborados por los integrantes del grupo de trabajo en base a bibliografía y apuntes de clases.
  - Ejercicios: Carpeta que contendrá los ejercicios realizados por los integrantes del grupo de trabajo y que quiera compartir con el resto.
  - IndiceAportes: Documento en el cual se enumerarán distintas fuentes de información aparte a la bibliografía planteada por la cátedra.
- Templates: Carpeta que contendrá templates elaborados para entrega de trabajos y documentación del grupo.
- TrabajosPracticos: Carpeta que contendrá los trabajos prácticos realizados durante el cursado de la materia. Contendrá tantas carpetas llamadas TrabajoPracticoX como trabajos prácticos sean elaborados, siendo X reemplazado por el número de trabajo práctico correspondiente. Internamente, cada trabajo práctico contendrá:
  - DocumentosAEntregar: Carpeta que contendrá los documentos que conformen la entrega final del trabajo práctico, explicando lo correspondiente al trabajo que haga referencia.
  - EstructuraCodigo: Carpeta que contendrá el código fuente del trabajo práctico en trabajos donde se deba entregar un código funcional.
  - Modelos: Carpeta que contendrá los distintos modelos elaborados durante el desarrollo de los trabajos prácticos y que conforman la entrega final.
- EstructuraEquipo: Documento que se modificará a lo largo de la cursada dependiendo del rol que desempeñe cada integrante del grupo en cada trabajo, especificando el mismo y sus responsabilidades.
- Glosario: Documento que contendrá explicaciones a términos utilizados a lo largo del desarrollo de la materia y trabajos prácticos.
- IndiceMinutas: Documento que contendrá las distintas reuniones que se llevan a cabo por los integrantes del grupo, incluyendo el tema a tratar, conclusiones a las que se llegaron, fecha de realización y miembros que asisten.
- README: Archivo que contiene explicación sobre el repositorio, su propósito y su función. Contiene la estructura del repositorio, los integrantes de trabajo, las reglas de nombrado de los items de configuración y el criterio de linea base definido por los integrantes del grupo de trabajo.
