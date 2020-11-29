import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../selectors/getHeroById";

export const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    (history.length <= 3) ? history.push('/') : history.goBack();
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`../assets/heroes/${heroeId}.jpg`} className="img-thumbnail animate__animated animate__slideInLeft" alt={superhero} />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush animate__animated animate__slideInRight animate__fast">
          <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
          <li className="list-group-item"> <b>Firs appearance: </b> {first_appearance} </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
