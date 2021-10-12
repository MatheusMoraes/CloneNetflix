import React from 'react';
import Header from '../../components/header';
import BodyMain from '../../components/header/bodyMain';

// import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <div style={{backgroundImage: `url(/background.jpg)`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
        <Header />
        <BodyMain />
      </div>
    </>
  );
}

export default HomePage;