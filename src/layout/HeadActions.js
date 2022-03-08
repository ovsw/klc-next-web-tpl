import Link from "next/dist/client/link";
import { Fragment } from "react";
export const HeadActions = ({ setOpenSidebar }) => {
  return (
    <Fragment>
      {/* Search */}
      <div className="search_bar relative">
        <input type="text" name="#" placeholder="Search" autoComplete="off" />
        <i className="fal fa-search" />
      </div>
      <button
        type="button"
        className="head_trigger desktop_trigger"
        onClick={() => setOpenSidebar(true)}
      >
        <span />
        <span />
        <span />
      </button>
    </Fragment>
  );
};

export const DefaultHeadActions = () => {
  return (
    <Link href="/contact">
      <a className="thm-btn bg-thm-color-three thm-color-three-shadow btn-rectangle">
        Enroll Now <i className="fal fa-chevron-right ml-2" />
      </a>
    </Link>
  );
};
