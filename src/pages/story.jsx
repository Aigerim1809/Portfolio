import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const Story = ( props ) => {
  return (
    <Layouts 
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/avatar.jpg"}
    >
      <PageBanner pageTitle={"Success Story"} />
      
      {/* story */}
      <section>
          <div className="row">
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Education:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>University of Narxoz</h4>
                                  <div className="mil-text-sm">2021 - 2025</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Digital Management and Design</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Daryn school</h4>
                                  <div className="mil-text-sm">2018 - 2021</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Физика Математика</p>
                          </li>
                      </ul>
                  </div>

              </div>
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Work:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Dansai Studio</h4>
                                  <div className="mil-text-sm">2023 - </div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Content Maker</p>
                              <p>На данный момент работаю Контент мейкером</p>
                          </li>

                      </ul>
                  </div>

              </div>
          </div>
      </section>
      {/* story end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Story;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}
