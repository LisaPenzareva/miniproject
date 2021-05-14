import { URL } from "./constants";

import { tabReg } from "./tabreg";

export const infoListener = () => {
  document.querySelector("#info").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#info_content").classList.remove("hidden");
    tabReg("#info");
  });
};

export const getInfo = async (id) => {
  const response = await fetch(`${URL}/users/${id}`);
  const data = await response.json();
  renderInfo(data);
};

export const renderInfo = (user) => {
  document.querySelector("#info_content").innerHTML = `
      <h3>${user.name}</h3>
      <p><span>Username: </span>${user.username}</p>
      <p><span>Email: </span>${user.email}</p>
      <p><span>Adress: </span>
      ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
      <p><span>Phone: </span>${user.phone}</p>
      <p><span>Company: </span>${user.company.name}</p>`;
};
