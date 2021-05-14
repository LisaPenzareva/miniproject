import { URL } from "./constants";

import { DEFAULT_TAB } from "./constants";

import { tabReg } from "./tabreg";

import { infoListener, getInfo } from "./info";

import { getTodos } from "./todo";

import { getPosts } from "./posts";

import { getAlbums } from "./albums";

const getUsers = async () => {
  const response = await fetch(`${URL}/users`);
  const data = await response.json();
  renderUsers(data);
  usersListener();
  infoListener();
};

const renderUsers = (users) => {
  users.forEach((user) => {
    document.querySelector(
      "#users"
    ).innerHTML += `<div id="user_${user.id}"><h3>${user.name}</h3></div>`;
  });
};

const usersListener = () => {
  const list = document.querySelectorAll("#users div");
  for (let item of list) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.currentTarget.id.split("_");
      document.querySelector("#tabs").classList.remove("hidden");
      getInfo(id);
      getTodos(id);
      getPosts(id);
      getAlbums(id);
      tabReg(DEFAULT_TAB);
    });
  }
};

getUsers();
