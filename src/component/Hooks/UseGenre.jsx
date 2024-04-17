

export default function UseGenre(selectElem){

    if(selectElem <1) return "";
    const GenreId = selectElem.map((el) => el.id);
return GenreId.reduce((currentSum, currentNumber) =>currentSum +"," +currentNumber);
}