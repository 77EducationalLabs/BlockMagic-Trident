import React from "react";
import "../styles/PagesCss/Team.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Team() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <section className="bodyTeam" id="team">
        <div className="textTeam">
          <h1>Developer Team</h1>
          <p>
            The development team excels in collaboration, tackling complex
            problems with innovative solutions. Their expertise and dedication
            ensure project success, meeting deadlines and exceeding
            expectations. Teamwork and creativity drive their remarkable
            achievements.
          </p>
        </div>
        <div className="teamContent">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>
              <div className="teamCard">
                <div className="cardContent">
                  <div className="imageTeam">
                    <img src={require("../assets/foto_patrick-01.png")} />
                  </div>
                  <div className="social-media">
                    <a
                      class="fa-brands fa-x-twitter"
                      target="_blank"
                      href=" https://x.com/i3arba"
                    />
                    <a
                      class="fa-brands fa-github"
                      target="_blank"
                      href="https://github.com/i3arba"
                    />
                    <a
                      class="fa-brands fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/i3arba/"
                    />
                  </div>
                  <div className="teamJob">
                    <h1 className="name">Patrick, o Barba</h1>
                    <h1 className="job">
                      Blockchain Developer | Security Researcher | Bellum Galaxy
                      Founder
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamCard">
                <div className="cardContent">
                  <div className="imageTeam">
                    <img src={require("../assets/foto_gabriel.png")} />
                  </div>
                  <div className="social-media">
                    <a
                      class="fa-brands fa-github"
                      target="_blank"
                      href="https://github.com/dejazz"
                    />
                    <a
                      class="fa-brands fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/gabriel-muniz-schneider"
                    />
                  </div>
                  <div className="teamJob">
                    <h1 className="name">Gabriel Schneider</h1>
                    <h1 className="job">
                      Full Stack Developer | Crawler Developer
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamCard">
                <div className="cardContent">
                  <div className="imageTeam">
                    <img src={require("../assets/foto_thome.jpg")} />
                  </div>
                  <div className="social-media">
                    <a
                      class="fa-brands fa-x-twitter"
                      target="_blank"
                      href="https://x.com/GabrielThomeDev"
                    />
                    <a
                      class="fa-brands fa-github"
                      target="_blank"
                      href="https://github.com/thomasdev5832"
                    />
                    <a
                      class="fa-brands fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/gabrieltome/"
                    />
                  </div>
                  <div className="teamJob">
                    <h1 className="name">Gabriel Thome</h1>
                    <h1 className="job">
                      Full Stack Developer | Software Engineer
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamCard">
                <div className="cardContent">
                  <div className="imageTeam">
                    <img src={require("../assets/foto_raffa-01.png")} />
                  </div>
                  <div className="social-media">
                    <a
                      class="fa-brands fa-x-twitter"
                      target="_blank"
                      href="https://x.com/loffredods"
                    />
                    <a
                      class="fa-brands fa-github"
                      target="_blank"
                      href="https://github.com/raffaloffredo"
                    />
                    <a
                      class="fa-brands fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/raffaela-loffredo/"
                    />
                  </div>
                  <div className="teamJob">
                    <h1 className="name">Raffa Loffredo</h1>
                    <h1 className="job">
                      Data Scientist | Blockchain Data Analyst
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="teamCard">
                <div className="cardContent">
                  <div className="imageTeam">
                    <img src={require("../assets/perfilCayo.jpg")} />
                  </div>
                  <div className="social-media">
                    <a
                      class="fa-brands fa-x-twitter"
                      target="_blank"
                      href="https://x.com/TarcisioCayo"
                    />
                    <a
                      class="fa-brands fa-github"
                      target="_blank"
                      href="https://github.com/CayoTarcisio"
                    />
                    <a
                      class="fa-brands fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/cayo-morais-070b721b9/"
                    />
                  </div>
                  <div className="teamJob">
                    <h1 className="name">Cayo Tarcisio</h1>
                    <h1 className="job">
                      Frontend Developer | System Developer
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Team;
