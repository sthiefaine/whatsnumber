import styles from "./Form.module.css";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "./Dropdown";
import PhoneForm from "./Phone";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "../../icons/brands";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { addNumberToHistory } from "../../redux/slices/history";

export default function Form() {
  console.log("Render Form");

  const dispatch = useDispatch();

  const phoneNumberValue = useSelector(
    (state: RootState) => state.phone.phoneNumber
  );

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    handleSendToHistory();
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const historyNumbers = useSelector(
    (state: RootState) => state.history.historyNumbers
  );

  const handleSendToHistory = () => {
    if (
      historyNumbers.slice(-1)?.[0]?.number !== phoneNumberValue ||
      historyNumbers.length === 0
    ) {
      return dispatch(addNumberToHistory(phoneNumberValue));
    }
  };

  const whatsappUrl = "https://wa.me/" + phoneNumberValue;
  const disabled = phoneNumberValue.length >= 8 ? false : true;

  return (
    <>
      <div className={styles.phone__form}>
        <Dropdown />

        <PhoneForm />
      </div>

      <div className={styles.button__container}>
        <button
          disabled={disabled}
          className={styles.button}
          onClick={handleSendToHistory}
        >
          <Link href={whatsappUrl}>
            <a className="a--nostyle" rel="noopener noreferrer" target="_blank">
              <p>Chat</p>
              <WhatsAppIcon />
            </a>
          </Link>
        </button>

        <button className={styles.button} disabled={disabled}>
          <CopyToClipboard text={phoneNumberValue} onCopy={() => handleCopy()}>
            <p>{copy ? "Copied ✓" : "Copy ⧉"}</p>
          </CopyToClipboard>
        </button>
      </div>
    </>
  );
}
