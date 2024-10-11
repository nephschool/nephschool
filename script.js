function adoptujZwierzaka(nazwaZwierzecia) {
    const baner = document.querySelector('.baner');
    baner.innerHTML = `<h1>Gratulacje!</h1><p>Zaadoptowałeś ${nazwaZwierzecia}. Twój nowy przyjaciel czeka na Ciebie!</p>`;
    baner.style.backgroundColor = '#5da29e';
    baner.style.color = 'white';
    baner.style.textAlign = 'center';
    baner.style.padding = '50px';
}