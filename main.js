const { Client, MessageMedia } = require("whatsapp-web.js");

const qrcode = require("qrcode-terminal");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data-test.csv");

const message = (name) => `
Hola ${name}, somos de la Dirección de voluntariado del PMI Lima Peru Chapter, te invitamos este domingo 22 de junio a participar de nuestro evento deportivo del año: Olimpiadas PMI 2025 💜🇵🇪. ¡Una experiencia única donde podrás participar de juegos, networking y muchas risas! Te brindamos mayor detalle a continuación:

🗓 Fecha: *domingo, 22 de junio*
🕗 Hora: *8:00 a.m. - 1:00 p.m.*
📍 Lugar: *Polideportivo Limatambo - San Borja*
👥 *Equipos de hasta 7 personas* (también puedes inscribirte de forma *individual* y te asignaremos un equipo)
📌 Cierre de inscripciones: *lunes, 16 de junio*

*Actividades y juegos de la competencia*
* ⚽ Fútbol mixto
* 🏐 Vóley mixto
* 🏃‍♂️ Carrera de obstáculos
* 📦 Jenga
* 🦘 Saltar soga
* 🥷 Carrera de sacos
* 💡 Retos de agilidad y trabajo en equipo
* 🎭 ¡Y muchas sorpresas más con premios en cada categoría!

🎁 *¿Qué beneficios tengo?*

✅ Reconocimiento a tu equipo (puedes representar a tu dirección o comunidad).
✅ Un día de integración, deporte y diversión.
✅ Camiseta oficial del evento (opcional).
✅ Kit de bienvenida (bebida + snack).
✅ Networking con otros profesionales.
✅ Certificado de participación.
✅ Premios para los equipos ganadores y menciones especiales.
✅ Maquillaje deportivo (😉😉).
✅ Entrada libre a taller exclusivo.
✅ Sorteos y más.

📝 *¿Cuánto cuesta?*

Voluntario o Miembro del PMI: *S/ 35*
Voluntario o Miembro del PMI + Polo oficial del evento: *S/ 60*

Público en general: *S/ 55*
Público en general + Polo oficial del evento: *S/ 80*

📄 *Revisa el brochure completo aquí*: https://n9.cl/0fy3tr

📝 *¿Aceptas el reto?*  
Inscríbete aquí 👉 forms.office.com/r/MtWRy2MLqM

📲 ¿Tienes dudas? Escríbenos al +51 913 368 394 y con gusto te ayudamos.

🔗 ¡Síguenos en nuestras redes como 
*PMI Lima Perú Chapter* para no perderte ninguna novedad! 

#OlimpiadasPMI2025 #PMILimaChapter #LiderazgoEnAcción #TeamSpirit #NetworkingDeportivo
`;

// Create a new client instance
const client = new Client({
  puppeteer: {
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  },
});

// When the client is ready, run this code (only once)
client.once("ready", async () => {
  console.log("Client is ready!");

  const media = MessageMedia.fromFilePath("./video.mp4");

  await sendVideoMessages(client, media);
});

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const randomDelay = (min = 5000, max = 10000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sendVideoMessages = async (client, media) => {
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }

    const lines = data.trim().split("\n");

    const header = lines.shift();

    const first10 = lines.slice(3, 6); // 10, 20

    for (let index = 0; index < first10.length; index++) {
      const line = first10[index];
      console.log(`Fila ${index + 1}: ${line}`);

      const [name, phone] = line.split(",");
      console.log(`Nombre: ${name}, Teléfono: ${phone}`);

      await client.sendMessage(phone, media, { caption: message(name) });

      const waitTime = randomDelay();
      console.log(
        `Esperando ${
          waitTime / 1000
        } segundos antes de la siguiente iteración...`
      );
      await delay(waitTime);
    }
    console.log("Proceso finalizado.");
  });
};

// When the client received QR-Code
client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true });
});

client.initialize();
