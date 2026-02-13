# AppWebTarea1 Portafolio

## Introducción
Este proyecto es un **portafolio web responsive** desarrollado con **HTML, CSS y JavaScript puro (vanilla)**. Está pensado para presentar información personal/profesional y practicar buenas prácticas de maquetación, estilos modernos e interactividad básica.

Incluye:
- Encabezado con marca personal y navegación.
- Sección de **Proyectos** (mínimo 3 tarjetas con imagen, título y descripción).
- Vista previa de **Blog** (3 entradas con título, fecha y resumen).
- Sección **Sobre mí**.
- Sección **Contacto** con formulario y validación.
- **Footer** con enlaces a redes sociales.
- **Modo oscuro** con botón (persistencia en `localStorage`).
- Animación “reveal on scroll” (IntersectionObserver).

---

## Estructura del proyecto
```
index.html # Estructura HTML + secciones del portafolio
styles.css # Estilos (variables CSS, layout, responsive y dark mode)
script.js # Interactividad (dark mode, scroll suave, etc.)
README.md # Documentación del proyecto
```


---

## Qué se hace
Se construye una página de portafolio que cumple con los requerimientos de la tarea:
- **HTML semántico** con secciones claras (`header`, `main`, `section`, `footer`).
- **Diseño limpio** con CSS moderno:
  - Variables CSS para colores, sombras y radios.
  - Componentes reutilizables (botones, cards, grids).
- **Interactividad con JavaScript**:
  - Alternar entre modo claro/oscuro.
  - Scroll suave al hacer click en la navegación.
  - Animación de entrada al hacer scroll.
  - Validación básica del formulario (nombre, email, mensaje).

---

## Cómo se hace

### 1) HTML (`index.html`)
- Se define la estructura del sitio: **hero**, proyectos, blog, sobre mí, contacto y footer.
- La navegación apunta a IDs internos (por ejemplo `#proyectos`, `#blog`, etc.).
- El formulario de contacto usa `novalidate` para manejar validación con JS.

### 2) CSS (`styles.css`)
- Se usan variables CSS (`:root`) para mantener consistencia de estilo.
- El **modo oscuro** se activa con el atributo `data-theme` en `<html>`:
  - `html[data-theme="dark"] { ... }`
- Se implementa un layout moderno:
  - `grid` para el hero y para las tarjetas de proyectos.
  - Componentes como `.btn`, `.card`, `.project-card`, etc.
- **Responsive**:
  - `@media (max-width: 900px)` reordena el hero y deja proyectos en 1 columna.
  - `@media (max-width: 420px)` ajusta botones y ancho del formulario.

### 3) JavaScript (`script.js`)
- **Tema**:
  - Lee `localStorage.getItem("theme")` (dark/light).
  - Si no hay preferencia guardada, usa `prefers-color-scheme`.
  - Cambia `document.documentElement.dataset.theme` y sincroniza el texto del botón.
- **Scroll suave**:
  - Intercepta clicks en enlaces de navegación y usa `scrollIntoView({ behavior: "smooth" })`.
- **Reveal on scroll**:
  - `IntersectionObserver` agrega la clase `.in-view` a secciones con `.reveal`.
- **Validación del formulario**:
  - Reglas: nombre mínimo 2 caracteres, email con regex, mensaje mínimo 10 caracteres.
  - Muestra errores en `<small data-error-for="...">`.

---

## Por qué se hace
- Para **cumplir la tarea** de crear una página completa (estructura, estilos e interactividad) siguiendo una referencia de diseño.
- Para practicar **front-end básico** sin frameworks (vainilla JS):
  - HTML semántico, CSS responsive y JS para comportamiento.
- Para reforzar consistencia visual (colores, tipografía, espaciados) y accesibilidad básica (por ejemplo, “skip to content”).

---

## Link al Figma
- **Figma:** https://www.figma.com/proto/RD6z0EXFzczNlMgKfStwLm/Untitled?node-id=4-2&t=weXITSqgLLHPwfA8-1

---

## Cómo ejecutar
No hay dependencias ni instalación.

1. Abrí `index.html` en el navegador (doble click)

---

## Autor
- Rodrigo Gamarra
- **Materia:** Aplicaciones Web I