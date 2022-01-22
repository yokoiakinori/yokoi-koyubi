import React, { useState } from "react";
import axios from "axios";
import * as styles from "./contactForm.module.scss";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mgerdndg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <h1>ご質問などはこちらから</h1>
      <p className={styles.message}>
        このサイトの情報等に関してのお問い合わせはこちらからお願いいたします。
        <br />
        お問い合わせ内容によってはお返事できかねる場合がありますので、あらかじめご了承ください。
      </p>
      <form onSubmit={handleOnSubmit} className={"flexColumn"}>
        <label htmlFor="name">お名前</label>
        <input
          id="name"
          type="name"
          name="_replyto"
          className={styles.input}
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          className={styles.input}
          onChange={handleOnChange}
          required
          value={inputs.email}
        />

        <label
          htmlFor="message"
          style={{ width: 100, display: `inline-block` }}
        >
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <div className={styles.submit}>
          <button
            type="submit"
            disabled={status.submitting}
            className={styles.shadebutton}
          >
            {!status.submitting
              ? !status.submitted
                ? "送 信"
                : "送信しました"
              : "送信中"}
          </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};
