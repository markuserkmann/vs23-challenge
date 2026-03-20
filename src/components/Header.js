import Button from "./Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <h1>Meals App</h1>
      </div>
      <Button textOnly onClick={() => console.log("Cart clicked")}>
        Cart
      </Button>
    </header>
  );
};

export default Header;