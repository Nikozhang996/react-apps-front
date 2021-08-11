/*
 * https://juejin.cn/post/6844903480369512455
 * */
import React, { Component, FC, PureComponent } from "react";
import { BrowserRouterProps } from "react-router-dom";

interface IProps extends BrowserRouterProps {
  value?: number;
}
interface IState {
  value?: number;
  timer: number;
}

class Pure extends PureComponent<{ name?: string; render?: (name: string) => JSX.Element | string }, any> {
  render() {
    const { name, render } = this.props;
    console.log("pure");
    return <section>{name || (render && render("pure"))}</section>;
  }
}

export default class Wrap extends Component<IProps, IState> {
  state = {
    value: 0,
    name: "VLADIMIR",
    timer: 0,
  };

  componentDidMount() {
    this.state.timer = window.setInterval(() => {
      this.setState({
        value: this.state.value += 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    console.log("wrap");
    return (
      <section>
        <p>{this.state.value}</p>
        <Pure name={this.state.name} />
      </section>
    );
  }
}
