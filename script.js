function showTime() {
    const now = new Date(); // Tworzy nowy obiekt daty i czasu

    // Opcje formatowania dla polskiej strefy czasowej
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Używa formatu 24-godzinnego
        timeZone: 'Europe/Warsaw', // Określa strefę czasową dla Warszawy
        timeZoneName: 'shortOffset' // Wyświetla skróconą nazwę strefy czasowej (np. GMT+2)
    };

    // Formatowanie daty i czasu do polskiego formatu i strefy czasowej
    document.getElementById('currentTime').innerHTML = now.toLocaleString('pl-PL', options);
}

// Wywołaj funkcję od razu po załadowaniu strony
showTime();

// Aktualizuj czas co sekundę
setInterval(function () {
    showTime();
}, 1000);