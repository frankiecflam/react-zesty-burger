import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../../src/components/ContactForm/ContactForm";

const setup = () => render(<ContactForm />);

describe("ContactForm component", () => {
  it("should render a form element", () => {
    setup();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should render a h1 element displaying the form title", () => {
    setup();

    expect(
      screen.getByRole("heading", { level: 1, name: /Contact/i })
    ).toBeInTheDocument();
  });

  it("should render a paragraph supplementing the h1 element on initial render", () => {
    setup();

    expect(
      screen.getByText(/Tell us about your experience with Zesty Burgers./i)
    ).toBeInTheDocument();
  });

  it("should not render a paragraph supplementing the h1 element after form submission", () => {});

  it("should render an input field for name", () => {
    setup();

    expect(screen.getByLabelText(/name */i)).toBeInTheDocument();
  });

  it("should render an input field for email", () => {
    setup();

    expect(screen.getByLabelText(/email */i)).toBeInTheDocument();
  });

  it("should render a select element for recommendation scale with default value to Please select", () => {
    setup();

    expect(
      screen.getByLabelText(/how likely are you to recommend us to a friend?/i)
    ).toBeInTheDocument();

    expect(screen.getByDisplayValue("Please select")).toBeInTheDocument();
  });

  it("should render an option element which is disabled", () => {
    setup();

    expect(
      screen.getByRole("option", { name: /please select/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /please select/i })
    ).toBeDisabled();
  });

  it("should render a select element composed of 11 options, including default option", () => {
    setup();

    expect(screen.getAllByRole("option")).toHaveLength(11);
  });

  it("should render a textarea for comments", () => {
    setup();

    expect(screen.getByLabelText(/comments/i)).toBeInTheDocument();
  });

  it("should render a send button to submit the contact form", () => {
    setup();

    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("should immediately show the input value when user types their input in for text input fields", () => {
    setup();

    const nameInputElement = screen.getByLabelText(/name */i);

    const emailInputElement = screen.getByLabelText(/email */i);

    const commentTextareaElement = screen.getByLabelText(/comments/i);

    userEvent.type(nameInputElement, "Frankie");
    userEvent.type(emailInputElement, "frankie@gmail.com");
    userEvent.type(commentTextareaElement, "I love your Cheeseburger!");

    expect(nameInputElement).toHaveValue("Frankie");
    expect(emailInputElement).toHaveValue("frankie@gmail.com");
    expect(commentTextareaElement).toHaveValue("I love your Cheeseburger!");
  });

  it("should allow user to select their scale option in recommendation scale select element", () => {
    setup();

    const recommendationScalueSelectElement = screen.getByLabelText(
      /how likely are you to recommend us to a friend?/i
    );

    expect(screen.getByRole("option", { name: "9" }).selected).toBe(false);

    userEvent.selectOptions(
      recommendationScalueSelectElement,
      screen.getByRole("option", { name: "9" })
    );

    expect(screen.getByRole("option", { name: "9" }).selected).toBe(true);
  });

  it("should show input field error messages if required input field are empty", () => {
    setup();

    const formSubmitBtn = screen.getByRole("button", { name: /send/i });

    userEvent.click(formSubmitBtn);

    expect(screen.getByText(/name must not be empty!/i)).toBeInTheDocument();
    expect(screen.getByText(/email must not be empty!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/comments must not be empty!/i)
    ).toBeInTheDocument();
  });
});
