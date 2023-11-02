import Card from "../components/Card";
import "../assets/styles/cardList.css";
import Filter from "../components/filter";
import { useState } from "react";

function CardList({ data }) {
  const [checkboxHome, setCheckboxHome] = useState(false);
  const [checkboxApartment, setCheckboxApartment] = useState(false);
  const [checkboxVilla, setCheckboxVilla] = useState(false);
  console.log(checkboxApartment);
  if (checkboxHome) {
    return (
      <>
        <Filter
          setCheckboxHome={setCheckboxHome}
          setCheckboxApartment={setCheckboxApartment}
          setCheckboxVilla={setCheckboxVilla}
        />
        {checkboxHome ? (
          <div className="cardList">
            {data
              .filter((e) => {
                return e.category.includes("maison");
              })
              .map((e) => (
                <Card
                  {...data}
                  key={e.id}
                  title={e.title}
                  description={e.description}
                  image={e.image}
                  price={e.price}
                  category={e.category}
                />
              ))}
          </div>
        ) : (
          <div className="cardList">
            {data.map((e) => (
              <Card
                {...data}
                key={e.id}
                title={e.title}
                description={e.description}
                image={e.image}
                price={e.price}
                category={e.category}
              />
            ))}
          </div>
        )}
      </>
    );
  }
  if (checkboxVilla) {
    return (
      <>
        <Filter
          setCheckboxHome={setCheckboxHome}
          setCheckboxApartment={setCheckboxApartment}
          setCheckboxVilla={setCheckboxVilla}
        />
        {checkboxVilla ? (
          <div className="cardList">
            {data
              .filter((e) => {
                return e.category.includes("villa");
              })
              .map((e) => (
                <Card
                  {...data}
                  key={e.id}
                  title={e.title}
                  description={e.description}
                  image={e.image}
                  price={e.price}
                  category={e.category}
                />
              ))}
          </div>
        ) : (
          <div className="cardList">
            {data.map((e) => (
              <Card
                {...data}
                key={e.id}
                title={e.title}
                description={e.description}
                image={e.image}
                price={e.price}
                category={e.category}
              />
            ))}
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <Filter
        setCheckboxHome={setCheckboxHome}
        setCheckboxApartment={setCheckboxApartment}
        setCheckboxVilla={setCheckboxVilla}
      />

      {checkboxApartment ? (
        <div className="cardList">
          {data
            .filter((e) => {
              return e.category.includes("appartement");
            })
            .map((e) => (
              <Card
                {...data}
                key={e.id}
                title={e.title}
                description={e.description}
                image={e.image}
                price={e.price}
                category={e.category}
              />
            ))}
        </div>
      ) : (
        <div className="cardList">
          {data.map((e) => (
            <Card
              {...data}
              key={e.id}
              title={e.title}
              description={e.description}
              image={e.image}
              price={e.price}
              category={e.category}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CardList;
