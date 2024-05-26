import React from "react";
import "./stackedCards.css";
import Button from "./Button";

function StackedCards() {
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <ul id="cards">
        <li className="card" id="card_1">
          <div className="card__content">
            <div>
              <h2>Spaghetti Carbonara</h2>
              <p>Purchased_by: 20</p>
              <p>Creator_Email: m@a.com</p>
              <p>Country: Italy</p>
              <p>
                <Button text="View The Recipe" style="border-none px-6 hover:bg-gray-800" />
              </p>
            </div>
            <figure>
              <img
                src="https://i.postimg.cc/KcBLS5h8/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"
                alt="Image description"
              />
            </figure>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <div>
              <h2>Spaghetti Carbonara</h2>
              <p>Purchased_by: 20</p>
              <p>Creator_Email: m@a.com</p>
              <p>Country: Italy</p>
              <p>
                <Button text="View The Recipe" style="border-none px-6 hover:bg-gray-800" />
              </p>
            </div>
            <figure>
              <img
                src="https://i.postimg.cc/KcBLS5h8/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"
                alt="Image description"
              />
            </figure>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <div>
              <h2>Spaghetti Carbonara</h2>
              <p>Purchased_by: 20</p>
              <p>Creator_Email: m@a.com</p>
              <p>Country: Italy</p>
              <p>
                <Button text="View The Recipe" style="border-none px-6 hover:bg-gray-800" />
              </p>
            </div>
            <figure>
              <img
                src="https://i.postimg.cc/KcBLS5h8/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"
                alt="Image description"
              />
            </figure>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div>
              <h2>Spaghetti Carbonara</h2>
              <p>Purchased_by: 20</p>
              <p>Creator_Email: m@a.com</p>
              <p>Country: Italy</p>
              <p>
                <Button text="View The Recipe" style="border-none px-6 hover:bg-gray-800" />
              </p>
            </div>
            <figure>
              <img
                src="https://i.postimg.cc/KcBLS5h8/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"
                alt="Image description"
              />
            </figure>
          </div>
        </li>
        <li className="card" id="card_5">
          <div className="card__content">
            <div>
              <h2>Spaghetti Carbonara</h2>
              <p>Purchased_by: 20</p>
              <p>Creator_Email: m@a.com</p>
              <p>Country: Italy</p>
              <p>
                <Button text="View The Recipe" style="border-none px-6 hover:bg-gray-800" />
              </p>
            </div>
            <figure>
              <img
                src="https://i.postimg.cc/KcBLS5h8/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"
                alt="Image description"
              />
            </figure>
          </div>
        </li>
      </ul>
      <div className="flex justify-center items-center">
        <Button text="View All Recipes" style="btn-wide" />
      </div>
    </div>
  );
}

export default StackedCards;
