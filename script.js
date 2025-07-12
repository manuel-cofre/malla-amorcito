
const malla = [
  [["Lengua Extranjera A I", "anual"], ["Lengua Extranjera B I", "anual"], ["Lingüística General", "semestral"],
   ["Literatura Universal en Lengua Española", "semestral"], ["Lengua Española", "semestral"],
   ["Nueva Tecnologías de Información", "semestral"], ["Asignatura Complementaria", "semestral"]],

  [["Lengua Extranjera A II", "anual"], ["Lengua Extranjera B II", "anual"], ["Lingüística del Texto", "semestral"],
   ["Latín y Raíces Griegas", "semestral"], ["Introducción a la Literatura en Lengua Extranjera A", "semestral"],
   ["Introducción a la Literatura en Lengua Extranjera B", "semestral"],
   ["Electivo Lengua Española", "semestral"], ["Electivo Lengua A", "semestral"],
   ["Electivo Lengua B", "semestral"], ["Asignatura Complementaria", "semestral"]],

  [["Lengua Extranjera A III", "anual"], ["Lengua Extranjera B III", "anual"], ["Translatología", "semestral"],
   ["Terminología", "semestral"], ["Literatura en Lengua Extranjera A", "semestral"],
   ["Literatura en Lengua Extranjera B", "semestral"],
   ["Metodología y Práctica Traducción Lengua Extranjera A I", "semestral"],
   ["Metodología y Práctica Traducción Lengua Extranjera A II", "semestral"],
   ["Metodología y Práctica Traducción Lengua Extranjera B I", "semestral"],
   ["Metodología y Práctica Traducción Lengua Extranjera B II", "semestral"]],

  [["Lengua Extranjera A IV", "anual"], ["Lengua Extranjera B IV", "anual"], ["Asignatura Complementaria", "semestral"],
   ["Metodología Investigación", "semestral"], ["Electivo Especialización Temática", "semestral"],
   ["Iniciación Traducción Inversa", "semestral"], ["Práctica Traducción Inversa", "semestral"]],

  [["Técnicas Interpretación Consecutivas/simultáneas (Unilateral Lengua Extranjera A/B)", "semestral"],
   ["Técnicas Interpretación Consecutivas/simultáneas (Bilateral Lengua Extranjera A/B)", "semestral"],
   ["Técnica de Expresión Oral", "semestral"], ["Lenguaje y Memoria", "semestral"],
   ["Mnemotecnia y Notación", "semestral"], ["Práctica Profesional Traducción", "semestral"],
   ["Asignatura Complementaria", "semestral"], ["Seminario Licenciatura en Traductología", "semestral"]],

  [["Electivo Lengua A", "semestral"], ["Electivo Lengua B", "semestral"], ["Electivo Lengua A", "semestral"],
   ["Electivo Lengua B", "semestral"], ["Electivo Especialización Temática", "semestral"],
   ["Electivo Lengua A", "semestral"], ["Electivo Lengua B", "semestral"],
   ["Seminario Licenciatura en Traductología", "semestral"], ["Asignatura Complementaria", "semestral"]]
];

const container = document.getElementById("malla-container");
const estado = JSON.parse(localStorage.getItem("ramosTachados") || "[]");

malla.forEach((ano, i) => {
    const anoDiv = document.createElement("div");
    anoDiv.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = `Año ${i + 1}`;
    anoDiv.appendChild(title);

    ano.forEach(([nombre, duracion], j) => {
        const div = document.createElement("div");
        div.textContent = nombre;
        div.className = "ramo";

        const text = nombre.toLowerCase();
        if (text.includes("interpretación") || text.includes("seminario")) {
            div.classList.add("interpretacion");
        } else if (text.includes("traducción") || text.includes("translatología") || text.includes("terminología")) {
            div.classList.add("traduccion");
        } else {
            div.classList.add("bachillerato");
        }

        if (duracion === "anual") {
            div.classList.add("anual");
        }

        const id = `${i}-${j}`;
        if (estado.includes(id)) div.classList.add("tachado");

        div.onclick = () => {
            div.classList.toggle("tachado");
            const index = estado.indexOf(id);
            if (index >= 0) estado.splice(index, 1);
            else estado.push(id);
            localStorage.setItem("ramosTachados", JSON.stringify(estado));
        };

        anoDiv.appendChild(div);
    });

    container.appendChild(anoDiv);
});
