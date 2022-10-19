import { screen, render } from "@testing-library/react";
import BurgerItem from "../../src/components/Menu/Burgers/BurgerItem";
import { Provider } from "react-redux";
import CartStore from "../../src/store/CartStore";

const setup = () =>
  render(
    <Provider store={CartStore}>
      <BurgerItem
        item={{
          title: "Chicken",
          price: 12.99,
          description:
            "Free-range chicken breast, basil pesto, mustard mayo, tomato and rocket",
        }}
      />
    </Provider>
  );

describe("BurgerItem component", () => {
  it("should render a heading element displaying the title of the item", () => {
    setup();

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /chicken/i
    );
  });

  it("should render a paragraph element displaying the price of the item", () => {
    setup();

    expect(screen.getByText(/£12.99/i)).toBeInTheDocument();
  });

  it("should render a paragraph displaying the description of the item", () => {
    setup();

    expect(
      screen.getByText(
        /Free-range chicken breast, basil pesto, mustard mayo, tomato and rocket/i
      )
    ).toBeInTheDocument();
  });

  it("should render a add button", () => {
    setup();

    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});
