import reactImg from './assets/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// 무작위로 숫자를 출력하는 함수
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      {/*  import한 자바스크립트 객체를 src 요소로 넣기  */}
      <img src={reactImg} alt="Stylized atom" /> 
      <h1>React Essentials</h1>
      <p>
        {/* 중괄호 안의 내용에 리턴값이 바로 나오는 자바스크립트 코드를 자유롭게 추가 가능 */}
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;