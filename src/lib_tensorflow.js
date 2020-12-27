/**
 * Obtenemos datos de los coches y nos quedamos con las variables que nos interesan.
 * @returns {Promise<*>}
 */
async function getCarsData() {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
        .filter(car => (car.mpg != null && car.horsepower != null));
    console.log(carsData);
    console.log(cleaned);
    return cleaned;
}

async function run() {
    const data = await getCarsData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,
    }));
    console.log(values);
    tfvis.render.scatterplot(
        {
            name: "horsepower vs. mpg"
        }
    )
}


document.addEventListener("DOMContentLoaded", run);