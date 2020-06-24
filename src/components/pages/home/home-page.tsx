import React, { Fragment } from 'react';

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <h1 className="home-page-title">
        Welcome to MusicCart!
        <br /> <span>Top place to buy music</span>
      </h1>

      <div className="home-page-subheading">
        <div className="lead font-weight-normal">
          <p className="font-italic">
            Одностраничное приложение на React/Redux.
          </p>
          <p className="mt-4 mb-1">Реализовано:</p>
          <ul className="list-group list-group-flush font-weight-light mb-4">
            <li className="list-group-item">
              Несколько страниц с товарами: с загрузкой данных c{' '}
              <a href="https://www.last.fm/api/" target="_blank">
                LastFm public api
              </a>
            </li>
            <li className="list-group-item">
              Корзина: с возможностью добавить/удалить товар, подсчетом цены
            </li>
            <li className="list-group-item">
              Форма входа (/login): c переадресацией на страницу пользователя
            </li>
          </ul>
        </div>

        <a
          className="btn btn-lg btn-secondary"
          href="https://github.com/jprestor/music-cart"
          target="_blank"
        >
          Исходный код
        </a>
      </div>
    </Fragment>
  );
};

export default HomePage;
