// import AuthForm from './components/AuthForm';

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="h-full flex justify-center items-center">
        <h2>Страница Регистрации</h2>
      <div>
        {children}
      </div>
    </div>
  );
}