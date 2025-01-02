# API Documentation

Welcome to the API documentation. Below are the endpoints and details for user authentication and profile management.

---

## Auth API

### 1. **Sign Up**
- **Method**: `POST`
- **URL**: `/api/auth/signup`
- **Headers**:
  - `Content-Type: application/json`
- **Request Body**:
```json
{
  "email": "jyh@example.com",
  "password": "password123",
  "nickname": "username"
}
```
- **Response**:
```json
{
  "message": "회원가입 성공"
}
```

### 2. **Login**
- **Method**: `POST`
- **URL**: `/api/auth/login`
- **Headers**:
  - `Content-Type: application/json`
- **Request Body**:
```json
{
  "email": "jyh@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "token": "JWT_TOKEN"
}
```

### 3. **Logout**
- **Method**: `POST`
- **URL**: `/api/auth/logout`
- **Headers**:
  - `Authorization: Bearer JWT_TOKEN`
- **Response**:
```json
{
  "message": "로그아웃 되었습니다."
}
```

---

## Users API

### 1. **Get Profile**
- **Method**: `GET`
- **URL**: `/api/users/:userId`
- **Headers**:
  - `Authorization: Bearer JWT_TOKEN`
- **Response**:
```json
{
  "userId": "123",
  "email": "jyj@example.com",
  "nickname": "username"
}
```

### 2. **Update Profile**
- **Method**: `PATCH`
- **URL**: `/api/users/profile`
- **Headers**:
  - `Authorization: Bearer JWT_TOKEN`
  - `Content-Type: application/json`
- **Request Body**:
```json
{
  "nickname": "username"
}
```
- **Response**:
```json
{
  "message": "프로필 수정 완료"
}
```

### 3. **Delete User**
- **Method**: `POST`
- **URL**: `/api/users/:userId`
- **Headers**:
  - `Authorization: Bearer JWT_TOKEN`
- **Response**:
```json
{
  "message": "회원 탈퇴 성공"
}
```

---

This documentation provides the core functionalities for authentication and user profile management. Please ensure to replace example data with real-world values when making requests.
