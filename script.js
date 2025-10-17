const portfolio = document.querySelector("#portafolio");

async function datos(url) {
    try {
        const consulta = await fetch(url);
        if (!consulta.ok) throw new Error(`HTTP ${consulta.status}`);
        const trabajos = await consulta.json();
        console.log("✅ Datos cargados:", trabajos);

        portfolio.innerHTML = "";
        trabajos.forEach((v) => {
            portfolio.innerHTML += `
                <div class="col">
                    <div class="card shadow-sm h-100">
                        <img src="${v.photo}" class="card-img-top" alt="${v.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${v.title}</h5>
                            <p class="flex-grow-1">${v.description}</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">${v.category}</button>
                                </div>
                                <span class="date-badge">${v.date}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    } catch (error) {
        console.error("❌ Error al cargar los datos:", error);
    }
}

// ✅ Ruta correcta al JSON RAW
datos("https://raw.githubusercontent.com/ant-nia/c10/main/datos.json");
