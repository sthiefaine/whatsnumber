import styles from "./Form.module.css";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "./Dropdown";
import PhoneForm from "./Phone";

import { useState } from "react";
import { WhatsAppIcon } from "../../icons/brands";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Form() {
  console.log("Render Form");

  const phoneNumberValue = useSelector(
    (state: RootState) => state.phone.phoneNumber
  );

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  const handleStartChat = (): string => {
    return "https://wa.me/" + phoneNumberValue;
  };

  return (
    <>
      <div className={styles.phone__form}>
        <Dropdown />

        <PhoneForm />
      </div>

      <div className={styles.button__container}>
        <Link href={handleStartChat()}>
          <a className="a--nostyle" rel="noopener noreferrer" target="_blank">
            <button className={styles.button}>
              <p>Start Chat</p>
              <WhatsAppIcon />
            </button>
          </a>
        </Link>
        <CopyToClipboard text={phoneNumberValue} onCopy={() => handleCopy()}>
          <button className={styles.button}>
            <p>{copy ? "Copied ✓" : "Copy ⧉"}</p>
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
}
