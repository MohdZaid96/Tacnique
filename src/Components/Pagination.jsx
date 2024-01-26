import React from "react";

const Pagination = (props) => {
  return (
    <div className="mb-4 d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={() => {
                if (props.page > 1) {
                  props.setPage(props.page - 1);
                }
              }}
            >
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item" key={props.page}>
            <a className="page-link" href="#">
              {props.page}
            </a>
          </li>
          <li
            className="page-item"
            onClick={() => {
              props.setPage(props.page + 1);
            }}
          >
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
