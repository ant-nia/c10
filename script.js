const portfolio = document.querySelector("#portafolio");

async function datos(url) {
    try {
         let consulta = await fetch(raw);
        let resultado = await consulta.json();
        let trabajos = resultado.data;
        console.log(trabajos);
        trabajos.forEach((trabajo) => {
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
datos("https://api.myjson.online/v1/records/31192916-5df4-4a83-9ec0-0b0cfa4f98cc")
