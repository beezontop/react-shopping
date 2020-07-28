import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Header from "./components/header";
import Navbar from "./components/navber";
import Product from "./components/product";
import Cart from "./components/cart";
import AddtoCart from "./components/addtocart";
import { Spinner } from "react-bootstrap";


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/beezontop/fakeproduct/data")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsloaded(true);
          setData(data);
          console.log(data);
        },
        (error) => {
          setIsloaded(true);
          setError(error);
        }
      );
  }, []);

  const handleAddtoCart = (e) => {
    //取得data中與e相符的目標
    const target = data.filter((i) => i.id === +e.currentTarget.id);
    //取得cartList中與e相符的目標
    const cartTarget = cartList.find((i) => i.id === +e.currentTarget.id);

    //若不存在於cartList
    if (!cartTarget) {
      // 生成newitem
      const newItem = {
        id: +e.currentTarget.id,
        count: 1,
        data: target[0],
        sum: target[0].price,
      };
      //把newItem存到cartList
      const newCartList = [...cartList];
      newCartList.push(newItem);
      setCartList(newCartList);

      //////////////[total]]///////////////////

      //將 newItem 價格加至 total
      let newTotal = total + newItem.sum;
      newTotal = newTotal.toFixed(2);
      setTotal(+newTotal);
    }
  };

  const handleAdd = (e) => {
    //複製cartList
    let newCartList = [...cartList];
    //找到目標 並count++ , 總價格加上單價
    const target = newCartList.find((i) => i.id === +e.currentTarget.id);
    target.count++;
    target.sum += target.data.price;
    let dec = target.sum;
    target.sum = +dec.toFixed(2);
    setCartList(newCartList);

    //////////////[total]]///////////////////

    let newTotal = total + target.data.price;
    newTotal = newTotal.toFixed(2);
    setTotal(+newTotal);
  };

  const handleMinus = (e) => {
    //複製cartList
    let newCartList = [...cartList];
    //找到目標 並count++, 總價格減掉單價
    const target = newCartList.find((i) => i.id === +e.currentTarget.id);
    if (target.count > 1) {
      target.count--;
      target.sum -= target.data.price;
      let dec = target.sum;
      target.sum = +dec.toFixed(2);

      //////////////[total]]///////////////////
      let newTotal = total - target.data.price;
      if (newTotal < 0) {
        newTotal = 0;
        setTotal(newTotal);
      } else {
        newTotal = newTotal.toFixed(2);
        setTotal(+newTotal);
      }
    }
    setCartList(newCartList);
  };

  function handleDelete(e) {
    const id = +e.id;
    //將目標篩掉
    const newCartList = cartList.filter((i) => i.id !== id);
    setCartList(newCartList);
    //將目標的值從total減掉
    const target = cartList.filter((i) => i.id === id);
    let newTotal = total - target[0].sum;
    newTotal = newTotal.toFixed(2);
    setTotal(+newTotal);
  }

  const item = data.map((i) => {
    return (
      <li className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i.id}>
        <div className="product-info" key={i.id}>
          <Product data={i} />
          <AddtoCart onClick={handleAddtoCart} id={i.id} />
        </div>
      </li>
    );
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Spinner
        animation="border"
        role="status"
        variant="warning"
        className="loading"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div className="container">
          <Cart
            data={data}
            cartCount={cartList}
            doAdd={handleAdd}
            doMinus={handleMinus}
            total={total}
            doDelete={handleDelete}
          />
          <ul className="product-list row" key={data.id}>
            {item}
          </ul>
        </div>
      </React.Fragment>
    );
  }
} 
export default App;
