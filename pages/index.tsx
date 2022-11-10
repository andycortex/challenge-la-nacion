import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Grid, Image, Link, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import api, { Article, Tag } from '../api'

type Props = {
  articles: Article[]
  tags: Tag[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { articles, tags } = await api.list()

  return {
    props: {
      articles,
      tags
    }
  }
}

const HomePage: NextPage<Props> = ({ articles, tags }) => {
  return (
    <Container maxWidth='container.xl'>
      <Stack spacing={6} marginTop={2}>
        <Stack spacing={2}>
          <Text fontSize='3xl' textDecoration='underline'>Acumulado Grilla</Text>
          <Breadcrumb separator='·'>
            {tags.map(tag => (
            <BreadcrumbItem key={tag.slug}>
              <BreadcrumbLink color='primary.500' href={`/${tag.slug}`}>{tag.text}</BreadcrumbLink>
            </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Stack>
        <Grid gap={6} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
          {articles.map(article => (
            <LinkBox key={article._id}>
              <Stack fontFamily='Arial'>
                <Image objectFit='cover' height={256} _hover={{ filter: 'brightness(110%)', all: 'filter 0.25s' }} transition='all .2s ease-in-out' src={article.promo_items?.basic.url} alt={article.headlines.basic} />
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
