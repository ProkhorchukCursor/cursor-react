import { Container, Post, Title } from "./components";

import { ANAKIN_IMAGE, RAY_IMAGE } from "./constats/images";

import "./styles/global.css";

const App = () => {
 return (
  <Container>
   <Title title="14-test-homework" subtitle />
   <a href="https://prokhorchukcursor.github.io/cursor-hw/index.html">
    &#8666; To main
   </a>
   <Title title="Our posts about SW" />
   <Post
    author={{
     name: "Anakin Skywalker",
     photo: ANAKIN_IMAGE,
     nickname: "@dart_vader",
    }}
    content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
    image={RAY_IMAGE}
    date={"26 февр."}
   />
  </Container>
 );
};

export default App;
