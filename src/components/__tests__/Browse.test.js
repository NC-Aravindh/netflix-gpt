import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Browse from "../Browse";
import MoviePage from "../MoviePage";
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom'

global.fetch = jest.fn(()=>{
    return Promise.resolve(
        {
            json: ()=>{
                return Promise.resolve(data)
            }
        }
    )
}) 

it("Should display the Movie Trailer on click", async () => {
  await act( async() => {
    render(
      <Provider store={appStore}>
        <Browse />
      </Provider>
    );
  });

  const movieCards = screen.getAllByRole("img");
  console.log(movieCards);
});
