import './style.css';

interface Station {
  element: HTMLLIElement;
  epoche: string;
}

function passendeStationen(stationen: Station[], epoche: string): Station[] {
  return stationen.filter(
    (station) => epoche === 'alle' || station.epoche === epoche,
  );
}

function zeigeStationen(stationen: Station[], epoche: string): number {
  const passende = passendeStationen(stationen, epoche);

  for (const station of stationen) {
    station.element.classList.add('ausgeblendet');
  }

  for (const station of passende) {
    station.element.classList.remove('ausgeblendet');
  }

  return passende.length;
}

const auswahl = document.querySelector<HTMLSelectElement>('#epoche');
const ergebnis = document.querySelector<HTMLElement>('#filter-ergebnis');

if (auswahl && ergebnis) {
  const stationen: Station[] = [
    ...document.querySelectorAll<HTMLLIElement>('.timeline > li'),
  ].map((element) => ({
    element,
    epoche: element.getAttribute('data-epoche') ?? '',
  }));

  const aktualisieren = (): void => {
    const anzahl = zeigeStationen(stationen, auswahl.value);
    ergebnis.textContent = `${anzahl} von ${stationen.length} Stationen werden angezeigt.`;
  };

  auswahl.addEventListener('change', aktualisieren);
  aktualisieren();
}
