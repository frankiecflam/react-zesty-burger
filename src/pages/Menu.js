import "./Menu.css";
import Container from "../components/UI/Container";
import Burgers from "../components/Menu/Burgers/Burgers";
import Drinks from "../components/Menu/Drinks/Drinks";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useGetMenu from "../hooks/useGetMenu";

const Menu = () => {
  const { isLoading, error, data: menu } = useGetMenu();
  let content;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (error) {
    content = (
      <h1 className="menu__errorMessage">
        Error has occured fetching menu from the database!
      </h1>
    );
  }

  if (!isLoading && !error) {
    const sortedMenu = menu.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });

    const burgerMenu = sortedMenu.filter(
      (item) => item.category === "burgers" || item.category === "sides"
    );

    const drinkMenu = sortedMenu.filter((item) => item.category === "drinks");
    content = (
      <>
        <Burgers burgerMenu={burgerMenu} />
        <Drinks drinkMenu={drinkMenu} />
      </>
    );
  }

  return (
    <div className="menu">
      <Container className="menu__body">{content}</Container>
    </div>
  );
};

export default Menu;
