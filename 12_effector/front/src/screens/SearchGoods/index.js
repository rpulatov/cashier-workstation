import React from "react";

import Header from "shared/components/Header";
import IconButton from "shared/components/buttons/IconButton";
import { CloseIcon } from "shared/icons";

import { searchGoodsAction } from "reduxStore/reducers/goods";

import styles from "./SearchGoods.module.css";
import { connect } from "react-redux";

import barcoder from "barcoder";

class SearchGoods extends React.Component {
  state = {
    value: "",
  };

  goBack = (e) => {
    const { history } = this.props;
    history.push("/");
  };

  onSearch = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(`/search?value=${this.state.value}`);
  };

  componentDidMount() {
    this.searchGoods();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchGoods();
    }
  }

  searchGoods = () => {
    const search = new URLSearchParams(this.props.location.search);
    const value = search.get("value");

    const isBarcode = barcoder.validate(value);

    this.props.searchGoodsAction(
      isBarcode
        ? {
            barcode: value,
          }
        : { name: value }
    );

    if (this.state.value !== value) {
      this.setState({ value });
    }
  };

  render() {
    return (
      <>
        <Header>
          <div className={styles.headerLeftContainer}>
            <form onSubmit={this.onSearch}>
              <label>
                Поиск
                <input
                  type="text"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
                {/* <button type="submit">Поиск</button> */}
              </label>
            </form>
          </div>
          <div className={styles.headerRightContainer}>
            <IconButton onClick={this.goBack} icon={<CloseIcon />} />
          </div>
        </Header>
        <main className={styles.main}>
          <section className={styles.tableSection}>
            <ul>
              {this.props.goods.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default connect(({ goods }) => ({ goods }), { searchGoodsAction })(
  SearchGoods
);
