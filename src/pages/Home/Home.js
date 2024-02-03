import "./Home.css";
import {ReactComponent as HtmlIcon} from "../../assets/images/icon-html.svg";
import {ReactComponent as CssIcon} from "../../assets/images/icon-css.svg";
import {ReactComponent as JsIcon} from "../../assets/images/icon-js.svg";
import {ReactComponent as AccesibilityIcon} from "../../assets/images/icon-accessibility.svg";

function Home() {
  return (
    <div className="app-content">
      <div className="dashboard">
        <div className="title">
          <label>Welcome to the </label>
          <br />
          <b>Frontend Quiz!</b>
        </div>
        <br />
        <label>Pick a subject to get started.</label>
      </div>
      <div className="subject-list">
        <div className="subject-item">
          <HtmlIcon className="subject-icon html-icon" />
          <label className="subject-text">HTML</label>
        </div>
        <div className="subject-item">
          <CssIcon className="subject-icon css-icon" />
          <label className="subject-text">CSS</label>
        </div>
        <div className="subject-item">
          <JsIcon className="subject-icon js-icon" />
          <label className="subject-text">Javascript</label>
        </div>
        <div className="subject-item ">
          <AccesibilityIcon className="subject-icon accesibility-icon" />
          <label className="subject-text">Accessibility</label>
        </div>
      </div>
    </div>
  );
}

export default Home;
