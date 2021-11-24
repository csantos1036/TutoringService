// File - /components/Layout.js
import Header from "./Header";
import Footer from "./Footer";
import { Container } from 'react-bootstrap'

const layoutStyle = {
};

const contentStyle = {
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <Container className="Content container" style={contentStyle}>
      {props.children}
    </Container>
    <Footer />
  </div>
);

export default Layout;