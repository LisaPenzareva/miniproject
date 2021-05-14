
export const tabReg = (id) => {
  const tabcontent = document.querySelectorAll("#content > div");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hidden");
  }
  document.querySelector(id + "_content").classList.remove("hidden");
  return id;
};
