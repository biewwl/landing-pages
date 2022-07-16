import "./styles/Page1.css";
import logo from "../../images/page1/logo-page1.png";
import { Icon } from "@iconify/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page1() {
  return (
    <>
      <Header />
      <main className="page1">
        <section className="container-main">
          <img src={logo} alt="" />
          <h1>The best software for your company</h1>
          <span>
            <Icon icon="ic:baseline-workspace-premium" />
            Awarded in March 2022
          </span>
        </section>
      <Footer />
      </main>
    </>
  );
}

export default Page1;
