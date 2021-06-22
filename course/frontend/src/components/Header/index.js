import React, { useState, useEffect } from "react";

import * as S from "./styles";

import isConnected from "../../utils/isConnected";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

import api from "../../services/api";

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api
      .get(`/task/filter/late/${isConnected}`)
      .then((response) => setLateCount(response.data.length));
  }

  async function Logout() {
    localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }

  useEffect(() => {
    lateVerify();
  }, [lateCount]);

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        { !isConnected ? (
          <Link to="/qrcode">SINCRONIZAR</Link>
        ) : (
          <button onClick={Logout} type="button">SAIR</button>
        )}
        {lateCount > 0 && (
          <>
            <span className="dividir" />
            <button type="button" id="notification" onClick={clickNotification}>
              <img src={bell} alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        )}
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
