
export const addOneFactory = (x, id) => {

    let myCounter=x;

    return () => {
        const numberDiv = document.getElementById(id);
        myCounter += 1;
        numberDiv.innerHTML = myCounter.toString();
    };
}


