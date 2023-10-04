import { useState, useEffect } from "react";
import toastr from "toastr";
import { images } from "../app/data";
import "./Game.css";
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
function Game() {
  const BLANK_CARD = "assets/wall.jpeg";
  const images = [
    "assets/Arya.png",
    "assets/cersei.png",
    "assets/daenerys.png",
    "assets/johnSnow.png",
    "assets/khaldrogo.png",
    "assets/sansa.png",
    "assets/tyrion.png",
    "assets/brienne.png",
  ];
  const [points, setPoints] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);
  const [chosenCardsIds, setChosenCardsIds] = useState([]);
  const [pairsUncovered, setPairsUncovered] = useState(0);
  const [flips, setFlips] = useState(0);
  const [openCards, setOpenCards] = useState([]);
  function createCardBoard() {
    const imagesGenerated = images?.concat(...images);
    console.log(imagesGenerated);
    const shuffledArray = shuffleArray(imagesGenerated);
    setImagesArray(shuffledArray);
  }
  function flipImage(image, index) {
    setFlips((flips) => flips + 1);
    console.log(image, index);

    if (chosenCardsIds?.length === 1 && chosenCardsIds[0] === index) {
      return;
    }

    if (chosenCards?.length < 2) {
      setChosenCards((Chosen) => chosenCards?.concat(image));
      setChosenCardsIds((chosenCardsIds) => chosenCardsIds?.concat(index));

      if (chosenCards?.length === 1) {
        if (chosenCards[0] === image) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([chosenCards[0], image])
          );
          setPairsUncovered((pairsUncovered) => pairsUncovered + 1);
        }
        if (pairsUncovered + 1 === images.length) {
          toastr.success(
            `Bravo. Rejoue et essaye de le faire en moins de ${Math.floor(
              flips / 2
            )} coups `
          );
        }
        setTimeout(() => {
          setChosenCardsIds([]);
          setChosenCards([]);
        }, 700);
      }
    }
  }

  function isCardChosen(image, index) {
    return chosenCardsIds?.includes(index) || openCards?.includes(image);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function startOver() {
    setChosenCardsIds([]);
    setChosenCards([]);
    setPoints(0);
    setOpenCards([]);
    createCardBoard();
  }

  useEffect(() => {
    createCardBoard();
  }, []);

  return (
    <div>
      <div className="card-header">
        <h4 className="counter">Points:{points}</h4>
        <p className="flip-counter">Coups:{Math.floor(flips / 2)}</p>
        <button onClick={startOver} className="button-start-over">
          Start over
        </button>
      </div>
      <div className="card-container">
        {imagesArray?.map((image, index) => {
          return (
            <div
              className="col-4 col-lg-2"
              key={index}
              onClick={() => flipImage(image, index)}
            >
              <img
                src={isCardChosen(image, index) ? image : BLANK_CARD}
                alt=""
                className={`img-fluid img-fixed`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Game;
