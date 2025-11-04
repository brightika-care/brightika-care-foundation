import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Root({ children }){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{paddingTop:20}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
