import styles from './App.module.css';
import baskerIcon from './assets/basket.svg';
import productImage from './assets/img.jpg';
import glutenFreeIcon from './assets/gluten.svg';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [prodOneSingle, setProdOneSingle] = useState(0);
  const [prodOneDouble, setProdOneDouble] = useState(0);
  const [prodTwoSingle, setProdTwoSingle] = useState(0);
  const [prodTwoDouble, setProdTwoDouble] = useState(0);
  const [prodThreeSingle, setProdThreeSingle] = useState(0);
  const [prodThreeDouble, setProdThreeDouble] = useState(0);
  const [prodFourSingle, setProdFourSingle] = useState(0);
  const [prodFourDouble, setProdFourDouble] = useState(0);

  const [orderCount, setOrderCount] = useState(0);
  const [prodOneSize, setProdOneSize] = useState('double');
  const [prodTwoSize, setProdTwoSize] = useState('double');
  const [prodThreeSize, setProdThreeSize] = useState('double');
  const [prodFourSize, setProdFourSize] = useState('double');

  const sumMyOrder = useCallback(() => {
    const result = prodOneSingle
      + prodOneDouble
      + prodTwoSingle
      + prodTwoDouble
      + prodThreeSingle
      + prodThreeDouble
      + prodFourSingle
      + prodFourDouble;
    return result;
  }, [prodOneSingle, prodOneDouble, prodTwoSingle, prodTwoDouble, prodThreeSingle, prodThreeDouble, prodFourSingle, prodFourDouble]);

  function handleChangeProductSize(numberOfProduct: number, size: string) {
    if (numberOfProduct === 1) {
      setProdOneSize(size);
    } else if (numberOfProduct === 2) {
      setProdTwoSize(size);
    } else if (numberOfProduct === 3) {
      setProdThreeSize(size);
    } else if (numberOfProduct === 4) {
      setProdFourSize(size);
    }
  }

  useEffect(() => {
    const result = sumMyOrder()
    setOrderCount(result);
  }, [sumMyOrder]);

  function getMyOrder() {
    return console.log(`
    Всего в корзине ${orderCount} товара:
    чебурек1: одинарный: ${prodOneSingle} двойной: ${prodOneDouble};
    чебурек2: одинарный: ${prodTwoSingle} двойной: ${prodTwoDouble};
    чебурек3: одинарный: ${prodThreeSingle} двойной: ${prodThreeDouble};
    чебурек4: одинарный: ${prodFourSingle} двойной: ${prodFourDouble};
    `)
  }

  return (
    <>
      <div className={styles.header}>
        <a className={styles.headerLogo} href="#">
          лого
        </a>
        <div className={styles.headerNav}>
          <a className={styles.headerNavLink} href="#">
            <span>
              +7 (812)
            </span>
            <span className={styles.headerNavLink__bold}>
              &nbsp;944-4490
            </span>
          </a>
          <button
            onClick={getMyOrder}
            className={styles.headerNavButton} >
            <img src={baskerIcon} alt="" />
            {orderCount !== 0 && (
              <span className={styles.orderCount}>
                {orderCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.breadcrumbsWrap}>
          <a className={styles.breadcrumbsLink} href="#">
            Главная /&nbsp;
          </a>
          <a className={styles.breadcrumbsLink} href="#">
            Меню /&nbsp;
          </a>
          <a className={styles.breadcrumbsLink} href="#">
            Категория товаров
          </a>
        </div>
        <h1 className={styles.sectionTitle}>
          Название категории
        </h1>
        <ul className={styles.cardsList}>
          <li className={styles.cardItem}>
            <div className={styles.imageWrap}>
              <img className={styles.CardImage} src={productImage} alt="" />
            </div>
            <h2 className={styles.cardItemTitle}>
              Товар 1
            </h2>
            <p className={styles.cardItemDescr}>
              Здесь будет описание товара.
              У некоторых товаров описание может быть коротким, а у некоторых - длинным.
            </p>
            <div className={styles.cardItemSizeButtonsWrap}>
              <button
                onClick={() => { handleChangeProductSize(1, 'single') }}
                className={`${styles.cardItemSizeButton} ${styles.singleSize} ${prodOneSize === 'single' ? styles.sizeActive : ''}`}>
                Стандарт
              </button>
              <button
                onClick={() => { handleChangeProductSize(1, 'double') }}
                className={`${styles.cardItemSizeButton} ${styles.doubleSize} ${prodOneSize === 'double' ? styles.sizeActive : ''}`}>
                Двойной
              </button>
            </div>
            <div className={styles.cardItemOrderWrap}>
              <span className={styles.cardItemOrderCost}>
                {prodOneSize === 'single' ? `190\u00A0₽` : `380\u00A0₽`}
              </span>
              {prodOneSize === 'single'
                ? <div className={styles.cardItemOrderButtonsWrap}>
                  {prodOneSingle === 0 && prodOneSize === 'single'
                    ? <button
                      onClick={() => { setProdOneSingle(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdOneSingle(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodOneSingle}
                      </span>
                      <button
                        onClick={() => { setProdOneSingle(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>
                : <div className={styles.cardItemOrderButtonsWrap}>
                  {prodOneDouble === 0 && prodOneSize === 'double'
                    ? <button
                      onClick={() => { setProdOneDouble(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdOneDouble(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodOneDouble}
                      </span>
                      <button
                        onClick={() => { setProdOneDouble(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>}
            </div>
          </li >
          <li className={styles.cardItem}>
            <div className={styles.imageWrap}>
              <img className={styles.CardImage} src={productImage} alt="" />
              <img className={styles.glutenFree} src={glutenFreeIcon} alt="" />
            </div>
            <h2 className={styles.cardItemTitle}>
              Товар 2
            </h2>
            <p className={styles.cardItemDescr}>
              Здесь будет описание товара.
              У некоторых товаров описание может быть коротким, а у некоторых - длинным.
            </p>
            <div className={styles.cardItemSizeButtonsWrap}>
              <button
                onClick={() => { handleChangeProductSize(2, 'single') }}
                className={`${styles.cardItemSizeButton} ${styles.singleSize} ${prodTwoSize === 'single' ? styles.sizeActive : ''}`}>
                Стандарт
              </button>
              <button
                onClick={() => { handleChangeProductSize(2, 'double') }}
                className={`${styles.cardItemSizeButton} ${styles.doubleSize} ${prodTwoSize === 'double' ? styles.sizeActive : ''}`}>
                Двойной
              </button>
            </div>
            <div className={styles.cardItemOrderWrap}>
              <span className={styles.cardItemOrderCost}>
                {prodTwoSize === 'single' ? `190\u00A0₽` : `380\u00A0₽`}
              </span>
              {prodTwoSize === 'single'
                ? <div className={styles.cardItemOrderButtonsWrap}>
                  {prodTwoSingle === 0 && prodTwoSize === 'single'
                    ? <button
                      onClick={() => { setProdTwoSingle(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdTwoSingle(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodTwoSingle}
                      </span>
                      <button
                        onClick={() => { setProdTwoSingle(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>
                : <div className={styles.cardItemOrderButtonsWrap}>
                  {prodTwoDouble === 0 && prodTwoSize === 'double'
                    ? <button
                      onClick={() => { setProdTwoDouble(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdTwoDouble(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodTwoDouble}
                      </span>
                      <button
                        onClick={() => { setProdTwoDouble(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>}
            </div>
          </li>
          <li className={styles.cardItem}>
            <div className={styles.imageWrap}>
              <img className={styles.CardImage} src={productImage} alt="" />
              <img className={styles.glutenFree} src={glutenFreeIcon} alt="" />
            </div>
            <h2 className={styles.cardItemTitle}>
              Товар 3
            </h2>
            <p className={styles.cardItemDescr}>
              Здесь будет описание товара.
              У некоторых товаров описание может быть коротким, а у некоторых - длинным.
            </p>
            <div className={styles.cardItemSizeButtonsWrap}>
              <button
                onClick={() => { handleChangeProductSize(3, 'single') }}
                className={`${styles.cardItemSizeButton} ${styles.singleSize} ${prodThreeSize === 'single' ? styles.sizeActive : ''}`}>
                Стандарт
              </button>
              <button
                onClick={() => { handleChangeProductSize(3, 'double') }}
                className={`${styles.cardItemSizeButton} ${styles.doubleSize} ${prodThreeSize === 'double' ? styles.sizeActive : ''}`}>
                Двойной
              </button>
            </div>
            <div className={styles.cardItemOrderWrap}>
              <span className={styles.cardItemOrderCost}>
                {prodThreeSize === 'single' ? `190\u00A0₽` : `380\u00A0₽`}
              </span>
              {prodThreeSize === 'single'
                ? <div className={styles.cardItemOrderButtonsWrap}>
                  {prodThreeSingle === 0 && prodThreeSize === 'single'
                    ? <button
                      onClick={() => { setProdThreeSingle(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdThreeSingle(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodThreeSingle}
                      </span>
                      <button
                        onClick={() => { setProdThreeSingle(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>
                : <div className={styles.cardItemOrderButtonsWrap}>
                  {prodThreeDouble === 0 && prodThreeSize === 'double'
                    ? <button
                      onClick={() => { setProdThreeDouble(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdThreeDouble(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodThreeDouble}
                      </span>
                      <button
                        onClick={() => { setProdThreeDouble(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>}
            </div>
          </li>
          <li className={styles.cardItem}>
            <div className={styles.imageWrap}>
              <img className={styles.CardImage} src={productImage} alt="" />
              <img className={styles.glutenFree} src={glutenFreeIcon} alt="" />
            </div>
            <h2 className={styles.cardItemTitle}>
              Товар 4
            </h2>
            <p className={styles.cardItemDescr}>
              Здесь будет описание товара.
              У некоторых товаров описание может быть коротким, а у некоторых - длинным.
            </p>
            <div className={styles.cardItemSizeButtonsWrap}>
              <button
                onClick={() => { handleChangeProductSize(4, 'single') }}
                className={`${styles.cardItemSizeButton} ${styles.singleSize} ${prodFourSize === 'single' ? styles.sizeActive : ''}`}>
                Стандарт
              </button>
              <button
                onClick={() => { handleChangeProductSize(4, 'double') }}
                className={`${styles.cardItemSizeButton} ${styles.doubleSize} ${prodFourSize === 'double' ? styles.sizeActive : ''}`}>
                Двойной
              </button>
            </div>
            <div className={styles.cardItemOrderWrap}>
              <span className={styles.cardItemOrderCost}>
                {prodFourSize === 'single' ? `190\u00A0₽` : `380\u00A0₽`}
              </span>
              {prodFourSize === 'single'
                ? <div className={styles.cardItemOrderButtonsWrap}>
                  {prodFourSingle === 0 && prodFourSize === 'single'
                    ? <button
                      onClick={() => { setProdFourSingle(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdFourSingle(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodFourSingle}
                      </span>
                      <button
                        onClick={() => { setProdFourSingle(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>
                : <div className={styles.cardItemOrderButtonsWrap}>
                  {prodFourDouble === 0 && prodFourSize === 'double'
                    ? <button
                      onClick={() => { setProdFourDouble(prev => prev + 1) }}
                      className={styles.cardItemOrderButton}>
                      Заказать
                    </button>
                    : <div className={styles.increaseWrap}>
                      <button
                        onClick={() => { setProdFourDouble(prev => prev - 1) }}
                        className={styles.increaseButton}>
                        -
                      </button>
                      <span className={styles.countProduct}>
                        {prodFourDouble}
                      </span>
                      <button
                        onClick={() => { setProdFourDouble(prev => prev + 1) }}
                        className={styles.decreaseButton}>
                        +
                      </button>
                    </div>}
                </div>}
            </div>
          </li>
        </ul >
      </div >
    </>
  )
}

export default App
