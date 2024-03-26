function Header() { //1. 컴포넌트명은 대문자 
  return( //2. 괄호로 묶어 이 코드가 함께 있다는 것을 표시해야 한다. 
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      {/* 3. HTML요소를 사용하는것과 같이 리액트 컴포넌트를 사용하면 된다.  */}
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
