import React from "react";
import "../Info/index.modules.css";

const Info = () => {
  return (
    <div className="info-section" id="about">
      <div className="info-about">
        <h3>
          About <span>me</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere culpa
          excepturi sapiente, ad voluptate quidem magnam libero perferendis et
          tempora aperiam, accusamus vero ullam labore omnis molestiae
          laudantium cum, harum rem. Officiis dolor est id sit odio dolores
          voluptatibus blanditiis incidunt et repellat maiores nostrum assumenda
          at voluptatum quod nisi, sapiente eius explicabo aut qui nam sequi in.
          Laborum ex dicta dolor illum commodi repudiandae, repellat minus nobis
          cupiditate voluptatum, ratione aut sequi ipsam consectetur?
        </p>

        <div className="info-btn">
          <div to="/">More</div>
        </div>
      </div>

      <div className="info-content">
        <h1>Who am I</h1>
        <p>JavaScript Developer</p>
        <p>UI & UX Designer</p>
        <p>Junior Full Stack Web Developer</p>
      </div>
    </div>
  );
};

export default Info;
