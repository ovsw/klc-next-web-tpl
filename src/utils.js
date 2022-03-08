export const scrollTop = () => {
  let backToTop = document.getElementById("back-to-top");
  let offset = window.scrollY;
  if (backToTop) {
    if (offset > 60) {
      backToTop.classList.add("d-flex");
    } else {
      backToTop.classList.remove("d-flex");
    }
  }
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("#header-sticky");
  const headerTop = document.querySelector("#header_top");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("sticky");
        sticky.classList.add("can-sticky");
        sticky.classList.add("header-absolute");
        headerTop && headerTop.classList.add("d-none");
      } else {
        sticky.classList.remove("sticky");
        sticky.classList.remove("can-sticky");
        sticky.classList.remove("header-absolute");
        headerTop && headerTop.classList.remove("d-none");
      }
    }
  }
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// Pie chart
export const pieChart = (className) => {
  var EasyPieChart = require("easy-pie-chart");
  var element = document.querySelectorAll(`.${className}`);
  element.forEach((el) => {
    let color = el.getAttribute("data-bar-color");
    let size = el.getAttribute("data-size");
    let percent = el.getAttribute("data-percent");
    new EasyPieChart(el, {
      easing: "easeOut",
      delay: 3000,
      scaleColor: false,
      lineWidth: 6,
      trackWidth: 6,
      animate: 2000,
      size: size ? size : 120,
      percent: percent ? percent : 89,
      barColor: color ? color : "#2C3E50",
    });
  });
};

export const isotopLayout = (container, item) => {
  setTimeout(() => {
    if (typeof window !== "undefined") {
      const Isotope = require("isotope-layout");
      new Isotope(container ? container : ".masonry-wrap", {
        itemSelector: item ? item : ".masonry-item",
        percentPosition: true,
        masonry: {
          columnWidth: item ? item : ".masonry-item",
        },
      });
    }
  }, 1000);
};

export const dataFilter = (filterTrigger, filteritems) => {
  const filterLi = document.querySelectorAll(
      filterTrigger ? filterTrigger : ".filter-trigger"
    ),
    items = document.querySelectorAll(
      filteritems ? filteritems : ".masonry-item"
    );
  filterLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      let filterAtrr = li.getAttribute("data-filter");
      filterAtrr = filterAtrr.split(".")[1];
      let active = li.getAttribute("data-filter");
      filterLi.forEach((li_) => {
        if (li_.getAttribute("data-filter") === active) {
          li_.classList.add("active");
        } else {
          li_.classList.remove("active");
        }
      });
      items.forEach((item) => {
        if (item.classList.contains(filterAtrr)) {
          item.classList.add("d-block");
          item.classList.remove("d-none");
        } else {
          item.classList.remove("d-block");
          item.classList.add("d-none");
        }
      });
    });
  });
};
