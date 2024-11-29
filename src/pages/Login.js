import React, { useState } from 'react';
import styled from 'styled-components';
import kakaoSymbol from "../assets/icons/kakaoSimbol.svg";

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
  margin-right: 4px;
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

// 카카오 소셜 로그인 디자인 가이드에 맞게 카카오 버튼 구현
// 컨테이너 디자인
const KakaoButton = styled.button`
  width: 500px;
  height: 60px;
  background-color: #fee500;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* OS별 기본 서체 */
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// 심볼 디자인
const KakaoIcon = styled.img`
  position: absolute;
  left: 24px;
  width: 24px;
  height: 24px;
`;

// 레이블 디자인
const KakaoLabel = styled.span`
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.85);
`;

export default function Login() {
  // 사용자 입력 데이터를 저장
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  // 폼 입력을 검증할 때 나타날 에러 메시지 상태. id 관련 에러 메시지
  const [errors, setErrors] = useState({
    id: '',
  });

  // 카카오 OAuth 관련 상수
  const REST_API_KEY = '받을 예정'; // 백엔드에서 제공받은 REST API KEY
  const REDIRECT_URI = '받을 예정'; // 백엔드에서 제공받은 Redirect URI
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 카카오 로그인 핸들러. 클릭 시 카카오 인증 페이지로 이동
  const kakaoLoginHandler = () => {
    window.location.href = link; // OAuth 인증 페이지로 이동
  };

  // 이메일 형식을 검증하는 정규식. 이메일의 일반적인 패턴을 검사
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); // emailRegex 정규식이 email과 일치하는지 test
  };

  // 사용자가 폼 입력값을 변경하면 호출. 입력되는 데이터를 상태에 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target; // 이벤트 객체에서 입력 필드의 name과 value 추출
    // 업데이트
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 로그인 버튼을 눌렀을 때 호출. 입력된 id 값이 올바른 이메일 형식인지 확인
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼이 제출될 때 페이지의 새로고침을 방지

    // 이메일 검증 함수 호출
    const emailValid = validateEmail(formData.id);

    // 이메일 형식이 잘못되었을 시에 에러 메시지 설정
    if (!emailValid) {
      setErrors((prev) => ({
        ...prev,
        id: '*올바른 이메일 형식이 아닙니다.',
      }));
      return; // 로그인 실패 후 동작을 중단
    }

    // 이메일 검증에 성공 시에 오류 메시지를 초기화
    setErrors({ id: '' });

    console.log('Login attempt with:', formData);

    // API 요청 로직 작성 예정

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
          {/* 이메일 형식이 잘못되었을 때 오류 메시지를 표시. */}
          <ErrorMessage visible={!!errors.id}>{errors.id}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>비밀번호</Label>
          {/* 비밀번호 입력 필드. 상태를 통해 값을 동기화하고, 변경 시 handleChange 호출. */}
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

      <KakaoButton type="button" onClick={kakaoLoginHandler}>
        {/* 심볼 */}
        <KakaoIcon src={kakaoSymbol} alt="말풍선" />
        {/* 레이블 */}
        <KakaoLabel>카카오 로그인</KakaoLabel>
      </KakaoButton>
    </LoginContainer>
  );
}