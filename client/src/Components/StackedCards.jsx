import React from "react";
import "./stackedCards.css";
import Button from "./Button";
import Title from "./Title";

function StackedCards() {
  return (
    <div className="my-20 max-w-screen-xl mx-4 md:mx-8 xl:mx-auto">
      <Title
        title="Featured Recipes"
        subTitle="Delicious Dishes to Delight Your Taste Buds"
        desc="Discover global dishes with our featured recipes. From Italian Carbonara to Indian Curry, enjoy authentic flavors and easy instructions. Start your culinary adventure today!"
      />

      <div className="mt-10">
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2 className="text-3xl">Spaghetti Carbonara</h2>
                <div className="leading-normal md:leading-10">
                  <p>Purchased_by: 20</p>
                  <p>Creator_Email: m@a.com</p>
                  <p>Country: Italy</p>
                </div>
                <Button
                  text="View The Recipe"
                  style="border-none px-6 hover:bg-gray-800"
                />
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
                <h2 className="text-3xl">Spaghetti Carbonara</h2>
                <div className="leading-normal md:leading-10">
                  <p>Purchased_by: 20</p>
                  <p>Creator_Email: m@a.com</p>
                  <p>Country: Italy</p>
                </div>
                <Button
                  text="View The Recipe"
                  style="border-none px-6 hover:bg-gray-800"
                />
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
                <h2 className="text-3xl">Spaghetti Carbonara</h2>
                <div className="leading-normal md:leading-10">
                  <p>Purchased_by: 20</p>
                  <p>Creator_Email: m@a.com</p>
                  <p>Country: Italy</p>
                </div>
                <Button
                  text="View The Recipe"
                  style="border-none px-6 hover:bg-gray-800"
                />
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
                <h2 className="text-3xl">Spaghetti Carbonara</h2>
                <div className="leading-normal md:leading-10">
                  <p>Purchased_by: 20</p>
                  <p>Creator_Email: m@a.com</p>
                  <p>Country: Italy</p>
                </div>
                <Button
                  text="View The Recipe"
                  style="border-none px-6 hover:bg-gray-800"
                />
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
                <h2 className="text-3xl">Spaghetti Carbonara</h2>
                <div className="leading-normal md:leading-10">
                  <p>Purchased_by: 20</p>
                  <p>Creator_Email: m@a.com</p>
                  <p>Country: Italy</p>
                </div>
                <Button
                  text="View The Recipe"
                  style="border-none px-6 hover:bg-gray-800"
                />
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
      </div>
      <div className="flex justify-center items-center">
        <Button text="View All Recipes" style="btn-wide" />
      </div>
    </div>
  );
}

export default StackedCards;
