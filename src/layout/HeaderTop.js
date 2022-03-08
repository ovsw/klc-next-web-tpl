import CountDownTimer from "../components/CountdownTimer";

const HeaderTop = () => {
  return (
    <div className="topbar bg-thm-color-two" id="header_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="left-side">
              <p>Admission Going On, Hurry To Enroll Now</p>
              <div className="countdown-timer">
                {CountDownTimer(`2022-09-27 00:00:00`).days}
                {` : `}
                {CountDownTimer(`2022-09-27 00:00:00`).hours}
                {` : `}
                {CountDownTimer(`2022-09-27 00:00:00`).minutes}
                {` : `}
                {CountDownTimer(`2022-09-27 00:00:00`).seconds}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="right-side">
              <li>
                <a href="tel:0123456789">
                  <i className="fal fa-phone" />
                  Call : 012(345) 67 89
                </a>
              </li>
              <li>
                <a href="mailto:example@example.com">
                  <i className="fal fa-envelope" />
                  example@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
