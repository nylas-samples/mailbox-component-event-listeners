import React from "react";
import "./styles.css";
import "@nylas/components-mailbox";

export class App extends React.Component {
  componentDidMount() {
    const mailbox = document.getElementsByTagName("nylas-mailbox")[0];
    mailbox.addEventListener("manifestLoaded", function (e) {
      console.log("manifest loaded: ", e.detail);
    });
    mailbox.addEventListener("threadClicked", function (e) {
      console.log("thread clicked: ", e.detail);
    });
    mailbox.addEventListener("onChangeSelectedReadStatus", function (e) {
      console.log("selected thread's unread status toggled: ", e.detail);
    });
    mailbox.addEventListener("onDeleteSelected", function (e) {
      console.log("selected thread deleted: ", e.detail);
    });
    mailbox.addEventListener("onStarSelected", function (e) {
      console.log("selected thread starred: ", e.detail);
    });
    mailbox.addEventListener("refreshClicked", function (e) {
      console.log("refresh mailbox clicked: ", e.detail);
    });
    mailbox.addEventListener("onSelectOneClicked", function (e) {
      console.log("Selected an email: ", e.detail);
    });
    mailbox.addEventListener("onSelectAllClicked", function (e) {
      console.log("Selected all emails: ", e.detail);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Nylas Mailbox</h1>
        <nylas-mailbox
          id="85ec339e-b150-48c7-b6ea-129f81e205b7"
          header="My Mailbox"
          show_star={true}
          // unread_status="unread"
        ></nylas-mailbox>
      </div>
    );
  }
}
