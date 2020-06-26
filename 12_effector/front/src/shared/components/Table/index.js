import React from "react";

import styles from "./Table.module.css";

export default function Table({ className, columns, data }) {
  return (
    <table className={[styles.table, className].join(" ")}>
      <thead>
        <tr>
          {columns.map(({ title }, index) => (
            <th key={index}>
              <span>{title}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map(({ dataIndex }, index) => (
              <td key={index}>
                <span>{item[dataIndex] || ""}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
