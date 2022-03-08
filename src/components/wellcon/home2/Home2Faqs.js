import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Counter from "../../Counter";

const Home2Faqs = () => {
  const accordionText = [
    {
      title: "How to Become a Life Coach",
      text: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      title: "How to Feel Better",
      text: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      title: "How to Solve Any Problem",
      text: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      title: "We Teach You How to Take Massive Action.",
      text: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo",
    },
  ];
  const [accordionC, setAccordionC] = useState(null);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title left-align wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                What You Learn
              </p>
              <h3 className="title">
                Do You Want to Transform Your Smart Life ?
              </h3>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariaturSed ut perspiciatis omnis iste
                natus
              </p>
            </div>
            <div className="multi_progress_bar mb-xl-30 mb-md-80 wow fadeInDown">
              <div className="progress_box">
                <div
                  className="circle_bar"
                  data-percent={89}
                  data-track-color="#ecf2ff"
                  data-bar-color="#4b83fb"
                  data-size={80}
                >
                  <div className="counter transform-center text-center">
                    <Counter end={89} />
                  </div>
                </div>
                <div className="text">
                  <h5 className="mb-0">
                    Success
                    <br /> Result
                  </h5>
                </div>
              </div>
              <div className="progress_box">
                <div
                  className="circle_bar"
                  data-percent={96}
                  data-track-color="#ecf2ff"
                  data-bar-color="#65cfa9"
                  data-size={80}
                >
                  <div className="counter transform-center text-center">
                    <Counter end={96} />
                  </div>
                </div>
                <div className="text">
                  <h5 className="mb-0">
                    Exclusive
                    <br /> Advisor
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Accordion className="accordion accordion-style mb-xl-30 wow fadeInDown">
              {accordionText.map((acc, i) => (
                <div className="card" key={i}>
                  <div className="card-header">
                    <Accordion.Toggle
                      as="button"
                      eventKey={i + 1}
                      className={`btn btn-link ${
                        accordionC !== i + 1 ? "collapsed" : ""
                      }`}
                      onClick={() =>
                        setAccordionC(accordionC == i + 1 ? null : i + 1)
                      }
                    >
                      {acc.title}
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey={i + 1}>
                    <div className="card-body">{acc.text}</div>
                  </Accordion.Collapse>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2Faqs;
