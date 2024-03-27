import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
        <h2>Страница Регистрации</h2>
      <div>
        <AuthForm />
      </div>
    </div>
  );
}
