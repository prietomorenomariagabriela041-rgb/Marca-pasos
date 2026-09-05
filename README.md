# Simulador Web de Marcapasos Externo

Proyecto web para la simulación de marca pasos externo 🫀



## Funciones
*🫀 Monitorear la frecuencia cardíaca.
*📈 Visualizar la señal EKG en tiempo real.
*⚙️ Simular y configurar parámetros del marcapasos.
*🔋 Consultar el estado y batería del dispositivo.
*🚨 Detectar y mostrar alertas.
*🤖 Analizar señales mediante IA.
*📊 Mostrar gráficas y tendencias.
*📝 Registrar el historial de eventos.
*📄 Generar reportes del monitoreo.
*👤 Gestionar pacientes simulados.

## Dashboard
Abre https://canva.link/bctg61trr8gegyb en un navegador y ve nuestro dashboard.

## integrantes

* Karol Barragan
* Karen Roldan
* Gabriela Prieto
* Lizeth revelo

# DISEÑO DE LA IA

  El proyecto contempla un asistente que, basado en inteligencia artificial, funcionará como instrumento de soporte para la adquisición de conocimientos y el análisis de información acerca del marcapasos externo. Su objetivo será habilitar que los alumnos consulten de forma interactiva conceptos vinculados al funcionamiento del dispositivo, las señales biomédicas, los parámetros de estimulación, los errores y los procesos de verificación.
  
  El asistente no estará preparado para hacer diagnósticos médicos o tomar decisiones clínicas. Su rol será técnico y educativo, brindando explicaciones que se basen únicamente en la documentación que el equipo ha seleccionado e incluido previamente.
  
  ## Funciones del asistente IA
  
  ### A. Explicación del equipo
  
  Podrá explicar:
  
  - ¿Qué es un marcapasos externo?
  - ¿Cuál es su función?
  - ¿Cuáles son sus componentes principales?
  - ¿Cómo funciona?
- ¿Qué diferencia existe entre estimulación transcutánea y transvenosa?
- ¿Qué función cumple el generador de impulsos?

### B. Explicación de señales biomédicas

El asistente podrá ayudar al estudiante a interpretar las señales que aparecen en la plataforma.

Por ejemplo:

- ¿Qué representa la señal ECG?
- ¿Qué representa la onda R?
- ¿Qué ocurre cuando disminuye la frecuencia cardíaca?
- ¿Cómo se identifica una bradicardia en la simulación?
- ¿Cómo se relaciona el ECG con el pulso del marcapasos?
- ¿Qué diferencia existe entre un latido propio y un estímulo generado?

### C. Explicación de parámetros

El estudiante podrá consultar el significado de los parámetros configurados:

- Frecuencia cardíaca.
- Frecuencia de estimulación.
- Corriente de estimulación.
- Ancho de pulso.
- Sensibilidad.
- Umbral de captura.
- Modo de operación.


# Banco inicial de preguntas para el asistente IA

El banco inicial de preguntas para el asistente IA está compuesto por **50 preguntas**, elaboradas de acuerdo con la documentación técnica del proyecto.

Las preguntas se dividen en **10 categorías**:

1. Conceptos generales
2. Descripción y componentes
3. Principio de funcionamiento
4. Modos de operación
5. Variables y parámetros
6. Arquitectura
7. Riesgos y fallas
8. Normativa y seguridad
9. Mantenimiento y verificación
10. Simulación y escenarios

---

## 1. Conceptos generales

1. ¿Qué es un marcapasos cardíaco externo?
2. ¿Cuál es la función principal de un marcapasos externo?
3. ¿Qué es el miocardio?
4. ¿Qué busca lograr la estimulación eléctrica temporal?
5. ¿Cuáles son los dos tipos principales de marcapasos según la forma en que se aplica la estimulación?

---

## 2. Descripción y componentes

1. ¿De qué está compuesto un marcapasos externo?
2. ¿Qué función cumple el generador de impulsos?
3. ¿Qué función cumple la pantalla y la interfaz de control?
4. ¿Qué función cumplen los cables y extensores del paciente?
5. ¿Qué tipos de electrodos puede utilizar un marcapasos externo?

---

## 3. Principio de funcionamiento

1. ¿Cómo detecta el marcapasos la actividad eléctrica del corazón?
2. ¿Qué parte de la señal ECG detecta principalmente el equipo?
3. ¿Qué ocurre cuando el equipo detecta un latido natural?
4. ¿Qué ocurre cuando el equipo no detecta un latido propio dentro de la ventana esperada?
5. ¿Qué relación existe entre la señal ECG y la generación de los pulsos de estimulación?

---

## 4. Modos de operación

1. ¿Cuáles son los principales modos de operación del marcapasos externo?
2. ¿Cómo funciona el modo A Demanda?
3. ¿Qué ocurre con el pulso de estimulación cuando se detecta un latido natural en modo A Demanda?
4. ¿Cómo funciona el modo Asíncrono o Fixed?
5. ¿Cuál es la diferencia entre el modo A Demanda y el modo Asíncrono?

---

## 5. Variables y parámetros

1. ¿Qué es la señal de electrocardiograma (ECG) y en qué unidad se mide?
2. ¿Qué es el umbral de sensado y para qué sirve?
3. ¿Qué es la frecuencia de estimulación y en qué unidad se expresa?
4. ¿Qué es la corriente de estimulación y cuáles son los valores mencionados para la estimulación transcutánea y transvenosa?
5. ¿Qué es el ancho de pulso y qué valores se mencionan para la estimulación transcutánea y transvenosa?

> **Nota:** El umbral de captura también está explicado en la documentación. Para incluir este parámetro dentro de esta categoría, se puede reemplazar una de las preguntas anteriores por:
>
> **¿Qué es el umbral de captura y qué ocurre cuando se alcanza?**

---

## 6. Arquitectura

1. ¿Cuáles son los cuatro bloques principales de la arquitectura interna del marcapasos externo?
2. ¿Qué función cumple la etapa de detección o sensado Front-End?
3. ¿Qué función cumple el microcontrolador o DSP?
4. ¿Qué función cumple el generador de impulsos de salida?
5. ¿Qué función cumple el módulo de fuente de alimentación?

---

## 7. Riesgos y fallas

1. ¿Qué es el fenómeno R sobre T y por qué puede producirse?
2. ¿Qué es Failure to Capture o falta de captura?
3. ¿Qué es Undersensing o subdetección?
4. ¿Qué es Oversensing o sobredetección?
5. ¿Qué riesgos o efectos secundarios pueden presentarse durante la estimulación transcutánea y transvenosa?

---

## 8. Normativa y seguridad

1. ¿Qué es la norma IEC 60601-1 y qué aspectos de seguridad establece?
2. ¿Qué es la norma IEC 60601-2-31?
3. ¿Qué significa el aislamiento tipo CF?
4. ¿Por qué es importante la protección contra descargas de desfibrilación?
5. ¿Qué es la compatibilidad electromagnética (EMC) y por qué es importante en un marcapasos externo?

---

## 9. Mantenimiento y verificación

1. ¿Qué elementos del equipo deben mantenerse protegidos frente a interferencias electromagnéticas?
2. ¿Qué aspectos de la fuente de alimentación son importantes para el funcionamiento del equipo?
3. ¿Qué elementos de protección eléctrica debe incorporar el circuito de entrada?
4. ¿Qué función cumple el aislamiento eléctrico en la seguridad del equipo?
5. ¿Por qué es importante verificar el funcionamiento de los sistemas de sensado y estimulación?

---

## 10. Simulación y escenarios

1. ¿Qué es el Undersensing y qué ocurre cuando el equipo no detecta correctamente la onda R?
2. ¿Qué es el Oversensing y qué tipo de señales puede interpretar incorrectamente el equipo?
3. ¿Qué es Failure to Capture y qué ocurre cuando se presenta?
4. ¿Qué relación existe entre la frecuencia cardíaca y la generación de pulsos de estimulación?
5. ¿Qué relación existe entre la detección de la actividad cardíaca y la inhibición del pulso en el modo A Demanda?

---

# Restricciones del asistente IA

El asistente estará diseñado exclusivamente como una herramienta educativa y técnica.

### El asistente SÍ podrá:

- Explicar conceptos relacionados con el marcapasos externo.
- Explicar el funcionamiento del equipo.
- Explicar las señales biomédicas.
- Explicar los parámetros de estimulación.
- Explicar los modos de operación.
- Explicar componentes y arquitectura.
- Explicar riesgos y fallas descritos en la documentación.
- Responder las preguntas incluidas en el banco de preguntas.
- Utilizar únicamente la documentación técnica incorporada por el grupo.

### El asistente NO podrá:

- Realizar diagnósticos médicos.
- Tomar decisiones clínicas.
- Recomendar tratamientos.
- Sustituir la evaluación de un profesional de la salud.
- Generar información clínica que no esté incluida en la documentación proporcionada.
- Presentar información externa como si perteneciera a la documentación del proyecto.

---

# Fuentes de información de la IA

La información utilizada por el asistente estará limitada a la documentación técnica seleccionada por el grupo.

Las fuentes autorizadas serán incorporadas posteriormente al repositorio del proyecto y servirán como base de conocimiento para las respuestas del asistente.

---

# Objetivo del asistente

El objetivo principal del asistente IA es apoyar el aprendizaje de los estudiantes mediante explicaciones claras e interactivas sobre el funcionamiento, las señales, los parámetros, los modos de operación, los riesgos y los aspectos técnicos del marcapasos externo.

El asistente funcionará como una herramienta de apoyo educativo integrada a la plataforma de simulación y visualización del proyecto.
