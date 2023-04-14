# useTitle
- SPA 리액트에서 페이지별 타이틀 설정
- SEO 최적화에 도움

# 사용
```jsx
import useTitle from './useTitle';

function Login() {
  useTitle('Login - React');

  return <div>Login 페이지</div>
}

export default Login;
```