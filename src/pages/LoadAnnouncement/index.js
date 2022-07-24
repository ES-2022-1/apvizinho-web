import { useRef } from "react";
import { 
  Carousel, 
  WrapperCarousel, 
  Wrapper, 
  WrapperUserInfo, 
  WrapperUserInfoSecondary, 
  ProfileImage, 
  CarouselContainer, 
  CarouselImage, 
  WrapperUserInfoPrimary,
  WrapperUserInfoColumn,
  Title,
  ListItem
} from "./style";

export const LoadAnnoucement = () => {
  const ref = useRef()

  const annoucementTitle = {
    color: '#c51d0a',
    fontSize: '30px'
  }

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

    return (
      <>
        <Wrapper>
          <h1 style={annoucementTitle}>titulo da vaga</h1>
          <WrapperCarousel>
            <Carousel ref={ref} afterChange={onChange}>
              <CarouselContainer>
                <CarouselImage src="https://conteudo.imguol.com.br/2012/09/25/vampeta-fala-sobre-ensaio-nu-para-a-g-magazine-1348607286095_956x500.jpg" />
              </CarouselContainer>
              <CarouselContainer>
                <CarouselImage src="https://conteudo.imguol.com.br/2012/09/25/vampeta-fala-sobre-ensaio-nu-para-a-g-magazine-1348607286095_956x500.jpg" />
              </CarouselContainer>
            </Carousel>
          </WrapperCarousel>
          <WrapperUserInfo>
            <WrapperUserInfoSecondary>
              <ProfileImage src="https://www.creativefabrica.com/wp-content/uploads/2019/02/User-icon-EPS10-by-Kanggraphic-580x386.jpg" alt="userIcon" />
              <h1>anunciado por drica</h1>
            </WrapperUserInfoSecondary>
            <h1>Preço</h1>
          </WrapperUserInfo>
          <WrapperUserInfoPrimary>
            <WrapperUserInfoColumn>
              <Title>Sobre o local</Title>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
            </WrapperUserInfoColumn>
            <WrapperUserInfoColumn>
              <Title>Sobre a vaga</Title>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
              <ListItem>texte texte text</ListItem>
            </WrapperUserInfoColumn>
            <WrapperUserInfoColumn>
              <Title>Descrição</Title>
              <ListItem>texte texte text</ListItem>
            </WrapperUserInfoColumn>
          </WrapperUserInfoPrimary>
        </Wrapper>
      </>
    );
  };