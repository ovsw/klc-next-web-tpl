import { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../utils";
import Pagination from "./Pagination";

const PaginationLayout = ({ children, sort, id }) => {
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(id ? id : "#service", sort ? sort : 4, active);
    let list = document.querySelectorAll(id ? id : "#service");
    setstate(getPagination(list.length, sort ? sort : 4));
  }, [active]);
  return (
    <Fragment>
      {children}
      <Pagination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default PaginationLayout;
