import { URL } from "./constants";

import { tabReg } from "./tabreg";

export const getPosts = async (id) => {
  const response = await fetch(`${URL}/posts?userId=${id}`);
  const data = await response.json();
  renderPosts(data);
  postsListener();
};

export const postsListener = () => {
  document.querySelector("#posts").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#posts_content").classList.remove("hidden");
    tabReg("#posts");
  });
};

export const renderPosts = (posts) => {
  document.querySelector("#posts_content").innerHTML = "";
  posts.forEach((post) => {
    document.querySelector(
      "#posts_content"
    ).innerHTML += `<p>${post.title}</p>`;
  });
};
