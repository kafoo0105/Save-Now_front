import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Logo = styled.div`
  background-color: #666;
  color: white;
  padding: 10px;
  font-size: 24px;
  margin-bottom: 20px;
  display: inline-block;
  min-width: 120px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 40px;
  font-size: 14px;
  text-align: left;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
  min-height: 80px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 500px;
  height: 60px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#999999')};
  border-radius: 10px;
  font-size: 14px;
  padding-left: 14px;

  &:hover {
    border-color: #848fe2;
  }

  &:focus {
    border-color: #4659e4;
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  padding-left: 12px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  height: 12px;
`;

const ForgotPassword = styled.span`
  display: block;
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-top: 8px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: #848fe2;
  }

  &:active {
    background-color: #4659e4;
    outline: none;
  }
`;

const SignupLink = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;

  span {
    color: #666;
    margin-right: 8px;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
`;

const KakaoButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: #ffe500;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ffd700;
  }
`;

const KakaoIcon = styled.span`
  margin-right: 8px;
`;

export default function Login() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    id: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(formData.id);

    if (!emailValid) {
      setErrors((prev) => ({
        ...prev,
        id: '*올바른 이메일 형식이 아닙니다.',
      }));
      return;
    }

    setErrors({ id: '' });
    console.log('Login attempt with:', formData);
  };

  return (
    <LoginContainer>
      <Logo>LOGO</Logo>
      <Subtitle>소비 습관을 기록하고, 개선하기 위한 서비스</Subtitle>

      <Title>SIGN IN</Title>

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>아이디</Label>
          <Input
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요."
            value={formData.id}
            onChange={handleChange}
            error={errors.id}
          />
          <ErrorMessage visible={!!errors.id}>{errors.id}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={formData.password}
            onChange={handleChange}
          />
          <ForgotPassword>비밀번호 찾기</ForgotPassword>
        </InputGroup>

        <LoginButton type="submit">로그인</LoginButton>
      </form>

      <SignupLink>
        <span>계정이 없으신가요?</span>
        <a href="/signup">회원가입</a>
      </SignupLink>

      <KakaoButton>
        <KakaoIcon>💬</KakaoIcon>
        카카오톡으로 로그인하기
      </KakaoButton>
    </LoginContainer>
  );
}
