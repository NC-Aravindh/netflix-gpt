import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom'

describe("Should render Login component", () => {
  it("Should have the input boxes for signIn and Sign Up form", () => {
    render(
      <Provider store={appStore}>
        <Login />
      </Provider>
    );
    const switchButton = screen.getByRole("switchPage");
    const email = screen.getByRole("textbox");
    expect(email).toHaveAttribute("type", "email");

    //Input type password doesn't have predefined role. Define the role in the component and reference it.
    const password = screen.getByRole("password");
    expect(password).toHaveAttribute("type", "password");

    fireEvent.click(switchButton);

    const fullName = screen.getByPlaceholderText('Full Name')
    expect(fullName).toHaveAttribute("placeholder", "Full Name");
  });

  it("Should have Sign In and Sign Up Button", () => {
    render(
      <Provider store={appStore}>
        <Login />
      </Provider>
    );

    const switchButton = screen.getByRole("switchPage");
    const signInButton = screen.getByRole("button", { name: "Sign In" });
    expect(signInButton).toBeInTheDocument();

    fireEvent.click(switchButton);
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });
    expect(signUpButton).toBeInTheDocument();
  });
});
