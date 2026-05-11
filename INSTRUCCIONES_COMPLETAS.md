# INSTRUCCIONES COMPLETAS - BOTTEGA ITALIANA

## 📦 Proyecto Completo Creado

Se han creado **21 archivos** para el sitio web de Bottega Italiana que unifica Morettino (café) y Kottabos (cervezas).

---

## 🗂️ Estructura de Archivos Creados

```
bottega-italiana/
├── package.json                     ✅
├── vite.config.js                   ✅
├── index.html                       ✅
├── src/
│   ├── main.jsx                     ✅
│   ├── App.jsx                      ✅
│   ├── index.css                    ✅
│   ├── components/
│   │   ├── Nav.jsx                  ✅
│   │   ├── Footer.jsx               ✅
│   │   ├── Reveal.jsx               ✅
│   │   ├── ImgBox.jsx               ✅
│   │   ├── ProductCard.jsx          ✅
│   │   └── BrandCard.jsx            ✅
│   ├── data/
│   │   ├── morettinoProducts.js     ✅
│   │   ├── kottabosProducts.js      ✅
│   │   └── allProducts.js           ✅
│   └── pages/
│       ├── HomePage.jsx             ✅
│       ├── CatalogoPage.jsx         ✅
│       ├── HistoriaPage.jsx         ✅
│       ├── MorettinoPage.jsx        ✅
│       ├── KottabosPage.jsx         ✅
│       └── ProductoPage.jsx         ✅
└── GUIA_PROYECTO_BOTTEGA.md         ✅
```

---

## 🚀 INSTALACIÓN PASO A PASO

### **Paso 1: Crear Proyecto Base**

```bash
# Crear carpeta del proyecto
mkdir bottega-italiana
cd bottega-italiana
```

### **Paso 2: Copiar Todos los Archivos**

Copia todos los archivos que te he enviado en la siguiente estructura:

```bash
# Raíz del proyecto
- package.json
- vite.config.js
- index.html

# Carpeta src/
- src/main.jsx
- src/App.jsx
- src/index.css

# Carpeta src/components/
- src/components/Nav.jsx
- src/components/Footer.jsx
- src/components/Reveal.jsx
- src/components/ImgBox.jsx
- src/components/ProductCard.jsx
- src/components/BrandCard.jsx

# Carpeta src/data/
- src/data/morettinoProducts.js
- src/data/kottabosProducts.js
- src/data/allProducts.js

# Carpeta src/pages/
- src/pages/HomePage.jsx
- src/pages/CatalogoPage.jsx
- src/pages/HistoriaPage.jsx
- src/pages/MorettinoPage.jsx
- src/pages/KottabosPage.jsx
- src/pages/ProductoPage.jsx
```

### **Paso 3: Crear Carpetas de Imágenes**

```bash
mkdir -p public/images/bottega
mkdir -p public/images/morettino
mkdir -p public/images/kottabos
```

### **Paso 4: Agregar Imágenes**

Necesitas agregar las siguientes imágenes:

**Bottega Italiana:**
- `public/images/bottega/logo.png` - Logo circular de Bottega Italiana (el que subiste)
- `public/images/bottega/hero-bg.jpg` - Imagen hero de fondo
- `public/images/bottega/johanna.jpg` - Foto de Johanna Vargas

**Morettino (del proyecto anterior):**
- `public/images/morettino/QUALITÀARABICA.png`
- `public/images/morettino/QUALITÀBAR.png`
- `public/images/morettino/QUALITÀESPRESSO.png`
- `public/images/morettino/CarrettoGroundCoffee.png`

**Kottabos (nuevas):**
- `public/images/kottabos/despina.png`
- `public/images/kottabos/leonia.png`
- `public/images/kottabos/moriana.png`
- `public/images/kottabos/ipazia.png`

### **Paso 5: Instalar Dependencias**

```bash
npm install
```

### **Paso 6: Ejecutar el Proyecto**

```bash
npm run dev
```

El sitio se abrirá en: **http://localhost:5173**

---

## 📄 PÁGINAS DEL SITIO

### **1. HomePage** (`/`)
- Hero con logo de Bottega Italiana
- Sección "Sobre Nosotros"
- Cards de ambas marcas (Morettino + Kottabos)
- CTA de contacto

### **2. CatalogoPage** (`/catalogo`)
- Filtros: "Todo" | "Café" | "Cerveza"
- Grid de productos unificado (8 productos total)
- Click en producto lleva a detalle

### **3. HistoriaPage** (`/historia`)
- Historia de Bottega Italiana
- Sección de Johanna Vargas
- Valores de la empresa
- CTA al catálogo

### **4. MorettinoPage** (`/morettino`)
- Hero de Morettino
- Historia de la marca
- Catálogo de cafés (4 productos)

### **5. KottabosPage** (`/kottabos`)
- Hero de Kottabos
- Historia de la cervecería
- Catálogo de cervezas (4 productos)

### **6. ProductoPage** (`/producto/:id`)
- Detalle completo del producto
- Características técnicas
- Maridaje (para cervezas)
- Productos relacionados
- Botón WhatsApp

---

## 🎨 DISEÑO Y COLORES

### **Paleta de Colores**

```css
/* Bottega Italiana */
--bi-black: #111111
--bi-gold: #C89B3C
--bi-beige: #E9DFC8
--bi-cream: #F8F5EE
--bi-brown: #5A3A22
--bi-amber: #D97706

/* Morettino */
--morettino-beige: #d6c1ab
--morettino-gold: #c4a882

/* Kottabos */
--kottabos-gold: #C89B3C
```

### **Tipografía**

- **Jost** - Font principal (todos los títulos y texto)
- **Cormorant Garamond** - Solo para títulos especiales itálicos

---

## 📱 RESPONSIVE

El sitio es 100% responsive:
- ✅ Mobile (< 768px)
- ✅ Tablet (768px - 1024px)
- ✅ Desktop (> 1024px)

---

## 🎯 NAVEGACIÓN

```
Logo | Inicio | Catálogo | Morettino | Kottabos | Historia
```

**Rutas:**
- `/` → HomePage
- `/catalogo` → CatalogoPage
- `/catalogo?cat=cafe` → Filtro café
- `/catalogo?cat=cerveza` → Filtro cerveza
- `/historia` → HistoriaPage
- `/morettino` → MorettinoPage
- `/kottabos` → KottabosPage
- `/producto/:id` → ProductoPage

---

## 📊 PRODUCTOS INCLUIDOS

### **Café Morettino (4)**
1. Qualità Arabica
2. Qualità Bar
3. Qualità Espresso
4. Carretto Siciliano

### **Cervezas Kottabos (4)**
1. Despina - Special Weiss (4.7%)
2. Leonia - Golden Ale (5%)
3. Moriana - Rauchbier (5.5%)
4. Ipazia - American IPA (6%)

**Total: 8 productos**

---

## 📞 CONTACTO

- **WhatsApp:** +591 78594506
- **Ubicación:** Santa Cruz de la Sierra, Bolivia
- **Propietaria:** Johanna Vargas

---

## ✅ CHECKLIST DE VERIFICACIÓN

Después de instalar, verifica:

- [ ] Todas las dependencias instaladas correctamente
- [ ] Imágenes agregadas en las carpetas correctas
- [ ] Logo de Bottega Italiana visible en Nav
- [ ] Font Jost cargando correctamente
- [ ] Navegación funciona en todas las páginas
- [ ] Filtros de catálogo funcionan
- [ ] Click en producto lleva a página de detalle
- [ ] Productos relacionados aparecen en detalle
- [ ] Botones de WhatsApp funcionan
- [ ] Diseño responsive en móvil
- [ ] Todo el texto en español

---

## 🛠️ COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 🎯 CARACTERÍSTICAS PRINCIPALES

✅ **Catálogo Unificado** - Ambas marcas en un solo lugar
✅ **Filtros Inteligentes** - Café | Cerveza | Todo
✅ **Páginas de Marca** - Secciones dedicadas para cada marca
✅ **Detalles de Producto** - Página completa para cada item
✅ **Responsive Design** - Funciona en todos los dispositivos
✅ **Animaciones Suaves** - Framer Motion para transiciones
✅ **WhatsApp Integration** - Contacto directo desde cada producto
✅ **Todo en Español** - Contenido en español latinoamericano

---

## 📝 NOTAS IMPORTANTES

1. **Logo de Bottega Italiana**: Usa el logo circular que subiste
2. **Johanna Vargas**: NO mencionar "representante oficial", usar "importadora"
3. **Idioma**: Todo en español (Latinoamérica)
4. **WhatsApp**: +591 78594506
5. **Imágenes Kottabos**: Necesitas agregar las 4 imágenes de botellas

---

## 🚀 DEPLOY

Para producción:

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

Puedes deployar en:
- Netlify
- Vercel
- GitHub Pages
- O cualquier hosting estático

---

## 💡 PRÓXIMOS PASOS

1. ✅ Instalar todas las dependencias
2. ✅ Agregar todas las imágenes
3. ✅ Verificar que todo funcione
4. ✅ Probar en móvil
5. ✅ Deploy a producción

---

**¡Todo listo para empezar!** 🎉

Si necesitas hacer ajustes o correcciones, solo dime qué necesitas cambiar.
