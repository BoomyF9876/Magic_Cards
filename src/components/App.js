import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import magicCards from '../api/magicCards';
import '../styles/components/App.scss';
import Cards from './Cards';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSetInValid, setIsSetInValid] = useState(false);
  const [selectedSet, setOption] = useState();
  const [setList, setOptionList] = useState([]);
  const [cards, setCards] = useState([]);

  const fetchSets = async () => {
    const sets = await magicCards.getAllSets();
    setOptionList(sets.map(set => ({
      value: set.code,
      label: set.name
    })));
  };
  const fetchCards = async () => {
    setIsLoading(true);
    const cards = await magicCards.getCardsFromSet(selectedSet?.value);
    setIsSetInValid(!cards.find(card => card.imageUrl));
    setCards(cards);
    setIsLoading(false);
  };
  const handleChange = (option) => setOption(option);

  useEffect(() => {
    fetchSets();
  }, []);

  return (
    <div className="app">
      <div>Select a card set</div>
      <div className="selector-wrapper">
        <Select
          className="selector"
          value={selectedSet}
          onChange={handleChange}
          options={setList}
          placeholder="Choose available sets here"
        />
        <button
          className="selector-button"
          data-testid="app-gather-button"
          onClick={fetchCards}
        >
          Gather
        </button>
      </div>
      <Cards
        isLoading={isLoading}
        isSetInValid={isSetInValid}
        cards={cards}
      />
    </div>
  );
}

export default App;
