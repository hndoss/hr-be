# hr-be

```
pip install django
pip install djangorestframework
```

# Requirements

## Roles
- [x] admin
- [x] hr
- [x] manager
- [x] chief
- [x] analyst

## Admin Requirements
- [x] CRUD support for system users and roles.
- [ ] Can edit company information at about section.
- [x] CRUD support for managements, departments and areas of the company (what are areas of the company?).
- [x] CRUD of every  in the company.
- [ ] Support export/import general data of the company and its employees.
- [x] System log management.
- [ ] Support dashboards with at least 5 graphics.

## Hr Requirements
- [x] CRUD personal of each company area.
- [ ] Enviar publicaciones internas a los correos de todos los empleados.
- [ ] Pagar la planilla a las cuentas de los empleados, para esto se deberá implementar un web service para la  conexión con Bancos
- [ ] Generar constancias de trabajo de forma automática y enviarlas por PDF al correo del empleado solicitante.
- [ ] Generar boletas de pago y entregarlas de forma dinámica a cada uno de los correos de los empleados
- [ ] Approve/Deny vacation/permission/no attendance request of a worker previously approved.
- [ ] Monitoreo de llegadas tarde o salidas temprano del personal.
- [ ] Monitorear en una aplicación Móvil y a través de un Mapa la ubicación física de la casa de cada uno de los empleados de la empresa.
- [ ] Sortear premios entre empleados, como boletos, cupones etc, se deberá crear un módulo para poder crear sorteos y publicar ganadores.

## Managers Requirements:
- [ ] Aumentar el sueldo a los empleados de su departamento
- [ ] Dar bonos a algunos empleados de su departamento
- [ ] Solicitar algún permiso al director de la empresa
- [ ] Solicitar alguna insistencia al director de la empresa
- [ ] Solicitar autorización de vacaciones 
- [ ] Autorizar permisos, insistencias o vacaciones de algún empleado de su departamento y previamente autorizadas por algún jefe de su área
- [ ] Generar reportes, de entradas, salidas, insistencias, permisos o vacaciones de todo su personal a cargo en el departamento.
- [ ] Generar reporte de su boleta de pagos

## Chief Requirements:
- [ ] Marcar entradas y salidas diarias del edificio
- [ ] Crear y diseñar el organigrama de su área de una forma amigable
- [ ] Generar reportes, de entradas, salidas, insistencias, permisos o vacaciones de todo el personal a cargo en su área.
- [ ] Solicitar algún permiso al gerente del departamento
- [ ] Solicitar alguna insistencia al gerente del departamento
- [ ] Solicitar autorización de vacaciones al gerente del departamento
- [ ] Autorizar permisos, insistencias o vacaciones de algún empleado de su área. 
- [ ] Generar reporte de su boleta de pagos

## El personal Analista podrá:
- [ ] Marcar entradas y salidas diarias del edificio
- [ ] Solicitar algún permiso al gerente del departamento
- [ ] Solicitar alguna insistencia al gerente del departamento
- [ ] Solicitar autorización de vacaciones al gerente del departamento
- [ ] Autorizar permisos, insistencias o vacaciones de algún empleado de su área. 
- [ ] Ver diagrama de autorizaciones con el avance de sus gestiones
- [ ] Generar reporte de su boleta de pagos

## Other Requirements
- [ ] En este sistema también todos los usuarios deberán tener una pantalla de mensajería, para enviar o recibir mensajes de cualquier otro empleado de la empresa, aquí podrán  ver una lista de todos los mensajes en su buzón de entrada, seleccionarlos para visualizarlos y eliminarlos. En dicha lista los mensajes nuevos deberán ser marcados como que no han sido leídos y dicha marca deberá desaparecer al abrirlos por primera vez. Todos los usuarios tendrán opción para enviar un nuevo mensaje a otro usuario, previamente seleccionado de una lista de amigos del usuario actual.

- [ ] En este sistema deberá existir directorios de archivos compartidos por Área, donde solo los miembros de una misma área podrán manipular los archivos que ellos compartan entre si, en su respectiva carpeta.

- [ ] En este sistema también empleado podrá contar una Agenda y Calendario: Deberá existir un calendario donde se puedan realizar dos tipos de actividades: eventos y tareas, de ambas se conoce la fecha, el título y el recordatorio (cantidad de minutos antes que el usuario desee que se le recuerde sobre la actividad), pero por aparte de la tarea se conoce el contenido de la tarea y las “notas” o anotaciones del usuario y del evento se conoce la hora de inicio y hora de finalización. Mientras el sistema esté abierto, deberá mostrar una alarma según si el usuario seleccionó que lo deseaba o no y con el tiempo de anticipación especificado.

## Users
admin:admin: asd.123
hruser: 8V1kDutwBaRGVu7yCj6G
manager: Akr9V2rmlETO7Pqm0qDy
normaluser: UJLX83Noyy43wCluUw3Y