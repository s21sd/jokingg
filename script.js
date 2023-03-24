const jokespace = document.getElementById("joke");
const button = document.getElementById("btn");


const getjokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokespace.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        })

}


button.addEventListener('click', getjokes);
getjokes();
