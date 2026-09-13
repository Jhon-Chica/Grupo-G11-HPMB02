/**
 * PROYECTO: Guía de Viajes ✈️ - Politécnico Grancolombiano
 * MÓDULO: Herramientas de Programación Móvil I (Entrega 1 - Semana 3)
 * GRUPO: G11-HPMB02
 * CONTROLADOR: script.js - Lógica Modular Reactiva, Trazabilidad RF y Estados de Aplicación
 */

// ==========================================================================
// 1. BASE DE DATOS DE DESTINOS TURÍSTICOS CON FOTOS Y FAVORITOS (RF03)
// ==========================================================================
const destinationsData = [
    {
        id: 1,
        name: "Cartagena de Indias",
        region: "Región Caribe",
        category: "Patrimonio",
        season: "📅 Dic - Abr",
        days: "⏱️ 3 a 4 días",
        climate: "☀️ 30°C Cálido",
        budget: "$$$ Moderado",
        color: "#0284c7",
        desc: "Joya histórica del Caribe colombiano rodeada por murallas centenarias y fortalezas coloniales. Sus calles empedradas, balcones tapizados de buganvilias y el Castillo de San Felipe ofrecen una inmersión en más de 400 años de patrimonio de la humanidad.",
        icon: "🏰",
        accent: "#38bdf8",
        favorite: false,
        gallery: [
            { title: "Murallas al Atardecer", caption: "Baluarte de Santo Domingo con vista al mar Caribe" },
            { title: "Calles de San Diego", caption: "Arquitectura colonial y balcones de flores típicos" },
            { title: "Castillo San Felipe", caption: "Fortificación militar más grande construida por España en América" }
        ]
    },
    {
        id: 2,
        name: "P.N.N. Tayrona",
        region: "Región Caribe",
        category: "Ecoturismo",
        season: "📅 Ene - Oct",
        days: "⏱️ 2 a 3 días",
        climate: "🌴 28°C Húmedo",
        budget: "$$ Accesible",
        color: "#0d9488",
        desc: "Santuario natural donde la selva de la Sierra Nevada de Santa Marta desciende hacia bahías vírgenes de arena dorada. Sendero ancestral sagrado de los pueblos Kogui y Wiwa, ideal para trekking y snorkeling en Cabo San Juan.",
        icon: "🏖️",
        accent: "#34d399",
        favorite: true,
        gallery: [
            { title: "Cabo San Juan del Guía", caption: "Famosa colina con quiosco tradicional frente al mar" },
            { title: "Playa La Piscina", caption: "Arrecife natural de aguas tranquilas protegido del oleaje" },
            { title: "Senderos de Selva", caption: "Caminata ecológica entre árboles centenarios y monos aulladores" }
        ]
    },
    {
        id: 3,
        name: "Caño Cristales",
        region: "Región Orinoquía",
        category: "Ecoturismo",
        season: "📅 Jun - Nov",
        days: "⏱️ 3 a 4 días",
        climate: "🌦️ 27°C Selva baja",
        budget: "$$$ Expedición",
        color: "#f43f5e",
        desc: "Catalogado internacionalmente como el 'río de los cinco colores'. La planta acuática Macarenia clavigera florece bajo el lecho rocoso, tiñendo los rápidos con vivos tonos carmesí, amarillo y verde esmeralda.",
        icon: "🌊",
        accent: "#fda4af",
        favorite: false,
        gallery: [
            { title: "Los Pozos de Colores", caption: "Macarenia clavigera en su máximo esplendor bajo el agua" },
            { title: "Cascada Los Cuarzos", caption: "Formaciones rocosas milenarias del Escudo Guayanés" },
            { title: "Río Guayabero", caption: "Navegación en canoa tradicional para acceder al parque" }
        ]
    },
    {
        id: 4,
        name: "Archipiélago San Andrés",
        region: "Región Insular",
        category: "Ecoturismo",
        season: "📅 Todo el año",
        days: "⏱️ 4 a 5 días",
        climate: "🌊 29°C Brisa marina",
        budget: "$$$ Moderado",
        color: "#0284c7",
        desc: "Reserva Mundial de la Biósfera Seaflower con su inconfundible mar de los siete colores. Alberga la tercera barrera coralina más extensa del planeta, cultura raizal, gastronomía caribeña y cayos idílicos como Johnny Cay.",
        icon: "⛵",
        accent: "#67e8f9",
        favorite: false,
        gallery: [
            { title: "Johnny Cay Natural Park", caption: "Cayo coralino rodeado de palmeras y aguas cristalinas" },
            { title: "Barrera Arrecifal", caption: "Buceo de clase mundial con tortugas marinas y corales" },
            { title: "La Piscinita", caption: "Punto de careteo con cientos de peces tropicales" }
        ]
    },
    {
        id: 5,
        name: "Valle de Cocora",
        region: "Región Andina",
        category: "Ecoturismo",
        season: "📅 Ene - Mar / Jun - Ago",
        days: "⏱️ 2 a 3 días",
        climate: "⛅ 16°C Bosque niebla",
        budget: "$ Económico",
        color: "#16a34a",
        desc: "Hogar de la majestuosa Palma de Cera del Quindío, el árbol nacional de Colombia de hasta 60 metros de altura. Senderos serpenteantes entre colinas verdes, neblina matutina, casas de colibríes y fincas de café de altura.",
        icon: "🌴",
        accent: "#86efac",
        favorite: true,
        gallery: [
            { title: "Bosque de Palmas de Cera", caption: "Árboles colosales emergiendo entre la niebla andina" },
            { title: "Casa de los Colibríes (Acaime)", caption: "Reserva de avistamiento de aves en alta montaña" },
            { title: "Mirador de la Montaña", caption: "Panorámica de 360 grados sobre el cañón del río Quindío" }
        ]
    },
    {
        id: 6,
        name: "Guatapé & El Peñol",
        region: "Región Andina",
        category: "Patrimonio",
        season: "📅 Todo el año",
        days: "⏱️ 1 a 2 días",
        climate: "🌤️ 20°C Agradable",
        budget: "$ Económico",
        color: "#6366f1",
        desc: "Famoso por su colosal monolito de 220 metros con 702 escalones de ascenso con vista sobre el embalse hidroeléctrico. El municipio es reconocido por sus calles vibrantes adornadas con zócalos artesanales tallados a mano.",
        icon: "⛰️",
        accent: "#a5b4fc",
        favorite: false,
        gallery: [
            { title: "Piedra del Peñol", caption: "Monolito de granito con escaleras empotradas en su grieta" },
            { title: "Plazoleta de los Zócalos", caption: "Colorida arquitectura antioqueña tradicional" },
            { title: "Embalse de Guatapé", caption: "Laberinto de islas verdes navegables en lancha o kayak" }
        ]
    },
    {
        id: 7,
        name: "Amazonas & P. Nariño",
        region: "Región Amazonía",
        category: "Ecoturismo",
        season: "📅 Jul - Dic",
        days: "⏱️ 4 a 5 días",
        climate: "🌧️ 28°C Selva tropical",
        budget: "$$$ Expedición",
        color: "#047857",
        desc: "Inmersión profunda en el pulmón del planeta. Navegación por el mítico río Amazonas hacia Puerto Nariño, avistamiento de delfines rosados en Lagos de Tarapoto y saberes botánicos ancestrales con comunidades indígenas.",
        icon: "🦜",
        accent: "#6ee7b7",
        favorite: false,
        gallery: [
            { title: "Lagos de Tarapoto", caption: "Hogar de delfines rosados y grises en la selva inundable" },
            { title: "Comunidad Étnica Tikuna", caption: "Intercambio de saberes tradicionales y artesanías en chambira" },
            { title: "Flor de Loto Victoria Regia", caption: "Nenúfares gigantes de hasta 2 metros de diámetro" }
        ]
    },
    {
        id: 8,
        name: "Villa de Leyva",
        region: "Región Andina",
        category: "Patrimonio",
        season: "📅 Todo el año",
        days: "⏱️ 2 días",
        climate: "☀️ 18°C Templado seco",
        budget: "$$ Accesible",
        color: "#d97706",
        desc: "Posee una de las plazas empedradas más grandes de Sudamérica (14.000 m²). Arquitectura colonial del siglo XVI intacta, cercanía a yacimientos paleontológicos y pozos azules en un valle de clima seco privilegiado.",
        icon: "🏛️",
        accent: "#fde68a",
        favorite: false,
        gallery: [
            { title: "Plaza Mayor Empedrada", caption: "14.000 metros cuadrados de arquitectura colonial preservada" },
            { title: "Pozos Azules", caption: "Lagunas artificiales con tonalidades turquesa entre el desierto" },
            { title: "Museo Paleontológico El Fósil", caption: "Esqueleto completo de Kronosaurio de 120 millones de años" }
        ]
    }
];

// ==========================================================================
// 2. DATOS DE RESEÑAS, SUBTÍTULOS Y TOURS DE VIDEO (RF02, RF04)
// ==========================================================================
const guideReviewsData = [
    { author: "Carolina Morales (Bogotá)", rating: 5, date: "Agosto 2026", text: "Excelente guía en la expedición al P.N.N. Tayrona. Muy atento a la seguridad y con un conocimiento botánico admirable." },
    { author: "Markus Schneider (Alemania)", rating: 5, date: "Julio 2026", text: "Great communication in English. Alejandro managed our 4-day trek in Cocora Valley smoothly. Highly recommended!" },
    { author: "Andrés Felipe Ruiz (Medellín)", rating: 4.8, date: "Junio 2026", text: "Tuvimos una experiencia enriquecedora en Caño Cristales. Muy profesional con las comunidades locales de La Macarena." }
];

const videoSubtitlesEsp = [
    { start: 0, end: 74, text: "Bienvenidos a la Expedición Colombia: Un viaje por el país de la belleza." },
    { start: 75, end: 149, text: "Cartagena de Indias: 400 años de murallas coloniales protegiendo el Caribe." },
    { start: 150, end: 224, text: "P.N.N. Tayrona: La selva virgen de la Sierra Nevada se funde con el mar." },
    { start: 225, end: 312, text: "Valle de Cocora: Las palmas de cera más altas del mundo entre la neblina andina." }
];

const videoSubtitlesEng = [
    { start: 0, end: 74, text: "Welcome to Expedition Colombia: A journey through the country of beauty." },
    { start: 75, end: 149, text: "Cartagena de Indias: 400 years of colonial walls overlooking the Caribbean." },
    { start: 150, end: 224, text: "Tayrona National Park: Where the Sierra Nevada jungle meets golden beaches." },
    { start: 225, end: 312, text: "Cocora Valley: Majestic wax palm trees standing up to 60 meters tall in the mist." }
];

const videoTours = [
    { id: 1, title: "Expedición 7 Maravillas en 4K", subtitle: "Tour Oficial • Politécnico Grancolombiano", duration: 312 },
    { id: 2, title: "Trek Ciudad Perdida (Sierra Nevada)", subtitle: "Expedición Arqueológica 4 Días", duration: 240 },
    { id: 3, title: "Santuario Marino: Ballenas del Pacífico", subtitle: "Bahía Solano & Parque Utría", duration: 180 }
];

// ==========================================================================
// 3. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================================================
let currentTab = "inicio";
let navigationHistory = ["inicio"];
let currentDestinationId = 1;
let destCategoryFilter = "Todos";
let destSearchQuery = "";
let totalInteractions = 0;
let isOfflineActive = false;

// Estado del Reproductor de Video
let currentTourIndex = 0;
let isVideoPlaying = false;
let videoProgressSec = 95;
let videoDurationSec = 312;
let videoTimer = null;
let isVideoMuted = false;
let videoPlaybackRate = 1.0;
let subtitleLanguage = "es"; // "off", "es", "en"
let isFullscreenPlayer = false;

// Estado del WebView
let webHistory = ["https://colombia.travel"];
let webHistoryIndex = 0;

// Lista de puntos turísticos guardados en sesión (Ítem 4)
let savedTouristPoints = [
    { id: 1, name: "Mirador Murallas de Cartagena", coords: "10.4236° N, 75.5478° W", cat: "Histórico", date: "Hoy" },
    { id: 2, name: "Cabo San Juan - Tayrona", coords: "11.3128° N, 73.9312° W", cat: "Playa & Ecoturismo", date: "Hoy" }
];

// Checklist de equipaje dinámico (Ítem 4)
let packingItems = [
    { id: 1, text: "Pasaporte / C.C. vigente", done: true, cat: "Documentos" },
    { id: 2, text: "Seguro de asistencia médica", done: true, cat: "Documentos" },
    { id: 3, text: "Carnet de vacunación Fiebre Amarilla", done: false, cat: "Salud" },
    { id: 4, text: "Protector solar biodegradable", done: true, cat: "Salud" },
    { id: 5, text: "Repelente de insectos de alta eficacia", done: false, cat: "Salud" },
    { id: 6, text: "Botas de trekking con agarre", done: true, cat: "Equipo" },
    { id: 7, text: "Cámara o teléfono con protector de agua", done: false, cat: "Tecnología" },
    { id: 8, text: "Bolsa impermeable (dry bag)", done: true, cat: "Equipo" }
];
let packingFilterCat = "Todos";

// ==========================================================================
// 4. INICIALIZACIÓN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initClock();
    renderDestinationsTrack();
    selectDestination(1);
    initCanvasAnimation();
    updateNavigationContext();
    const activeBottomItem = document.getElementById(`bnav-opt-${currentTab}`);
    if (activeBottomItem) activeBottomItem.classList.add("active");
    logEvent("Aplicación iniciada en pantalla INICIO (Arquitectura Two-Pane)", "nav");
});

// Reloj de la barra de estado
function initClock() {
    function update() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, "0");
        const mins = String(now.getMinutes()).padStart(2, "0");
        const el = document.getElementById("android-clock");
        if (el) el.innerText = `${hrs}:${mins}`;
    }
    update();
    setInterval(update, 30000);
}

// ==========================================================================
// 5. NAVEGACIÓN Y FLUJO DE PANTALLAS (TWO-PANE & RETORNO)
// ==========================================================================
function toggleNavDrawer() {
    const pane = document.getElementById("left-pane");
    const backdrop = document.getElementById("drawer-backdrop");
    if (!pane) return;
    if (pane.classList.contains("drawer-open")) {
        closeNavDrawer();
    } else {
        openNavDrawer();
    }
}

function openNavDrawer() {
    const pane = document.getElementById("left-pane");
    const backdrop = document.getElementById("drawer-backdrop");
    if (pane) pane.classList.add("drawer-open");
    if (backdrop) backdrop.classList.add("active");
    logEvent("Menú lateral abierto (Drawer móvil)", "nav");
}

function closeNavDrawer() {
    const pane = document.getElementById("left-pane");
    const backdrop = document.getElementById("drawer-backdrop");
    if (pane) pane.classList.remove("drawer-open");
    if (backdrop) backdrop.classList.remove("active");
}

function switchTab(tabId, addToHistory = true) {
    if (currentTab === tabId) {
        closeNavDrawer();
        return;
    }

    if (addToHistory) {
        navigationHistory.push(tabId);
    }
    currentTab = tabId;

    // Actualizar selector visual en el menú lateral izquierdo
    document.querySelectorAll(".menu-nav-item").forEach(item => item.classList.remove("active"));
    const selectedItem = document.getElementById(`nav-opt-${tabId}`);
    if (selectedItem) selectedItem.classList.add("active");

    // Actualizar selector visual en la barra de navegación inferior móvil
    document.querySelectorAll(".bottom-nav-item").forEach(item => item.classList.remove("active"));
    const activeBottomItem = document.getElementById(`bnav-opt-${tabId}`);
    if (activeBottomItem) activeBottomItem.classList.add("active");

    // Transición en el fragmento derecho
    document.querySelectorAll(".fragment-screen").forEach(screen => screen.classList.remove("active"));
    const targetScreen = document.getElementById(`screen-${tabId}`);
    if (targetScreen) targetScreen.classList.add("active");

    updateNavigationContext();
    closeNavDrawer();

    // Desplazamiento al inicio de pantalla en móvil
    const rightPane = document.getElementById("right-pane");
    if (rightPane) rightPane.scrollTop = 0;

    logEvent(`Navegación al fragmento: ${tabId.toUpperCase()}`, "nav");
}

function goBackNav() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Quitar la actual
        const prevTab = navigationHistory[navigationHistory.length - 1];
        switchTab(prevTab, false);
        showToast(`Regresando a: ${prevTab.toUpperCase()}`, "info");
    } else {
        switchTab("inicio", false);
    }
}

function updateNavigationContext() {
    const titleEl = document.getElementById("current-nav-title");
    const rfEl = document.getElementById("current-rf-badge");
    const backBtn = document.getElementById("btn-nav-back");

    const screenTitles = {
        inicio: { title: "🏠 Inicio / Resumen", rf: "RF01 • TWO-PANE" },
        perfil: { title: "👤 Perfil de Guía", rf: "RF02 • PERFIL SCROLL" },
        fotos: { title: "📸 Destinos Turísticos", rf: "RF03 • DESTINOS" },
        video: { title: "🎬 Video Guía 4K", rf: "RF04 • VIDEO PLAYER" },
        web: { title: "🌐 Portal Web Oficial", rf: "RF05 • WEBVIEW" },
        botones: { title: "🔘 Acciones de Viaje", rf: "RF06 • RF07 • RF08" }
    };

    const currentMeta = screenTitles[currentTab] || { title: "Guía de Viajes", rf: "RF01" };
    if (titleEl) titleEl.innerText = currentMeta.title;
    if (rfEl) rfEl.innerText = currentMeta.rf;

    if (backBtn) {
        if (currentTab === "inicio") {
            backBtn.style.display = "none";
        } else {
            backBtn.style.display = "flex";
        }
    }
}

// ==========================================================================
// 6. CONTROLADOR DE PANTALLA 1: PERFIL DEL GUÍA (RF02)
// ==========================================================================
function switchProfileTab(tabName) {
    document.querySelectorAll(".profile-tab-btn").forEach(b => b.classList.remove("active"));
    const btn = document.getElementById(`btn-ptab-${tabName}`);
    if (btn) btn.classList.add("active");

    const container = document.getElementById("profile-scroll-content");
    if (!container) return;

    if (tabName === "bio") {
        container.innerHTML = `
            Explorador apasionado y Guía Turístico Certificado por el Viceministerio de Comercio, Industria y Turismo de Colombia (RNT #64821) con más de 7 años recorriendo y documentando los ecosistemas de Colombia.<br><br>
            Especializado en rutas de alta montaña en los Parques Nacionales Naturales, selva húmeda del Amazonas, reservas coralinas del Caribe y senderos patrimoniales coloniales.<br><br>
            Comprometido con el turismo regenerativo, la preservación ecológica y la seguridad de los viajeros en cada travesía mediante protocolos WFA internacionales de primer nivel.
        `;
    } else if (tabName === "formacion") {
        container.innerHTML = `
            <div style="border-left:2px solid #0284c7; padding-left:8px; margin-bottom:8px;">
                <strong style="color:#ffffff;">Tecnología en Gestión de Destinos Turísticos</strong><br>
                <span style="color:#94a3b8; font-size:0.64rem;">Politécnico Grancolombiano • 2021 - 2024</span>
            </div>
            <div style="border-left:2px solid #0284c7; padding-left:8px; margin-bottom:8px;">
                <strong style="color:#ffffff;">Certificación Primeros Auxilios en Áreas Silvestres (WFA)</strong><br>
                <span style="color:#94a3b8; font-size:0.64rem;">Cruz Roja Colombiana • Vigente hasta 2027</span>
            </div>
            <div style="border-left:2px solid #0284c7; padding-left:8px;">
                <strong style="color:#ffffff;">Líder de Expediciones Ecoturísticas</strong><br>
                <span style="color:#94a3b8; font-size:0.64rem;">Andes Ecotravel Colombia • 2023 - Presente</span>
            </div>
        `;
    } else if (tabName === "cert") {
        container.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:6px;">
                <div style="background:#070d1e; padding:6px 8px; border-radius:6px; border:1px solid #1e3a8a;">
                    <strong style="color:#38bdf8;">📜 RNT #64821 - Ministerio de Comercio y Turismo</strong><br>
                    <small style="color:#94a3b8;">Registro Nacional de Turismo activo para Ecoturismo y Aventura.</small>
                </div>
                <div style="background:#070d1e; padding:6px 8px; border-radius:6px; border:1px solid #10b981;">
                    <strong style="color:#6ee7b7;">🛡️ Protocolo Leave No Trace (LNT)</strong><br>
                    <small style="color:#94a3b8;">Certificación de mínimo impacto ambiental en áreas protegidas.</small>
                </div>
                <div style="background:#070d1e; padding:6px 8px; border-radius:6px; border:1px solid #f59e0b;">
                    <strong style="color:#fde68a;">🗣️ Certificación B2 Idioma Inglés</strong><br>
                    <small style="color:#94a3b8;">Atención fluida a turistas y grupos internacionales.</small>
                </div>
            </div>
        `;
    } else if (tabName === "resenas") {
        container.innerHTML = guideReviewsData.map(r => `
            <div style="background:#070d1e; padding:8px 10px; border-radius:8px; border:1px solid #1e293b; margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong style="color:#ffffff; font-size:0.7rem;">${r.author}</strong>
                    <span style="color:#f59e0b; font-size:0.65rem;">⭐ ${r.rating}</span>
                </div>
                <p style="font-size:0.65rem; color:#cbd5e1; margin-top:3px; line-height:1.35;">"${r.text}"</p>
                <small style="color:#64748b; font-size:0.58rem;">Fecha: ${r.date}</small>
            </div>
        `).join("");
    }
    logEvent(`Perfil: Pestaña consultada: ${tabName.toUpperCase()}`, "click");
}

function openContactModal() {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    titleEl.innerHTML = "💬 Contactar al Guía Alejandro Gómez";
    container.innerHTML = `
        <p style="font-size:0.68rem; color:#94a3b8;">Envíe una consulta de reserva o solicitud de expedición directa:</p>
        <div class="modal-form-group">
            <label>Nombre del Viajero:</label>
            <input type="text" class="modal-input-field" id="contact-name" placeholder="Tu nombre completo" value="Sergio Castro">
        </div>
        <div class="modal-form-group">
            <label>Asunto / Ruta de Interés:</label>
            <input type="text" class="modal-input-field" id="contact-subject" placeholder="Ej: Expedición Caño Cristales 4 Días" value="Consulta de disponibilidad en Tayrona">
        </div>
        <div class="modal-form-group">
            <label>Mensaje o Requerimientos Especiales:</label>
            <textarea class="modal-input-field" id="contact-msg" rows="3" placeholder="Detalles de la fecha y cantidad de viajeros...">Hola Alejandro, somos un grupo de 3 personas interesados en realizar el circuito de Cabo San Juan el próximo mes. ¿Cuentas con disponibilidad?</textarea>
            <span class="modal-validation-error" id="contact-val-err">Por favor complete todos los campos obligatorios.</span>
        </div>
        <button class="btn-modal-submit" id="btn-submit-contact" onclick="sendContactForm()">✉️ Enviar Mensaje Directo</button>
        <div id="contact-spinner" style="display:none; text-align:center; padding:10px; color:#38bdf8;">
            <span>Enviando mensaje al guía... ⏳</span>
        </div>
    `;
    backdrop.classList.add("active");
    logEvent("Perfil: Abierto formulario de contacto", "click");
}

function sendContactForm() {
    const name = document.getElementById("contact-name").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const msg = document.getElementById("contact-msg").value.trim();
    const err = document.getElementById("contact-val-err");
    const btn = document.getElementById("btn-submit-contact");
    const spinner = document.getElementById("contact-spinner");

    if (!name || !subject || !msg) {
        err.style.display = "block";
        showToast("Error: Complete los campos obligatorios", "error");
        return;
    }

    err.style.display = "none";
    btn.style.display = "none";
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        const container = document.getElementById("sheet-modal-content");
        container.innerHTML = `
            <div style="background:#070d1e; border:1px solid #10b981; border-radius:12px; padding:16px; text-align:center;">
                <span style="font-size:2rem;">✅</span>
                <h4 style="color:#6ee7b7; margin:6px 0;">¡Mensaje Enviado con Éxito!</h4>
                <p style="font-size:0.7rem; color:#cbd5e1;">El guía Alejandro Gómez ha recibido su mensaje sobre <strong>"${subject}"</strong> y responderá a su correo en menos de 24 horas.</p>
                <button class="btn-modal-submit" style="margin-top:10px;" onclick="closeBottomSheet()">Aceptar y Cerrar</button>
            </div>
        `;
        showToast("Mensaje enviado exitosamente al guía", "success");
        logEvent(`Contacto enviado a guía: ${subject}`, "click");
    }, 800);
}

function openCredentialModal() {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    titleEl.innerHTML = "📜 Credencial Oficial Guía RNT";
    container.innerHTML = `
        <div class="credential-card-visual">
            <div class="cred-head">
                <div>
                    <strong style="color:#38bdf8; font-size:0.8rem;">REPÚBLICA DE COLOMBIA</strong>
                    <p style="color:#cbd5e1; font-size:0.6rem;">Viceministerio de Turismo • MinCIT</p>
                </div>
                <span style="background:#10b981; color:#000; font-weight:800; font-size:0.6rem; padding:2px 6px; border-radius:4px;">ACTIVA</span>
            </div>
            <div class="cred-body-row">
                <div class="cred-qr-box">
                    <!-- QR Simulado SVG -->
                    <svg viewBox="0 0 60 60" width="55" height="55">
                        <rect width="60" height="60" fill="#ffffff" />
                        <rect x="5" y="5" width="16" height="16" fill="#000000" />
                        <rect x="8" y="8" width="10" height="10" fill="#ffffff" />
                        <rect x="10" y="10" width="6" height="6" fill="#000000" />
                        <rect x="39" y="5" width="16" height="16" fill="#000000" />
                        <rect x="42" y="8" width="10" height="10" fill="#ffffff" />
                        <rect x="44" y="10" width="6" height="6" fill="#000000" />
                        <rect x="5" y="39" width="16" height="16" fill="#000000" />
                        <rect x="8" y="42" width="10" height="10" fill="#ffffff" />
                        <rect x="10" y="44" width="6" height="6" fill="#000000" />
                        <rect x="25" y="10" width="6" height="6" fill="#000000" />
                        <rect x="25" y="25" width="10" height="10" fill="#000000" />
                        <rect x="40" y="40" width="10" height="10" fill="#000000" />
                    </svg>
                </div>
                <div class="cred-info-col">
                    <h5>Alejandro Gómez R.</h5>
                    <p><strong>RNT No:</strong> 64821 - Ecoturismo</p>
                    <p><strong>C.C.:</strong> 1.035.222.151</p>
                    <p><strong>Vigencia:</strong> 31 de Diciembre de 2027</p>
                    <p><strong>Institución:</strong> Politécnico Grancolombiano</p>
                </div>
            </div>
            <div style="margin-top:10px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                <small style="color:#64748b; font-size:0.58rem;">Código de verificación SHA-256: 7f8a9...b4c2</small>
                <button class="btn-profile-action" onclick="downloadCredentialSimulated()">📥 Descargar PDF</button>
            </div>
        </div>
    `;
    backdrop.classList.add("active");
    logEvent("Perfil: Abierta credencial oficial RNT", "click");
}

function downloadCredentialSimulated() {
    showToast("Descargando carnet oficial RNT #64821...", "success");
    logEvent("Credencial RNT descargada en PDF", "click");
}

// ==========================================================================
// 7. CONTROLADOR DE PANTALLA 2: DESTINOS CON BÚSQUEDA Y FILTROS (RF03)
// ==========================================================================
function renderDestinationsTrack() {
    const track = document.getElementById("dest-track-container");
    const emptyState = document.getElementById("dest-empty-state");
    if (!track) return;

    // Aplicar filtros de categoría y búsqueda en tiempo real
    const filtered = destinationsData.filter(d => {
        const matchesCategory = (destCategoryFilter === "Todos") ||
            (destCategoryFilter === "Favoritos" && d.favorite) ||
            (d.category.toLowerCase().includes(destCategoryFilter.toLowerCase())) ||
            (d.region.toLowerCase().includes(destCategoryFilter.toLowerCase()));

        const matchesSearch = (destSearchQuery === "") ||
            d.name.toLowerCase().includes(destSearchQuery.toLowerCase()) ||
            d.region.toLowerCase().includes(destSearchQuery.toLowerCase()) ||
            d.climate.toLowerCase().includes(destSearchQuery.toLowerCase()) ||
            d.desc.toLowerCase().includes(destSearchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        track.style.display = "none";
        if (emptyState) emptyState.style.display = "flex";
        return;
    }

    track.style.display = "flex";
    if (emptyState) emptyState.style.display = "none";

    track.innerHTML = filtered.map(d => `
        <div class="dest-thumb-card ${d.id === currentDestinationId ? 'selected' : ''}" id="thumb-dest-${d.id}" onclick="selectDestination(${d.id})">
            <button class="dest-fav-btn ${d.favorite ? 'active' : ''}" onclick="toggleFavoriteDest(event, ${d.id})" title="${d.favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
                ${d.favorite ? '❤️' : '🤍'}
            </button>
            <div class="dest-thumb-icon-box" style="background:${d.color};">
                <span>${d.icon}</span>
            </div>
            <span class="dest-thumb-name">${d.name}</span>
            <span class="dest-thumb-region">${d.region.replace('Región ', '')}</span>
        </div>
    `).join("");
}

function selectDestination(id) {
    currentDestinationId = id;
    const dest = destinationsData.find(d => d.id === id);
    if (!dest) return;

    document.querySelectorAll(".dest-thumb-card").forEach(c => c.classList.remove("selected"));
    const activeThumb = document.getElementById(`thumb-dest-${id}`);
    if (activeThumb) {
        activeThumb.classList.add("selected");
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }

    document.getElementById("dest-sheet-title").innerText = dest.name;
    document.getElementById("dest-sheet-region").innerText = `${dest.region} • Colombia`;
    document.getElementById("dest-sheet-category").innerText = dest.category;
    document.getElementById("dest-sheet-season").innerText = dest.season;
    document.getElementById("dest-sheet-days").innerText = dest.days;
    document.getElementById("dest-sheet-climate").innerText = dest.climate;
    document.getElementById("dest-sheet-budget").innerText = dest.budget;
    document.getElementById("dest-sheet-desc").innerText = dest.desc;

    // Actualizar banner ilustrado del destino
    const bannerSvg = document.getElementById("dest-banner-svg");
    if (bannerSvg) {
        bannerSvg.innerHTML = `
            <defs>
                <linearGradient id="grad-${dest.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${dest.color}" />
                    <stop offset="100%" stop-color="#0a1226" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-${dest.id})" />
            <circle cx="85%" cy="30%" r="50" fill="rgba(255,255,255,0.08)" />
            <circle cx="20%" cy="80%" r="70" fill="rgba(0,0,0,0.25)" />
            <text x="70" y="65" font-size="38" text-anchor="middle">${dest.icon}</text>
            <text x="120" y="52" fill="#ffffff" font-size="18" font-weight="900">${dest.name}</text>
            <text x="120" y="72" fill="${dest.accent}" font-size="11" font-weight="bold">${dest.category} • ${dest.region}</text>
        `;
    }

    logEvent(`Destino seleccionado: ${dest.name}`, "click");
}

function onDestSearchInput(val) {
    destSearchQuery = val.trim();
    renderDestinationsTrack();
}

function clearDestSearch() {
    const input = document.getElementById("dest-search-input");
    if (input) input.value = "";
    destSearchQuery = "";
    destCategoryFilter = "Todos";
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    const allChip = document.getElementById("chip-cat-todos");
    if (allChip) allChip.classList.add("active");
    renderDestinationsTrack();
    showToast("Búsqueda y filtros restablecidos", "info");
}

function setDestCategoryFilter(cat) {
    destCategoryFilter = cat;
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    const chip = document.getElementById(`chip-cat-${cat.toLowerCase()}`);
    if (chip) chip.classList.add("active");
    renderDestinationsTrack();
    logEvent(`Filtro de destinos: ${cat}`, "click");
}

function toggleFavoriteDest(event, id) {
    event.stopPropagation();
    const dest = destinationsData.find(d => d.id === id);
    if (!dest) return;
    dest.favorite = !dest.favorite;
    renderDestinationsTrack();
    showToast(dest.favorite ? `❤️ "${dest.name}" añadido a Favoritos` : `🤍 "${dest.name}" quitado de Favoritos`, "info");
    logEvent(`Favorito alternado: ${dest.name} -> ${dest.favorite}`, "click");
}

function openDestGalleryModal() {
    const dest = destinationsData.find(d => d.id === currentDestinationId);
    if (!dest) return;

    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    titleEl.innerHTML = `📸 Galería Fotográfica: ${dest.name}`;
    container.innerHTML = `
        <p style="font-size:0.68rem; color:#94a3b8;">Fotografías en alta resolución capturadas en expedición:</p>
        <div style="display:flex; flex-direction:column; gap:10px; max-height:280px; overflow-y:auto; margin-top:6px;">
            ${dest.gallery.map((g, i) => `
                <div style="background:#090f20; border:1px solid #1e3a8a; border-radius:10px; overflow:hidden;">
                    <div style="height:100px; background:linear-gradient(135deg, ${dest.color}, #081122); display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.8rem; position:relative;">
                        <span>${dest.icon}</span>
                        <span style="position:absolute; bottom:6px; right:8px; font-size:0.6rem; background:rgba(0,0,0,0.6); padding:2px 6px; border-radius:4px;">Foto ${i+1}/${dest.gallery.length}</span>
                    </div>
                    <div style="padding:8px 10px;">
                        <strong style="color:#ffffff; font-size:0.75rem;">${g.title}</strong>
                        <p style="color:#94a3b8; font-size:0.65rem; margin-top:2px;">${g.caption}</p>
                    </div>
                </div>
            `).join("")}
        </div>
        <button class="btn-modal-submit" onclick="closeBottomSheet()">Cerrar Galería</button>
    `;
    backdrop.classList.add("active");
    logEvent(`Galería abierta: ${dest.name}`, "click");
}

function planTripForCurrentDestination() {
    const dest = destinationsData.find(d => d.id === currentDestinationId);
    openBottomSheet('itinerario', dest);
}

// ==========================================================================
// 8. CONTROLADOR DE PANTALLA 3: VIDEO GUÍA MULTIMEDIA (RF04)
// ==========================================================================
function togglePlayVideo() {
    isVideoPlaying = !isVideoPlaying;
    const centerBtn = document.getElementById("video-center-btn");
    const playBarBtn = document.getElementById("video-play-btn");
    const liveBadge = document.getElementById("video-live-tag");

    if (isVideoPlaying) {
        centerBtn.innerHTML = "⏸";
        playBarBtn.innerHTML = "⏸";
        liveBadge.innerText = "EN VIVO";
        liveBadge.classList.add("playing");

        videoTimer = setInterval(() => {
            if (videoProgressSec < videoDurationSec) {
                videoProgressSec++;
                updateVideoScrubberDisplay();
                updateSubtitlesDisplay();
            } else {
                stopVideo();
            }
        }, 1000 / videoPlaybackRate);

        showToast("Reproduciendo tour en video", "info");
        logEvent("Video Guía: Reproducción iniciada", "click");
    } else {
        pauseVideoInternal();
        logEvent("Video Guía: En pausa", "click");
    }
}

function pauseVideoInternal() {
    isVideoPlaying = false;
    clearInterval(videoTimer);
    document.getElementById("video-center-btn").innerHTML = "▶";
    document.getElementById("video-play-btn").innerHTML = "▶";
    const liveBadge = document.getElementById("video-live-tag");
    liveBadge.innerText = "PAUSA";
    liveBadge.classList.remove("playing");
}

function stopVideo() {
    pauseVideoInternal();
    videoProgressSec = 0;
    updateVideoScrubberDisplay();
    updateSubtitlesDisplay();
    showToast("Video detenido y reiniciado a 00:00", "info");
    logEvent("Video Guía: Detenido (Stop)", "click");
}

function seekVideo(seconds) {
    videoProgressSec = Math.max(0, Math.min(videoDurationSec, videoProgressSec + seconds));
    updateVideoScrubberDisplay();
    updateSubtitlesDisplay();
    logEvent(`Salto en video: ${seconds > 0 ? '+' : ''}${seconds}s`, "click");
}

function onScrubberInput(val) {
    videoProgressSec = parseInt(val);
    updateVideoScrubberDisplay();
    updateSubtitlesDisplay();
}

function updateVideoScrubberDisplay() {
    const scrubber = document.getElementById("video-scrubber");
    const curTime = document.getElementById("video-time-cur");
    if (scrubber) scrubber.value = videoProgressSec;
    if (curTime) curTime.innerText = formatTimeSec(videoProgressSec);
}

function formatTimeSec(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function toggleMuteVideo() {
    isVideoMuted = !isVideoMuted;
    const btn = document.getElementById("video-mute-btn");
    if (btn) btn.innerText = isVideoMuted ? "🔇" : "🔊";
    showToast(isVideoMuted ? "Audio silenciado" : "Audio activado", "info");
    logEvent(`Volumen: ${isVideoMuted ? 'Silenciado' : 'Activado'}`, "click");
}

function jumpToChapter(seconds, chapterName) {
    videoProgressSec = seconds;
    updateVideoScrubberDisplay();
    updateSubtitlesDisplay();
    if (!isVideoPlaying) togglePlayVideo();
    showToast(`Capítulo: ${chapterName}`, "info");
    logEvent(`Capítulo de video: ${chapterName} (${formatTimeSec(seconds)})`, "click");
}

function cycleVideoSpeed() {
    const rates = [1.0, 1.5, 2.0, 0.5];
    const idx = rates.indexOf(videoPlaybackRate);
    videoPlaybackRate = rates[(idx + 1) % rates.length];
    const btn = document.getElementById("video-speed-btn");
    if (btn) btn.innerText = `${videoPlaybackRate}x`;

    if (isVideoPlaying) {
        clearInterval(videoTimer);
        videoTimer = setInterval(() => {
            if (videoProgressSec < videoDurationSec) {
                videoProgressSec++;
                updateVideoScrubberDisplay();
                updateSubtitlesDisplay();
            } else {
                stopVideo();
            }
        }, 1000 / videoPlaybackRate);
    }
    showToast(`Velocidad ajustada a ${videoPlaybackRate}x`, "info");
    logEvent(`Velocidad de video: ${videoPlaybackRate}x`, "click");
}

function toggleSubtitles() {
    const modes = ["es", "en", "off"];
    const curIdx = modes.indexOf(subtitleLanguage);
    subtitleLanguage = modes[(curIdx + 1) % modes.length];
    const btn = document.getElementById("video-sub-btn");
    if (btn) {
        btn.innerText = `CC: ${subtitleLanguage.toUpperCase()}`;
        if (subtitleLanguage === "off") btn.classList.remove("active");
        else btn.classList.add("active");
    }
    updateSubtitlesDisplay();
    showToast(`Subtítulos: ${subtitleLanguage === 'off' ? 'Desactivados' : (subtitleLanguage === 'es' ? 'Español' : 'Inglés')}`, "info");
    logEvent(`Subtítulos cambiados a: ${subtitleLanguage}`, "click");
}

function updateSubtitlesDisplay() {
    const subOverlay = document.getElementById("video-subtitles-box");
    if (!subOverlay) return;

    if (subtitleLanguage === "off") {
        subOverlay.classList.remove("active");
        return;
    }

    const subList = subtitleLanguage === "es" ? videoSubtitlesEsp : videoSubtitlesEng;
    const currentSub = subList.find(s => videoProgressSec >= s.start && videoProgressSec <= s.end);

    if (currentSub) {
        subOverlay.innerText = currentSub.text;
        subOverlay.classList.add("active");
    } else {
        subOverlay.classList.remove("active");
    }
}

function cycleVideoPlaylist() {
    currentTourIndex = (currentTourIndex + 1) % videoTours.length;
    const tour = videoTours[currentTourIndex];
    stopVideo();
    videoDurationSec = tour.duration;

    const titleEl = document.getElementById("video-tour-title");
    const subEl = document.getElementById("video-tour-sub");
    const scrubber = document.getElementById("video-scrubber");
    const durEl = document.getElementById("video-time-total");

    if (titleEl) titleEl.innerText = tour.title;
    if (subEl) subEl.innerText = tour.subtitle;
    if (scrubber) scrubber.max = tour.duration;
    if (durEl) durEl.innerText = formatTimeSec(tour.duration);

    showToast(`Tour seleccionado: "${tour.title}"`, "success");
    logEvent(`Playlist cambiada a: ${tour.title}`, "click");
}

function toggleFullscreenPlayer() {
    isFullscreenPlayer = !isFullscreenPlayer;
    const wrapper = document.querySelector(".video-player-wrapper");
    if (wrapper) {
        if (isFullscreenPlayer) {
            wrapper.style.position = "fixed";
            wrapper.style.top = "0";
            wrapper.style.left = "0";
            wrapper.style.width = "100%";
            wrapper.style.height = "100%";
            wrapper.style.zIndex = "999";
            wrapper.style.borderRadius = "0";
            document.querySelector(".video-screen-16-9").style.height = "75vh";
            showToast("Modo Pantalla Completa activo (Presione ⛶ para salir)", "info");
        } else {
            wrapper.style.position = "relative";
            wrapper.style.top = "auto";
            wrapper.style.left = "auto";
            wrapper.style.width = "100%";
            wrapper.style.height = "auto";
            wrapper.style.zIndex = "1";
            wrapper.style.borderRadius = "16px";
            document.querySelector(".video-screen-16-9").style.height = "190px";
            showToast("Saliendo de Pantalla Completa", "info");
        }
    }
    logEvent(`Pantalla completa: ${isFullscreenPlayer}`, "click");
}

function initCanvasAnimation() {
    const canvas = document.getElementById("video-canvas-view");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    for (let i = 0; i < 35; i++) {
        particles.push({
            x: Math.random() * 400,
            y: Math.random() * 200,
            r: Math.random() * 3 + 1,
            dx: (Math.random() - 0.5) * 0.8,
            dy: (Math.random() - 0.5) * 0.8,
            color: `rgba(56, 189, 248, ${Math.random() * 0.4 + 0.1})`
        });
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, "#082f49");
        grad.addColorStop(0.6, "#0f172a");
        grad.addColorStop(1, "#0284c7");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(14, 116, 144, 0.35)";
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(80, 110);
        ctx.lineTo(160, 150);
        ctx.lineTo(260, 80);
        ctx.lineTo(340, 130);
        ctx.lineTo(400, 90);
        ctx.lineTo(400, 200);
        ctx.closePath();
        ctx.fill();

        if (isVideoPlaying) {
            particles.forEach(p => {
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
        }

        requestAnimationFrame(render);
    }
    render();
}

// ==========================================================================
// 9. CONTROLADOR DE PANTALLA 4: PORTAL WEBVIEW CON HISTORIAL (RF05)
// ==========================================================================
function navigateWebUrl(newUrl = null) {
    const input = document.getElementById("browser-url-input");
    let url = newUrl || input.value.trim();

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
    input.value = url;

    // Agregar al historial si es nueva navegación
    if (!newUrl) {
        webHistory = webHistory.slice(0, webHistoryIndex + 1);
        webHistory.push(url);
        webHistoryIndex = webHistory.length - 1;
    }

    const progress = document.getElementById("webview-progress");
    progress.classList.add("loading");

    logEvent(`WebView: Navegando hacia ${url}`, "nav");

    setTimeout(() => {
        progress.classList.remove("loading");
        updateWebRenderer(url);
    }, 500);
}

function quickNavWeb(url) {
    navigateWebUrl(url);
}

function goWebBack() {
    if (webHistoryIndex > 0) {
        webHistoryIndex--;
        const url = webHistory[webHistoryIndex];
        document.getElementById("browser-url-input").value = url;
        navigateWebUrl(url);
        showToast("Historial WebView: Atrás", "info");
    } else {
        showToast("No hay páginas previas en el historial", "info");
    }
}

function goWebForward() {
    if (webHistoryIndex < webHistory.length - 1) {
        webHistoryIndex++;
        const url = webHistory[webHistoryIndex];
        document.getElementById("browser-url-input").value = url;
        navigateWebUrl(url);
        showToast("Historial WebView: Adelante", "info");
    } else {
        showToast("No hay páginas siguientes en el historial", "info");
    }
}

function bookmarkCurrentUrl() {
    const url = document.getElementById("browser-url-input").value;
    showToast(`⭐ Marcador guardado: ${url}`, "success");
    logEvent(`URL guardada en marcadores: ${url}`, "click");
}

function updateWebRenderer(url) {
    const renderArea = document.getElementById("webview-content-area");
    if (!renderArea) return;

    if (url.includes("parquesnacionales")) {
        renderArea.innerHTML = `
            <div class="portal-nav-bar" style="background:#064e3b;">
                <div class="portal-brand">🏞️ Parques Nacionales Naturales de Colombia</div>
                <small style="color:#6ee7b7;">Conservación y Ecoturismo</small>
            </div>
            <div class="portal-hero" style="background:linear-gradient(135deg, #059669, #047857);">
                <h4>60 Áreas Protegidas y Ecoturísticas</h4>
                <p>Consulte temporadas de acceso, permisos de senderismo y medidas de bioseguridad ambiental.</p>
            </div>
            <div class="portal-grid">
                <div class="portal-card">
                    <h5>Tayrona & Sierra Nevada</h5>
                    <p>Playas coralinas y senderos sagrados.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(2); switchTab('fotos');">Explorar ficha ›</a>
                </div>
                <div class="portal-card">
                    <h5>Sierra de la Macarena</h5>
                    <p>Río Caño Cristales y ecosistema de transición.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(3); switchTab('fotos');">Explorar ficha ›</a>
                </div>
                <div class="portal-card">
                    <h5>Los Nevados</h5>
                    <p>Glaciares andinos y páramo de frailejones.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(5); switchTab('fotos');">Explorar ficha ›</a>
                </div>
            </div>
        `;
    } else if (url.includes("mincit")) {
        renderArea.innerHTML = `
            <div class="portal-nav-bar" style="background:#831843;">
                <div class="portal-brand">🏛️ MinCIT • Viceministerio de Turismo</div>
                <small style="color:#fbcfe8;">Normatividad</small>
            </div>
            <div class="portal-hero" style="background:linear-gradient(135deg, #be185d, #9d174d);">
                <h4>Plan Estratégico de Turismo Sostenible 2026</h4>
                <p>Formalización de prestadores de servicios turísticos y consulta del Registro Nacional de Turismo (RNT).</p>
            </div>
            <div class="portal-grid">
                <div class="portal-card">
                    <h5>Verificación RNT</h5>
                    <p>Compruebe las credenciales de guías certificados.</p>
                    <a href="javascript:void(0)" onclick="openCredentialModal();">Consultar RNT #64821 ›</a>
                </div>
                <div class="portal-card">
                    <h5>Rutas Turísticas</h5>
                    <p>12 senderos ecoturísticos prioritarios.</p>
                    <a href="javascript:void(0)" onclick="switchTab('fotos');">Ver rutas ›</a>
                </div>
                <div class="portal-card">
                    <h5>Turismo Sostenible</h5>
                    <p>Políticas de cero huella de carbono.</p>
                    <a href="javascript:void(0)" onclick="showToast('Documento MinCIT cargado', 'info');">Leer pautas ›</a>
                </div>
            </div>
        `;
    } else if (url.includes("artesanias")) {
        renderArea.innerHTML = `
            <div class="portal-nav-bar" style="background:#7c2d12;">
                <div class="portal-brand">🧶 Artesanías de Colombia</div>
                <small style="color:#fed7aa;">Identidad Cultural</small>
            </div>
            <div class="portal-hero" style="background:linear-gradient(135deg, #c2410c, #9a3412);">
                <h4>Maestros Artesanos y Patrimonio Ancestral</h4>
                <p>Descubra mochilas Wayuu, filigrana momposina, ruanas de Boyacá y canastos en chambira del Amazonas.</p>
            </div>
            <div class="portal-grid">
                <div class="portal-card">
                    <h5>Mochilas Arhuacas</h5>
                    <p>Sierra Nevada de Santa Marta.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(2); switchTab('fotos');">Ver región ›</a>
                </div>
                <div class="portal-card">
                    <h5>Zócalos de Guatapé</h5>
                    <p>Relieves tallados y pintados a mano.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(6); switchTab('fotos');">Ver región ›</a>
                </div>
                <div class="portal-card">
                    <h5>Tejido Amazónico</h5>
                    <p>Fibra natural de cumare y chambira.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(7); switchTab('fotos');">Ver región ›</a>
                </div>
            </div>
        `;
    } else if (!url.includes("colombia.travel")) {
        // Estado de Error Simulado para URLs externas no cacheadas
        renderArea.innerHTML = `
            <div style="padding:30px 20px; text-align:center; background:#f8fafc; color:#334155; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size:2.4rem;">🌐⚠️</span>
                <h4 style="color:#0f172a; margin:8px 0 4px;">Página en Caché Offline No Disponible</h4>
                <p style="font-size:0.72rem; color:#64748b; max-width:320px; margin-bottom:12px;">El sitio <code>${url}</code> requiere conexión a Internet abierta. En modo offline o simulador universitario se recomiendan los portales oficiales de turismo.</p>
                <button class="btn-browser-go" onclick="quickNavWeb('https://colombia.travel')">Volver a Colombia Travel Oficial</button>
            </div>
        `;
        showToast("Aviso: Sitio externo no disponible en caché offline", "info");
    } else {
        renderArea.innerHTML = `
            <div class="portal-nav-bar">
                <div class="portal-brand">🇨🇴 COLOMBIA TRAVEL • Portal Oficial</div>
                <small style="color:#7dd3fc;">Marca País</small>
            </div>
            <div class="portal-hero">
                <h4>El País de la Belleza: 6 Regiones Turísticas</h4>
                <p>Descubra experiencias inolvidables en el Gran Caribe, Andes Occidentales y Amazonía.</p>
            </div>
            <div class="portal-grid">
                <div class="portal-card">
                    <h5>🏖️ Caribe & Playas</h5>
                    <p>Cartagena, Tayrona y San Andrés.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(1); switchTab('fotos');">Ver destinos ›</a>
                </div>
                <div class="portal-card">
                    <h5>☕ Paisaje Cafetero</h5>
                    <p>Valle de Cocora y Salento.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(5); switchTab('fotos');">Ver destinos ›</a>
                </div>
                <div class="portal-card">
                    <h5>🦜 Selva Amazónica</h5>
                    <p>Puerto Nariño y avistamiento de fauna.</p>
                    <a href="javascript:void(0)" onclick="selectDestination(7); switchTab('fotos');">Ver destinos ›</a>
                </div>
            </div>
        `;
    }
}

// ==========================================================================
// 10. CONTROLADOR DE PANTALLA 5: BOTONES DEL ÍTEM 4 Y BOTTOM SHEETS (RF06, RF07)
// ==========================================================================
function openBottomSheet(actionType, extraData) {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    if (!backdrop || !container) return;

    if (actionType === "itinerario") {
        titleEl.innerHTML = "🗺️ Planificador de Itinerario de Viaje (Ítem 4)";
        const initialDest = extraData ? extraData.name : "Cartagena de Indias";
        container.innerHTML = `
            <div class="modal-form-group">
                <label>Destino Principal Seleccionado:</label>
                <select class="modal-input-field" id="itinerario-dest-select">
                    ${destinationsData.map(d => `<option value="${d.name}" ${d.name === initialDest ? 'selected' : ''}>${d.name} (${d.region})</option>`).join("")}
                </select>
            </div>
            <div class="modal-form-group">
                <label>Duración del Viaje:</label>
                <select class="modal-input-field" id="itinerario-dias-select">
                    <option value="3">3 Días / 2 Noches (Escapada Express)</option>
                    <option value="5" selected>5 Días / 4 Noches (Ruta Recomendada)</option>
                    <option value="7">7 Días / 6 Noches (Gran Expedición)</option>
                </select>
            </div>
            <div class="modal-form-group">
                <label>Enfoque de Viaje:</label>
                <select class="modal-input-field" id="itinerario-estilo-select">
                    <option value="Ecoturismo y Aventura">🌿 Ecoturismo y Senderismo</option>
                    <option value="Cultura y Patrimonio">🏛️ Historia, Cultura y Gastronomía</option>
                    <option value="Descanso y Playas">🏖️ Playas y Relajación</option>
                </select>
            </div>
            <button class="btn-modal-submit" id="btn-calc-itin" onclick="calculateItineraryInteractive()">⚡ Calcular Itinerario Personalizado</button>
            <div id="itin-loading-box" style="display:none; text-align:center; padding:12px; color:#38bdf8;">
                <span>Optimizando rutas con guías certificados RNT... ⏳</span>
            </div>
            <div id="itinerario-result-box" style="margin-top:6px;"></div>
        `;
    } 
    else if (actionType === "equipaje") {
        titleEl.innerHTML = "🧳 Lista y Control de Equipaje (Ítem 4)";
        renderPackingChecklist(container);
    } 
    else if (actionType === "punto") {
        titleEl.innerHTML = "📌 Guardar Punto Turístico en Mapa (Ítem 4)";
        renderSavedPointsModal(container);
    } 
    else if (actionType === "traducir") {
        titleEl.innerHTML = "🔤 Glosario & Traductor del Viajero (Ítem 4)";
        renderTranslatorModal(container);
    }

    backdrop.classList.add("active");
    logEvent(`[Ítem 4] Abierto modal: ${actionType.toUpperCase()}`, "click");
}

function closeBottomSheet() {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    if (backdrop) backdrop.classList.remove("active");
}

function handleBackdropClick(e) {
    if (e && e.target === e.currentTarget) {
        closeBottomSheet();
    }
}

function calculateItineraryInteractive() {
    const dest = document.getElementById("itinerario-dest-select").value;
    const dias = document.getElementById("itinerario-dias-select").value;
    const estilo = document.getElementById("itinerario-estilo-select").value;
    const btn = document.getElementById("btn-calc-itin");
    const loading = document.getElementById("itin-loading-box");
    const resultBox = document.getElementById("itinerario-result-box");

    btn.style.display = "none";
    loading.style.display = "block";

    setTimeout(() => {
        loading.style.display = "none";
        btn.style.display = "block";
        const estimatedBudget = dias * 220000;
        resultBox.innerHTML = `
            <div style="background:#070d1e; border:1px solid #10b981; border-radius:10px; padding:10px; font-size:0.68rem;">
                <div style="color:#6ee7b7; font-weight:bold; margin-bottom:4px; display:flex; justify-content:space-between;">
                    <span>✅ Itinerario Generado: ${dest}</span>
                    <span>COP $${estimatedBudget.toLocaleString('es-CO')} est.</span>
                </div>
                <p><strong>Parámetros:</strong> ${dias} Días | <strong>Enfoque:</strong> ${estilo}</p>
                <div style="margin-top:6px; color:#cbd5e1; line-height:1.4; max-height:120px; overflow-y:auto;">
                    • <strong>Día 1:</strong> Arribo a ${dest}, registro en eco-lodge y caminata de aclimatación.<br>
                    • <strong>Día 2:</strong> Expedición guiada con guía oficial RNT y almuerzo con gastronomía típica.<br>
                    • <strong>Día 3:</strong> Senderismo por atractivos naturales y fotografía de atardecer.<br>
                    ${dias > 3 ? `• <strong>Día 4:</strong> Jornada de intercambio cultural y visita a talleres artesanales.<br>` : ''}
                    ${dias > 4 ? `• <strong>Día 5 al ${dias}:</strong> Travesía en botes/jeeps y compras de recuerdos típicos.` : ''}
                </div>
                <div style="margin-top:8px; display:flex; gap:6px;">
                    <button class="btn-profile-action" onclick="showToast('Itinerario guardado en favoritos', 'success'); closeBottomSheet();">⭐ Guardar en Favoritos</button>
                    <button class="btn-profile-action" onclick="showToast('Itinerario exportado a PDF', 'success')">📥 Exportar PDF</button>
                </div>
            </div>
        `;
        showToast(`Itinerario de ${dias} días calculado con éxito`, "success");
        logEvent(`Itinerario generado: ${dest} (${dias} días)`, "click");
    }, 600);
}

// Checklist de Equipaje
function renderPackingChecklist(container) {
    const completedCount = packingItems.filter(i => i.done).length;
    const totalCount = packingItems.length;
    const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const filteredItems = (packingFilterCat === "Todos") ?
        packingItems :
        packingItems.filter(i => i.cat === packingFilterCat);

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.66rem; color:#94a3b8;">Progreso de preparación:</span>
            <strong style="color:#38bdf8; font-size:0.75rem;">${completedCount}/${totalCount} (${percent}%)</strong>
        </div>
        <div style="width:100%; height:5px; background:#1e293b; border-radius:3px; overflow:hidden;">
            <div style="width:${percent}%; height:100%; background:var(--accent-green); transition:width 0.3s;"></div>
        </div>

        <!-- Filtro por categoría de equipaje -->
        <div style="display:flex; gap:4px; margin-top:4px;">
            ${['Todos', 'Documentos', 'Salud', 'Equipo'].map(c => `
                <button class="filter-chip ${packingFilterCat === c ? 'active' : ''}" style="font-size:0.58rem; padding:2px 6px;" onclick="setPackingCatFilter('${c}')">${c}</button>
            `).join("")}
        </div>

        <!-- Lista de artículos o estado vacío -->
        <div style="max-height:140px; overflow-y:auto; display:flex; flex-direction:column; gap:5px; margin-top:4px;" id="checklist-items-box">
            ${filteredItems.length === 0 ? `
                <div style="padding:14px; text-align:center; color:#64748b; font-size:0.65rem;">
                    No hay artículos en esta categoría. ¡Agregue uno nuevo abajo!
                </div>
            ` : filteredItems.map(item => `
                <div style="display:flex; justify-content:space-between; align-items:center; background:#0a1124; padding:5px 8px; border-radius:6px;">
                    <label style="display:flex; align-items:center; gap:7px; font-size:0.66rem; color:#cbd5e1; cursor:pointer; flex:1;">
                        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="togglePackingItem(${item.id})">
                        <span style="${item.done ? 'text-decoration:line-through; opacity:0.6;' : ''}">[${item.cat}] ${item.text}</span>
                    </label>
                    <button style="background:transparent; border:none; color:#64748b; cursor:pointer; font-size:0.7rem;" onclick="deletePackingItem(${item.id})" title="Eliminar artículo">🗑️</button>
                </div>
            `).join("")}
        </div>

        <!-- Formulario para nuevo ítem -->
        <div style="display:flex; gap:6px; margin-top:4px;">
            <input type="text" class="modal-input-field" id="new-packing-input" placeholder="Nuevo artículo de viaje..." style="flex:1;">
            <select class="modal-input-field" id="new-packing-cat" style="width:90px;">
                <option value="Equipo">Equipo</option>
                <option value="Documentos">Docs</option>
                <option value="Salud">Salud</option>
                <option value="Ropa">Ropa</option>
            </select>
            <button class="btn-profile-action" onclick="addNewPackingItem()">+ Añadir</button>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:6px;">
            <button class="btn-monitor-action" onclick="resetPackingChecklist()">🔄 Restablecer lista por defecto</button>
            <button class="btn-profile-action" onclick="closeBottomSheet()">Listo</button>
        </div>
    `;
}

function setPackingCatFilter(cat) {
    packingFilterCat = cat;
    const container = document.getElementById("sheet-modal-content");
    if (container) renderPackingChecklist(container);
}

function togglePackingItem(id) {
    const item = packingItems.find(i => i.id === id);
    if (item) {
        item.done = !item.done;
        showToast(`Equipaje: ${item.text} (${item.done ? 'Listo ✓' : 'Pendiente'})`, "info");
        logEvent(`Checklist equipaje: ${item.text} -> ${item.done}`, "toggle");
        const container = document.getElementById("sheet-modal-content");
        if (container) renderPackingChecklist(container);
    }
}

function deletePackingItem(id) {
    packingItems = packingItems.filter(i => i.id !== id);
    showToast("Artículo eliminado de la lista", "info");
    logEvent(`Checklist: eliminado ítem ${id}`, "click");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderPackingChecklist(container);
}

function addNewPackingItem() {
    const input = document.getElementById("new-packing-input");
    const catSelect = document.getElementById("new-packing-cat");
    const val = input.value.trim();
    if (!val) {
        showToast("Error: Escriba el nombre del artículo", "error");
        return;
    }

    packingItems.push({ id: Date.now(), text: val, done: false, cat: catSelect.value });
    showToast(`Artículo "${val}" agregado`, "success");
    logEvent(`Checklist: añadido "${val}"`, "click");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderPackingChecklist(container);
}

function resetPackingChecklist() {
    packingItems = [
        { id: 1, text: "Pasaporte / C.C. vigente", done: true, cat: "Documentos" },
        { id: 2, text: "Seguro de asistencia médica", done: true, cat: "Documentos" },
        { id: 3, text: "Carnet de vacunación Fiebre Amarilla", done: false, cat: "Salud" },
        { id: 4, text: "Protector solar biodegradable", done: true, cat: "Salud" },
        { id: 5, text: "Repelente de insectos", done: false, cat: "Salud" },
        { id: 6, text: "Botas de trekking", done: true, cat: "Equipo" }
    ];
    showToast("Lista de equipaje restablecida", "info");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderPackingChecklist(container);
}

// Guardar Puntos Turísticos
function renderSavedPointsModal(container) {
    // Generar coordenadas GPS aleatorias pero realistas en Colombia
    const lat = (4.0 + Math.random() * 6).toFixed(4);
    const lon = (-74.0 - Math.random() * 3).toFixed(4);

    container.innerHTML = `
        <div class="modal-form-group">
            <label>Nombre del Atractivo o Mirador:</label>
            <input type="text" class="modal-input-field" id="pin-name-input" placeholder="Ej: Mirador de Salento" value="Mirador de Salento">
        </div>
        <div class="modal-form-group">
            <label>Coordenadas GPS Simuladas (Antena Móvil):</label>
            <input type="text" class="modal-input-field" id="pin-coords-input" value="${lat}° N, ${lon}° W" readonly>
        </div>
        <div class="modal-form-group">
            <label>Categoría del Punto:</label>
            <select class="modal-input-field" id="pin-cat-select">
                <option value="Mirador Panorámico">🔭 Mirador Panorámico</option>
                <option value="Sendero Ecológico">🥾 Sendero Ecológico</option>
                <option value="Cascada Natural">🌊 Cascada Natural</option>
                <option value="Sitio Histórico">🏰 Sitio Histórico</option>
            </select>
        </div>
        <button class="btn-modal-submit" onclick="saveNewTouristPoint()">💾 Guardar Marcador en GPS</button>
        
        <div style="margin-top:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <strong style="font-size:0.68rem; color:#38bdf8;">Puntos Almacenados (${savedTouristPoints.length}):</strong>
                ${savedTouristPoints.length > 0 ? `<button class="btn-monitor-action" onclick="clearAllTouristPoints()">Vaciar todos</button>` : ''}
            </div>
            <div style="max-height:100px; overflow-y:auto; display:flex; flex-direction:column; gap:4px;" id="saved-points-list">
                ${savedTouristPoints.length === 0 ? `
                    <div style="padding:10px; text-align:center; color:#64748b; font-size:0.65rem;">
                        No hay puntos guardados aún. ¡Crea tu primer marcador arriba!
                    </div>
                ` : savedTouristPoints.map(p => `
                    <div style="background:#090f20; padding:6px 8px; border-radius:6px; border:1px solid #1e3a8a; font-size:0.66rem; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <strong style="color:#ffffff;">${p.name}</strong> • <span style="color:#94a3b8;">${p.coords}</span> (${p.cat})
                        </div>
                        <button style="background:transparent; border:none; color:#f43f5e; cursor:pointer;" onclick="deleteTouristPoint(${p.id})">✕</button>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function saveNewTouristPoint() {
    const name = document.getElementById("pin-name-input").value.trim();
    const coords = document.getElementById("pin-coords-input").value;
    const cat = document.getElementById("pin-cat-select").value;
    if (!name) {
        showToast("Error: Escriba el nombre del atractivo", "error");
        return;
    }

    savedTouristPoints.unshift({ id: Date.now(), name, coords, cat, date: "Hoy" });
    showToast(`📍 Punto "${name}" guardado exitosamente`, "success");
    logEvent(`Punto GPS guardado: ${name}`, "click");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderSavedPointsModal(container);
}

function deleteTouristPoint(id) {
    savedTouristPoints = savedTouristPoints.filter(p => p.id !== id);
    showToast("Punto turístico eliminado", "info");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderSavedPointsModal(container);
}

function clearAllTouristPoints() {
    savedTouristPoints = [];
    showToast("Marcadores GPS vaciados", "info");
    const container = document.getElementById("sheet-modal-content");
    if (container) renderSavedPointsModal(container);
}

// Traductor y Glosario
const travelPhrases = [
    { cat: "Emergencias", es: "¿Dónde está el hospital más cercano?", en: "Where is the nearest hospital?", icon: "🚨" },
    { cat: "Emergencias", es: "Necesito asistencia médica urgente", en: "I need urgent medical assistance", icon: "🩺" },
    { cat: "Direcciones", es: "¿Cómo llego a la plaza principal?", en: "How do I get to the main square?", icon: "🗺️" },
    { cat: "Direcciones", es: "¿Dónde queda la estación de autobuses?", en: "Where is the bus station located?", icon: "🚏" },
    { cat: "Alojamiento", es: "¿Tiene una habitación disponible?", en: "Do you have a room available?", icon: "🏨" },
    { cat: "Comida", es: "¿Cuál es el plato típico de esta región?", en: "What is the traditional dish of this region?", icon: "🍲" }
];

function renderTranslatorModal(container) {
    container.innerHTML = `
        <div style="background:#090f20; border:1px solid #1e3a8a; border-radius:8px; padding:8px 10px;">
            <label style="font-size:0.65rem; color:#94a3b8; font-weight:700;">Traductor Dinámico Rápido (Español -> Inglés):</label>
            <div style="display:flex; gap:6px; margin-top:4px;">
                <input type="text" class="modal-input-field" id="trans-input" placeholder="Escribe una frase aquí (ej: '¿Cuánto cuesta?')">
                <button class="btn-profile-action" onclick="translateCustomPhrase()">Traducir</button>
            </div>
            <div id="trans-result" style="margin-top:6px; display:none; background:#0f1936; padding:6px 8px; border-radius:6px; font-size:0.68rem; color:#38bdf8; justify-content:space-between; align-items:center;">
                <span id="trans-text-out"></span>
                <button class="btn-profile-action" id="btn-play-trans" style="padding:2px 7px;">🔊</button>
            </div>
        </div>

        <div style="margin-top:8px;">
            <span style="font-size:0.67rem; color:#cbd5e1; font-weight:bold;">Frases Esenciales con Pronunciación en Voz Alta:</span>
            <div style="display:flex; flex-direction:column; gap:6px; max-height:160px; overflow-y:auto; margin-top:4px;">
                ${travelPhrases.map(phrase => `
                    <div style="background:#090f20; border:1px solid #1e3a8a; border-radius:7px; padding:6px 8px; display:flex; justify-content:space-between; align-items:center;">
                        <div style="flex:1;">
                            <span style="font-size:0.58rem; color:#38bdf8; font-weight:bold;">${phrase.icon} ${phrase.cat}</span>
                            <strong style="font-size:0.7rem; color:#ffffff; display:block;">${phrase.es}</strong>
                            <p style="font-size:0.66rem; color:#93c5fd; margin-top:1px;">"${phrase.en}"</p>
                        </div>
                        <button class="btn-profile-action" onclick="speakText('${phrase.en.replace(/'/g, "\\'")}')" title="Escuchar pronunciación">🔊</button>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function translateCustomPhrase() {
    const input = document.getElementById("trans-input");
    const val = input.value.trim();
    if (!val) {
        showToast("Escribe una frase para traducir", "error");
        return;
    }

    // Traductor simulado con diccionario común
    let translated = "Could you please help me with: " + val;
    const lower = val.toLowerCase();
    if (lower.includes("cuánto cuesta") || lower.includes("precio")) translated = "How much does it cost?";
    else if (lower.includes("dónde") || lower.includes("donde")) translated = "Excuse me, where is it located?";
    else if (lower.includes("baño") || lower.includes("sanitario")) translated = "Where is the restroom?";
    else if (lower.includes("gracias")) translated = "Thank you very much!";
    else if (lower.includes("hola") || lower.includes("buenos días")) translated = "Hello, good morning!";
    else if (lower.includes("ayuda") || lower.includes("auxilio")) translated = "Help me, please!";

    const resBox = document.getElementById("trans-result");
    const resText = document.getElementById("trans-text-out");
    const playBtn = document.getElementById("btn-play-trans");

    resText.innerText = `🇺🇸 "${translated}"`;
    playBtn.onclick = () => speakText(translated);
    resBox.style.display = "flex";

    showToast("Traducción generada", "success");
    logEvent(`Traducción generada: "${val}" -> "${translated}"`, "click");
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
        showToast(`Reproduciendo audio: "${text}"`, "info");
        logEvent(`Audio pronunciado: "${text}"`, "click");
    } else {
        alert(`Pronunciación: ${text}`);
    }
}

// Widgets Material Design 3
function toggleOfflineMode(isActive) {
    isOfflineActive = isActive;
    const badge = document.getElementById("offline-badge");
    if (badge) {
        if (isActive) badge.classList.add("visible");
        else badge.classList.remove("visible");
    }
    showToast(isActive ? "📡 Modo Guía Offline: ACTIVADO (Mapas en caché)" : "🌐 Conexión en vivo ACTIVADA", "info");
    logEvent(`Modo Guía Offline: ${isActive ? 'ACTIVADO' : 'DESACTIVADO'}`, "toggle");
}

// ==========================================================================
// 11. MONITOR Y TELEMETRÍA DE EVENTOS EN TIEMPO REAL (RF08)
// ==========================================================================
let allLoggedEvents = [];
let eventFilterMode = "Todos";

function logEvent(description, tagType = "click") {
    totalInteractions++;
    const clickBadge = document.getElementById("click-counter-display");
    if (clickBadge) clickBadge.innerText = `Interacciones: ${totalInteractions}`;

    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    const eventObj = { time: timeStr, type: tagType, desc: description };
    allLoggedEvents.unshift(eventObj);

    renderEventLogs();
}

function renderEventLogs() {
    const logContainer = document.getElementById("event-log-rows");
    if (!logContainer) return;

    const filtered = (eventFilterMode === "Todos") ?
        allLoggedEvents :
        allLoggedEvents.filter(e => e.type.toLowerCase() === eventFilterMode.toLowerCase());

    if (filtered.length === 0) {
        logContainer.innerHTML = `<div style="padding:6px; color:#64748b; font-size:0.6rem;">Sin eventos en este filtro.</div>`;
        return;
    }

    logContainer.innerHTML = filtered.slice(0, 8).map(e => `
        <div class="log-entry-row">
            <span class="log-time">[${e.time}]</span>
            <span class="log-tag ${e.type}">${e.type.toUpperCase()}</span>
            <span>${e.desc}</span>
        </div>
    `).join("");
}

function clearEventLogs() {
    allLoggedEvents = [];
    renderEventLogs();
    showToast("Historial de eventos reiniciado", "info");
    logEvent("Historial de telemetría reiniciado", "nav");
}

function exportEventLogJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allLoggedEvents, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `telemetria_guia_viajes_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Archivo JSON de eventos exportado", "success");
    logEvent("Exportado archivo de telemetría JSON", "click");
}

// ==========================================================================
// 12. SISTEMA NATIVO DE NOTIFICACIONES TOAST Y MODAL DE TRAZABILIDAD ACADÉMICA
// ==========================================================================
function showToast(message, type = "info") {
    const container = document.getElementById("android-toast-box");
    if (!container) return;

    const pill = document.createElement("div");
    pill.className = `android-toast-pill ${type}`;
    const icons = { success: "✓", error: "✕", info: "ℹ" };
    pill.innerHTML = `<span>${icons[type] || "•"}</span> <span>${message}</span>`;
    container.appendChild(pill);

    setTimeout(() => {
        pill.style.opacity = "0";
        pill.style.transition = "opacity 0.3s ease";
        setTimeout(() => pill.remove(), 300);
    }, 2800);
}

function openTraceabilityModal() {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    titleEl.innerHTML = "🎓 Matriz de Trazabilidad Rúbrica & RFs (Entrega 1)";
    container.innerHTML = `
        <p style="font-size:0.67rem; color:#94a3b8; margin-bottom:4px;">
            Mapeo formal exigido por el profesor: <strong>REQUERIMIENTO → CASO DE USO → PANTALLA → ACCIÓN → RESULTADO</strong>.
        </p>
        <div class="traceability-table-wrapper">
            <table class="trace-table">
                <thead>
                    <tr>
                        <th>RF</th>
                        <th>Caso Uso</th>
                        <th>Pantalla</th>
                        <th>Acción Usuario</th>
                        <th>Resultado Esperado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>RF01</strong></td>
                        <td>CU1: Visualizar</td>
                        <td>Inicio & Two-Pane</td>
                        <td>Toca menú izquierdo / botón tablet</td>
                        <td>Conmuta fragmento derecho / modo split</td>
                    </tr>
                    <tr>
                        <td><strong>RF02</strong></td>
                        <td>CU2: Consultar</td>
                        <td>Perfil Guía</td>
                        <td>Scroll vertical / Contactar</td>
                        <td>Visualiza bio, credencial y abre formulario</td>
                    </tr>
                    <tr>
                        <td><strong>RF03</strong></td>
                        <td>CU3: Explorar</td>
                        <td>Destinos Turísticos</td>
                        <td>Desliza carrusel / Filtra / ❤️</td>
                        <td>Actualiza ficha técnica y guarda favorito</td>
                    </tr>
                    <tr>
                        <td><strong>RF04</strong></td>
                        <td>CU4: Reproducir</td>
                        <td>Video Guía 4K</td>
                        <td>Play, slider, CC, ±10s, Stop</td>
                        <td>Reproduce tour con subtítulos sincronizados</td>
                    </tr>
                    <tr>
                        <td><strong>RF05</strong></td>
                        <td>CU5: Navegar</td>
                        <td>Portal Web</td>
                        <td>Digita URL / Clic chip / Atrás</td>
                        <td>Carga portal turístico en Android WebView</td>
                    </tr>
                    <tr>
                        <td><strong>RF06</strong></td>
                        <td>CU6: Acciones</td>
                        <td>Acciones Viaje</td>
                        <td>Clic en 4 botones del Ítem 4</td>
                        <td>Abre planificador, checklist, GPS o traductor</td>
                    </tr>
                    <tr>
                        <td><strong>RF07</strong></td>
                        <td>CU7: Widgets</td>
                        <td>Acciones Viaje</td>
                        <td>Toca Switch Offline / Checkbox</td>
                        <td>Activa caché y marca documentos de viaje</td>
                    </tr>
                    <tr>
                        <td><strong>RF08</strong></td>
                        <td>CU8: Telemetría</td>
                        <td>Monitor Eventos</td>
                        <td>Cualquier interacción</td>
                        <td>Registra log con marca [HH:mm:ss] y clics</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn-modal-submit" onclick="closeBottomSheet()">Entendido y Cerrar</button>
    `;
    backdrop.classList.add("active");
    logEvent("Consultada matriz de trazabilidad académica", "click");
}

function confirmResetSession() {
    const backdrop = document.getElementById("bottom-sheet-backdrop");
    const container = document.getElementById("sheet-modal-content");
    const titleEl = document.getElementById("sheet-title");

    titleEl.innerHTML = "⚠️ Confirmar Reinicio de Sesión Demo";
    container.innerHTML = `
        <p style="font-size:0.72rem; color:#cbd5e1; line-height:1.4;">
            ¿Desea reiniciar el estado del prototipo? Se restablecerán la pantalla de inicio, la lista de equipaje, los puntos GPS guardados y los eventos de telemetría.
        </p>
        <div style="display:flex; gap:8px; margin-top:8px;">
            <button class="btn-modal-submit" style="background:#f43f5e; flex:1;" onclick="executeResetSession()">Sí, Reiniciar Prototipo</button>
            <button class="btn-profile-action" style="flex:1;" onclick="closeBottomSheet()">Cancelar</button>
        </div>
    `;
    backdrop.classList.add("active");
}

function executeResetSession() {
    navigationHistory = ["inicio"];
    currentTab = "inicio";
    destCategoryFilter = "Todos";
    destSearchQuery = "";
    totalInteractions = 0;
    isOfflineActive = false;
    resetPackingChecklist();
    savedTouristPoints = [
        { id: 1, name: "Mirador Murallas de Cartagena", coords: "10.4236° N, 75.5478° W", cat: "Histórico", date: "Hoy" },
        { id: 2, name: "Cabo San Juan - Tayrona", coords: "11.3128° N, 73.9312° W", cat: "Playa & Ecoturismo", date: "Hoy" }
    ];
    allLoggedEvents = [];
    stopVideo();
    switchTab("inicio", false);
    closeBottomSheet();
    showToast("Prototipo reiniciado a estado inicial", "success");
    logEvent("Sesión del prototipo reiniciada", "nav");
}

// ==========================================================================
// 13. CAMBIADOR DE HARDWARE Y TEMA
// ==========================================================================
function toggleDeviceLayout(mode) {
    const shell = document.getElementById("device-shell");
    const btnTablet = document.getElementById("btn-mode-tablet");
    const btnPhone = document.getElementById("btn-mode-phone");

    closeNavDrawer();

    if (mode === "phone") {
        shell.classList.add("portrait-mode");
        btnPhone.classList.add("active");
        btnTablet.classList.remove("active");
        showToast("📱 Modo Celular: Menú hamburguesa (☰) activado sin partir la pantalla", "info");
        logEvent("Modo hardware: Teléfono Celular (Drawer móvil)", "nav");
    } else {
        shell.classList.remove("portrait-mode");
        btnTablet.classList.add("active");
        btnPhone.classList.remove("active");
        showToast("🖥️ Modo Tablet: Arquitectura Two-Pane persistente activada", "info");
        logEvent("Modo hardware: Tablet Two-Pane", "nav");
    }
}

/* ==========================================================================
   PALETAS Y CONTROL DE TEMA MATERIAL 3 DINÁMICO
   ========================================================================== */
const materialThemes = {
    blue: {
        name: "Azul Caribe Poli",
        primary: "#0284c7",
        primaryDark: "#0369a1",
        primaryContainer: "rgba(2, 132, 199, 0.22)",
        onPrimaryContainer: "#38bdf8",
        ambientBg: "#172554",
        cardAmbient: "#0d1b33",
        border: "rgba(56, 189, 248, 0.38)",
        glow: "rgba(2, 132, 199, 0.45)",
        shadow: "rgba(2, 132, 199, 0.3)"
    },
    green: {
        name: "Verde Ecoturismo",
        primary: "#10b981",
        primaryDark: "#047857",
        primaryContainer: "rgba(16, 185, 129, 0.22)",
        onPrimaryContainer: "#6ee7b7",
        ambientBg: "#064e3b",
        cardAmbient: "#072b21",
        border: "rgba(110, 231, 183, 0.38)",
        glow: "rgba(16, 185, 129, 0.45)",
        shadow: "rgba(16, 185, 129, 0.3)"
    },
    rose: {
        name: "Coral Atardecer",
        primary: "#f43f5e",
        primaryDark: "#be123c",
        primaryContainer: "rgba(244, 63, 94, 0.22)",
        onPrimaryContainer: "#fda4af",
        ambientBg: "#881337",
        cardAmbient: "#380c1b",
        border: "rgba(253, 164, 175, 0.38)",
        glow: "rgba(244, 63, 94, 0.45)",
        shadow: "rgba(244, 63, 94, 0.3)"
    },
    amber: {
        name: "Ámbar Dorado",
        primary: "#f59e0b",
        primaryDark: "#b45309",
        primaryContainer: "rgba(245, 158, 11, 0.22)",
        onPrimaryContainer: "#fde68a",
        ambientBg: "#78350f",
        cardAmbient: "#331a06",
        border: "rgba(253, 230, 138, 0.38)",
        glow: "rgba(245, 158, 11, 0.45)",
        shadow: "rgba(245, 158, 11, 0.3)"
    },
    indigo: {
        name: "Índigo Andino",
        primary: "#6366f1",
        primaryDark: "#4338ca",
        primaryContainer: "rgba(99, 102, 241, 0.22)",
        onPrimaryContainer: "#a5b4fc",
        ambientBg: "#312e81",
        cardAmbient: "#1c194a",
        border: "rgba(165, 180, 252, 0.38)",
        glow: "rgba(99, 102, 241, 0.45)",
        shadow: "rgba(99, 102, 241, 0.3)"
    }
};

function applyTheme(themeKey, swatchEl) {
    const t = materialThemes[themeKey] || materialThemes.blue;
    const root = document.documentElement;
    root.style.setProperty("--md-sys-color-primary", t.primary);
    root.style.setProperty("--md-sys-color-primary-dark", t.primaryDark);
    root.style.setProperty("--md-sys-color-primary-container", t.primaryContainer);
    root.style.setProperty("--md-sys-color-on-primary-container", t.onPrimaryContainer);
    root.style.setProperty("--theme-ambient-bg", t.ambientBg);
    root.style.setProperty("--theme-card-ambient", t.cardAmbient);
    root.style.setProperty("--theme-border", t.border);
    root.style.setProperty("--theme-glow", t.glow);
    root.style.setProperty("--theme-shadow", t.shadow);

    document.querySelectorAll(".theme-swatch").forEach(s => s.classList.remove("active"));
    if (swatchEl) {
        swatchEl.classList.add("active");
    } else {
        const matchingSwatch = document.querySelector(`.theme-swatch[data-theme="${themeKey}"]`);
        if (matchingSwatch) matchingSwatch.classList.add("active");
    }

    showToast(`Tema actualizado: ${t.name}`, "info");
    logEvent(`Tema Material 3 aplicado: ${t.name} (${t.primary})`, "toggle");
}

function setThemeColor(primary, dark, light, containerBg) {
    for (const [key, t] of Object.entries(materialThemes)) {
        if (t.primary.toLowerCase() === (primary || '').toLowerCase()) {
            return applyTheme(key, (typeof event !== 'undefined' && event) ? (event.currentTarget || event.target) : null);
        }
    }
    const root = document.documentElement;
    root.style.setProperty("--md-sys-color-primary", primary);
    root.style.setProperty("--md-sys-color-primary-dark", dark);
    root.style.setProperty("--md-sys-color-on-primary-container", light);
    root.style.setProperty("--md-sys-color-primary-container", containerBg);
    root.style.setProperty("--theme-glow", primary + "66");
    root.style.setProperty("--theme-border", light + "55");
    showToast("Paleta de color personalizada actualizada", "info");
    logEvent(`Paleta Material 3 cambiada a: ${primary}`, "toggle");
}
