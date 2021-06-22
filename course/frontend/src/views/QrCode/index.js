import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import Qr from "qrcode.react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import * as S from "./styles";

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function saveMac() {
    if (!mac) alert("Você precisa informar o número que apareceu no celular!");
    else {
      await localStorage.setItem("@todo/macaddress", mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <S.Container>
      {redirect && <Redirect to="/" />}
      <Header />

      <S.Content>
        <h1>Capture o QrCode Pelo App</h1>
        <p>Suas atividades serão sincronizadas com a do seu celular.</p>
        <S.QrCodeArea>
          <Qr value="getmacaddress" size={250} />
        </S.QrCodeArea>

        <S.ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input
            type="text"
            onChange={(e) => setMac(e.target.value)}
            value={mac}
          />
          <button type="button" onClick={saveMac}>
            SINCRONIZAR
          </button>
        </S.ValidationCode>
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default QrCode;
