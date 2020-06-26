import React from "react";

import { connect } from "react-redux";
import { addPosition } from "reduxStore/reducers/checkPositions";

import Table from "shared/components/Table";

import styles from "./TableCheck.module.css";

const columns = [
  { dataIndex: "numPosition", title: "" },
  { dataIndex: "name", title: "Наименование" },
  { dataIndex: "scaling", title: "Единица измерения" },
  { dataIndex: "count", title: "Кол-во" },
  { dataIndex: "price", title: "Цена" },
  { dataIndex: "sum", title: "Сумма" },
  { dataIndex: "pku", title: "ПКУ" },
  { dataIndex: "capasity", title: "Доступно" },
  { dataIndex: "location", title: "Место хранения" },
  { dataIndex: "store", title: "Склад" },
  { dataIndex: "discount", title: "Дисконт" },
];

function TableCheck({ data = [], addPosition }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      addPosition({
        name: "Товар2",
        scaling: "1/1",
        count: 1,
        price: 10,
        pku: true,
        capacity: 5,
        location: "",
        store: "",
        discount: "Весна",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [addPosition]);

  return <Table columns={columns} data={data} className={styles.table} />;
}

// const mapDispatchToProps = (dispatch) => ({
//   addPosition: (item) => dispatch({ type: "ADD", item})
// })
export default connect(
  (state) => ({
    data: state.checkPositions,
  }),
  { addPosition }
)(TableCheck);
