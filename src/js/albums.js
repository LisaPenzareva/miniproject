import { URL } from "./constants";

import { tabReg } from "./tabreg";

export const getAlbums = async (id) => {
  const response = await fetch(`${URL}/albums?userId=${id}`);
  const data = await response.json();
  renderAlbums(data);
  albumsListener();
};

export const albumsListener = () => {
  document.querySelector("#albums").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#albums_content").classList.remove("hidden");
    tabReg("#albums");
  });
};

export const renderAlbums = (albums) => {
  document.querySelector("#albums_content").innerHTML = "";
  albums.forEach((album) => {
    document.querySelector(
      "#albums_content"
    ).innerHTML += `<p>${album.title}</p>`;
  });
};
