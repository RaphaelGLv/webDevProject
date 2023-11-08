"use client";

import * as S from './styles';
import Image from 'next/image';
import fundo from '../../../public/telalogin.svg';

export default function LoginPage() {
  const loginSubmit = (e) => {
    e.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('senha').value;

    if (cpf === '' || password === '') {
      alert('Preencha os campos de login!');
    } else if (cpf === '00000000000' && password === '123456') {
        window.location.href = "http://localhost:3000";
    } else {
      alert('CPF e/ou senha incorretos!');
    }
  };

  return (
    <>
      <S.Content>
        <div class="everything">
          <div class="LoginArea">
            <img src="/telalogin.svg" alt="Cães" />
            <p>Login</p>

            <form id="loginForm" onSubmit={loginSubmit}>
              <label for="cpf_login">CPF: </label>
              <input
                type="text"
                id="cpf"
                class="cpf-senha"
                name="cpf"
                maxLength="14"
              ></input>

              <label for="senha_login">SENHA:</label>
              <input
                type="password"
                id="senha"
                maxLength="16"
                class="cpf-senha"
              ></input>

              <S.But>
                <input type="submit" value="Entrar" class="button"></input>
              </S.But>
            </form>
          </div>
        </div>
      </S.Content>
    </>
  );
}
