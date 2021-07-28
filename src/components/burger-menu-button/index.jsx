const BurgerMenuButton = ({ setshowLinks, showLinks }) => {
  return (
    <div onClick={() => setshowLinks(!showLinks)} className="burger">
      <span
        className={`${showLinks ? "burger-span open" : "burger-span close"}`}
      />
      <span
        className={`${showLinks ? "burger-span open" : "burger-span close"}`}
      />
      <span
        className={`${showLinks ? "burger-span open" : "burger-span close"}`}
      />
    </div>
  );
};

export default BurgerMenuButton;
