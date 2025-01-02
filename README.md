# API 명세서

회원 인증 및 프로필 관리에 관련된 API 명세입니다. 각 기능에 대한 정보를 표 형태로 제공하여 한눈에 확인할 수 있습니다.

---

## Auth API

| 기능          | 메서드 | URL                  | 요청 헤더                        | 요청 본문                                                                                          | 응답                                                                                   |
|---------------|--------|----------------------|-----------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| 회원가입      | POST   | `/api/auth/signup`   | `Content-Type: application/json` | `{ "email": "jyh@example.com", "password": "password123", "nickname": "username" }`        | `{ "message": "회원가입 성공" }`                                                     |
| 로그인        | POST   | `/api/auth/login`    | `Content-Type: application/json` | `{ "email": "jyh@example.com", "password": "password123" }`                                | `{ "token": "JWT_TOKEN" }`                                                          |
| 로그아웃      | POST   | `/api/auth/logout`   | `Authorization: Bearer JWT_TOKEN`| -                                                                                                 | `{ "message": "로그아웃 되었습니다." }`                                               |

---

## Users API

| 기능          | 메서드 | URL                      | 요청 헤더                        | 요청 본문                          | 응답                                                                                   |
|---------------|--------|--------------------------|-----------------------------------|-----------------------------------|----------------------------------------------------------------------------------------|
| 프로필 조회   | GET    | `/api/users/:userId`     | `Authorization: Bearer JWT_TOKEN`| -                                             | `{ "userId": "123", "email": "jyj@example.com", "nickname": "username" }`   |
| 프로필 수정   | PATCH  | `/api/users/profile`     | `Authorization: Bearer JWT_TOKEN`, `Content-Type: application/json` | `{ "nickname": "username" }`                    | `{ "message": "프로필 수정 완료" }`                                                |
| 회원 탈퇴     | POST   | `/api/users/:userId`     | `Authorization: Bearer JWT_TOKEN`| -                                             | `{ "message": "회원 탈퇴 성공" }`                                                  |

---

위 명세를 참고하여 요청 시 예제 데이터를 실제 데이터로 변경해 사용하세요.
