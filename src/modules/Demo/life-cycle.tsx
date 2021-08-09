/*
 * https://zh-hans.reactjs.org/docs/react-component.html
 * */

import React, { Component, createRef } from "react";
import { BrowserRouterProps } from "react-router-dom";

interface IProps extends BrowserRouterProps {
  state: boolean;
}
interface IState {
  name?: string;
}

export default class LifeCycle extends Component<IProps, IState> {
  state = {
    name: "VLADIMIR",
    inputRef: createRef<HTMLInputElement>(),
  };

  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any {
    console.log("getSnapshotBeforeUpdate");
    return "getSnapshotBeforeUpdate";
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any) {
    console.log("componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
    return this.state.name !== nextState.name;
  }

  handleSubmit = () => {
    const { inputRef } = this.state;
    this.setState({
      name: (inputRef.current && inputRef.current.value) || "",
    });
  };

  render() {
    console.log("render");

    return (
      <section>
        <form>
          <label title="input">name</label>
          <input ref={this.state.inputRef} type="text" placeholder="please input name" />
          <label>
            <button type="button" onClick={this.handleSubmit}>
              提交
            </button>
          </label>
        </form>

        <hr />

        <strong>{this.state.name}</strong>
      </section>
    );
  }
}
