import faker from "faker";

const mount = (el) => {
  let cartText = `<div> You have ${faker.random.number()} items in your cart!</div>`;

  if(el) el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  mount(document.querySelector("#dev-cart"));
}

export { mount };
