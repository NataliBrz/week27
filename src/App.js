import { isInaccessible } from '@testing-library/react';
import { isElement } from 'react-dom/test-utils';
import styles from './App.css';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';


const cards = [
  {
    name: "Безлимитный 300",
    discript: "руб 300 / мес",
    block1: "до 10 Мбит/сек",
    block2: "Объем включенного трафика неограничен"

  },
  {
    name: "Безлимитный 450",
    discript: "руб 450 / мес",
    block1: "до 50 Мбит/сек",
    block2: "Объем включенного трафика неограничен",
    isSelected: true
  },
  {
    name: "Безлимитный 550",
    discript: "руб 550 / мес",
    block1: "до 100 Мбит/сек",
    block2: "Объем включенного трафика неограничен"
  },
  {
    name: "Безлимитный 1000",
    discript: "руб 1000 / мес",
    block1: "до 200 Мбит/сек",
    block2: "Объем включенного трафика неограничен"
  }
];


function App() {
  return (
    <div >





      <div className="App">
        <Card bodySection1Color={'lightgray'} />
      </div>
      <div>
        <button className={styles.button}>Купить</button>
      </div>
      <div className='tarif'>
        {cards.map(
          (element) => {
            return (<Card2 name={element.name} discript={element.discript} block1={element.block1} block2={element.block2}
              isSelected={element.isSelected}
            />)
          }
        )}


      </div>
      <div className="App">
        <Card3 name="Безлимитный 300" discript="руб 300 / мес" block1="до 10 Мбит/сек" block2="Объем включенного трафика неограничен" />
        <Card3 name="Безлимитный 450" discript="руб 450 / мес" block1="до 50 Мбит/сек" block2="Объем включенного трафика неограничен" />
        <Card3 name="Безлимитный 550" discript="руб 550 / мес" block1="до 100 Мбит/сек" block2="Объем включенного трафика неограничен" />
        <Card3 name="Безлимитный 1000" discript="руб 1000 / мес" block1="до 200 Мбит/сек" block2="Объем включенного трафика неограничен" />

      </div>
    </div>
  );
}

export default App;
