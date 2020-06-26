import React from "react";

import styles from "./KeyboardShortcut.module.css";

const KEYS_DEFAULT = [
  { value: "F2", label: "ПОДБ.ТОВ." },
  { value: "F3", label: "РАЗУКОМПЛ." },
  { value: "F4", label: "ЭЛ.ЧЕК" },
  { value: "F5", label: "КОЛ-ВО" },
  { value: "F6", label: "ВОЗВРАТ" },
  { value: "F7", label: "АКЦИИ" },
  { value: "F8", label: "УДАЛИТЬ" },
  { value: "F9", label: "ЧЕК" },
  { value: "F11", label: "НАЛ." },
  { value: "F12", label: "СМ.ПОЛЬЗ." },
];

const KEYS_SHIFT = [{ value: "F2", label: "KEYS_SHIFT" }];
const KEYS_CTRL = [{ value: "F2", label: "KEYS_CTRL" }];
const KEYS_ALT = [{ value: "F2", label: "KEYS_ALT" }];

const KEYCODE_SHIFT = 16;
const KEYCODE_CTRL = 17;
const KEYCODE_ALT = 18;

export default class KeyboardShortcut extends React.PureComponent {
  state = {
    pressed: {},
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyDown = (event) => {
    switch (event.keyCode) {
      case KEYCODE_ALT:
      case KEYCODE_SHIFT:
      case KEYCODE_CTRL:
        const { pressed } = this.state;
        if (!pressed[event.keyCode]) {
          this.setState({
            pressed: { ...pressed, [event.keyCode]: true },
          });
        }
        break;
      default:
        return;
    }

    if (event.keyCode === KEYCODE_ALT) {
      event.preventDefault();
    }
  };

  onKeyUp = (event) => {
    switch (event.keyCode) {
      case KEYCODE_SHIFT:
      case KEYCODE_CTRL:
      case KEYCODE_ALT:
        const { pressed } = this.state;
        if (pressed[event.keyCode] === true) {
          this.setState((state) => ({
            pressed: { ...state.pressed, [event.keyCode]: false },
          }));
        }
        break;
      default:
        return;
    }
  };

  render() {
    const { pressed } = this.state;

    let keys = KEYS_DEFAULT;
    if (
      !!pressed[KEYCODE_SHIFT] &&
      !pressed[KEYCODE_CTRL] &&
      !pressed[KEYCODE_ALT]
    ) {
      keys = KEYS_SHIFT;
    } else if (
      !!pressed[KEYCODE_CTRL] &&
      !pressed[KEYCODE_SHIFT] &&
      !pressed[KEYCODE_ALT]
    ) {
      keys = KEYS_CTRL;
    } else if (
      !!pressed[KEYCODE_ALT] &&
      !pressed[KEYCODE_CTRL] &&
      !pressed[KEYCODE_SHIFT]
    ) {
      keys = KEYS_ALT;
    }

    return keys.map((item, index) => (
      <div key={index} className={styles.key}>
        <div className={styles.value}>{item.value}</div>
        <div className={styles.label}>{item.label}</div>
      </div>
    ));
  }
}
