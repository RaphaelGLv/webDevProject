"use client";

import * as S from "./styles";

export default function LogonPage() {
    function validarCPF(cpf) {
        if (!cpf) {
            return false;
        }
    
        cpf = cpf.replace(/[^\d]+/g, '');
    
        if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
            return false;
        }
    
        let add = 0;
    
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }
    
        let rev = 11 - (add % 11);
    
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
    
        if (rev !== parseInt(cpf.charAt(9))) {
            return false;
        }
    
        add = 0;
    
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        }
    
        rev = 11 - (add % 11);
    
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
    
        if (rev !== parseInt(cpf.charAt(10))) {
            return false;
        }
    
        return true;
    }
    
    const logonSubmit = (e) => {
        e.preventDefault();
    
        const password = document.getElementById("password");
        const ver_password = document.getElementById("confirm-password");
        const cpf = document.getElementById("cpf");

        if (password.value !== ver_password.value) {
            alert("A senha e sua confirmação não condizem!");
        }
        else if (!validarCPF(cpf.value)) {
            alert("CPF inválido!")
        }
        else {
            window.location.href = "http://localhost:3000"
        }
    };


    return (
        <>
        <S.Content>
            <S.Form action="" onSubmit={logonSubmit}>
                <h1 id="title">Cadastro</h1>

                <label for="name">*Nome completo:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                />

                <label for="cpf">*CPF:</label>
                <input
                    type="tel"
                    id="cpf"
                    placeholder="999.999.999-99"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                    title="Siga o padrão mostrado na caixa de texto, inclusive os pontos e hífens!"
                    required
                />

                <label for="bornDate">*Data de nascimento:</label>
                <input
                    type="date"
                    id="bornDate"
                    required
                />

                <label for="email">*E-mail:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="usuário@exemplo.com"
                    required
                />

                <label for="phone">Telefone:</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="(99) 99999-9999"
                />

                <label for="sexo">*Sexo:</label>
                <S.Options>
                    <input
                        type="radio"
                        id="sexo-m"
                        name="sexo"
                        value="Masculino"
                        required
                    />
                    <p>Masculino</p>
                </S.Options>
                <S.Options>
                    <input
                        type="radio"
                        id="sexo-f"
                        name="sexo"
                        value="Feminino"
                    />
                    <p>Feminino</p>
                </S.Options>

                <label for="password">*Senha:</label>
                <input
                    type="password"
                    id="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="A senha precia ter pelo menos 8 caracteres, um número, uma letra maiúscula e uma minúscula."
                    required
                />

                <label for="confirm-password">*Confirme a senha:</label>
                <input
                    type="password"
                    id="confirm-password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="A senha precia ter pelo menos 8 caracteres, um número, uma letra maiúscula e uma minúscula."
                    required
                />

                <label for="animals">Assinale os pets que você tem:</label>
                <S.Options>
                    <input
                    type="checkbox"
                    id="cachorro"
                    value="Cachorro"
                    />
                    <p>Cachorro</p>
                </S.Options>
                <S.Options>
                    <input
                        type="checkbox"
                        id="gato"
                        value="Gato"
                    />
                    <p>Gato</p>
                </S.Options>
                <S.Options>
                    <input
                        type="checkbox"
                        id="passaro"
                        value="Pássaros"
                    />
                    <p>Pássaros</p>
                </S.Options>
                <S.Options>
                    <input
                        type="checkbox"
                        id="outro"
                        value="Outro"
                    />
                    <p>Outro</p>
                </S.Options>

                <label for="recommend" id="recommend-label">Qual seu nível de satisfação com nosso site?</label>
                <input
                    type="range"
                    id="recommend"
                    min="0"
                    max="10"
                />

                <S.ButtonSection>
                    <input
                        type="reset"
                        id="reset-button"
                        value="Limpar"
                    />

                    <input
                        type="submit"
                        id="submit-button"
                        value="Cadastrar"
                    />
                </S.ButtonSection>
            </S.Form>
        </S.Content>
        </>
    )
}