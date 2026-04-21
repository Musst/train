<script>
const form = document.getElementById("searchForm");
const results = document.getElementById("results");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const depart = document.getElementById("depart").value;
    const arrivee = document.getElementById("arrivee").value;
    const passagers = document.getElementById("passagers").value;

    results.innerHTML = "<h2>Résultats</h2>";

    const trains = [
        { heure: "07:30", duree: "1h05", prix: 25 },
        { heure: "10:15", duree: "1h00", prix: 35 },
        { heure: "18:00", duree: "0h55", prix: 45 }
    ];

    trains.forEach(train => {
        const total = train.prix * parseInt(passagers);

        const div = document.createElement("div");
        div.classList.add("train");

        div.innerHTML = `
            <p><strong>${depart} → ${arrivee}</strong></p>
            <p>${train.heure} • ${train.duree}</p>
            <p>${total} € (${passagers})</p>
            <button onclick="reserver('${depart}','${arrivee}',${total})">Réserver</button>
        `;

        results.appendChild(div);
    });
});

function reserver(depart, arrivee, prix) {
    const billet = {
        depart,
        arrivee,
        prix
    };

    localStorage.setItem("billet", JSON.stringify(billet));

    alert("Billet réservé !");
}
</script>
