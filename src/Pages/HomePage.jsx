import css from "./PagesCss/HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css["HomeBox"]}>
      <h1 className={css["Title"]}>Оренда кемперів</h1>
      <h2 className={css["TitleH2"]}>
        Оренда кемперів для активного відпочинку по всій Україні
      </h2>
      <img
        src="https://www.thalattacamp.gr/uploads/2022_fotos/camping/camper_3782.jpg"
        width="1280"
        height="640"
        alt="tourists near the camper"
      />
    </div>
  );
};
export default HomePage;
