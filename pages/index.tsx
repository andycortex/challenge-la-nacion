import { Container, Grid, Image, Link, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import api, { Article } from '../api'

type Props = {
  articles: Article[]
}

export const getStaticProps: GetStaticProps =async () => {
  const { articles } = await api.list()

  return { 
    props: {
      articles
    }
  }
}

const HomePage: NextPage<Props> = ({articles}) => {
  return (
    <Container maxWidth='container.xl'>
      <Stack>
        <Text>Acumulado Grilla</Text>
        <Text>Platos principales . Cerdo . Papas . Date un gustito . La familia</Text>
        <Grid gap={6} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
          {articles.map(article => (
            <LinkBox key={article._id}>
            <Stack  fontFamily='Arial'>
              <Image _hover={{ filter: 'brightness(110%)', all:'filter 0.25s'}} transition='all .2s ease-in-out' src={article.promo_items?.basic.url} alt={article.headlines.basic}/>
              <Stack spacing={1}>
                <Text as={LinkOverlay} href={article.website_url} isExternal fontSize='lg' fontWeight='bold'>{article.headlines.basic}</Text>
                <Text fontSize='sm' color='gray.500' >{article.display_date}</Text>
              </Stack>
            </Stack>
            </LinkBox>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default HomePage
