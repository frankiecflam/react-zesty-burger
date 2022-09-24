import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetMenu() {
  return useQuery(
    ["menu"],
    () =>
      axios
        .get(
          "https://react-zestyburgers-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
        )
        .then((res) => res.data),
    {
      select: (data) => {
        let loadedMenu = [];

        for (const key in data) {
          loadedMenu.push(data[key]);
        }
        return loadedMenu;
      },
    }
  );
}
