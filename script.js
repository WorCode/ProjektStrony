let currentIndex = 0;
let next = 0;


const photos = [
    {
        src: 'photo1.jpg',
        title: 'Nasi specjaliści z 10 letnim doświadczeniem.',
        subtitle: 'Według nas czas i rezultaty są potwierdzeniem skudeczności działania. Nasi eksperci mogą pochwalić się jednym i drugim. Znamy ceny!'
    },
    {
        src: 'photo2.jpg',
        title: 'Odznaczenia od lokalnej organizacji technicznej.',
        subtitle: 'Pani Teresa Bylińska została nagrodzona za współpracę nad inwestycjami dot projektowania klimatyzacji w 3 140 piętrowych wierzowcach.'
    },
    {
        src: 'photo3.jpg',
        title: 'Harmonogram wyjazdów',
        subtitle: 'Zapisz się już dzisiaj a zapewniamy zakwaterowanie dużo tańsze.'
    }
];

function callEveryThreeSeconds(callback) {
    setInterval(callback, 7000);
}


function nextPhoto(value)
{

    currentIndex = value;
    document.getElementById('photo').src = photos[currentIndex].src;
    document.getElementById('title').textContent = photos[currentIndex].title;
    document.getElementById('subtitle').textContent = photos[currentIndex].subtitle;
}

// Example usage:
function myFunction()
{
    next = (next + 1) % photos.length;
    nextPhoto(next);
}

// Call `myFunction` every 3 seconds
callEveryThreeSeconds(myFunction);
