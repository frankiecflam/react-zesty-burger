# React App - Zesty Burgers

This is my first react project, a single-page application with React Router handling client-side rendering . The project is built with fundamental features from React, React Router, Redux and Redux toolkits.

## Table of contents

- [Overview](#overview)
  - [Project background](#project-background)
  - [Website structure](#website-structure)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Why I coded this project](#why-i-took-the-challenge)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Project background

The project is built for a family-run shop (Zesty Burgers) based in Manchester. It serves primarily as a web-based application where customers can order items from the shop. Once orders are submitted, order and customer details are sent to a backend server (Firebase).

### Website Structure

The website has 5 main sections: Home, About, Menu, Contact and Cart.

#### Home

HOME serves as a hero section giving a quick summary of what benefits the shop can offer, and calling visitors to action.

#### About

ABOUT provides a brief introduction to the shop, including location, contact No. and opening times.

#### Menu

MENU is where users can add items to their cart.

#### Contact

CONTACT provides a feedback form where customers can leave any comments regarding their experiences with Zesty burgers.

#### Cart

Upon a click on cart button on the top navigation bar, cart modal is shown and the content within depends on current cart state: empty cart or unempty cart.

In cart modal, users can modifiy the quantity of items by clicking "-" or "+" buttons, and the view of the cart modal will be instantly updated. Once they are done with it, they can proceed to the next stage where they are asked to fill in personal information for their orders. When all required input fields are filled, they can click "order now" button to complete their ordering.

### Screenshot

#### Desktop View

![Homepage](./Screenshot/Screenshot%20-%20Desktop-Homepage.png)

![Menu](./Screenshot/Screenshot%20-%20Desktop-Menu.png)

![Cart](./Screenshot/Screenshot%20-%20Mobile-Cart.png)

#### Mobile View

![Homepage](./Screenshot/Screenshot%20-%20Mobile-Homepage.png)

![Menu](./Screenshot/Screenshot%20-%20Mobile-Menu.png)

![Cart](./Screenshot/Screenshot%20-%20Mobile-Cart.png)

### Links

- Solution URL: [https://github.com/frankiecflam/react-zesty-burgers](https://github.com/frankiecflam/react-zesty-burgers)
- Live Site URL: [https://zestyburgers.netlify.app/](https://zestyburgers.netlify.app/)

## My process

### Built with

- React hooks
- React redux
- React redux toolkits
- React Router
- Mobile Responsiveness

### Why I coded this project

The main purpose is to practise my newly-learnt React knowledge and skills. I believe by truly learning a new language, coding projects is the way to go because during the planning and building process, I could identify parts that I am missing in that new language, and continue working on them until I truly understand how they work behind the scene, and how they should work in real-life applications.

Of course, this project is still very far from perfect, but I do believe every project I make serves as a learning opportunity for writing leaner code and better project strucuture.

### What I learned

#### React hooks

```js
const [inputState, inputDispatch] = useReducer(inputReducer, inputInitialState);

useEffect(() => {
  if (cartQuantity === 0) {
    return;
  }

  setCartQuantityBump(true);

  setTimeout(() => {
    setCartQuantityBump(false);
  }, 300);
}, [cartQuantity]);
```

#### React redux

```js
const cartItems = useSelector((state) => state.items);
```

#### React redux toolkits

```js
const CartSlice = createSlice({
  name: "cart",
  initialState: CartInitialState,
  reducers: {
    addItem: addItemToCart,

    removeItem: removeItemFromCart,

    cartReset: resetCart,
  },
});

const CartStore = configureStore({
  reducer: CartSlice.reducer,
});
```

#### React router

```js
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
```

## Author

- Email - [Frankie Lam] frankiechunfai@gmail.com
- Instagram - [@frankie___lam](https://www.instagram.com/frankie___lam/)
- Facebook - [Frankie Lam](https://www.facebook.com/frankiecflam/)
